#!/usr/bin/env python3
"""Análise de referência da agenda da Clínica Movimento.

Faz, a partir de agenda.csv (a planilha "suja"), a limpeza e as contagens que
o aluno deveria conseguir fazer — numa planilha, à mão ou com ajuda de IA.
Use SOMENTE depois de ter feito a sua própria análise (Projeto P03).
"""
import csv, datetime as dt, json, pathlib, unicodedata
from collections import Counter, defaultdict

AQUI = pathlib.Path(__file__).resolve().parent.parent
ANO = 2026

def normaliza_nome(n):
    n = " ".join(n.split()).lower()
    return "".join(c for c in unicodedata.normalize("NFD", n) if unicodedata.category(c) != "Mn")

def data(s):
    s = s.strip()
    if not s: return None
    if "-" in s: return dt.date.fromisoformat(s)
    p = s.split("/")
    return dt.date(int(p[2]) if len(p) == 3 else ANO, int(p[1]), int(p[0]))

STATUS = {"realizada": "realizada", "ok": "realizada", "feita": "realizada",
          "falta": "falta", "faltou": "falta", "f": "falta",
          "cancelada": "cancelada", "cancelou": "cancelada",
          "remarcada": "remarcada", "remarcado": "remarcada", "não atendido": "não atendido"}
LEMB = {"sim": "sim", "s": "sim", "não": "não", "nao": "não", "n": "não", "": "desconhecido"}

linhas = list(csv.DictReader(open(AQUI / "agenda.csv", encoding="utf-8")))
vistas, unicas, duplicadas = set(), [], 0
for l in linhas:
    k = tuple(l.values())
    if k in vistas: duplicadas += 1; continue
    vistas.add(k); unicas.append(l)

cadastro = {normaliza_nome(r["nome"]): r for r in csv.DictReader(open(AQUI / "pacientes.csv", encoding="utf-8"))}
primeiros = defaultdict(list)
for nome, r in cadastro.items(): primeiros[nome.split()[0]].append(nome)

def paciente(nome):
    n = normaliza_nome(nome)
    if n in cadastro: return cadastro[n]["id"]
    if n in primeiros and len(primeiros[n]) == 1: return cadastro[primeiros[n][0]]["id"]
    return None

reg = []
sem_correspondencia = set()
for l in unicas:
    pid = paciente(l["paciente"])
    if pid is None: sem_correspondencia.add(l["paciente"])
    d = data(l["data"])
    m = data(l["marcado_em"]) if l["marcado_em"] else None
    reg.append(dict(data=d, hora=int(l["hora"].replace("h", "").split(":")[0]), prof=l["profissional"],
                    pid=pid, status=STATUS[l["status"].strip().lower()], lembrete=LEMB[l["lembrete"].strip().lower()],
                    antecedencia=(d - m).days if m else None, marcado_por=l["marcado_por"] or "(em branco)",
                    obs=l["observacao"]))

def taxa(f):
    sel = [r for r in reg if r["status"] in ("realizada", "falta") and f(r)]
    n = sum(r["status"] == "falta" for r in sel)
    return f"{n}/{len(sel)} = {100*n/len(sel):.1f}%" if sel else "-"

por_horario = defaultdict(list)
for r in reg:
    if r["status"] in ("realizada", "falta", "não atendido"):
        por_horario[(r["data"], r["hora"], r["prof"])].append(r)
conflitos = {k: v for k, v in por_horario.items() if len({x["pid"] for x in v}) > 1}
quem = Counter()
for v in conflitos.values():
    for x in v:
        if x["marcado_por"] != "Joana": quem[x["marcado_por"]] += 1

res = {
  "linhas_no_arquivo": len(linhas), "duplicatas_exatas": duplicadas, "linhas_unicas": len(unicas),
  "nomes_sem_correspondencia_no_cadastro": sorted(sem_correspondencia),
  "status": dict(Counter(r["status"] for r in reg)),
  "taxa_falta_geral": taxa(lambda r: True),
  "com_lembrete": taxa(lambda r: r["lembrete"] == "sim"),
  "sem_lembrete": taxa(lambda r: r["lembrete"] == "não"),
  "lembrete_desconhecido": taxa(lambda r: r["lembrete"] == "desconhecido"),
  "as_7h": taxa(lambda r: r["hora"] == 7), "outros_horarios": taxa(lambda r: r["hora"] != 7),
  "segundas": taxa(lambda r: r["data"].weekday() == 0), "outros_dias": taxa(lambda r: r["data"].weekday() != 0),
  "antecedencia_mais_de_7_dias": taxa(lambda r: r["antecedencia"] is not None and r["antecedencia"] > 7),
  "antecedencia_ate_7_dias": taxa(lambda r: r["antecedencia"] is not None and r["antecedencia"] <= 7),
  "horarios_com_dois_pacientes": len(conflitos),
  "agendamentos_fora_da_recepcao_envolvidos_em_conflito": dict(quem),
  "observacoes_de_horario_duplicado": sum("duplicado" in r["obs"] for r in reg),
}
print(json.dumps(res, ensure_ascii=False, indent=1))

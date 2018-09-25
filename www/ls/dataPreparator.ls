window.ig.getData = ->
  koalice =
    ["KDU-ČSL","TOP 09",829]
    ["STAN","TOP 09",701]
    ["ODS","Svobodní",616]
    ["Slušní lidé","Soukromníci",394]
    ["KDU-ČSL","Zelení",368]
    ["Piráti","Zelení",351]
    ["KDU-ČSL","STAN",346]
    ["KDU-ČSL","ODS",228]
    ["ODS","TOP 09",205]
    ["Soukromníci","Svobodní",192]
    ["TOP 09","Zelení",191]
    ["Piráti","STAN",171]
    ["SPD","SPOZ",162]
    ["STAN","Svobodní",127]
    ["Piráti","TOP 09",112]
    ["Svobodní","TOP 09",112]
    ["Piráti","Svobodní",60]
    ["ODS","STAN",57]
    ["KSČM","SPOZ",56]
    ["KDU-ČSL","Svobodní",54]
    ["ČSSD","SPOZ",46]
    ["ODS","Soukromníci",43]
    ["ČSSD","Zelení",41]
    ["KDU-ČSL","Piráti",40]
    ["ČSSD","KDU-ČSL",39]
    ["STAN","Zelení",35]
    ["KDU-ČSL","Soukromníci",27]
  zkratky =
    "Strana zelených"                                               : "SZ"
  indices = {}
  i = 0
  for [a, b] in koalice
    if indices[a] is void then indices[a] = i++
    if indices[b] is void then indices[b] = i++
  out = []
  for [aNazev, bNazev, pocet] in koalice
    a = indices[aNazev]
    b = indices[bNazev]
    out[a] ?= []
    out[b] ?= []
    out[a][b] = pocet
    out[b][a] = pocet
    out[a].strana = {nazev: aNazev, zkratka: zkratky[aNazev]}
    out[b].strana = {nazev: bNazev, zkratka: zkratky[bNazev]}
  out_arr = for strana, obj of out
    obj
  len = 0
  for arr in out_arr
    len = Math.max arr.length, len
  for arr in out_arr
    for i in [0 til len]
      if arr[i] is void then arr[i] = 0
  out_arr


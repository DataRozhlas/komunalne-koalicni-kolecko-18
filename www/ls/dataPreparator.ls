window.ig.getData = ->
  koalice =
    ["KDU-ČSL","TOP 09",829]
    ["KDU-ČSL","STAN",346]
    ["KDU-ČSL","ODS",228]
    ["KDU-ČSL","Zelení",368]
    ["KDU-ČSL","Svobodní",54]
    ["KDU-ČSL","Piráti",40]
    ["KDU-ČSL","Soukromníci",27]
    ["KDU-ČSL","ČSSD",39]
    ["TOP 09","Zelení",191]
    ["TOP 09","STAN",701]
    ["TOP 09","ODS",205]
    ["TOP 09","Piráti",112]
    ["TOP 09","Svobodní",112]
    ["STAN","Svobodní",127]
    ["STAN","Piráti",171]
    ["STAN","ODS",57]
    ["STAN","Zelení",35]
    ["ODS","Svobodní",616]
    ["ODS","Soukromníci",43]
    ["Svobodní","Soukromníci",192]
    ["Svobodní","Piráti",60]
    ["Slušní lidé","Soukromníci",394]
    ["Zelení","Piráti",351]
    ["Zelení","ČSSD",41]
    ["SPD","SPOZ",162]
    ["SPOZ","KSČM",56]
    ["SPOZ","ČSSD",46]
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


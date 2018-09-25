window.ig.getData = ->
  koalice =
    ['KDU-ČSL','TOP 09',829]
    ['STAN','TOP 09',701]
    ['ODS','Svobodní',616]
    ['Slušní lidé','Soukromníci',394]
    ['KDU-ČSL','Zelení',368]
    ['Piráti','Zelení',351]
    ['KDU-ČSL','STAN',346]
    ['KDU-ČSL','ODS',228]
    ['KDU-ČSL','Nestraníci',222]
    ['ODS','TOP 09',205]
    ['Soukromníci','Svobodní',192]
    ['Lepší a čistá Ostrava','Změna pro lidi',191]
    ['TOP 09','Zelení',191]
    ['Piráti','STAN',171]
    ['Lepší a čistá Ostrava','SPOZ',170]
    ['SPD','SPOZ',162]
    ['OPAT','STAN',132]
    ['OPAT','Svobodní',129]
    ['STAN','Svobodní',127]
    ['Patrioti','Východočeši',125]
    ['STAN','Východočeši',125]
    ['Piráti','TOP 09',112]
    ['Svobodní','TOP 09',112]
    ['DSSS','Strana práce',90]
    ['Blok proti islámu','DSSS',85]
    ['DSSS','Národní fronta',85]
    ['SPOZ','Změna pro lidi',84]
    ['DSSS','Národní demokracie',82]
    ['ODA','Pro Prahu',81]
    ['TOP 09','Nestraníci',81]
    ['PRO Zdraví','Starostové',75]
    ['Národní socialisté','SPOZ',65]
    ['Patrioti','STAN',63]
    ['Blok proti islámu','Národní demokracie',62]
    ['Pro Prahu','Svobodní',62]
    ['Piráti','Svobodní',60]
    ['ODS','STAN',57]
    ['KSČM','SPOZ',56]
    ['KDU-ČSL','Svobodní',54]
    ['Nezávislí','Soukromníci',52]
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


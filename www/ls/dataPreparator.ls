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
    ['ČSSD','SPOZ',46]
    ['Čisté Budějovice','STAN',45]
    ['KDU-ČSL','Konservativci',43]
    ['Nezávislí','Zelení',43]
    ['ODS','Soukromníci',43]
    ['Realisté','SPOZ',43]
    ['ČSSD','Zelení',41]
    ['KDU-ČSL','Piráti',40]
    ['ČSSD','KDU-ČSL',39]
    ['Pro 2016','Svobodní',39]
    ['Zelení','Změna',37]
    ['KDU-ČSL','SNK ED',36]
    ['LES','TOP 09',36]
    ['Soukromníci','Volba OK',36]
    ['STAN','Zelení',35]
    ['ANO','Volba pro Mladou Boleslav',33]
    ['Nezávislí','Změna pro lidi',31]
    ['Občané pro Budějovice','Jihočeši',30]
    ['Piráti','Starostové pro Moravu',30]
    ['Moravské zemské hnutí','Zelení',29]
    ['Pro Prahu','SNK ED',29]
    ['České hnutí za národní jednotu','Patrioti ČR',27]
    ['KDU-ČSL','Soukromníci',27]
    ['ODS','Ta naše Třebíč',27]
    ['Pro Třebíč','STAN',27]
    ['ANO','Ženy za Brod',25]
    ['Pro Prahu','Soukromníci',25]
    ['Konservativci','STAN',25]
    ['Nezávislá volba','Piráti',25]
    ['KDU-ČSL','Změna',24]
    ['KDU-ČSL','Zvuk 12',24]
    ['Nezávislá volba','Změna',24]
    ['Svobodní','Volba OK',24]
    ['KDU-ČSL','Unie pro sport a zdraví',22]
    ['Občané městu','Zelení',22]
    ['Hnutí nezávislých','TOP 09',21]
    ['Město pro vás','STAN',21]
    ['Piráti','Změna',21]
    ['PRO Zdraví','Realisté',21]
    ['STAN','Volba pro Karlovarský kraj',21]
    ['STAN','Změna',21]
    ['Coexistentia','TOP 09',20]
    ['Nezávislí','Svobodní',20]
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


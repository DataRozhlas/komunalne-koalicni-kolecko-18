init = ->
  data = ig.getData!
  container = d3.select ig.containers.base
  new Tooltip!watchElements!
  chord = d3.layout.chord!
    ..matrix data
    ..padding 0.05
  width = window.innerWidth;
  height = window.innerWidth;
  innerRadius = (window.innerWidth - 60) * 0.48
  outerRadius = 550 * 0.5
  colors =
    \#ffff99
    \#6a3d9a
    \gray
    \#1f78b4
    \#33a02c
    \#b15928
    \#fdbf6f
    \#b2df8a
    \black
    \#a6cee3
    \#fb9a99
    \#e31a1c
    \#ff7f00
  arcFill = (d, i) ->
    colors[i]

  chordFill = d3.scale.ordinal().range(colors);

  svg = container.append \svg
    ..attr \width width
    ..attr \height height
  defs = svg.append \defs

  drawing = svg.append \g
    ..attr \transform "translate(#{width / 2}, #{height / 2})"
  def = d3.svg.arc!innerRadius innerRadius .outerRadius outerRadius + 5
  def2 = d3.svg.arc!innerRadius innerRadius .outerRadius outerRadius
  drawing.selectAll \path.radius .data chord.groups .enter!append \path
    ..attr \class \radius
    ..style \fill arcFill
    ..attr \d def2
  defs.selectAll \path .data chord.groups .enter!append \path
    ..attr \id (d, i) -> "textPath-#i"
    ..attr \d def
  drawing.selectAll \text .data chord.groups .enter!append \text
    ..append \textPath
      ..attr \xlink:href (d, i) -> '#textPath-' + i
      ..text (d, i) -> data[i].strana.zkratka

  def = d3.svg.chord!radius innerRadius

  drawing.selectAll \path.chord .data chord.chords .enter!append \path
    ..attr \class \chord
    ..attr \d def
    ..style \fill (d, i) -> chordFill i
    ..style \stroke (d, i) -> chordFill i
    ..attr \data-tooltip ({source, target}:d) ->
      "<b>#{data[source.index].strana.nazev}</b> a <b>#{data[target.index].strana.nazev}</b> sdílí na kandidátkách <b>#{source.value}</b> lidí"

if d3?
  init!
else
  $ window .bind \load ->
    if d3?
      init!

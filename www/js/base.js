// Generated by LiveScript 1.2.0
(function(){
  var init;
  init = function(){
    var data, container, x$, chord, width, height, innerRadius, outerRadius, colors, arcFill, chordFill, y$, svg, defs, z$, drawing, def, def2, z1$, z2$, z3$, z4$, z5$;
    data = ig.getData();
    container = d3.select(ig.containers.base);
    new Tooltip().watchElements();
    x$ = chord = d3.layout.chord();
    x$.matrix(data);
    x$.padding(0.05);
    width = window.innerWidth;
    height = window.innerWidth;
    innerRadius = (window.innerWidth - 60) * 0.48;
    outerRadius = 550 * 0.5;
    colors = ['#ffff99', '#6a3d9a', 'gray', '#1f78b4', '#33a02c', '#b15928', '#fdbf6f', '#b2df8a', 'black', '#a6cee3', '#fb9a99', '#e31a1c', '#ff7f00'];
    arcFill = function(d, i){
      return colors[i];
    };
    chordFill = d3.scale.ordinal().range(colors);
    y$ = svg = container.append('svg');
    y$.attr('width', width);
    y$.attr('height', height);
    defs = svg.append('defs');
    z$ = drawing = svg.append('g');
    z$.attr('transform', "translate(" + width / 2 + ", " + height / 2 + ")");
    def = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius + 5);
    def2 = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
    z1$ = drawing.selectAll('path.radius').data(chord.groups).enter().append('path');
    z1$.attr('class', 'radius');
    z1$.style('fill', arcFill);
    z1$.attr('d', def2);
    z2$ = defs.selectAll('path').data(chord.groups).enter().append('path');
    z2$.attr('id', function(d, i){
      return "textPath-" + i;
    });
    z2$.attr('d', def);
    z3$ = drawing.selectAll('text').data(chord.groups).enter().append('text');
    z4$ = z3$.append('textPath');
    z4$.attr('xlink:href', function(d, i){
      return '#textPath-' + i;
    });
    z4$.text(function(d, i){
      return data[i].strana.zkratka;
    });
    def = d3.svg.chord().radius(innerRadius);
    z5$ = drawing.selectAll('path.chord').data(chord.chords).enter().append('path');
    z5$.attr('class', 'chord');
    z5$.attr('d', def);
    z5$.style('fill', function(d, i){
      return chordFill(i);
    });
    z5$.style('stroke', function(d, i){
      return chordFill(i);
    });
    z5$.attr('data-tooltip', function(d){
      var source, target;
      source = d.source, target = d.target;
      return "<b>" + data[source.index].strana.nazev + "</b> a <b>" + data[target.index].strana.nazev + "</b> sdílí na kandidátkách <b>" + source.value + "</b> lidí";
    });
    return z5$;
  };
  if (typeof d3 != 'undefined' && d3 !== null) {
    init();
  } else {
    $(window).bind('load', function(){
      if (typeof d3 != 'undefined' && d3 !== null) {
        return init();
      }
    });
  }
}).call(this);

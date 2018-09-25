(function(){var Tooltip;window.Tooltip=Tooltip=function(){Tooltip.displayName="Tooltip";var prototype=Tooltip.prototype,constructor=Tooltip;Tooltip.counter=0;function Tooltip(options){var ref$;this.options=options!=null?options:{};this.onMouseMove=bind$(this,"onMouseMove",prototype);this.eventId="tooltip-"+constructor.counter++;(ref$=this.options).parent==null&&(ref$.parent=d3.select("body"));d3.select(document).on("mousemove."+this.eventId,bind$(this,"onMouseMove"))}prototype.watchElements=function(){var this$=this;d3.select(document).on("mouseover."+this.eventId,function(){var currentTarget,content;currentTarget=d3.event.target;do{content=currentTarget.getAttribute("data-tooltip");currentTarget=currentTarget.parentNode}while(currentTarget!==document&&content===null);if(!content){return}content=unescape(content);if(!content.length){return}return this$.display(content)});return d3.select(document).on("mouseout."+this.eventId,bind$(this,"hide"))};prototype.display=function(content){var x$;x$=this.$element=this.options.parent.append("div");x$.attr("class","tooltip");x$.html(content);return this.setPositionByMouse()};prototype.hide=function(){if(!this.$element){return}this.$element.remove();this.$element=null;return this.mouseBound=false};prototype.reposition=function(arg$){var left,top,clientLeft,clientTop,dX,dY,element,width,maxLeft,topMargin,x$;left=arg$[0],top=arg$[1],clientLeft=arg$[2],clientTop=arg$[3];dX=left-clientLeft;dY=top-clientTop;element=this.$element[0][0];width=element.offsetWidth;left-=width/2;maxLeft=(window.innerWidth||document.documentElement.clientWidth)-width;top-=element.offsetHeight;left=Math.max(dX,left);left=Math.min(left,dX+maxLeft);if(top<=19+dY){topMargin=-20;top+=element.offsetHeight-2*topMargin}x$=this.$element;x$.style("left",left+"px");x$.style("top",top+"px");return x$};prototype.setPositionByMouse=function(){this.mouseBound=true;if(this.lastMousePosition){return this.reposition(this.lastMousePosition)}};prototype.onMouseMove=function(){var evt;evt=d3.event;this.lastMousePosition=[evt.pageX||evt.clientX,evt.pageY||evt.clientY,evt.clientX,evt.clientY];if(this.mouseBound){return this.reposition(this.lastMousePosition)}};return Tooltip}();function bind$(obj,key,target){return function(){return(target||obj)[key].apply(obj,arguments)}}}).call(this);
//# sourceMappingURL=../js/script.js.map
//@ sourceMappingURL=./js/script.js.map
;
(function(){var t,n,e,o,a;if(window.ig={projectName:"komunalne-koalicni-kolecko",containers:{}},"undefined"!=typeof _gaq&&null!==_gaq&&_gaq.push(["_trackEvent","ig",ig.projectName]),t=document.querySelectorAll(".ig"),t.length)for(n=0,e=t.length;e>n;++n)o=t[n],window.ig.containers[o.getAttribute("data-ig")]=o;else document.body.className+=" ig",window.ig.containers.base=document.body;"undefined"!=typeof d3&&null!==d3&&(a=document.getElementById("fallback"))&&a.parentNode.removeChild(a)}).call(this),window.ig.data={style:".tooltip{font-family:arial,helvetica,sans-serif;z-index:50;position:absolute;border:1px solid #888;color:#111;border-radius:4px;background-color:#fff;padding:5px 10px;margin-top:-8px;margin-left:0;box-shadow:#aaa 0 0 1px}.tooltip p.only-child{margin:0}.ig{font-size:14px;margin:0;line-height:19px;font-family:arial,sans-serif}.ig *,.ig *:before,.ig *:after{box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.ig a{color:#2c6fb3;text-decoration:underline}.ig a:active,.ig a:focus{text-decoration:none}.ig .leaflet-control-zoom a{text-decoration:none;color:#333}.ig .leaflet-control-attribution a{color:#036}.ig .fallback{position:absolute;top:0;left:0;width:100%;height:600px;background:#fff;z-index:10}.ig .fallback div{margin:270px 40px 0 40px;text-align:center;padding:20px 10px;border:1px dotted #aaa}.ig path.chord{fill-opacity:.3;stroke-opacity:1}.ig path.chord:hover{fill-opacity:.9}.ig text{font-size:1.4em}"},function(){var t,n;t=n=document.createElement("style"),t.innerHTML=ig.data.style,document.getElementsByTagName("head")[0].appendChild(n)}.call(this),function(){window.ig.getData=function(){function t(){var t,n,e=[];for(t=0,n=v;n>t;++t)e.push(t);return e}var n,e,o,a,r,i,l,d,s,c,u,f,g,p,h,S,b,v,x,m,P;for(n=[["KDU-ČSL","TOP 09",829],["STAN","TOP 09",701],["ODS","Svobodní",616],["Slušní lidé","Soukromníci",394],["KDU-ČSL","Zelení",368],["Piráti","Zelení",351],["KDU-ČSL","STAN",346],["KDU-ČSL","ODS",228],["KDU-ČSL","Nestraníci",222],["ODS","TOP 09",205],["Soukromníci","Svobodní",192],["Lepší a čistá Ostrava","Změna pro lidi",191],["TOP 09","Zelení",191],["Piráti","STAN",171],["Lepší a čistá Ostrava","SPOZ",170],["SPD","SPOZ",162],["OPAT","STAN",132],["OPAT","Svobodní",129],["STAN","Svobodní",127],["Patrioti","Východočeši",125],["STAN","Východočeši",125],["Piráti","TOP 09",112],["Svobodní","TOP 09",112],["DSSS","Strana práce",90],["Blok proti islámu","DSSS",85],["DSSS","Národní fronta",85],["SPOZ","Změna pro lidi",84],["DSSS","Národní demokracie",82],["ODA","Pro Prahu",81],["TOP 09","Nestraníci",81],["PRO Zdraví","Starostové",75],["Národní socialisté","SPOZ",65],["Patrioti","STAN",63],["Blok proti islámu","Národní demokracie",62],["Pro Prahu","Svobodní",62],["Piráti","Svobodní",60],["ODS","STAN",57],["KSČM","SPOZ",56],["KDU-ČSL","Svobodní",54],["Nezávislí","Soukromníci",52]],e={"Strana zelených":"SZ"},o={},a=0,r=0,i=n.length;i>r;++r)l=n[r],d=l[0],s=l[1],void 0===o[d]&&(o[d]=a++),void 0===o[s]&&(o[s]=a++);for(c=[],r=0,i=n.length;i>r;++r)l=n[r],u=l[0],f=l[1],g=l[2],d=o[u],s=o[f],null==c[d]&&(c[d]=[]),null==c[s]&&(c[s]=[]),c[d][s]=g,c[s][d]=g,c[d].strana={nazev:u,zkratka:e[u]},c[s].strana={nazev:f,zkratka:e[f]};h=[];for(S in c)b=c[S],h.push(b);for(p=h,v=0,r=0,i=p.length;i>r;++r)x=p[r],v=Math.max(x.length,v);for(r=0,i=p.length;i>r;++r)for(x=p[r],m=0,P=(l=t()).length;P>m;++m)a=l[m],void 0===x[a]&&(x[a]=0);return p}}.call(this),function(){var t,n,e=[].slice;ig.utils=t={},t.offset=function(t,n){var e,o;e=0,o=0;do e+=t.offsetTop,o+=t.offsetLeft;while(t=t.offsetParent);return{top:e,left:o}},t.deminifyData=function(t){var n,e,o,a,r,i,l,d,s,c,u,f,g;for(e=[],o=0,r=(a=t.data).length;r>o;++o){for(i=a[o],l={},d=0,c=(s=t.columns).length;c>d;++d)u=d,f=s[d],l[f]=i[u];for(f in s=t.indices)g=s[f],l[f]=g[l[f]];e.push(l)}return n=e},t.formatNumber=function(t,e){var o,a;if(null==e&&(e=0),t=parseFloat(t),e){for(o=Math.floor(t),a=t%1,o=n(o),a=Math.round(a*Math.pow(10,e)),a=a.toString();a.length<e;)a="0"+a;return o+","+a}return o=Math.round(t),n(o)},n=function(t,n){var o,a,r,i,l,d,s,c,u;for(null==n&&(n=" "),o=Math.round(t).toString(),a=[],r=o.length,i=0,d=(l=[0].concat(e.call(r))).length;d>i;++i)s=l[i],a.unshift(o[r-s-1]),c=s===r-1,u=2===s%3,u&&!c&&a.unshift(n);return a.join("")}}.call(this),function(){var t;t=function(){var t,n,e,o,a,r,i,l,d,s,c,u,f,g,p,h,S,b,v,x,m,P,k;return t=ig.getData(),n=d3.select(ig.containers.base),(new Tooltip).watchElements(),e=o=d3.layout.chord(),e.matrix(t),e.padding(.05),a=610,r=610,i=264,l=275,d=["#0FB103","#FEE300","#8E8E8E","#5434A3","#1C76F0","#e3001a","#f29400","#66E2D8","#B1C484","#000000","#FB9A99"],s=function(t,n){return d[n]},c=d3.scale.category20c(),u=f=n.append("svg"),u.attr("width",a),u.attr("height",r),g=f.append("defs"),p=h=f.append("g"),p.attr("transform","translate("+a/2+", "+r/2+")"),S=d3.svg.arc().innerRadius(i).outerRadius(l+5),b=d3.svg.arc().innerRadius(i).outerRadius(l),v=h.selectAll("path.radius").data(o.groups).enter().append("path"),v.attr("class","radius"),v.style("fill",s),v.attr("d",b),x=g.selectAll("path").data(o.groups).enter().append("path"),x.attr("id",function(t,n){return"textPath-"+n}),x.attr("d",S),m=h.selectAll("text").data(o.groups).enter().append("text"),P=m.append("textPath"),P.attr("xlink:href",function(t,n){return"#textPath-"+n}),P.text(function(n,e){return t[e].strana.zkratka}),S=d3.svg.chord().radius(i),k=h.selectAll("path.chord").data(o.chords).enter().append("path"),k.attr("class","chord"),k.attr("d",S),k.style("fill",function(t,n){return c(n)}),k.style("stroke",function(t,n){return c(n)}),k.attr("data-tooltip",function(n){var e,o;return e=n.source,o=n.target,"<b>"+t[e.index].strana.nazev+"</b> a <b>"+t[o.index].strana.nazev+"</b> sdílí na kandidátkách <b>"+e.value+"</b> lidí"}),k},"undefined"!=typeof d3&&null!==d3?t():$(window).bind("load",function(){return"undefined"!=typeof d3&&null!==d3?t():void 0})}.call(this);
(this["webpackJsonpmovies-app-react"]=this["webpackJsonpmovies-app-react"]||[]).push([[0],{48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var c,n=a(2),r=a.n(n),s=a(15),i=a.n(s),o=a(5),d=a.n(o),p=a(16),l=a(17),u=a(18),m=a(21),j=a(19),v=a(20),h=a(0),b=function(e){return Object(h.jsx)("div",{className:"row",children:e.movieprop.map((function(t){return Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)("div",{className:"card mb-4",children:Object(h.jsxs)("div",{className:"card bg-dark text-white",children:[Object(h.jsx)("div",{className:"card-blur",children:Object(h.jsx)("img",{src:"https://www.themoviedb.org/t/p/w1280/".concat(t.poster_path),className:"card-img",alt:"movie about"})}),Object(h.jsxs)("div",{className:"card-img-overlay word-wrap-1",children:[Object(h.jsx)("h3",{className:"card-title",children:t.title}),Object(h.jsx)("p",{className:"card-text",children:t.overview}),Object(h.jsx)("p",{className:"card-text",children:Object.entries(e.genresprop).map((function(e){var a=Object(v.a)(e,2),c=(a[0],a[1]);return t.genre_ids.map((function(e){return e===c.id?"#"+c.name+" ":null}))}))})]})]})})},t.id)}))})},f=a(6),g=a.n(f);a(45).config(),g.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("5a43144a0cdf863a184a21d0c1c69af2","&language=en-US")).then((function(e){c=e.data.genres.map((function(e){return e}))}));var O=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.themoviedb.org/3/list/7100438?api_key=".concat("5a43144a0cdf863a184a21d0c1c69af2","&language=en-US"));case 2:t=e.sent,this.setState({movies:t.data.items});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(b,{movieprop:this.state.movies,genresprop:c})})}}]),a}(r.a.Component);a(48),a(49);i.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cd1e838c.chunk.js.map
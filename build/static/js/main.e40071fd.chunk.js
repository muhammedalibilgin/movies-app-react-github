(this["webpackJsonpmovies-app-react"]=this["webpackJsonpmovies-app-react"]||[]).push([[0],{48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n,r=a(2),c=a.n(r),i=a(15),s=a.n(i),o=a(5),d=a.n(o),p=a(16),u=a(17),l=a(18),v=a(21),m=a(19),j=a(20),O=a(0),b=function(e){return Object(O.jsx)("div",{className:"row",children:e.movieprop.map((function(t){return Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsx)("div",{className:"card mb-4",children:Object(O.jsxs)("div",{className:"card bg-dark text-white",children:[Object(O.jsx)("div",{className:"card-blur",children:Object(O.jsx)("img",{src:"https://www.themoviedb.org/t/p/w1280/".concat(t.poster_path),className:"card-img",alt:"movie about"})}),Object(O.jsxs)("div",{className:"card-img-overlay word-wrap-1",children:[Object(O.jsx)("h3",{className:"card-title",children:t.title}),Object(O.jsx)("p",{className:"card-text",children:t.overview}),Object(O.jsx)("p",{className:"card-text",children:Object.entries(e.genresprop).map((function(e){var a=Object(j.a)(e,2),n=(a[0],a[1]);return t.genre_ids.map((function(e){return e===n.id?"#"+n.name+" ":null}))}))})]})]})})},t.id)}))})},h=a(6),_=a.n(h);a(45).config(),_.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,"&language=en-US")).then((function(e){n=e.data.genres.map((function(e){return e}))}));var g=function(e){Object(v.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://api.themoviedb.org/3/list/7100438?api_key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,"&language=en-US"));case 2:t=e.sent,this.setState({movies:t.data.items});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(b,{movieprop:this.state.movies,genresprop:n})})}}]),a}(c.a.Component);a(48),a(49);s.a.render(Object(O.jsx)(g,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e40071fd.chunk.js.map
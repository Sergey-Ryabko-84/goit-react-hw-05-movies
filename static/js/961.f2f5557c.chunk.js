"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{18:function(e,t,n){n.d(t,{TP:function(){return d},Tg:function(){return u},qF:function(){return o},tx:function(){return p},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(388);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=new URLSearchParams({api_key:"90a449e7773f96eeaad80a5e660b8095"}),u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},961:function(e,t,n){n.r(t);var r=n(439),a=n(18),c=n(791),s=n(689),i=n(87),u=n(483),o=n(184);t.default=function(){var e,t,n=(0,c.useState)(null),d=(0,r.Z)(n,2),f=d[0],p=d[1],h=(0,c.useState)(!1),v=(0,r.Z)(h,2),l=v[0],x=v[1],m=(0,s.UO)().movieId,j=null!==(e=null===(t=(0,s.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,c.useEffect)((function(){x(!0),(0,a.TP)(m).then((function(e){p(e),x(!1)})).catch(console.log)}),[m]),f){var w=f.poster_path,g=f.title,b=f.vote_average,Z=f.overview,k=f.genres;return(0,o.jsxs)("main",{children:[(0,o.jsx)(i.rU,{to:j,children:"<- Go back"}),l&&(0,o.jsx)(u.a,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:w?"https://image.tmdb.org/t/p/w500".concat(w):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",alt:g,width:320}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:g}),(0,o.jsxs)("p",{children:["User Score: ",Math.round(10*b),"%"]}),(0,o.jsx)("h3",{children:"Owerview"}),(0,o.jsx)("p",{children:Z}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:k.map((function(e){var t=e.id,n=e.name;return(0,o.jsxs)("span",{children:[n," "]},t)}))})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"cast",state:{from:j},children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"reviews",state:{from:j},children:"Reviews"})})]})]}),(0,o.jsx)(c.Suspense,{fallback:(0,o.jsx)(u.a,{}),children:(0,o.jsx)(s.j3,{})})]})}}}}]);
//# sourceMappingURL=961.f2f5557c.chunk.js.map
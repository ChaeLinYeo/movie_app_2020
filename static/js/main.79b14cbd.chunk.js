(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{45:function(n,e,t){},46:function(n,e,t){},64:function(n,e,t){},70:function(n,e,t){},71:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t(0),r=t.n(i),o=t(34),s=t.n(o),c=(t(45),t(8)),l=t(2);t(46);var m=function(n){return console.log(n),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("div",{id:"front"}),Object(a.jsx)("div",{id:"back"}),Object(a.jsxs)("span",{children:["Developer : ChaelinYeo",Object(a.jsx)("br",{}),"email : gomgomtoto@gmail.com",Object(a.jsx)("br",{}),"blog : http://chaelinyeo.github.io/",Object(a.jsx)("br",{}),"github : https://github.com/ChaeLinYeo/",Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:'"About this page: I built it because I love movies."'})]})]})},b=t(21),d=t.n(b),h=t(35),u=t(13),j=t(14),p=t(18),v=t(17),g=t(15),f=t(36),w=t.n(f);t(64);var x=function(n){var e=n.title,t=n.year,i=n.summary,r=n.poster,o=n.genres,s=n.description_full,l=n.synopsis,m=n.rating,b=n.runtime,d=n.trailer,h=n.background,u=n.yt_trailer_code;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)(c.b,{to:{pathname:"/movie-detail/".concat(d),state:{year:t,title:e,summary:i,poster:r,genres:o,description_full:s,synopsis:l,rating:m,runtime:b,trailer:d,background:h,yt_trailer_code:u}},children:Object(a.jsx)("img",{src:r,alt:e,title:e})}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsxs)("h3",{className:"movie__title>",children:[e," (",t,")"]}),Object(a.jsx)("ul",{className:"movie__genres",children:o.map((function(n,e){return Object(a.jsx)("li",{className:"movie__genre",children:n},e)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[i.slice(0,100),"..."]})]})]})},O=(t(70),t(16));function y(){var n=Object(g.a)(["\nhtml,\nbody {\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background: #0d1019;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #0d1019 0%, #161b29 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(-45deg, #0d1019 0%, #161b29 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(135deg, #0d1019 0%, #161b29 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#0d1019', endColorstr='#161b29', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n}\n\n.container {\n  width: 20vw;\n  height: 20vw;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  overflow: hidden;\n}\n\n/* Compressing bars style */\n\n.bars-common {\n  height: 4vw;\n  max-height: 100%;\n  width: 1vw;\n  margin: auto;\n  position: absolute;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bar-one {\n  left: 0;\n  right: 4vw;\n  top: 0;\n  bottom: 0;\n  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n}\n\n.bar-two {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n}\n\n.bar-three {\n  left: 4vw;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n}\n\n/* Rotating squares style */\n\n.squares-common {\n  height: 8vw;\n  max-height: 100%;\n  width: 8vw;\n  margin: auto;\n  position: absolute;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 0%;\n}\n\n.square-one {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n}\n\n.square-two {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n}\n\n/* Animation */\n/* Compressing bars animation */\n\n.bar-one {\n  animation: barOne 1s .33s infinite linear;\n  -moz-animation: barOne 1s .33s infinite linear;\n  /* Firefox */\n  -webkit-animation: barOne 1s .33s infinite linear;\n  /* Safari and Chrome */\n  -o-animation: barOne 1s .33s infinite linear;\n  /* Opera */\n}\n\n@keyframes barOne {\n  0%,\n  100% {\n    box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n  }\n  50% {\n    height: 2.5vw;\n    box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;\n  }\n}\n\n.bar-two {\n  animation: barTwo 1s .66s infinite linear;\n  -moz-animation: barTwo 1s .66s infinite linear;\n  /* Firefox */\n  -webkit-animation: barTwo 1s .66s infinite linear;\n  /* Safari and Chrome */\n  -o-animation: barTwo 1s .66s infinite linear;\n  /* Opera */\n}\n\n@keyframes barTwo {\n  0%,\n  100% {\n    box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n  }\n  50% {\n    height: 2.5vw;\n    box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;\n  }\n}\n\n.bar-three {\n  animation: barThree 1s .99s infinite linear;\n  -moz-animation: barThree 1s .99s infinite linear;\n  /* Firefox */\n  -webkit-animation: barThree 1s .99s infinite linear;\n  /* Safari and Chrome */\n  -o-animation: barThree 1s .99s infinite linear;\n  /* Opera */\n}\n\n@keyframes barThree {\n  0%,\n  100% {\n    box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;\n  }\n  50% {\n    height: 2.5vw;\n    box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;\n  }\n}\n\n/* Rotating squares animation */\n\n.square-one {\n  animation: squareOne 2s .99s infinite linear;\n  -moz-animation: squareOne 2s .99s infinite linear;\n  /* Firefox */\n  -webkit-animation: squareOne 2s .99s infinite linear;\n  /* Safari and Chrome */\n  -o-animation: squareOne 2s .99s infinite linear;\n  /* Opera */\n}\n\n@keyframes squareOne {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-180deg);\n  }\n}\n\n.square-two {\n  animation: squareTwo 2s .99s infinite linear;\n  -moz-animation: squareTwo 2s .99s infinite linear;\n  /* Firefox */\n  -webkit-animation: squareTwo 2s .99s infinite linear;\n  /* Safari and Chrome */\n  -o-animation: squareTwo 2s .99s infinite linear;\n  /* Opera */\n}\n\n@keyframes squareTwo {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(180deg);\n  }\n}\n"]);return y=function(){return n},n}var _=O.a.div(y()),k=function(n){Object(p.a)(t,n);var e=Object(v.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).state={isLoading:!0,movies:[]},n.getMovies=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,console.log(a),n.setState({movies:a,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),n}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var n=this.state,e=n.isLoading,t=n.movies;return Object(a.jsxs)("section",{className:"container",children:[Object(a.jsx)("div",{id:"front"}),Object(a.jsx)("div",{id:"back"}),Object(a.jsx)("div",{className:"area"}),e?Object(a.jsx)(_,{children:Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:Object(a.jsxs)("div",{id:"cupcake",className:"box",children:[Object(a.jsx)("div",{className:"bars-common bar-one"}),Object(a.jsx)("div",{className:"bars-common bar-two"}),Object(a.jsx)("div",{className:"bars-common bar-three"}),Object(a.jsx)("div",{className:"squares-common square-one"}),Object(a.jsx)("div",{className:"squares-common square-two"})]})})})}):Object(a.jsxs)("div",{className:"movies",children:[Object(a.jsxs)("div",{className:"sign",children:[Object(a.jsxs)("div",{className:"neon-blue",id:"title",children:["Wel",Object(a.jsx)("span",{id:"fade",children:"come"})," To"]}),Object(a.jsxs)("div",{className:"neon-blue",children:["  ",Object(a.jsx)("span",{className:"neon-purple",id:"trav",children:"Thea"}),"  ",Object(a.jsx)("span",{className:"neon-purple",children:"ter"})]})]}),t.map((function(n){return Object(a.jsx)(x,{id:n.id,year:n.year,title:n.title,summary:n.summary,poster:n.medium_cover_image,genres:n.genres,description_full:n.description_full,synopsis:n.synopsis,rating:n.rating,runtime:n.runtime,trailer:n.yt_trailer_code,background:n.background_image,yt_trailer_code:n.yt_trailer_code},n.id)}))]})]})}}]),t}(r.a.Component);t(71);var N=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(c.b,{to:"/",children:"Home"}),Object(a.jsx)(c.b,{to:"/about",children:"About"})]})};function q(){var n=Object(g.a)(["\nwidth:100%;\nheight: 1924px;\nmargin:auto;\nposition:relative;\n    iframe{\n        position:absolute;\n        width: 60%;\n        height: 40vh;\n        margin:auto;\n        transform:translateX(-50%);\n        top:6%;\n        left:50%;\n        border-radius:10px;     \n        z-index:10;\n    }\n    .text{\n        position:absolute;\n        width:60%;\n        height:auto;\n        padding:30px;\n        border-radius:10px;\n        top:25%;\n        transform:translateX(-50%);\n        left:50%;\n        background:rgba(0,0,0,0.6);\n        h1{\n            padding-bottom:20px;\n            font-size:40px;\n            font-weight:bold;\n            color:white;\n        }\n        h2{\n            font-size:30px;\n            padding-bottom:10px;\n            color:lightpink\n        }\n        h3{\n            font-size:20px;\n            color:white\n        }\n    }\n    @media only screen and (max-width:1200px) {\n        width:100%;\n        height:100%;\n        position:static;\n        margin:auto;\n        iframe{\n            position:static;\n            width:100%;\n            max-height: 80vh;\n            top:0;\n            left:0;\n            transform:none;\n        }\n        .text{position:static;\n            margin:1vh auto 0 auto;\n            width:100%;\n            height:auto;\n            top:0;\n            left:0;\n            transform:none;\n            h1{font-size:30px}\n            h2{font-size:20px}\n            h3{font-size:20px}\n        }\n    }\n\n    \n"]);return q=function(){return n},n}var T=O.a.div(q()),C=function(n){Object(p.a)(t,n);var e=Object(v.a)(t);function t(){return Object(u.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.location,t=n.history;void 0===e.state&&t.push("/")}},{key:"render",value:function(){var n=this.props.location;return console.log(n),n.state?Object(a.jsxs)(T,{style:{background:"URL(".concat(n.state.background,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[Object(a.jsx)("iframe",{title:n.state.trailer,src:"https://www.youtube.com/embed/".concat(n.state.trailer),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("h1",{children:n.state.title}),Object(a.jsxs)("h2",{children:[n.state.year," ",n.state.genres.map((function(n){return n}))]}),Object(a.jsxs)("h3",{children:["Rating : ",n.state.rating,"/10"]}),Object(a.jsxs)("h3",{children:["Runtime : ",n.state.runtime," mins"]}),Object(a.jsx)("h3",{children:n.state.genres.map((function(n,e){return Object(a.jsx)("li",{className:"movie__genre",children:n},e)}))}),Object(a.jsx)("h2",{children:"Synopsis"}),Object(a.jsx)("h3",{children:n.state.synopsis})]})]}):null}}]),t}(r.a.Component);var z=function(){return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(N,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:k}),Object(a.jsx)(l.a,{path:"/about",component:m}),Object(a.jsx)(l.a,{path:"/movie-detail/:trailer",component:C})]})};s.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.79b14cbd.chunk.js.map
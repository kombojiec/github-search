(this["webpackJsonpgithub-app"]=this["webpackJsonpgithub-app"]||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n,s,r=c(1),a=c.n(r),i=c(30),o=c.n(i),l=(c(36),c(10)),j=c(2),u=c(0),b=function(e){return Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)("div",{className:"nav__logo",children:"Github Search"}),Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(l.c,{to:"/",exact:!0,className:"nav__link",children:"Home"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(l.c,{to:"/about",className:"nav__link",children:"About"})})]})]})},d=function(e){var t=e.user;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:t.avatar_url,alt:t.login,className:"card__img"}),Object(u.jsxs)("div",{className:"card__info",children:[Object(u.jsx)("h3",{className:"card__title",children:t.login}),Object(u.jsx)(l.b,{className:"card__button",to:"/profile/".concat(t.login),children:"Open"})]})]})},p=Object(r.createContext)(),h=c(13),O=Object(r.createContext)(),m=function(e){var t=Object(r.useContext)(O),c=Object(r.useContext)(p),n=Object(r.useState)(""),s=Object(h.a)(n,2),a=s[0],i=s[1];return Object(u.jsx)("div",{className:"search",children:Object(u.jsx)("input",{className:"search__input",type:"text",value:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",onKeyPress:function(e){"Enter"===e.key&&(""!==a.trim()?(c.searchUsers(a.trim()),t.hide()):(t.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),c.clearUsers()))},onChange:function(e){return i(e.target.value)}})})},x=function(e){var t=Object(r.useContext)(p),c=t.users,n=t.loading,s=Object(r.useContext)(p);return console.log(s),n?Object(u.jsx)("h1",{children:"Loading..."}):Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"home__cards",children:c.map((function(e,t){return Object(u.jsx)(d,{user:e},e.id)}))})]})},_=function(e){return Object(u.jsx)("div",{className:"about",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"about__card",children:[Object(u.jsx)("h1",{className:"about__title",children:"About"}),Object(u.jsx)("p",{className:"about__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem pariatur quidem exercitationem, veniam non? Asperiores consequuntur quod dolorem porro, consectetur quas minima ullam reprehenderit adipisci laborum omnis. Quis, porro?*10"})]})})})},f=function(e){var t=e.repos.map((function(e){return Object(u.jsx)("li",{className:"repo__item",children:Object(u.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",className:"repo__link",children:e.name})},e.id)}));return Object(u.jsxs)("div",{className:"repo",children:[Object(u.jsx)("h1",{className:"repo__title",children:"Rpositories"}),Object(u.jsx)("ul",{className:"repo__list",children:t})]})},g=function(e){var t=e.match.params.name,c=Object(r.useContext)(p),n=c.getUser,s=c.getRepos,a=c.user,i=c.repos;Object(r.useEffect)((function(){n(t),s(t)}),[]);var o=a.name,l=a.company,j=a.avatar_url,b=a.location,d=a.bio,h=a.blog,O=a.login,m=a.html_url,x=a.followers,_=a.following,g=a.public_repos,v=a.public_gists;return console.log(a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__items",children:[Object(u.jsx)("img",{src:j,alt:O,className:"profile__img"}),o&&Object(u.jsxs)("h1",{className:"profile__title",children:[o," "]}),b&&Object(u.jsxs)("p",{className:"profile__location",children:[" ",Object(u.jsx)("strong",{children:"Location: "})," ",b," "]})]}),Object(u.jsxs)("div",{className:"profile__info",children:[d&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"profile__info-title",children:"Biography"}),Object(u.jsx)("p",{className:"profile__info-text",children:d})]}),Object(u.jsx)("a",{href:m,className:"profile__link",target:"_blank",rel:"noreferrer",children:"View profile"}),O&&Object(u.jsxs)("p",{className:"profile__name",children:[Object(u.jsx)("strong",{children:"Username: "})," ",O," "]}),l&&Object(u.jsxs)("p",{className:"profile__company",children:[Object(u.jsx)("strong",{children:"Company: "})," ",l," "]}),h&&Object(u.jsxs)("p",{className:"profile__website",children:[Object(u.jsx)("strong",{children:"Website: "}),h]}),Object(u.jsxs)("ul",{className:"profile__statistics",children:[Object(u.jsxs)("li",{className:"profile__statistic-item",children:[Object(u.jsx)("strong",{children:"Followers: "})," ",x," "]}),Object(u.jsxs)("li",{className:"profile__statistic-item",children:[Object(u.jsx)("strong",{children:"Following: "})," ",_," "]}),Object(u.jsxs)("li",{className:"profile__statistic-item",children:[Object(u.jsx)("strong",{children:"Repositories: "})," ",g," "]}),Object(u.jsxs)("li",{className:"profile__statistic-item",children:[Object(u.jsx)("strong",{children:"Gists: "})," ",v," "]})]})]})]}),Object(u.jsx)(f,{repos:i})]})},v=function(){var e=Object(r.useContext)(O),t=e.alert,c=e.hide;return t?Object(u.jsxs)("div",{className:"alert ".concat(t.type||""),children:[t.text||"some information",Object(u.jsx)("button",{className:"alert__button",onClick:c})]}):null},N="SHOW_ALERT",y="HIDE_ALERT",E="SEARCH_USERS",w="GET_USER",C="GET_REPOS",L="CLEAR_USERS",R="SET_LOADING",U=c(6),k=(n={},Object(U.a)(n,N,(function(e,t){return t.payload})),Object(U.a)(n,y,(function(){return null})),Object(U.a)(n,"DEFAULT",(function(e){return e})),n),A=function(e,t){return(k[t.type]||k.DEFAULT)(e,t)},S=function(e){var t=e.children,c=Object(r.useReducer)(A,null),n=Object(h.a)(c,2),s=n[0],a=n[1];return Object(u.jsx)(O.Provider,{value:{hide:function(){return a({type:y})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a({type:N,payload:{text:e,type:t}})},alert:s},children:t})},F=c(12),T=c.n(F),D=c(15),P=c(9),q=(s={},Object(U.a)(s,E,(function(e,t){var c=t.payload;return Object(P.a)(Object(P.a)({},e),{},{users:c,loading:!1})})),Object(U.a)(s,w,(function(e,t){var c=t.payload;return Object(P.a)(Object(P.a)({},e),{},{user:c,loading:!1})})),Object(U.a)(s,C,(function(e,t){var c=t.payload;return Object(P.a)(Object(P.a)({},e),{},{repos:c,loading:!1})})),Object(U.a)(s,L,(function(e,t){t.payload;return Object(P.a)(Object(P.a)({},e),{},{users:[],loading:!1})})),Object(U.a)(s,R,(function(e,t){t.payload;return Object(P.a)(Object(P.a)({},e),{},{loading:!0})})),Object(U.a)(s,"DEFAULT",(function(e){return e})),s),G=function(e,t){return(q[t.type]||q.DEFAULT)(e,t)},H=c(16),I=c.n(H),B=function(e){var t=e.children,c=Object(r.useReducer)(G,{user:{},users:[],repos:[],loading:!1}),n=Object(h.a)(c,2),s=n[0],a=n[1],i=function(e){return"".concat(e,"&client_id=").concat("d6fb6dc10525a8060057","client_secren=").concat("615d829b4783d038714f75041ba91df4f86b0978")},o=function(){var e=Object(D.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,I.a.get(i("https://api.github.com/search/users?q=".concat(t,"&")));case 3:c=e.sent,a({type:E,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(D.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,I.a.get(i("https://api.github.com/users/".concat(t,"?")));case 3:c=e.sent,a({type:w,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(D.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,I.a.get(i("https://api.github.com/users/".concat(t,"/repos?per_page=20")));case 3:c=e.sent,a({type:C,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return a({type:R})},d=s.user,O=s.users,m=s.repos,x=s.loading;return Object(u.jsx)(p.Provider,{value:{searchUsers:o,getUser:l,getRepos:j,clearUsers:function(){return a({type:L})},setLoading:b,user:d,users:O,repos:m,loading:x},children:t})};var J=function(){return Object(u.jsx)(B,{children:Object(u.jsx)(S,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(v,{alert:{}}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",exact:!0,component:x}),Object(u.jsx)(j.a,{path:"/about",component:_}),Object(u.jsx)(j.a,{path:"/profile/:name",component:g})]})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),W()}},[[62,1,2]]]);
//# sourceMappingURL=main.0362724b.chunk.js.map
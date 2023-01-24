(function(){"use strict";var t={1119:function(t,e,n){var s=n(144),o=n(1096),r=n(9203),i=n(3551),a=n(5234),u=n(2370),l=function(){var t=this,e=t._self._c;return e("div",{attrs:{dark:""}},[e(o.Z,[e(r.Z,{attrs:{app:"",color:"orange"}},[e("div",{staticClass:"d-flex align-center"},[e(u.qW,[t._v("Github Vuewer do Gelo")])],1),e(a.Z)],1),e(i.Z,[e("GithubVuewer",{attrs:{color:"black"}})],1)],1)],1)},c=[],h=n(6035),p=function(){var t=this,e=t._self._c;return e(h.Z,[e("GithubRepo",{on:{reposelected:t.onRepoSelected}}),e("h2",[t._v("Repositório")]),e("GithubContent",{attrs:{repo:t.repo}}),e("h2",[t._v("Issues")]),e("GithubIssues",{attrs:{repo:t.repo}})],1)},f=[],d=n(4177),v=n(4437),m=n(5294),g=n(6069),b=function(){var t=this,e=t._self._c;return e("div",[e(m.Z,{staticClass:"text-center"},[e(v.Z,{attrs:{cols:"6"}},[e(d.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(v.Z,{attrs:{cols:"6"}},[e(g.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositorio","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},_=[];function y(t,e){let n=null;function s(){n&&clearTimeout(n);const s=this,o=arguments;n=setTimeout((()=>{t.apply(s,o),n=null}),e)}return s}async function w(t){let e=!0,n=[],s=1;while(e){const o=await fetch(`${t}?page=${s}`),r=await o.json();r.length>0?(n=n.concat(r),s++):e=!1}return n}const Z={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,n=await fetch(e);return await n.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,n=await w(e);return n},async listaIssues(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/issues?page=${n}`,o=await fetch(s);return await o.json()},async listaContent(t,e){const n=`https://api.github.com/repos/${t}/${e}/contents`,s=await fetch(n);return await s.json()},async abreDir(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/contents/${n}`,o=await fetch(s);return await o.json()}};var C={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1}),methods:{procuraUsuariosGithub:y((async function(){this.userloading=!0;const t=await Z.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listaRepositorios(){this.repoloading=!0;const t=await Z.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&this.listaRepositorios()},repo(){this.$emit("reposelected",this.repo)}}},x=C,k=n(1001),j=(0,k.Z)(x,b,_,!1,null,null,null),$=j.exports,O=n(4202),P=n(6275),G=n(4397),S=function(){var t=this,e=t._self._c;return e("div",[e(m.Z,[e(v.Z,{attrs:{cols:"12"}},[e(G.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Title")]),e("th",{staticClass:"text-left"},[t._v("Number")])])]),e("tbody",t._l(t.issues,(function(n){return e("tr",{key:n.number},[e("td",[t._v(t._s(n.title))]),e("td",[t._v(t._s(n.number))])])})),0)]},proxy:!0}])})],1)],1),e(m.Z,[e(v.Z,{attrs:{cols:"12"}},[t.loading?e(P.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e(),t.temmais?e(O.Z,{attrs:{color:"primary"},on:{click:t.listaIssues}},[t._v("MAIS")]):t._e()],1)],1)],1)},I=[],A={props:["repo"],data:()=>({issues:[],loading:!1,temmais:!1,currentPage:1}),methods:{async listaIssues(){this.loading=!0;const t=await Z.listaIssues(this.repo.owner.login,this.repo.name,this.currentPage);this.issues=this.issues.concat(t),this.currentPage++,this.loading=!1,this.temmais=t.length>0}},watch:{repo(){this.issues=[],this.repo?(this.temmais=!1,this.currentPage=1,this.listaIssues()):(this.issues=[],this.temmais=!1,this.currentPage=1)}}},T=A,D=(0,k.Z)(T,S,I,!1,null,null,null),R=D.exports,M=function(){var t=this,e=t._self._c;return e("div",[e(m.Z,[e(v.Z,{attrs:{cols:"12"}},[t.repo?e("h2",[t._v(t._s(t.repo.name+"/"+t.contentAtual))]):t._e(),e(G.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Arquivos")])])]),e("tbody",t._l(t.contents,(function(n){return e("tr",{key:n.number},["dir"==n.type?e("td",[e("a",{on:{click:function(e){return t.abreDir(n)}}},[t._v(t._s(n.name)+" ")])]):e("td",[t._v(t._s(n.name))])])})),0)]},proxy:!0}])})],1)],1),e(m.Z,[e(v.Z,{attrs:{cols:"12"}},[t.loading?e(P.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e(),t.temmais?e(O.Z,{attrs:{color:"primary"},on:{click:t.listaContent}},[t._v("MAIS")]):t._e()],1)],1),t.novoContent.length>0?e(O.Z,{staticClass:"mb-5",on:{click:t.voltarDir}},[t._v(" Voltar ")]):t._e()],1)},V=[],q=(n(7658),{props:["repo"],data:()=>({contents:[],loading:!1,temmais:!1,currentPage:1,novoContent:[],contentAtual:""}),methods:{async listaContent(){this.loading=!0,this.contents=await Z.listaContent(this.repo.owner.login,this.repo.name),this.loading=!1},async abreDir(t){let e=t.path;this.loading=!0,this.contents=await Z.abreDir(this.repo.owner.login,this.repo.name,e),this.novoContent.push(e),this.contentAtual=e,this.loading=!1},async voltarDir(){this.loading=!0,this.novoContent.pop();let t=1==this.novoContent.length?this.novoContent[0]:this.novoContent[-1];void 0==t&&(t=""),this.contents=await Z.abreDir(this.repo.owner.login,this.repo.name,t),this.contentAtual=t,this.loading=!1}},watch:{repo(){this.novoContent=[],this.listaContent()}}}),E=q,U=(0,k.Z)(E,M,V,!1,null,null,null),F=U.exports,N={components:{GithubRepo:$,GithubIssues:R,GithubContent:F},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},W=N,z=(0,k.Z)(W,p,f,!1,null,null,null),B=z.exports,H={name:"App",components:{GithubVuewer:B},data:()=>({})},J=H,K=(0,k.Z)(J,l,c,!1,null,null,null),L=K.exports,Q=n(2250);s.ZP.use(Q.Z);var X=new Q.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:X,render:t=>t(L)}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,u=0;u<s.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(a=!1,r<i&&(i=r));if(a){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],a=s[1],u=s[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(e&&e(s);l<i.length;l++)r=i[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},s=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1119)}));s=n.O(s)})();
//# sourceMappingURL=app.5b2501b5.js.map
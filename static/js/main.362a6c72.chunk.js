(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},h=(n(13),n(14),n(2)),l=n(3),b=n(5),d=n(4),u=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?size=180x180&&set=set4 ")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchField;var t=e.SearchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},O=(n(15),function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooops.That is not good"}):this.props.children}}]),n}(c.Component),g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfields:t.target.value})},e.state={robots:[],searchfields:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfields,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(r.jsx)(f,{SearchChange:this.onSearchChange}),Object(r.jsx)(O,{children:Object(r.jsx)(p,{children:Object(r.jsx)(j,{robots:c})})})]}):Object(r.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.362a6c72.chunk.js.map
(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n.n(a),s=n(5),i=n(6),l=n(8),b=n(7),o=n(1),r=n.n(o),d=n(3),u=n.n(d),j=n(0),h=function(t){var e=t.allTabs,n=t.selectedTabId,a=t.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabs-titles",children:e.map((function(t){return Object(j.jsx)("button",{type:"button",className:u()("tab-title",{"tab-title__active":n===t.id}),onClick:function(){a(t.title)},children:t.title},t.title)}))}),Object(j.jsx)("div",{className:"tabs-components",children:e.map((function(t){return Object(j.jsx)("p",{className:u()("tabs-components__content",{active:n===t.id}),children:t.content},t.id)}))})]})},m=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:"Tab 1",allTabs:[].concat(m)},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.selectedTab,n=t.allTabs,a=n.find((function(t){return t.title===e}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Selected tab is\xa0",e]}),Object(j.jsx)(h,{allTabs:n,selectedTabId:a?a.id:void 0,onChange:this.onTabSelected})]})}}]),n}(r.a.Component),T=p;c.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6aeb6fd8.chunk.js.map
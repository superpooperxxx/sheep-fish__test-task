(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{145:function(e,t,r){},146:function(e,t,r){},148:function(e,t,r){},150:function(e,t,r){},151:function(e,t,r){},152:function(e,t,r){},153:function(e,t,r){},157:function(e,t,r){},158:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(30),o=r.n(c),s=r(49),i=r(72),l=(r(145),r(14)),u=(r(146),r(2)),d=function(){return Object(u.jsx)("div",{children:"NotFoundPage"})},h=r(6),m=(r(148),function(e){var t=e.children;return Object(u.jsx)("div",{className:"modal",children:Object(u.jsx)("div",{className:"container modal__container",children:t})})}),j=n.a.memo((function(e){var t=e.showForm;return Object(u.jsxs)("header",{className:"products-page__header",children:[Object(u.jsx)("h1",{className:"products-page__title",children:"Products"}),Object(u.jsx)("button",{type:"button",className:"products-page__new-product",onClick:function(){return t(!0)},children:"New Product"})]})})),b=r(113),p=r(10),f=r(78),O=Object(f.b)({name:"products",initialState:[],reducers:{addMultiple:function(e,t){e.push.apply(e,Object(p.a)(t.payload))},addOne:function(e,t){e.push(t.payload)},remove:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),_=O.reducer,x=O.actions,g=(r(150),n.a.memo((function(e){var t=e.title,r=e.errorMessage,a=e.touched,n=e.children;return Object(u.jsxs)("label",{className:"new-product-form__label",children:[Object(u.jsxs)("span",{className:"new-product-form__label-text",children:[t,r&&a&&Object(u.jsx)("span",{className:"new-product-form__error-message",children:r})]}),n]})}))),N=r(58),w=N.b().shape({title:N.c().matches(/^[A-Za-z]+$/,"Letters only").min(3,"Min 3 letters").max(30,"Max 30 letters").required("Required"),author:N.c().matches(/^[A-Za-z]+$/,"Letters only").min(3,"Min 3 letters").max(30,"Max 30 letters").required("Required"),year:N.a(),rating:N.a().min(1,"Required").max(5)}),v=n.a.memo((function(e){var t=e.errorMessage,r=e.touched,a=e.rating,n=e.onChange;return Object(u.jsxs)("div",{className:"new-product-form__label",children:[Object(u.jsxs)("span",{className:"new-product-form__label-text",children:["Rating",t&&r&&Object(u.jsx)("span",{className:"new-product-form__error-message",children:t})]}),Object(u.jsx)("div",{className:"new-product-form__stars new-product-form__stars--".concat(a),children:[1,2,3,4,5].map((function(e){return Object(u.jsx)("label",{className:"new-product-form__star",children:Object(u.jsx)("input",{className:"new-product-form__star-btn",type:"radio",name:"rating",value:e,onChange:n})},e)}))})]})})),y=function(e){var t=(new Date).getFullYear();return Array(e).fill(0).map((function(e,r){return t-r}))},C=n.a.memo((function(e){var t=e.errorMessage,r=e.touched,a=e.selectedYear,n=e.onChange;return Object(u.jsx)(g,{title:"Year",errorMessage:t,touched:r,children:Object(u.jsx)("select",{name:"year",className:"new-product-form__input new-product-form__years",value:a,onChange:n,children:y(15).map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})})}));function S(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(r.body=JSON.stringify(t),r.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch("https://dummyjson.com"+e,r).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var M=function(e){return S(e)},F=function(e,t){return S(e,"POST",t)},k=function(e){return S(e,"DELETE")},T=(r(151),r.p+"static/media/image__form-success.e39fa5f5.png"),P=function(e){var t=e.showForm;return Object(u.jsxs)("article",{className:"success-modal",children:[Object(u.jsx)("img",{className:"success-modal__img",src:T,alt:"showing that the form was submitted successfully"}),Object(u.jsx)("h3",{className:"success-modal__title",children:"The product was created!"}),Object(u.jsx)("button",{type:"button",className:"btn",onClick:function(){return t(!1)},children:"Back to products"})]})},q=function(e){var t=e.showForm,r=Object(s.b)(),n=Object(a.useState)(!1),c=Object(h.a)(n,2),o=c[0],i=c[1],d=Object(a.useState)(!1),m=Object(h.a)(d,2),j=m[0],p=m[1],f=Object(l.m)(),O=Object(b.a)({initialValues:{title:"",author:"",year:(new Date).getFullYear(),rating:0},validationSchema:w,onSubmit:function(e){p(!0),function(e){return F("/products/add",e)}({title:e.title,rating:+e.rating}).then((function(e){r(x.addOne(e)),i(!0)})).catch((function(){f("/not-found")})).finally((function(){p(!1)}))}}),_=O.values,N=O.errors,y=O.touched,S=O.handleChange,M=O.handleSubmit,k=O.handleBlur;return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(P,{showForm:t}):Object(u.jsxs)("form",{className:"new-product-form page__new-product-form",autoComplete:"off",onSubmit:M,children:[j&&Object(u.jsx)("div",{className:"new-product-form__loader","aria-label":"sending data",children:" "}),Object(u.jsxs)("div",{className:"new-product-form__header",children:[Object(u.jsx)("h2",{className:"new-product-form__title",children:"Add New Product"}),Object(u.jsx)("input",{type:"button",className:"new-product-form__close","aria-label":"click to close the form",onClick:function(){return t(!1)}})]}),Object(u.jsx)(g,{title:"Title",errorMessage:N.title,touched:y.title,children:Object(u.jsx)("input",{name:"title",type:"text",className:"new-product-form__input",placeholder:"Title",value:_.title,onChange:S,onBlur:k})}),Object(u.jsx)(g,{title:"Author",errorMessage:N.author,touched:y.author,children:Object(u.jsx)("input",{name:"author",type:"text",className:"new-product-form__input",placeholder:"Author",value:_.author,onChange:S,onBlur:k})}),Object(u.jsxs)("div",{className:"new-product-form__container",children:[Object(u.jsx)(C,{errorMessage:N.year,touched:y.year,selectedYear:_.year,onChange:S}),Object(u.jsx)(v,{errorMessage:N.rating,touched:y.rating,rating:_.rating,onChange:S})]}),Object(u.jsx)("button",{type:"submit",className:"btn new-product-form__submit",children:"Add New Product"})]})})},A=n.a.memo((function(e){var t=e.query,r=e.setQuery;return Object(u.jsx)("form",{className:"products-page__form",children:Object(u.jsx)("label",{className:"products-page__search-label",children:Object(u.jsx)("div",{className:"products-page__search-container",children:Object(u.jsx)("input",{type:"text",className:"products-page__search",placeholder:"Search for a Product",value:t,onChange:function(e){return r(e.target.value)}})})})})})),E=r(94),L=r.n(E),D=r(209),R=r(210),B=s.c,Y=(r(152),r(153),function(){return Object(u.jsx)("div",{className:"loader"})}),J=n.a.memo((function(e){var t=e.query,r=Object(a.useState)(!0),n=Object(h.a)(r,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(h.a)(i,2),d=l[0],m=l[1],j=Object(a.useState)(null),b=Object(h.a)(j,2),p=b[0],f=b[1],O=Object(a.useState)(null),_=Object(h.a)(O,2),g=_[0],N=_[1],w=Object(a.useState)(0),v=Object(h.a)(w,2),y=v[0],C=v[1],S=Object(s.b)(),F=B((function(e){return e.products})),T=function(){(function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return M("/products?limit=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,"&skip=").concat(e))})(arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0).then((function(e){S(x.addMultiple(e.products)),N((function(t){return Number(t)+e.limit})),C(e.total)})).catch((function(){m("Oooops, something went wrong...")})).finally((function(){o(!1)}))};Object(a.useEffect)((function(){T()}),[]);var P=function(e){f(e),function(e){return k("/products/".concat(e))}(e).then((function(e){S(x.remove(e.id))})).catch((function(){alert("Something went wrong. Try to delete again !")})).finally((function(){f(null)}))},q=Object(a.useMemo)((function(){return[{field:"id",headerName:"ID",width:85,headerClassName:"products-table__table-head"},{field:"title",headerName:"Title",width:150,headerClassName:"products-table__table-head"},{field:"description",headerName:"Description",width:350,headerClassName:"products-table__table-head"},{field:"price",headerName:"Price",width:105,headerClassName:"products-table__table-head"},{field:"thumbnail",headerName:"Photo",width:80,headerClassName:"products-table__table-head",renderCell:function(e){return Object(u.jsx)(R.a,{src:e.row.thumbnail})},sortable:!1,filterable:!1},{field:"rating",headerName:"Rating",width:110,headerClassName:"products-table__table-head"},{field:"stock",headerName:"Stock",width:110,headerClassName:"products-table__table-head"},{field:"category",headerName:"Category",width:130,headerClassName:"products-table__table-head"},{field:"remove",headerName:"",width:80,headerClassName:"products-table__table-head",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return Object(u.jsx)("input",{type:"button",className:L()("products-table__delete",{"products-table__delete--active":e.row.id===p}),onClick:function(){return P(e.row.id)}})}}]}),[p]),A=Object(a.useMemo)((function(){return F.filter((function(e){var r=e.title.toLowerCase(),a=e.category.toLowerCase(),n=t.toLowerCase();return r.includes(n)||a.includes(n)}))}),[t,g]);return Object(u.jsxs)(u.Fragment,{children:[d&&Object(u.jsx)("div",{className:"products-table__error-message",children:d}),g&&!d&&Object(u.jsx)("div",{className:"products-table",children:Object(u.jsx)(D.a,{autoHeight:!0,sx:{color:"#fff",border:"none",".MuiDataGrid-columnSeparator":{display:"none"}},rows:A,columns:q,hideFooterPagination:!0,hideFooterSelectedRowCount:!0})}),c&&Object(u.jsx)(Y,{}),g!==y&&Object(u.jsx)("button",{type:"button",className:L()("btn products-table__load-more",{"products-table__load-more--loading":c}),onClick:function(){return o(!0),void T(30,Number(g))},children:d?"Try again":"Load more"})]})})),z=(r(157),function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(""),o=Object(h.a)(c,2),s=o[0],i=o[1];return Object(u.jsxs)(u.Fragment,{children:[r&&Object(u.jsx)(m,{children:Object(u.jsx)(q,{showForm:n})}),Object(u.jsx)("div",{className:"products-page",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{showForm:n}),Object(u.jsxs)("main",{className:"products-page__main",children:[Object(u.jsx)(A,{query:s,setQuery:i}),Object(u.jsx)(J,{query:s})]})]})})]})}),G=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(z,{})}),Object(u.jsx)(l.a,{path:"*",element:Object(u.jsx)(d,{})})]})})},I=Object(f.a)({reducer:{products:_}});o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(s.a,{store:I,children:Object(u.jsx)(G,{})})})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.ca22551c.chunk.js.map
(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{170:function(e,t,n){e.exports=n(380)},175:function(e,t,n){},185:function(e,t,n){},194:function(e,t){},196:function(e,t){},214:function(e,t){},216:function(e,t){},227:function(e,t){},229:function(e,t){},254:function(e,t){},256:function(e,t){},257:function(e,t){},263:function(e,t){},265:function(e,t){},283:function(e,t){},286:function(e,t){},302:function(e,t){},305:function(e,t){},380:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(65),o=n.n(c),i=(n(175),n(15)),l=n(11),u=n(19),s=n(169),m=n(17),d=n(6);function p(e,t,n){return new Promise((function(a,r){var c,o,i,l=window.indexedDB.open("shop-shop",1);l.onupgradeneeded=function(e){var t=l.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},l.onerror=function(e){console.log("There was an error")},l.onsuccess=function(r){switch(c=l.result,o=c.transaction(e,"readwrite"),i=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":i.put(n),a(n);break;case"get":var u=i.getAll();u.onsuccess=function(){a(u.result)};break;case"delete":i.delete(n._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var f=n(13);var E=function(e){var t=Object(f.c)((function(e){return e})),n=Object(f.b)(),a=t.cart,c=e.image,o=e.name,l=e._id,u=e.price,s=e.quantity;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(l)},r.a.createElement("img",{alt:o,src:"/images/".concat(c)}),r.a.createElement("p",null,o)),r.a.createElement("div",null,r.a.createElement("div",null,s," ",function(e,t){return 1===t?e:e+"s"}("item",s)," in stock"),r.a.createElement("span",null,"$",u)),r.a.createElement("button",{onClick:function(){var t=a.find((function(e){return e._id===l}));t?(n({type:"UPDATE_CART_QUANTITY",_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),p("cart","put",Object(d.a)(Object(d.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(n({type:"ADD_TO_CART",product:Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:1})}),p("cart","put",Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},b=n(33),g=n(27),h=n.n(g);function v(){var e=Object(b.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(b.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]);return O=function(){return e},e}function y(){var e=Object(b.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"]);return y=function(){return e},e}function j(){var e=Object(b.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(b.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]);return w=function(){return e},e}var _=h()(w()),T=(h()(j()),h()(y())),k=h()(O()),N=h()(v()),C=n(70),A=n.n(C);var x=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),n=e.currentCategory,c=Object(m.c)(_),o=c.loading,i=c.data,l=(null===i||void 0===i?void 0:i.products)||[];return Object(a.useEffect)((function(){i?(t({type:"UPDATE_PRODUCTS",products:i.products}),i.products.forEach((function(e){p("products","put",e)}))):o||p("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[i,o,t]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),l.length?r.a.createElement("div",{className:"flex-row"},(n?e.products.filter((function(e){return e.category._id===n})):e.products).map((function(e){return r.a.createElement(E,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:A.a,alt:"loading"}):null)};var R=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),n=e.categories,c=Object(m.c)(T),o=c.loading,i=c.data;return Object(a.useEffect)((function(){i?(t({type:"UPDATE_CATEGORIES",categories:i.categories}),i.categories.forEach((function(e){p("categories","put",e)}))):o||p("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[i,o,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),n.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var n;n=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:n})}},e.name)})))},D=n(28),S=n.n(D),P=n(41),U=n(40),I=n(26),Q=function(e){var t=e.item,n=(Object(f.c)((function(e){return e})),Object(f.b)());return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),p("cart","delete",Object(d.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),p("cart","put",Object(d.a)(Object(d.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),p("cart","delete",Object(d.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},$=n(167),F=n(168),L=n(94),q=n.n(L),G=new(function(){function e(){Object($.a)(this,e)}return Object(F.a)(e,[{key:"getProfile",value:function(){return q()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return q()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),M=(n(185),n(186)("sk_test_4eC39HqLyjWDarjtT1zdp7dc")),W=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),n=Object(m.a)(N),c=Object(I.a)(n,2),o=c[0],i=c[1].data;function l(){t({type:"TOGGLE_CART"})}return Object(a.useEffect)((function(){function n(){return(n=Object(U.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:n=e.sent,t({type:"ADD_MULTIPLE_TO_CART",products:Object(P.a)(n)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.cart.length||function(){n.apply(this,arguments)}()}),[e.cart.length,t]),Object(a.useEffect)((function(){i&&M.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),e.cartOpen?(console.log(e),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:l},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),e.cart.length?r.a.createElement("div",null,e.cart.map((function(e){return r.a.createElement(Q,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var t=0;return e.cart.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()),G.loggedIn()?r.a.createElement("button",{onclick:function(){var t=[];e.cart.forEach((function(e){for(var n=0;n<e.purchaseQuantity;n++)t.push(e._id)})),o({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(Please log in to checkout)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!"))):r.a.createElement("div",{className:"cart-closed",onClick:l},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},Y=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(x,null),r.a.createElement(W,null))};var B=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),n=Object(l.f)().id,c=Object(a.useState)({}),o=Object(I.a)(c,2),u=o[0],s=o[1],E=Object(m.c)(_),b=E.loading,g=E.data,h=e.products,v=e.cart;return Object(a.useEffect)((function(){h.length?s(h.find((function(e){return e._id===n}))):g?(t({type:"UPDATE_PRODUCTS",products:g.products}),g.products.forEach((function(e){p("products","put",e)}))):b||p("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[h,g,b,t,n]),r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,u.name),r.a.createElement("p",null,u.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",u.price," ",r.a.createElement("button",{onClick:function(){var e=v.find((function(e){return e._id===n}));e?(t({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),p("cart","put",Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(d.a)(Object(d.a)({},u),{},{purchaseQuantity:1})}),p("cart","put",Object(d.a)(Object(d.a)({},u),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!v.find((function(e){return e._id===u._id})),onClick:function(){t({type:"REMOVE_FROM_CART",_id:u._id}),p("cart","delete",Object(d.a)({},u))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(u.image),alt:u.name})):null,b?r.a.createElement("img",{src:A.a,alt:"loading"}):null,r.a.createElement(W,null))};var H=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},V=function(){return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},z=n(50);function J(){var e=Object(b.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return J=function(){return e},e}function K(){var e=Object(b.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]);return K=function(){return e},e}function X(){var e=Object(b.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return X=function(){return e},e}var Z=h()(X()),ee=h()(K()),te=h()(J());var ne=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(I.a)(t,2),c=n[0],o=n[1],l=Object(m.b)(Z),u=Object(I.a)(l,2),s=u[0],p=u[1].error,f=function(){var e=Object(U.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:n=e.sent,a=n.data.login.token,G.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,n=t.name,a=t.value;o(Object(d.a)(Object(d.a)({},c),{},Object(z.a)({},n,a)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:f},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ae=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(I.a)(t,2),c=n[0],o=n[1],l=Object(m.b)(te),u=Object(I.a)(l,1)[0],s=function(){var e=Object(U.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:n=e.sent,a=n.data.addUser.token,G.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.name,a=t.value;o(Object(d.a)(Object(d.a)({},c),{},Object(z.a)({},n,a)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var re=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,G.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return G.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var ce=function(){var e,t=Object(m.c)(k).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var n=e._id,a=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:c,src:"/images/".concat(a)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))};var oe=function(){var e=Object(m.b)(ee),t=Object(I.a)(e,1)[0];return Object(a.useEffect)((function(){function e(){return(e=Object(U.a)(S.a.mark((function e(){var n,a,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(n=e.sent,!(a=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:a}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){p("cart","delete",e)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),setTimeout((function(){alert("")}),3e3),window.location.assign("/"),r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the homepage")))},ie=n(67),le={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{products:Object(P.a)(t.products)});case"UPDATE_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:Object(P.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(P.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:[].concat(Object(P.a)(e.cart),Object(P.a)(t.products))});case"REMOVE_FROM_CART":var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(d.a)(Object(d.a)({},e),{},{cartOpen:n.length>0,cart:n});case"UPDATE_CART_QUANTITY":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}},se=Object(ie.b)(ue),me=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var de=function(){return r.a.createElement(u.a,{client:me},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{store:se},r.a.createElement(re,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Y}),r.a.createElement(l.a,{exact:!0,path:"/login",component:ne}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:ae}),r.a.createElement(l.a,{exact:!0,path:"/orderHistory",component:ce}),r.a.createElement(l.a,{exact:!0,path:"/products/:id",component:B}),r.a.createElement(l.a,{exact:!0,path:"/success",component:oe}),r.a.createElement(l.a,{component:V}))))))},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()},70:function(e,t,n){e.exports=n.p+"static/media/spinner.ab497855.gif"}},[[170,1,2]]]);
//# sourceMappingURL=main.7c63a7e8.chunk.js.map
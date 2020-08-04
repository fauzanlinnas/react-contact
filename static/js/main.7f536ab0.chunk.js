(this["webpackJsonpreact-contacts"]=this["webpackJsonpreact-contacts"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),u=(a(16),a(3)),o=a.n(u),s=a(6),m=a(10),i=a(1),p=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){var a=t.id,n=t.firstName,c=t.lastName,r=t.age,u=t.photo;return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("img",{src:u,alt:"profpic",style:{maxHeight:"100px"}})),l.a.createElement("td",null,n),l.a.createElement("td",null,c),l.a.createElement("td",null,r),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.deleteUser(a)}},"Delete"),l.a.createElement("button",{onClick:function(){return e.editUser(a,t)}},"Edit")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},"No users found"))))},h=a(2),f=a(4),d=function(e){var t=Object(n.useState)({id:null,photo:"",firstName:"",lastName:"",age:""}),a=Object(i.a)(t,2),c=a[0],r=a[1],u=function(e){var t=e.target,a=t.name,n=t.value;r(Object(f.a)(Object(f.a)({},c),{},Object(h.a)({},a,n)))};return l.a.createElement("form",null,l.a.createElement("label",null,"Photo URL"),l.a.createElement("input",{className:"u-full-width",type:"text",value:c.photo,name:"photo",onChange:u}),l.a.createElement("label",null,"First Name"),l.a.createElement("input",{className:"u-full-width",type:"text",value:c.firstName,name:"firstName",onChange:u}),l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{className:"u-full-width",type:"text",value:c.lastName,name:"lastName",onChange:u}),l.a.createElement("label",null,"Age"),l.a.createElement("input",{className:"u-full-width",type:"number",value:c.age,name:"age",onChange:u}),l.a.createElement("button",{className:"button-primary",type:"submit",onClick:function(t){t.preventDefault(),c.photo&&c.firstName&&c.lastName&&c.age&&u(t,e.addUser(c))}},"Add user"))},E=function(e){Object(n.useEffect)((function(){r(e.currentUser)}),[e]);var t=Object(n.useState)(e.currentUser),a=Object(i.a)(t,2),c=a[0],r=a[1],u=function(e){var t=e.target,a=t.name,n=t.value;r(Object(f.a)(Object(f.a)({},c),{},Object(h.a)({},a,n)))};return l.a.createElement("form",null,l.a.createElement("label",null,"Photo URL"),l.a.createElement("input",{className:"u-full-width",type:"text",value:c.photo,name:"photo",onChange:u}),l.a.createElement("label",null,"First Name"),l.a.createElement("input",{className:"u-full-width",type:"text",value:c.firstName,name:"firstName",onChange:u}),l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{className:"u-full-width",type:"text",value:c.lastName,name:"lastName",onChange:u}),l.a.createElement("label",null,"Age"),l.a.createElement("input",{className:"u-full-width",type:"number",value:c.age,name:"age",onChange:u}),l.a.createElement("button",{className:"button-primary",type:"submit",onClick:function(t){t.preventDefault(),c.photo&&c.firstName&&c.lastName&&c.age&&e.updateUser(c)}},"Edit user"),l.a.createElement("button",{type:"submit",onClick:function(){return e.setEditing(!1)}},"Cancel"))},g=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],p=u[1];return Object(n.useEffect)((function(){e&&function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,fetch("https://simple-contact-crud.herokuapp.com/contact");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(a.data,p(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn("Something went wrong fetching the API...",e.t0),p(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()(e)}),[e]),[l,m]},b=function(){var e=g(3),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),u=Object(i.a)(r,2),h=u[0],f=u[1];Object(n.useEffect)((function(){if(a){var e=a.map((function(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName,age:e.age,photo:e.photo}}));f(e)}}),[a]);var b=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(h.filter((function(e){return e.id!==t})));try{fetch("https://simple-contact-crud.herokuapp.com/contact/"+t,{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}})}catch(a){console.warn("Something went wrong fetching the API...",a),alert("Something went wrong fetching the API...",a)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(n.useState)(!1),v=Object(i.a)(N,2),j=v[0],w=v[1],O={id:null,name:"",username:""},y=Object(n.useState)(O),C=Object(i.a)(y,2),S=C[0],A=C[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Contacts"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"five columns"},j?l.a.createElement("div",null,l.a.createElement("h2",null,"Edit contact"),l.a.createElement(E,{currentUser:S,setEditing:w,updateUser:function(e){f(h.map((function(t){return t.id===S.id?e:t}))),A(O),w(!1);try{fetch("https://simple-contact-crud.herokuapp.com/contact/"+e.id,{method:"PUT",header:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:e.firstName,lastName:e.lastName,age:e.age,photo:e.photo})})}catch(t){console.warn("Something went wrong fetching the API...",t),alert("Something went wrong fetching the API...",t)}}})):l.a.createElement("div",null,l.a.createElement("h2",null,"Add contact"),l.a.createElement(d,{addUser:function(e){e.age=parseInt(e.age),f([].concat(Object(m.a)(h),[e]));try{fetch("https://simple-contact-crud.herokuapp.com/contact/",{method:"POST",header:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:e.firstName,lastName:e.lastName,age:e.age,photo:e.photo})})}catch(t){console.warn("Something went wrong fetching the API...",t),alert("Something went wrong fetching the API...",t)}}}))),c||!h?l.a.createElement("p",null,"Loading..."):l.a.createElement("div",{className:"seven columns"},l.a.createElement("h2",null,"View contacts"),l.a.createElement(p,{users:h,deleteUser:b,editUser:function(e,t){w(!0),A(t)}}))))};r.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7f536ab0.chunk.js.map
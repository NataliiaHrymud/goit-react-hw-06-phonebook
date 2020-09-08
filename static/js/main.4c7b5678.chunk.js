(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={enter:"slideFromLeft_enter__21Onq",appear:"slideFromLeft_appear__3o3vb",enterActive:"slideFromLeft_enterActive__30QkW",appearActive:"slideFromLeft_appearActive__1m6pz",appearDone:"slideFromLeft_appearDone__LM5l2",exit:"slideFromLeft_exit__2gKWv",exitActive:"slideFromLeft_exitActive__3-VhI"}},16:function(e,t,n){e.exports={deleteBtn:"ContactListItem_deleteBtn__1Wwx4",contactElement:"ContactListItem_contactElement__1_Kuc",contactContainer:"ContactListItem_contactContainer__3NZ2i"}},25:function(e,t,n){e.exports={form:"ContactForm_form__3HAFE"}},26:function(e,t,n){e.exports={notification:"Notification_notification__1JtK7"}},27:function(e,t,n){e.exports={title:"PhoneBook_title__25YrY"}},28:function(e,t,n){e.exports={enter:"slideFromRight_enter__8bgKM",enterActive:"slideFromRight_enterActive__3ilW-",exit:"slideFromRight_exit__KNvlp",exitActive:"slideFromRight_exitActive__vj7DP"}},29:function(e,t,n){e.exports={enter:"contacts_enter__33vwp",enterActive:"contacts_enterActive__21HIT",exit:"contacts_exit__3sEH0",exitActive:"contacts_exitActive__37nFk"}},33:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(6),i=n.n(o),u=n(7),l=n(5),m=n(12),s=n(30),f=n(3),_="FETCH_CONTACTS",b="ADD_CONTACT",p="DELETE_CONTACT",v="FILTER_CONTACTS",d=Object(l.b)(_),E=Object(l.b)(b),O=Object(l.b)(p),C=Object(l.b)(v),h=Object(l.c)([],(a={},Object(m.a)(a,d,(function(e,t){return t.payload})),Object(m.a)(a,E,(function(e,t){return[].concat(Object(s.a)(e),[t.payload])})),Object(m.a)(a,O,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),j=Object(l.c)("",Object(m.a)({},C,(function(e,t){return t.payload}))),x=Object(f.c)({contacts:h,filter:j}),g=Object(l.a)({reducer:x}),A=n(10),F=n(24),N=n(48);var L=n(25),y=n.n(L),S=function(e){var t=e.onFormSubmit,n=Object(c.useState)(""),a=Object(A.a)(n,2),o=a[0],i=a[1],u=Object(c.useState)(""),l=Object(A.a)(u,2),m=l[0],s=l[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&m&&(t({name:o,number:m}),i(""),s(""))},className:"".concat(y.a.form," container shadow")},r.a.createElement("label",{htmlFor:"name"},"Name",r.a.createElement("input",{type:"text",value:o,name:"name",required:!0,onChange:function(e){var t=e.target;return i(t.value)}})),r.a.createElement("label",{htmlFor:"number"},"Number",r.a.createElement("input",{name:"number",required:!0,value:m,onChange:function(e){var t=e.target;return s(t.value)}})),r.a.createElement("button",{type:"submit"},"Add contact"))},T=n(4),w=function(e){return e.contacts},D=function(e){return e.filter},k=Object(T.a)([w,D],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),I=n(49),B=n(16),J=n.n(B),K=function(e){var t=e.contact,n=e.onDeleteContact;return r.a.createElement("div",{className:"".concat(J.a.contactElement," container shadow")},r.a.createElement("div",{className:J.a.contactContainer},r.a.createElement("span",null,t.name),r.a.createElement("span",null,t.number)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:J.a.deleteBtn,type:"button"},"\u2715"))},R=n(15),H=n.n(R),W=function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement(I.a,{component:"ul"},t.map((function(e){return r.a.createElement(N.a,{key:e.id,timeout:200,unmountOnExit:!0,classNames:H.a},r.a.createElement("li",null,r.a.createElement(K,{contact:e,onDeleteContact:n})))})))},q=Object(u.b)((function(e){return{contacts:k(e)}}),(function(e){return{onDeleteContact:function(t){return e(O(t))}}}))(W),P=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",{className:"container shadow"},r.a.createElement("p",null,"Find contacts by name:"),r.a.createElement("input",{name:"filter",value:t,onChange:n}))},M=Object(u.b)((function(e){return{value:e.filter}}),(function(e){return{onChangeFilter:function(t){return e(C(t.target.value))}}}))(P),Y=n(26),z=n.n(Y),Q=function(e){var t=e.message;return r.a.createElement("div",{className:z.a.notification},t)},V=n(27),Z=n.n(V),G=n(28),U=n.n(G),X=n(29),$=n.n(X);n(45);var ee=function(e){var t=e.contacts,n=e.filter,a=e.onAddContact,o=e.fetchContacts,i=Object(c.useState)(""),u=Object(A.a)(i,2),l=u[0],m=u[1],s=Object(c.useState)(!1),f=Object(A.a)(s,2),_=f[0],b=f[1];return Object(c.useEffect)((function(){var e=function(){try{return JSON.parse(localStorage.getItem("contacts"))}catch(e){return}}();e&&o(e)}),[o]),Object(c.useEffect)((function(){!function(e){localStorage.setItem("contacts",JSON.stringify(e))}(t)}),[t]),r.a.createElement("div",{className:"container"},r.a.createElement(N.a,{in:_,timeout:200,classNames:U.a,unmountOnExit:!0},r.a.createElement(Q,{message:l})),r.a.createElement(N.a,{in:!0,appear:!0,timeout:500,classNames:H.a},r.a.createElement("h1",{className:Z.a.title},"Phonebook")),r.a.createElement(S,{onFormSubmit:function(e){var n={id:Object(F.v4)(),name:e.name,number:e.number};if(t.find((function(e){return e.name===n.name})))return m("Contact already exists!"),b(!0),void setTimeout((function(){b(!1)}),2e3);a(n)}}),r.a.createElement(N.a,{in:t.length>1||n.length>0,timeout:200,classNames:$.a,unmountOnExit:!0},r.a.createElement(M,null)),r.a.createElement(q,null))},te=Object(u.b)((function(e){return{contacts:w(e),filter:D(e)}}),(function(e){return{fetchContacts:function(t){return e(d(t))},onAddContact:function(t){return e(E(t))}}}))(ee);n(46);i.a.render(r.a.createElement(u.a,{store:g},r.a.createElement(te,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4c7b5678.chunk.js.map
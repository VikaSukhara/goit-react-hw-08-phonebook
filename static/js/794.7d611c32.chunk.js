"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[794],{8794:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,o,i,a,s,c,d,l,u,p=r(9434),x=r(2791),m=r(5705),b=r(6727),h=r(168),f=r(5867),g=(0,f.ZP)(m.l0)(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 30px;\n  border: 1px solid black;\n  width: 300px;\n"]))),j=(0,f.ZP)(m.gN)(o||(o=(0,h.Z)(["\n  width: 150px;\n  margin-top: 5px;\n  border-radius: 7px;\n  border: 1px solid black;\n  padding: 3px 3px;\n"]))),v=(0,f.ZP)(m.Bc)(i||(i=(0,h.Z)(["\n  color: red;\n  font-size: 15px;\n"]))),k=f.ZP.button(a||(a=(0,h.Z)(["\n  width: 100px;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-top: 15px;\n  &:hover,\n  &:focus {\n    background-color: black;\n    color: white;\n  }\n"]))),y=f.ZP.label(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-bottom: 5px;\n"]))),w=r(4937),Z=r(6916),C=function(n){return n.contactsStore.items},z=(0,Z.P1)([C,function(n){return n.filterStore}],(function(n,e){return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))})),P=r(184),S=b.Ry().shape({name:b.Z_().min(3,"Too Short!").max(30,"Too Long!").required("Required"),number:b.Z_().min(7,"Must be min 7 numbers!").max(15,"Must be max 15 numbers!!").required("Required")}),L=function(){var n=(0,p.I0)(),e=(0,p.v9)(C);return(0,P.jsx)("div",{children:(0,P.jsx)(m.J9,{initialValues:{name:"",number:""},validationSchema:S,onSubmit:function(r,t){!function(r){var t=r.name,o=r.number;if(e.find((function(n){return n.name===t})))alert("".concat(t," is alredy in contacts"));else{var i={name:t,number:o};n((0,w.uK)(i))}}(r),t.resetForm()},children:(0,P.jsxs)(g,{children:[(0,P.jsxs)(y,{children:["Name",(0,P.jsx)(j,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,P.jsx)(v,{name:"name",component:"div"})]}),(0,P.jsxs)(y,{children:["Number",(0,P.jsx)(j,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,P.jsx)(v,{name:"number",component:"div"})]}),(0,P.jsx)(k,{type:"submit",children:"Add contact"})]})})})},q=f.zo.ol(c||(c=(0,h.Z)(["\n  margin-top: 15px;\n  padding-left: 20px;\n"]))),_=f.zo.li(d||(d=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 5px;\n"]))),F=f.zo.p(l||(l=(0,h.Z)(["\n  margin: 0;\n  font-size: 18px;\n"]))),I=f.zo.button(u||(u=(0,h.Z)(["\n  margin-left: 10px;\n  width: 70px;\n  height: 25px;\n  border: 1px solid black;\n  border-radius: 7px;\n  background-color: white;\n  cursor: pointer;\n\n\n  /* display: flex;\n  justify-content: space-between;\n   */\n\n  &:hover,\n  &:focus {\n    background-color: black;\n    color: white;\n  }\n"]))),N=function(){var n=(0,p.I0)(),e=(0,p.v9)(z);return(0,P.jsx)(q,{children:e.map((function(e){return console.log(e),(0,P.jsxs)(_,{children:[(0,P.jsxs)(F,{children:[e.name," : ",e.number]}),(0,P.jsx)(I,{type:"button",onClick:function(){return n((0,w.GK)(e.id))},children:"Delete"})]},e.id)}))})},R=r(4302),A=function(){var n=(0,p.I0)();return(0,P.jsxs)("div",{children:[(0,P.jsx)("p",{style:{fontSize:"18px"},children:"Find contact by name"}),(0,P.jsx)("input",{type:"text",onChange:function(e){var r=e.target.value;n((0,R.h)(r))},style:{border:"1px solid black",padding:"3px 3px",borderRadius:"7px"}})]})},M=r(8881),T=function(){return(0,P.jsx)("div",{style:{display:"flex",justifyContent:"left",marginTop:"10px",marginLeft:"20px"},children:(0,P.jsx)(M.s5,{strokeColor:"blue",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})},B=function(){var n=(0,p.I0)();(0,x.useEffect)((function(){n((0,w.yF)())}),[n]);var e=(0,p.v9)((function(n){return n.contactsStore.isLoading})),r=(0,p.v9)((function(n){return n.contactsStore.error}));return(0,P.jsxs)("div",{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(L,{}),(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(A,{}),e&&!r&&(0,P.jsx)(T,{}),(0,P.jsx)(N,{})]})}}}]);
//# sourceMappingURL=794.7d611c32.chunk.js.map
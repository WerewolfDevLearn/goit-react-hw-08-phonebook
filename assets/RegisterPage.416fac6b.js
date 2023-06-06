import{F as u,a as p,C as e,b as r,E as t,c as h,d as i}from"./ContactForm.module.1302bfbe.js";import{u as b,a as F,b as f,r as N,c as g,j as a,F as l,d as s,f as w}from"./index.41d9c8d8.js";const S={name:"",email:"",password:""},x=h().shape({name:i().required(),email:i().email().required(),password:i().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")});function v(){const n=b(),{user:m}=F(),o=f();return N.exports.useEffect(()=>{m.profile.name&&o(g.contacts)},[o,m.profile.name]),a(l,{children:a(u,{initialValues:S,onSubmit:(c,{resetForm:d})=>{n(w(c)),d()},validationSchema:x,children:s(p,{className:e.ContactForm,children:[s("label",{className:e.label,htmlFor:"email",children:["Name",a(r,{type:"text",name:"name",className:e.input}),a(t,{name:"name"})]}),s("label",{className:e.label,htmlFor:"email",children:["Email",a(r,{type:"email",name:"email",className:e.input}),a(t,{name:"email"})]}),s("label",{className:e.label,htmlFor:"password",children:["Password",a(r,{type:"password",name:"password",className:e.input}),a(t,{name:"password"})]}),a("button",{type:"submit",className:e.buttonSubmit,children:"Register"})]})})})}function j(){return a(l,{children:a(v,{})})}export{j as default};

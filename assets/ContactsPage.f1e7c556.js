import{F as g,a as _,C as r,b as d,E as h,c as v,d as b}from"./ContactForm.module.caf0d48c.js";import{d as x,j as e,a as c,r as f,R as k,e as M,F,f as E,L as y,g as L,i as P,C as $,u as w,k as I,l as O}from"./index.17403dbb.js";const R={name:"",number:""},D=/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,q=v().shape({name:b().required(),number:b().matches(D,"Phone number is not valid").required()});function B({visibleContacts:n}){const[s]=x();return e(g,{initialValues:R,onSubmit:(t,{resetForm:i})=>{if(n.some(l=>l.name.toLocaleLowerCase()===t.name.toLocaleLowerCase())){alert(`${t.name} is already in Contacts`);return}s(t),i()},validationSchema:q,children:c(_,{className:r.ContactForm,children:[c("label",{className:r.label,htmlFor:"name",children:["Name",e(d,{type:"text",name:"name",className:r.input}),e(h,{name:"name"})]}),c("label",{className:r.label,htmlFor:"number",children:["Phone Number",e(d,{type:"text",name:"number",className:r.input}),e(h,{name:"number"})]}),e("button",{type:"submit",className:r.buttonSubmit,children:"Add Contact"})]})})}const U="_container_h6zv8_1",V="_contactInfo_h6zv8_31",j="_action_h6zv8_41";var u={container:U,contactInfo:V,action:j};const z="_Overlay_1cath_1",T="_Modal_1cath_27";var N={Overlay:z,Modal:T};function A({isOpen:n,onCloseModal:s,children:a}){const t=document.getElementById("modal"),i=f.exports.useRef(null),l=o=>{console.log(o),o.code==="Escape"&&s()},m=o=>{o.target===o.currentTarget&&s()};return f.exports.useEffect(()=>{var o;(o=i.current)==null||o.focus()},[]),n?k.createPortal(e("div",{className:N.Overlay,onClick:m,onKeyDown:l,role:"button",tabIndex:0,ref:i,children:e("div",{className:N.Modal,children:a})}),t):null}const G=/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,H=v().shape({name:b().required(),number:b().matches(G,"Phone number is not valid").required()});function K({contact:n,closeModal:s}){const a={name:n.name,number:n.number},[t]=M();return e(g,{initialValues:a,onSubmit:l=>{const m={...l,id:n.id};t(m),s()},validationSchema:H,children:c(_,{className:r.UpdateForm,children:[c("label",{className:r.label,htmlFor:"name",children:["Name",e(d,{type:"text",name:"name",className:r.input}),e(h,{name:"name"})]}),c("label",{className:r.label,htmlFor:"number",children:["Phone Number",e(d,{type:"text",name:"number",className:r.input}),e(h,{name:"number"})]}),e("button",{type:"submit",className:r.buttonSubmit,children:"Update contact"})]})})}function Q({contact:n,onRemove:s}){const[a,t]=f.exports.useState(!1),{name:i,number:l}=n,m=()=>{t(!0)},o=()=>{t(!1)};return c(F,{children:[c("li",{className:u.container,children:[c("div",{className:u.contactInfo,children:[i," : ",l]}),c("section",{className:u.action,children:[e("button",{type:"button",onClick:m,children:"Edit"}),e("button",{type:"button",onClick:s,children:"Delete"})]})]}),e(A,{isOpen:a,onCloseModal:o,children:e(K,{contact:n,closeModal:o})})]})}function J({visibleContacts:n}){const[s,{isLoading:a}]=E();return c(F,{children:[e("ul",{className:u.contactList,children:n.map(t=>e(Q,{contact:t,onRemove:()=>s(t.id)},t.id))}),a&&e(y,{})]})}const W="_filterContainer_r5lvb_1",X="_input_r5lvb_15";var p={filterContainer:W,input:X};function Y(){const{filter:n}=L(),s=P();return e("div",{className:p.filterContainer,children:c("label",{className:p.label,children:["Find contact by name:",e("input",{type:"text",value:n,onChange:a=>s($(a.target.value)),name:"filter",className:p.input})]})})}const Z="_container_1gwkm_1",ee="_heading_1gwkm_19";var C={container:Z,heading:ee};function ae(){const{filter:n,user:s}=L();w();const{data:a=[],isLoading:t,error:i}=I();O();const m=(o=>o?o.filter(S=>S.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())):[])(a);return c("div",{className:C.container,children:[e("h2",{className:C.heading,children:"PhoneBook"}),e(B,{visibleContacts:m}),e("h2",{className:C.heading,children:"Contacts"}),a.length>1&&e(Y,{}),a.length>0&&!i&&!t&&e(J,{visibleContacts:m}),t&&e(y,{})]})}export{ae as default};
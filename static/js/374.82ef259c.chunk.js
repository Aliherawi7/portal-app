"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[374],{1313:function(e,t,n){var s=n(9439),i=n(2791),a=n(7689),r=n(2282),o=n(1956);t.Z=function(e){var t=e.roles,n=e.id,l=(0,r.K1)(),c=(0,s.Z)(l,2),d=c[0].authentication,u=(c[1],(0,a.s0)());(0,i.useEffect)((function(){d.isAuthenticated?!d.isAuthenticated||d.roles.some((function(e){return t.includes(e)}))?d.roles.includes(o.Z.STUDENT)&&n&&n!=(null===d||void 0===d?void 0:d.userId)&&u("/"):u("/"):u("/login")}),[])}},1956:function(e,t){t.Z={ADMIN:"ADMIN",STUDENT:"STUDENT"}},4374:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(1413),i=n(3433),a=n(9439),r=n(2791),o=n(7689),l=n(694),c=n(184),d=function(e){var t=e.value,n=e.onChange,s=e.handleSearchButton,i=e.placeHolder;return(0,c.jsx)("form",{className:"search",children:(0,c.jsxs)("div",{className:"search__input display_flex align_items_center border_radius_8",children:[(0,c.jsx)("input",{value:t,onChange:n,placeholder:i}),(0,c.jsxs)("button",{className:"btn search__button background_color_transparent cursor_pointer outline_none text_color border_none",type:"submit",onClick:s,children:[(0,c.jsx)("i",{className:"".concat(l.Z.search," search__icon")}),(0,c.jsx)("span",{children:"\u062c\u0633\u062a\u062c\u0648"})]})]})})},u=n(2282),f=n(1087),h=(n(395),function(e){var t=e.studentInfo,n=e.customRef;return(0,c.jsx)("div",{className:"student box_shadow",ref:n,children:(0,c.jsxs)(f.rU,{to:"/profile/"+(null===t||void 0===t?void 0:t.id),children:[(0,c.jsxs)("div",{className:"student_title_profile",children:[(0,c.jsx)("div",{className:"student_profile_header"}),(0,c.jsx)("div",{className:"student_profile_img display_flex align_items_center justify_content_center",children:(0,c.jsx)("img",{src:null===t||void 0===t?void 0:t.imageUrl})})]}),(0,c.jsxs)("div",{className:"student_descriptions",children:[(0,c.jsxs)("div",{className:"student_personal_info display_flex align_items_center flex_direction_column text_align_center",children:[(0,c.jsx)("p",{children:null===t||void 0===t?void 0:t.name}),(0,c.jsx)("p",{children:null===t||void 0===t?void 0:t.lastname})]}),(0,c.jsxs)("div",{className:"student_university_info display_flex align_items_center justify_content_space_around border_radius_8",children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{children:null===t||void 0===t?void 0:t.fieldStudy}),(0,c.jsx)("span",{children:"\u067e\u0648\u0647\u0646\u062d\u06cc"})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{children:null===t||void 0===t?void 0:t.department}),(0,c.jsx)("span",{children:"\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a"})]})]})]})]})})}),_=n(1313),p=n(1956),x=n(4938),m=n(7563),j=n(3943),v=n(4119),g=function(){(0,_.Z)({roles:[p.Z.ADMIN]});var e=(0,o.s0)(),t=(0,u.K1)(),n=(0,a.Z)(t,2),l=n[0].authentication,f=n[1],g=(0,r.useState)(),Z=(0,a.Z)(g,2),S=Z[0],N=Z[1],y=(0,r.useState)(),b=(0,a.Z)(y,2),T=b[0],k=b[1],E=(0,r.useState)(),A=(0,a.Z)(E,2),w=A[0],z=A[1],I=(0,r.useState)(!0),C=(0,a.Z)(I,2),D=C[0],O=C[1],R=(0,r.useRef)(),U=(0,r.useState)({offset:0,pageSize:10}),B=(0,a.Z)(U,2),G=B[0],M=B[1],P=(0,r.useState)(!0),V=(0,a.Z)(P,2),H=V[0],K=V[1],F=(0,r.useState)([]),q=(0,a.Z)(F,2),J=q[0],L=q[1],Q=(0,r.useState)([]),W=(0,a.Z)(Q,2),X=W[0],Y=W[1],$=(0,r.useState)([]),ee=(0,a.Z)($,2),te=ee[0],ne=ee[1],se=(0,r.useState)([]),ie=(0,a.Z)(se,2),ae=ie[0],re=ie[1],oe=(0,r.useState)(""),le=(0,a.Z)(oe,2),ce=le[0],de=le[1],ue=(0,r.useState)(),fe=(0,a.Z)(ue,2),he=fe[0],_e=fe[1],pe=(0,r.useState)(""),xe=(0,a.Z)(pe,2),me=xe[0],je=xe[1];(0,r.useEffect)((function(){fetch(x.Z.root+x.Z.fieldOfStudy.getAll).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){Y(e.content)})),fetch(x.Z.root+x.Z.students.getAll+"offset=".concat(G.offset,"&pageSize=").concat(G.pageSize),{method:"GET",headers:{Authorization:"Bearer "+l.token}}).then((function(e){if(e.ok)return e.json()})).then((function(e){e.totalPages-1>G.offset?O(!0):O(!1),_e(e),L(Array.from(new Set([].concat((0,i.Z)(J),(0,i.Z)(e.content))))),K(!1)}))}),[]);var ve=function(e){H||(R.current&&R.current.disconnect(),R.current=new IntersectionObserver((function(e){e[0].isIntersecting&&D&&!H&&he.totalPages>=G.offset&&fetch(x.Z.root+x.Z.students.getAll+"offset=".concat(G.offset,"&pageSize=").concat(G.pageSize)+me,{method:"GET",headers:{Authorization:"Bearer "+l.token}}).then((function(e){if(e.ok)return e.json()})).then((function(e){e.totalPages-1>G.offset?O(!0):O(!1);var t=[].concat((0,i.Z)(J),(0,i.Z)(e.content)).filter((function(e,t,n){return t===n.findIndex((function(t){return t.id===e.id}))}));_e(e),L(t),K(!1),M({offset:G.offset+1,pageSize:G.pageSize})}))})),e&&R.current.observe(e))};return(0,c.jsxs)("div",{className:"students_page fade_in",children:[(0,c.jsxs)("div",{className:"students_add_new_student display_flex align_items_center justify_content_space_between",children:[(0,c.jsx)(j.Z,{text:"\u0645\u062d\u0635\u0644 \u062c\u062f\u06cc\u062f",onClick:function(){e("/admin/add-student"),f({type:v.Hp.REMOVE_STUDENT_REGISTERATION_STATE})}}),(0,c.jsx)(j.Z,{text:"\u0645\u062d\u062a\u0648\u0627\u06cc \u062c\u062f\u06cc\u062f",onClick:function(){e("/admin/newpost")}})]}),(0,c.jsxs)("div",{className:"students_filter_btn display_flex align_items_center justify_content_center",children:[(0,c.jsxs)("div",{className:"posts_management_boxes",children:[(0,c.jsxs)("div",{className:"post_mana_box",children:[(0,c.jsx)("label",{children:"\u067e\u0648\u0647\u0646\u062d\u06cc"}),(0,c.jsxs)("select",{id:"type",value:w,defaultValue:"\u0647\u0645\u0647",onChange:function(e){return function(e){z(e.target.value);var t=X.find((function(t){return t.fieldName==e.target.value}));fetch(x.Z.root+x.Z.fieldOfStudy.depratments(t.id)).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){ne(e);for(var t=[],n=1;n<=e[0].semesters;n++)t.push(n);re(t)}))}(e)},children:[(0,c.jsx)("option",{children:"\u0647\u0645\u0647"}),null===X||void 0===X?void 0:X.map((function(e){return(0,c.jsx)("option",{children:e.fieldName},e.id)}))]})]}),(0,c.jsxs)("div",{className:"post_mana_box",children:[(0,c.jsx)("label",{children:"\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a"}),(0,c.jsxs)("select",{id:"type",value:T,defaultValue:"\u0647\u0645\u0647",onChange:function(e){return function(e){k(e);for(var t=te.find((function(t){return t.departmentName==e})),n=[],s=1;s<=t.semesters;s++)n.push(s);re(n)}(e.target.value)},children:[(0,c.jsx)("option",{children:"\u0647\u0645\u0647"}),null===te||void 0===te?void 0:te.map((function(e){return(0,c.jsx)("option",{children:e.departmentName},e.id)}))]})]}),(0,c.jsxs)("div",{className:"post_mana_box",children:[(0,c.jsx)("label",{children:"\u0633\u0645\u0633\u062a\u0631"}),(0,c.jsxs)("select",{id:"type",value:S,defaultValue:"\u0647\u0645\u0647",onChange:function(e){return N(e.target.value)},children:[(0,c.jsx)("option",{children:"\u0647\u0645\u0647"}),ae.map((function(e){return(0,c.jsx)("option",{children:e},e)}))]})]})]}),(0,c.jsx)(d,{value:ce,onChange:function(e){return de(e.target.value)},handleSearchButton:function(e){K(!0),e.preventDefault();var t="";ce&&(t+="&keyword="+("\u0647\u0645\u0647"==ce?"%":ce)),w&&(t+="&fieldOfStudy="+("\u0647\u0645\u0647"==w?"%":w)),S&&(t+="&semester="+("\u0647\u0645\u0647"==S?"%":S)),T&&(t+="&department="+("\u0647\u0645\u0647"==T?"%":T)),je(t),fetch(x.Z.root+x.Z.students.getAll+"offset=0&pageSize=".concat(G.pageSize)+t,{method:"GET",headers:{Authorization:"Bearer "+l.token}}).then((function(e){return e.json()})).then((function(e){e.totalPages-1>0?O(!0):O(!1),K(!1),L(e.content),_e(e),M((0,s.Z)((0,s.Z)({},G),{},{offset:0}))}))},placeHolder:"\u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062d\u0635\u0644..."})]}),(0,c.jsxs)("div",{className:"all_students display_flex justify_content_center",children:[null===J||void 0===J?void 0:J.map((function(e,t){return t+1==J.length?(0,c.jsx)(h,{studentInfo:e,customRef:ve},e.id):(0,c.jsx)(h,{studentInfo:e},e.id)})),(0,c.jsxs)("section",{className:"students_not_found text_align_center",children:[D&&(0,c.jsx)(m.Z,{}),!D&&J.length>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h5",{children:"\u0622\u062e\u0631\u06cc\u0646 \u0645\u062d\u0635\u0644"}),(0,c.jsxs)("h6",{style:{paddingTop:"10px"},children:["\u062a\u0639\u062f\u0627\u062f \u06a9\u0644 \u0645\u062d\u0635\u0644\u06cc\u0646 ",J.length]})]}),!D&&0==J.length&&(0,c.jsx)("h5",{children:"\u0645\u062d\u0635\u0644 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f!"})]})]})]})}},395:function(){}}]);
//# sourceMappingURL=374.82ef259c.chunk.js.map
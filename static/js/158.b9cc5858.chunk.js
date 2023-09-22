"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[158],{1313:function(e,t,n){var s=n(9439),i=n(2791),a=n(7689),o=n(2282),r=n(1956);t.Z=function(e){var t=e.roles,n=e.id,l=(0,o.K1)(),c=(0,s.Z)(l,2),d=c[0].authentication,u=(c[1],(0,a.s0)());(0,i.useEffect)((function(){d.isAuthenticated?!d.isAuthenticated||d.roles.some((function(e){return t.includes(e)}))?d.roles.includes(r.Z.STUDENT)&&n&&n!=(null===d||void 0===d?void 0:d.userId)&&u("/"):u("/"):u("/login")}),[])}},8430:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(9439),i=n(2791),a=n(1087);function o(e){var t=new Date,n=Math.floor((t-e)/1e3),s=Math.floor(n/31536e3);return s>=1?"".concat(s," \u0633\u0627\u0644 \u067e\u06cc\u0634"):(s=Math.floor(n/2592e3))>=1?"".concat(s," \u0645\u0627\u0647 \u067e\u06cc\u0634"):(s=Math.floor(n/86400))>=1?"".concat(s," \u0631\u0648\u0632 \u067e\u06cc\u0634"):(s=Math.floor(n/3600))>=1?"".concat(s," \u0633\u0627\u0639\u062a \u067e\u06cc\u0634"):(s=Math.floor(n/60))>=1?"".concat(s," \u062f\u0642\u06cc\u0642\u0647 \u067e\u06cc\u0634"):"\u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646"}var r=n(1956),l=n(4269),c=n(4938),d=n(2282),u=n(694),f=n(184),h=function(e){var t=e.role,n=e.id,h=e.images,m=e.docs,x=e.author,p=e.date,_=e.text,j=e.isUpdated,g=void 0!==j&&j,v=e.isHidden,N=e.handleDelete,Z=e.customRef,S=void 0===Z?null:Z,y=(0,d.K1)(),w=(0,s.Z)(y,2),b=w[0].authentication,T=(w[1],(0,i.useState)(v)),k=(0,s.Z)(T,2),E=k[0],A=k[1];return(0,f.jsxs)("div",{className:"post",ref:S,children:[(0,f.jsx)("div",{className:"image_header_container",children:(0,f.jsxs)("div",{className:"post_header display_flex justify_content_space_between",children:[(0,f.jsxs)("div",{className:"post_share_with display_flex align_items_center",children:[(0,f.jsx)("img",{src:null===x||void 0===x?void 0:x.imageUrl,alt:null===x||void 0===x?void 0:x.name}),(0,f.jsxs)("div",{className:"post_date",children:[(0,f.jsxs)("p",{children:[null===x||void 0===x?void 0:x.name," ",null===x||void 0===x?void 0:x.lastname]}),(0,f.jsxs)("p",{style:{fontSize:"10px"},children:[o(new Date(p)),g&&" \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0634\u062f"]})]})]}),t==r.Z.ADMIN?(0,f.jsxs)("div",{className:"post_settings",children:[(0,f.jsx)("span",{className:"setting_icon cursor_pointer",children:(0,f.jsx)("i",{className:u.Z.threeDots})}),(0,f.jsx)("div",{className:"setting_menu",children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{className:"setting_option",children:(0,f.jsxs)(a.rU,{to:"edit/"+n,className:"setting_option_details",children:[(0,f.jsx)("i",{className:u.Z.pencilSquare}),(0,f.jsx)("span",{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u067e\u0633\u062a"})]})}),(0,f.jsx)("li",{className:"setting_option",onClick:function(){fetch(c.Z.root+c.Z.posts.toggleHideShow(n),{headers:{Authorization:"Bearer "+b.token}}).then((function(e){e.ok&&A(!E)}))},children:(0,f.jsxs)("span",{className:"setting_option_details",children:[E?(0,f.jsx)("i",{className:u.Z.eyeFill}):(0,f.jsx)("i",{className:u.Z.eyeSlashFill}),E?(0,f.jsx)("span",{children:"\u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0646"}):(0,f.jsx)("span",{children:"\u067e\u0646\u0647\u0627\u0646 \u06a9\u0631\u062f\u0646"})]})}),(0,f.jsx)("li",{className:"setting_option",onClick:N,children:(0,f.jsxs)("span",{className:"setting_option_details",children:[(0,f.jsx)("i",{className:u.Z.trashFill}),(0,f.jsx)("span",{children:"\u062d\u0630\u0641 \u067e\u0633\u062a"})]})})]})})]}):null]})}),(0,f.jsxs)("div",{className:"file_post_body display_flex flex_direction_column",children:[(0,f.jsx)("div",{className:"post_text",children:(0,f.jsx)("p",{dangerouslySetInnerHTML:{__html:_}})}),(0,f.jsx)("div",{className:"post_images",children:null===h||void 0===h?void 0:h.map((function(e){return(0,f.jsx)("img",{src:e,alt:""},e)}))}),(0,f.jsx)("div",{className:"pdf_files_container",children:null===m||void 0===m?void 0:m.map((function(e){return(0,f.jsxs)("div",{className:"post_file display_flex",children:[(0,f.jsxs)("div",{className:"files_icon_container display_flex",children:[(0,f.jsx)("i",{className:u.Z.fileEarmarkPdfFill}),(0,f.jsx)("p",{className:"text_color display_flex align_items_center",children:e.split("/")[e.split("/").length-1]})]}),(0,f.jsx)("div",{className:"file_download_button",children:(0,f.jsxs)("button",{className:"btn_download display_flex cursor_pointer align_items_center justify_content_center",type:"button",onClick:function(){return(0,l._)(e)},children:[(0,f.jsx)("span",{className:"button_download_text",children:"\u062f\u0627\u0646\u0644\u0648\u062f"}),(0,f.jsx)("span",{className:"button_download_icon display_flex align_items_center justify_content_center",children:(0,f.jsx)("i",{className:u.Z.download})})]})})]},e)}))})]})]})}},1956:function(e,t){t.Z={ADMIN:"ADMIN",STUDENT:"STUDENT"}},1158:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=n(3433),i=n(9439),a=n(2791),o=n(8430),r=n(2282),l=n(7563),c=n(1313),d=n(1956),u=n(4938),f=n(1925),h=n(1346),m=n(694),x=n(8840),p=n(184),_=function(){(0,c.Z)({roles:[d.Z.ADMIN]});var e=(0,r.K1)(),t=(0,i.Z)(e,2),n=t[0].authentication,_=(t[1],(0,a.useState)([])),j=(0,i.Z)(_,2),g=j[0],v=j[1],N=(0,a.useState)(),Z=(0,i.Z)(N,2),S=Z[0],y=Z[1],w=(0,a.useState)(),b=(0,i.Z)(w,2),T=b[0],k=b[1],E=(0,a.useState)(),A=(0,i.Z)(E,2),D=A[0],M=A[1],C=(0,a.useState)(!0),z=(0,i.Z)(C,2),I=z[0],U=z[1],B=(0,a.useRef)(),H=(0,a.useState)({offset:0,pageSize:3}),P=(0,i.Z)(H,2),F=P[0],O=P[1],K=(0,a.useState)(!0),R=(0,i.Z)(K,2),V=R[0],G=R[1],L=(0,a.useState)([]),q=(0,i.Z)(L,2),J=q[0],Q=q[1],W=(0,a.useState)([]),X=(0,i.Z)(W,2),Y=X[0],$=X[1],ee=(0,a.useState)([]),te=(0,i.Z)(ee,2),ne=te[0],se=te[1],ie=(0,a.useState)(""),ae=(0,i.Z)(ie,2),oe=ae[0],re=ae[1],le=(0,a.useState)(!1),ce=(0,i.Z)(le,2),de=ce[0],ue=ce[1],fe=(0,a.useState)(),he=(0,i.Z)(fe,2),me=he[0],xe=he[1],pe=(0,a.useState)({show:!1,msg:""}),_e=(0,i.Z)(pe,2),je=_e[0],ge=_e[1],ve=u.Z.root+u.Z.posts.getAllPostsForAdmin+"offset=".concat(F.offset,"&pageSize=").concat(F.pageSize),Ne=function(e){V||(B.current&&B.current.disconnect(),B.current=new IntersectionObserver((function(e){e[0].isIntersecting&&I&&O({offset:F.offset+1,pageSize:F.pageSize})})),e&&B.current.observe(e))};(0,a.useEffect)((function(){fetch(u.Z.root+u.Z.fieldOfStudy.getAll).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){Q(e.content)}))}),[]),(0,a.useEffect)((function(){G(!0),fetch(ve+oe,{method:"GET",headers:{Authorization:"Bearer "+n.token}}).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){e.totalPages-1>F.offset?U(!0):U(!1);var t=[].concat((0,s.Z)(g),(0,s.Z)(e.content)).filter((function(e,t,n){return t===n.findIndex((function(t){return t.id===e.id}))}));v(t),G(!1)}))}),[F]);var Ze=function(e){ue(!0),xe(e)};return(0,p.jsxs)("div",{className:"posts_management",children:[(0,p.jsxs)("div",{className:"posts_management_tabHeader",children:[(0,p.jsxs)("div",{className:"posts_management_boxes",children:[(0,p.jsxs)("div",{className:"post_mana_box",children:[(0,p.jsx)("label",{children:"\u067e\u0648\u0647\u0646\u062d\u06cc"}),(0,p.jsxs)("select",{id:"type",value:D,onChange:function(e){return function(e){$([]),M(e.target.value);var t=J.find((function(t){return t.fieldName==e.target.value}));fetch(u.Z.root+u.Z.fieldOfStudy.depratments(t.id)).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){$(e);for(var t=[],n=1;n<=e[0].semesters;n++)t.push(n);se(t)}))}(e)},defaultValue:"\u0647\u0645\u0647",children:[(0,p.jsx)("option",{children:"\u0647\u0645\u0647"}),J.map((function(e){return(0,p.jsx)("option",{children:e.fieldName},e.id)}))]})]}),(0,p.jsxs)("div",{className:"post_mana_box",children:[(0,p.jsx)("label",{children:"\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a"}),(0,p.jsxs)("select",{id:"type",value:T,onChange:function(e){return function(e){k(e);for(var t=Y.find((function(t){return t.departmentName==e})),n=[],s=1;s<=t.semesters;s++)n.push(s);se(n)}(e.target.value)},defaultValue:"\u0647\u0645\u0647",children:[(0,p.jsx)("option",{children:"\u0647\u0645\u0647"}),Y.map((function(e){return(0,p.jsx)("option",{children:e.departmentName},e.id)}))]})]}),(0,p.jsxs)("div",{className:"post_mana_box",children:[(0,p.jsx)("label",{children:"\u0633\u0645\u0633\u062a\u0631"}),(0,p.jsxs)("select",{id:"type",value:S,onChange:function(e){return y(e.target.value)},defaultValue:"\u0647\u0645\u0647",children:[(0,p.jsx)("option",{children:"\u0647\u0645\u0647"}),ne.map((function(e){return(0,p.jsx)("option",{children:e})}))]})]})]}),(0,p.jsx)("div",{className:"posts_management_filter_btn",children:(0,p.jsx)("button",{className:"btn",onClick:function(){O({offset:0,pageSize:3}),v([]);var e="";S&&(e+="&semester=".concat("\u0647\u0645\u0647"==S?"%":S)),T&&(e+="&department=".concat("\u0647\u0645\u0647"==T?"%":T)),D&&(e+="&fieldOfStudy=".concat("\u0647\u0645\u0647"==D?"%":D)),re(e),fetch(ve+e,{method:"GET",headers:{Authorization:"Bearer "+n.token}}).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){e.totalPages-1>F.offset?U(!0):U(!1),v(e.content),G(!1)}))},children:"\u0641\u06cc\u0644\u062a\u0631"})})]}),(0,p.jsx)("div",{className:"content_of_PostManagement",children:(0,p.jsxs)("div",{className:"content_of_posts_details",children:[(0,p.jsx)("div",{className:"display_flex align_items_center justify_content_center flex_direction_column",children:Array.from(new Set(g)).map((function(e,t){return g.length===t+1?(0,p.jsx)("div",{className:"",children:(0,p.jsx)(o.Z,{role:d.Z.ADMIN,author:e.author,date:e.dateTime,images:e.images,id:e.id,docs:e.docs,text:e.message,isUpdated:e.isUpdated,handleDelete:function(){return Ze(e.id)},customRef:Ne},e.id)}):(0,p.jsx)("div",{className:"",children:(0,p.jsx)(o.Z,{role:d.Z.ADMIN,author:e.author,date:e.dateTime,images:e.images,id:e.id,docs:e.docs,isHidden:e.isHidden,isUpdated:e.isUpdated,text:e.message,handleDelete:function(){return Ze(e.id)}},e.id)})}))}),(0,p.jsxs)("section",{className:"end_of_posts",children:[I&&(0,p.jsx)(l.Z,{}),!I&&(0,p.jsxs)("div",{className:"text_align_center",children:[(0,p.jsxs)("h5",{className:"text_color text_align_center",children:[g.length>0?"\u0622\u062e\u0631\u06cc\u0646 \u067e\u0633\u062a":"\u067e\u0633\u062a \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"," "]}),(0,p.jsxs)("h6",{style:{paddingTop:"10px"},children:["\u062a\u0639\u062f\u0627\u062f \u06a9\u0644 \u067e\u0633\u062a \u0647\u0627 ",g.length]})]})]})]})}),(0,p.jsx)(f.Z,{show:de,children:(0,p.jsx)(h.Z,{messageType:"asking",firstBtn:{btnText:"\u0628\u0644\u06cc",btnType:x.Z.danger,onClick:function(){fetch(u.Z.root+u.Z.posts.deletePost(me),{method:"DELETE",headers:{Authorization:"Bearer "+n.token}}).then((function(e){if(ue(!1),e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){ge({msg:e.message,show:!0});var t=g.filter((function(e){return e.id!=me}));v(t)})).catch((function(e){ge({msg:e.message,show:!0})}))}},secondBtn:{btnText:"\u0646\u062e\u06cc\u0631",onClick:function(){return ue(!1)}},message:"\u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u0634\u062f\u0646 \u067e\u0633\u062a \u0627\u0632 \u0633\u06cc\u0633\u062a\u0645 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f",iconType:m.Z.asking})}),(0,p.jsx)(f.Z,{show:je.show,children:(0,p.jsx)(h.Z,{messageType:"info",firstBtn:{btnText:"\u062a\u0627\u06cc\u06cc\u062f",onClick:function(){return ge({show:!1,msg:""})}},message:je.msg,iconType:m.Z.info})})]})}}}]);
//# sourceMappingURL=158.b9cc5858.chunk.js.map
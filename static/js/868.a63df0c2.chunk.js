"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[868],{8430:function(e,s,t){t.d(s,{Z:function(){return f}});var n=t(9439),i=t(2791),a=t(1087);function l(e){var s=new Date,t=Math.floor((s-e)/1e3),n=Math.floor(t/31536e3);return n>=1?"".concat(n," \u0633\u0627\u0644 \u067e\u06cc\u0634"):(n=Math.floor(t/2592e3))>=1?"".concat(n," \u0645\u0627\u0647 \u067e\u06cc\u0634"):(n=Math.floor(t/86400))>=1?"".concat(n," \u0631\u0648\u0632 \u067e\u06cc\u0634"):(n=Math.floor(t/3600))>=1?"".concat(n," \u0633\u0627\u0639\u062a \u067e\u06cc\u0634"):(n=Math.floor(t/60))>=1?"".concat(n," \u062f\u0642\u06cc\u0642\u0647 \u067e\u06cc\u0634"):"\u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646"}var o=t(1956),c=t(4269),r=t(4938),d=t(2282),u=t(694),h=t(184),f=function(e){var s=e.role,t=e.id,f=e.images,_=e.docs,x=e.author,p=e.date,m=e.text,j=e.isUpdated,g=void 0!==j&&j,v=e.isHidden,N=e.handleDelete,Z=e.customRef,y=void 0===Z?null:Z,S=(0,d.K1)(),w=(0,n.Z)(S,2),b=w[0].authentication,k=(w[1],(0,i.useState)(v)),M=(0,n.Z)(k,2),D=M[0],T=M[1];return(0,h.jsxs)("div",{className:"post",ref:y,children:[(0,h.jsx)("div",{className:"image_header_container",children:(0,h.jsxs)("div",{className:"post_header display_flex justify_content_space_between",children:[(0,h.jsxs)("div",{className:"post_share_with display_flex align_items_center",children:[(0,h.jsx)("img",{src:r.Z.redirecter+(null===x||void 0===x?void 0:x.imageUrl),alt:null===x||void 0===x?void 0:x.name}),(0,h.jsxs)("div",{className:"post_date",children:[(0,h.jsxs)("p",{children:[null===x||void 0===x?void 0:x.name," ",null===x||void 0===x?void 0:x.lastname]}),(0,h.jsxs)("p",{style:{fontSize:"10px"},children:[l(new Date(p)),g&&" \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0634\u062f"]})]})]}),s==o.Z.ADMIN?(0,h.jsxs)("div",{className:"post_settings",children:[(0,h.jsx)("span",{className:"setting_icon cursor_pointer",children:(0,h.jsx)("i",{className:u.Z.threeDots})}),(0,h.jsx)("div",{className:"setting_menu",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{className:"setting_option",children:(0,h.jsxs)(a.rU,{to:"edit/"+t,className:"setting_option_details",children:[(0,h.jsx)("i",{className:u.Z.pencilSquare}),(0,h.jsx)("span",{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u067e\u0633\u062a"})]})}),(0,h.jsx)("li",{className:"setting_option",onClick:function(){fetch(r.Z.root+r.Z.posts.toggleHideShow(t),{headers:{Authorization:"Bearer "+b.token}}).then((function(e){e.ok&&T(!D)}))},children:(0,h.jsxs)("span",{className:"setting_option_details",children:[D?(0,h.jsx)("i",{className:u.Z.eyeFill}):(0,h.jsx)("i",{className:u.Z.eyeSlashFill}),D?(0,h.jsx)("span",{children:"\u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0646"}):(0,h.jsx)("span",{children:"\u067e\u0646\u0647\u0627\u0646 \u06a9\u0631\u062f\u0646"})]})}),(0,h.jsx)("li",{className:"setting_option",onClick:N,children:(0,h.jsxs)("span",{className:"setting_option_details",children:[(0,h.jsx)("i",{className:u.Z.trashFill}),(0,h.jsx)("span",{children:"\u062d\u0630\u0641 \u067e\u0633\u062a"})]})})]})})]}):null]})}),(0,h.jsxs)("div",{className:"file_post_body display_flex flex_direction_column",children:[(0,h.jsx)("div",{className:"post_text",children:(0,h.jsx)("p",{dangerouslySetInnerHTML:{__html:m}})}),(0,h.jsx)("div",{className:"post_images",children:null===f||void 0===f?void 0:f.map((function(e){return(0,h.jsx)("img",{src:r.Z.redirecter+e,alt:""},e)}))}),(0,h.jsx)("div",{className:"pdf_files_container",children:null===_||void 0===_?void 0:_.map((function(e){return(0,h.jsxs)("div",{className:"post_file display_flex",children:[(0,h.jsxs)("div",{className:"files_icon_container display_flex",children:[(0,h.jsx)("i",{className:u.Z.fileEarmarkPdfFill}),(0,h.jsx)("p",{className:"text_color display_flex align_items_center",children:e.split("/")[e.split("/").length-1]})]}),(0,h.jsx)("div",{className:"file_download_button",children:(0,h.jsxs)("button",{className:"btn_download display_flex cursor_pointer align_items_center justify_content_center",type:"button",onClick:function(){return(0,c._)(r.Z.redirecter+e)},children:[(0,h.jsx)("span",{className:"button_download_text",children:"\u062f\u0627\u0646\u0644\u0648\u062f"}),(0,h.jsx)("span",{className:"button_download_icon display_flex align_items_center justify_content_center",children:(0,h.jsx)("i",{className:u.Z.download})})]})})]},e)}))})]})]})}},1956:function(e,s){s.Z={ADMIN:"ADMIN",STUDENT:"STUDENT"}},3868:function(e,s,t){t.r(s);var n=t(3433),i=t(9439),a=t(2791),l=t(8430),o=t(7563),c=t(2282),r=t(4938),d=t(184);s.default=function(){var e=(0,a.useState)([]),s=(0,i.Z)(e,2),t=s[0],u=s[1],h=(0,a.useState)(!0),f=(0,i.Z)(h,2),_=f[0],x=f[1],p=(0,a.useRef)(),m=(0,a.useState)({offset:0,pageSize:5}),j=(0,i.Z)(m,2),g=j[0],v=j[1],N=(0,a.useState)(!0),Z=(0,i.Z)(N,2),y=Z[0],S=Z[1],w=(0,c.K1)(),b=(0,i.Z)(w,2),k=b[0].authentication,M=(b[1],function(e){y||(p.current&&p.current.disconnect(),p.current=new IntersectionObserver((function(e){e[0].isIntersecting&&_&&v({offset:g.offset+1,pageSize:g.pageSize})})),e&&p.current.observe(e))});return(0,a.useEffect)((function(){S(!0),fetch(r.Z.root+r.Z.posts.getAllPostsForStudent+"?offset=".concat(g.offset,"&pageSize=").concat(g.pageSize),{method:"GET",headers:{Authorization:"Bearer "+k.token}}).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){e.totalPages-1>g.offset?x(!0):x(!1);var s=[].concat((0,n.Z)(t),(0,n.Z)(e.content)).filter((function(e,s,t){return s===t.findIndex((function(s){return s.id===e.id}))}));u(s),S(!1)}))}),[g]),(0,d.jsxs)("div",{className:"post_page display_flex align_items_center justify_content_center flex_direction_column",children:[Array.from(new Set(t)).map((function(e,s){return t.length===s+1?(0,d.jsx)(l.Z,{author:e.author,date:e.dateTime,images:e.images,docs:e.docs,text:e.message,isUpdated:e.isUpdated,customRef:M},e.id):(0,d.jsx)(l.Z,{author:e.author,date:e.dateTime,images:e.images,docs:e.docs,text:e.message},e.id)})),(0,d.jsxs)("section",{style:{position:"relative",height:"60px"},children:[_&&(0,d.jsx)(o.Z,{}),!_&&(0,d.jsxs)("div",{className:"end_of_posts text_align_center",children:[(0,d.jsx)("h5",{children:"\u0622\u062e\u0631\u06cc\u0646 \u067e\u0633\u062a"}),(0,d.jsxs)("h6",{children:["\u062a\u0639\u062f\u0627\u062f \u06a9\u0644 \u067e\u0633\u062a \u0647\u0627 ",t.length]})]})]})]})}}}]);
//# sourceMappingURL=868.a63df0c2.chunk.js.map
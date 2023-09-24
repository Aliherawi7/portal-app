"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[246],{4246:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var a=t(3433),d=t(1413),r=t(9439),o=t(2791),i=t(4938),s=t(2282),l=t(3943),c=t(694),h={ABSENT:"ABSENT",PRESENT:"PRESENT",UNKNOWN:"UNKNOWN"},u=t(184);var x=function(n){var e=n.attendanceStatus,t=void 0===e?h.UNKNOWN:e,a=n.sendDataToTheAPI,d=n.hidden,i=n.studentId,s=n.dayNumber,l=(0,o.useState)(t),x=(0,r.Z)(l,2),f=x[0],p=x[1],m=(0,o.useState)(function(n){if(n==h.UNKNOWN)return!1;if(n==h.PRESENT)return c.Z.thick;if(n==h.ABSENT)return c.Z.cross}(t)),b=(0,r.Z)(m,2),_=b[0],v=b[1];return!d&&(0,u.jsx)("div",{onClick:function(){var n="";f==h.UNKNOWN?(n=h.PRESENT,v(c.Z.thick)):f==h.PRESENT?(n=h.ABSENT,v(c.Z.cross)):f==h.ABSENT&&(n=h.UNKNOWN,v(!1)),p(n),console.log(n),a(n,i,s)},className:"attendance_status_box",hidden:d,children:_&&(0,u.jsx)("i",{className:_})})},f=function(){var n,e=(0,s.K1)(),t=(0,r.Z)(e,2),f=t[0].authentication,p=(t[1],(0,o.useState)()),m=(0,r.Z)(p,2),b=m[0],_=m[1],v=(0,o.useState)(),g=(0,r.Z)(v,2),j=g[0],N=g[1],y=(0,o.useState)(),S=(0,r.Z)(y,2),w=S[0],Z=S[1],k=(0,o.useState)(),E=(0,r.Z)(k,2),T=E[0],A=E[1],O=(0,o.useState)([]),C=(0,r.Z)(O,2),P=C[0],z=C[1],I=(0,o.useState)([]),B=(0,r.Z)(I,2),U=B[0],W=B[1],H=(0,o.useState)([]),K=(0,r.Z)(H,2),R=K[0],D=K[1],F=(0,o.useState)([]),V=(0,r.Z)(F,2),M=V[0],Y=V[1],G=(0,o.useState)([]),J=(0,r.Z)(G,2),L=J[0],q=J[1],Q=(0,o.useState)(!0),X=(0,r.Z)(Q,2),$=(X[0],X[1]),nn=(0,o.useState)(new Date),en=(0,r.Z)(nn,2),tn=en[0],an=en[1],dn=(0,o.useState)([]),rn=(0,r.Z)(dn,2),on=rn[0],sn=rn[1],ln=(0,o.useState)(),cn=(0,r.Z)(ln,2),hn=cn[0],un=cn[1];(0,o.useEffect)((function(){fetch(i.Z.root+i.Z.fieldOfStudy.getAll).then((function(n){if(n.ok)return n.json();throw new Error(n.statusText)})).then((function(n){z(n.content)}))}),[]);var xn=function(n){var e;_(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.value);var t="field="+w+"&department="+j+"&semester="+n.target.value;fetch(i.Z.root+i.Z.subjects.subjectSearch+t).then((function(n){return n.json()})).then((function(n){Y(n.records)}))},fn=function(n,e,t){new Date(tn).setFullYear(tn.getFullYear);var r={attendanceStatus:n,yearNumber:+tn.split("-")[0],monthNumber:+tn.split("-")[1],dayNumber:+t,fieldOfStudy:w,department:j,subject:T,semester:+b,studentId:e};console.log(r),fetch(i.Z.root+i.Z.attendances.addAttendance,{method:"POST",headers:{Authorization:"Bearer "+f.token,"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(n){return n.json()})).then((function(n){return console.log(n)}));var o=L.findIndex((function(n){return n.studentId==e})),s=L[o].monthlyAttendance.findIndex((function(n){return n.day==t})),l=(0,d.Z)({},L[o]);l.monthlyAttendance[s].attendanceStatusName=n,console.log("attendance name: "+n),n==h.PRESENT?l.totalPresent=l.totalPresent+1:n==h.ABSENT?(l.totalPresent-=1,l.totalAbsent+=1):n==h.UNKNOWN&&(l.totalAbsent-=1),L[o]=l,q((0,a.Z)(L))};return(0,u.jsxs)("div",{className:"attendance",children:[(0,u.jsxs)("div",{className:"attendance_faculty",children:[(0,u.jsx)("h2",{children:"\u062d\u0640\u0627\u0636\u0640\u0631\u06cc \u0645\u0640\u0631\u0628\u0640\u0648\u0637\u0640\u0647 \u0631\u0627 \u0627\u0646\u0640\u062a\u062e\u0640\u0627\u0628 \u0646\u0640\u0645\u0640\u0627\u06cc\u0640\u062f"}),(0,u.jsxs)("div",{className:"posts_management_boxes ",children:[(0,u.jsxs)("div",{className:"post_mana_box ",children:[(0,u.jsx)("label",{children:"\u067e\u0648\u0647\u0646\u062d\u06cc"}),(0,u.jsxs)("select",{id:"type",value:w,onChange:function(n){return function(n){N("\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a"),W([]),Z(n.target.value);var e=P.find((function(e){return e.fieldName==n.target.value}));fetch(i.Z.root+i.Z.fieldOfStudy.depratments(e.id)).then((function(n){if(n.ok)return n.json();throw new Error(n.statusText)})).then((function(n){W(n);for(var e=[],t=1;t<=n[0].semesters;t++)e.push(t);D(e)}))}(n)},defaultValue:"\u067e\u0648\u0647\u0646\u062d\u06cc",children:[(0,u.jsx)("option",{disabled:!0,children:"\u067e\u0648\u0647\u0646\u062d\u06cc"}),P.map((function(n){return(0,u.jsx)("option",{children:n.fieldName},n.id)}))]})]}),(0,u.jsxs)("div",{className:"post_mana_box ",children:[(0,u.jsx)("label",{children:"\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a"}),(0,u.jsxs)("select",{id:"type",value:j,onChange:function(n){return function(n){N(n);for(var e=U.find((function(e){return e.departmentName==n})),t=[],a=1;a<=e.semesters;a++)t.push(a);D(t),xn(null)}(n.target.value)},defaultValue:"\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a",children:[(0,u.jsx)("option",{disabled:!0,children:"\u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a"}),U.map((function(n){return(0,u.jsx)("option",{children:n.departmentName},n.id)}))]})]}),(0,u.jsxs)("div",{className:"post_mana_box ",children:[(0,u.jsx)("label",{children:"\u0633\u0645\u0633\u062a\u0631"}),(0,u.jsxs)("select",{id:"type",value:b,onChange:function(n){return xn(n)},defaultValue:"\u0633\u0645\u0633\u062a\u0631",children:[(0,u.jsx)("option",{disabled:!0,children:"\u0633\u0645\u0633\u062a\u0631"}),R.map((function(n){return(0,u.jsx)("option",{children:n},n)}))]})]}),(0,u.jsxs)("div",{className:"post_mana_box  ",children:[(0,u.jsx)("label",{children:"\u0645\u0636\u0645\u0648\u0646"}),(0,u.jsxs)("select",{id:"type",value:T,onChange:function(n){return A(n.target.value)},defaultValue:"\u0645\u0636\u0645\u0648\u0646",children:[(0,u.jsx)("option",{disabled:!0,children:"\u0645\u0636\u0645\u0648\u0646"}),M.map((function(n){return(0,u.jsx)("option",{children:n.name},n.id)}))]})]}),(0,u.jsxs)("div",{className:"post_mana_box ",children:[(0,u.jsx)("label",{children:"\u062a\u0627\u0631\u06cc\u062e"}),(0,u.jsx)("input",{type:"month",id:"type",value:tn,onChange:function(n){return an(n.target.value)}})]})]}),(0,u.jsx)("div",{className:"attendance_faculty_btn display_flex align_items_center justify_content_center posts_management_filter_btn",children:(0,u.jsx)("button",{className:"btn",onClick:function(){if(w&&j&&b&&T&&tn){q([]);var n="fieldOfStudy=".concat(w,"&semester=").concat(b,"&department=").concat(j,"&subject=").concat(T,"&year=").concat(+tn.split("-")[0],"&month=").concat(+tn.split("-")[1]);fetch(i.Z.root+i.Z.attendances.getStudentAttendances+n,{method:"GET",headers:{Authorization:"Bearer "+f.token}}).then((function(n){return n.json()})).then((function(n){$(!1),un(n),console.log(n),sn(null===n||void 0===n?void 0:n.monthDetails),q(n.students)}))}},children:"\u062f\u0631\u06cc\u0627\u0641\u062a \u062d\u0627\u0636\u0631\u06cc"})})]}),(null===L||void 0===L?void 0:L.length)>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"attendance_content box_shadow ",id:"attendance_table_container",children:[(0,u.jsxs)("div",{className:"attendance_header display_grid",children:[(0,u.jsxs)("div",{className:"attendance_header_boxes display_grid text_align_center",children:[(0,u.jsxs)("div",{className:"attendance_header_box",children:[(0,u.jsx)("p",{children:"\u067e\u0640\u0648\u0647\u0640\u0646\u0640\u062d\u0640\u06cc"}),(0,u.jsx)("p",{children:w})]}),(0,u.jsxs)("div",{className:"attendance_header_box",children:[(0,u.jsx)("p",{children:"\u062f\u06cc\u0640\u067e\u0640\u0627\u0631\u062a\u0640\u0645\u0640\u0646\u0640\u062a"}),(0,u.jsx)("p",{children:j})]}),(0,u.jsxs)("div",{className:"attendance_header_box",children:[(0,u.jsx)("p",{children:"\u0633\u0645\u0640\u0633\u0640\u062a\u0640\u0631"}),(0,u.jsx)("p",{children:b})]}),(0,u.jsxs)("div",{className:"attendance_header_box",children:[(0,u.jsx)("p",{children:"\u0645\u0640\u0636\u0640\u0645\u0640\u0648\u0646"}),(0,u.jsx)("p",{children:T})]}),(0,u.jsxs)("div",{className:"attendance_header_box",children:[(0,u.jsx)("p",{children:"\u062a\u0640\u0627\u0631\u06cc\u0640\u062e"}),(0,u.jsx)("p",{children:tn})]}),(0,u.jsxs)("div",{className:"attendance_header_box",children:[(0,u.jsx)("p",{children:"\u062a\u0640\u0639\u0640\u062f\u0627\u062f \u06a9\u0640\u0631\u062f\u06cc\u0640\u062a \u0647\u0627"}),(0,u.jsx)("p",{children:null===(n=M.find((function(n){return n.name==T})))||void 0===n?void 0:n.credit})]})]}),(0,u.jsxs)("table",{className:"attendance_header_keys",children:[(0,u.jsx)("tr",{children:(0,u.jsx)("th",{colspan:"2",children:"\u06a9\u0640\u0644\u0640\u06cc\u0640\u062f \u0648\u0627\u0698\u0647 \u0647\u0627"})}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"\u062d"}),(0,u.jsx)("td",{children:"\u062d\u0627\u0636\u0631"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"\u063a"}),(0,u.jsx)("td",{children:"\u063a\u06cc\u0631 \u062d\u0627\u0636\u0631"})]})]})]}),(0,u.jsxs)("table",{className:"attendance_table",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{id:"number_counter",children:"\u0634\u0640\u0645\u0640\u0627\u0631\u0647"}),(0,u.jsx)("td",{id:"student_name",children:"\u0646\u0640\u0627\u0645"}),(0,u.jsx)("td",{id:"student_lastname",children:"\u0646\u0640\u0627\u0645 \u067e\u0640\u062f\u0631"}),null===on||void 0===on?void 0:on.map((function(n,e){var t;return(0,u.jsxs)("td",{className:"data_cell "+(n.isHoliday?"holiday":""),children:[(0,u.jsx)("p",{children:null===n||void 0===n||null===(t=n.dayOfWeek)||void 0===t?void 0:t.substring(0,2)}),null===n||void 0===n?void 0:n.dayOfMonth]},e)})),(0,u.jsx)("td",{children:"\u062d"}),(0,u.jsx)("td",{children:"\u063a"}),(0,u.jsx)("td",{children:"\u0645\u062c\u0645\u0648\u0639\u0647"})]})}),(0,u.jsx)("tbody",{className:"attendance_details",children:null===L||void 0===L?void 0:L.map((function(n,e){var t;return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e+1}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.name}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.fatherName}),null===n||void 0===n||null===(t=n.monthlyAttendance)||void 0===t?void 0:t.map((function(e,t){return(0,u.jsx)("td",{className:"data_cell text_align_center align_items_center justify_content_center "+(e.isHoliday?"holiday":""),children:(0,u.jsx)(x,{attendanceStatus:e.attendanceStatusName,hidden:e.isHoliday,dayNumber:e.day,studentId:n.studentId,sendDataToTheAPI:fn})},t)})),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.totalPresent}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.totalAbsent}),(0,u.jsx)("td",{children:null===hn||void 0===hn?void 0:hn.daysWithoutHolidays})]},e)}))})]})]}),(0,u.jsx)("div",{className:"print_button text_align_center",children:(0,u.jsx)(l.Z,{text:"\u067e\u0631\u06cc\u0646\u062a \u062d\u0627\u0636\u0631\u06cc",icon:c.Z.printer,onClick:function(){!function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u062c\u062f\u0648\u0644 \u062d\u0627\u0636\u0631\u06cc",e=arguments.length>1?arguments[1]:void 0,t=document.getElementById("attendance_table_container"),a=window.open("","_blank"),d="\n    <html>\n      <head>\n      <title>".concat(n,'</title>\n      <link rel="stylesheet" href="/css/bootstrap-icons.css">\n        <style>\n\n          :root{\n            --gen-color: #40e0f1;\n            --gen-color-hover: #40e0f1;\n            --gen-bg-color: #ffffff94;\n            --gen-main-bg: #ffffff85;\n            --navbar-bg: #ffffff54;\n            --text-color: #000;\n            --icon-faculties-color: #fff;\n            --btn-bg-color: #6dc7f1f3;\n            --show-color: #22222283;\n            --input-box-color: #fff;\n            --light-dark: #fff\n          }\n          * {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n            font-family: vazir_l, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n              sans-serif;\n            scroll-behavior: smooth;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n            direction: rtl;\n          }\n          ').concat(e,"\n        </style>\n      </head>\n      <body>\n        ").concat(t.innerHTML,"\n      </body>\n    </html>\n  ");a.document.write(d),a.document.close(),setTimeout((function(){a.print()}),500)}("\u062c\u062f\u0648\u0644 \u062d\u0627\u0636\u0631\u06cc  \u0645\u0636\u0645\u0648\u0646 ".concat(T," \u062a\u0627\u0631\u06cc\u062e ").concat(tn," \u0633\u0645\u0633\u062a\u0631 ").concat(b," \u062f\u06cc\u067e\u0627\u0631\u062a\u0645\u0646\u062a ").concat(j),'\n/* Attendance Content */\n          .attendance_content {\n            margin: 2rem 0 0.8rem 0;\n            border: 1px solid var(--gen-color);\n            width: 100%;\n            border-radius: 1px;\n            padding: 15px 10px;\n            overflow-x: scroll;\n          }\n\n          /* Attendance Header */\n          .attendance_header {\n            display: flex;\n            gap: 5px;\n            width: 100%;\n          }\n\n\n          .attendance_header_boxes {\n            display:grid;\n            grid-template-columns: repeat(3, 1fr);\n            grid-gap: 5px;\n            min-width: 770px;\n            max-width: 100%;\n            flex: 1;\n          }\n\n          .attendance_header_boxes .attendance_header_box {\n            border: 1px solid var(--gen-color);\n            width: 100%;\n          }\n\n          .attendance_header_boxes .attendance_header_box p {\n            font-size: 14.5px;\n            padding: 3px;\n          }\n\n          .attendance_header_boxes .attendance_header_box p:first-child {\n            background-color: var(--gen-bg-color);\n            font-size: 15px;\n            font-weight: bold;\n          }\n\n          /* keys */\n          .attendance_header_keys {\n            min-width: 194px;\n            max-width: 100%;\n            border: 1px solid var(--gen-color);\n            border-collapse: collapse;\n          }\n\n          .attendance_header_keys tr {\n            border: 1px solid var(--gen-color);\n            width: 100%;\n            text-align: center;\n          }\n\n          .attendance_header_keys tr th {\n            border-collapse: collapse;\n            background-color: var(--gen-bg-color);\n          }\n\n          .attendance_header_keys tr td {\n            font-size: 14px;\n            font-weight: bold;\n            border: 1px solid var(--gen-color);\n          }\n\n          /* End of Attendance Header */\n\n          .attendance_table {\n            margin-top: 1.7rem;\n            border: 1px solid #000;\n            border-collapse: collapse;\n            min-width: 970px;\n            width: 100%;\n          }\n\n          .holiday {\n            background-color: var(--gen-bg-color);\n            border: 1px solid var(--gen-bg-color);\n          }\n\n          tr {\n            height: 20px;\n          }\n\n          .attendance_table tr {\n            row-gap: 1px;\n          }\n\n          .attendance_table #number_counter {\n            width: 30px;\n          }\n\n          .attendance_table #student_name,\n          .attendance_table #student_lastname {\n            width: 100px;\n          }\n\n          .attendance_table tr:nth-child(even) {\n            background-color: var(--gen-bg-color);\n          }\n\n          .attendance_table thead tr td {\n            font-size: 12px;\n            font-weight: bold;\n          }\n\n          .attendance_table tr td {\n            border: 1px solid var(--gen-color);\n            font-size: 12px;\n            padding: 2px;\n            width: 2rem;\n            text-align: center;\n          }\n\n          .attendance_table tr .data_cell {\n            text-align: center;\n            padding: 2px;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            width: 1.44rem;\n            height: 0.5rem;\n          }\n\n          .attendance_table tr .data_cell input {\n            position: absolute;\n            top: 3px;\n            left: 3px;\n            right: 3px;\n            bottom: 3px;\n          }\n\n          .attendance_table tr .data_cell input[type="checkbox"] {\n            accent-color: blue;\n          }\n\n          .attendance_status_box {\n              width: 20px;\n              height: 20px;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              font-size: 24px;\n              /* border: 1px solid var(--gen-color); */\n          }\n\n          .attendance_status_box i {\n              margin-top: 6px;\n          }\n')}})})]})]})}}}]);
//# sourceMappingURL=246.1a587864.chunk.js.map
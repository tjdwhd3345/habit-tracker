(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),o=n.n(i),s=(n(14),n(2)),r=n(9),u=n(5),b=(n(15),n(0)),l=Object(c.memo)((function(e){var t=e.totalCount;return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("i",{className:"fas fa-leaf navbar-logo"}),Object(b.jsx)("span",{children:"Habit Tracker"}),Object(b.jsx)("span",{className:"navbar-count",children:t})]})})),j=Object(c.memo)((function(e){var t=e.habit,n=e.onIncrement,c=e.onDecrement,a=e.onDelete;return Object(b.jsxs)("li",{className:"habit",children:[Object(b.jsx)("div",{className:"habit-name-wrap",children:Object(b.jsx)("span",{className:"habit-name",children:t.name})}),Object(b.jsxs)("div",{className:"habit-icon-wrap",children:[Object(b.jsx)("span",{className:"habit-count",children:t.count}),Object(b.jsx)("button",{className:"habit-button habit-increase",onClick:function(){n(t)},children:Object(b.jsx)("i",{className:"fas fa-plus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-decrease",onClick:function(){c(t)},children:Object(b.jsx)("i",{className:"fas fa-minus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-delete",onClick:function(){a(t)},children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})]})})),m=Object(c.memo)((function(e){var t=a.a.createRef();return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(n){n.preventDefault();var c=t.current.value;0!==c.length?(e.onAddHabit(c),t.current.value=""):alert("\uc2b5\uad00\uc744 \ud55c\uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694")},children:[Object(b.jsx)("input",{ref:t,className:"add-input",type:"text",autoComplete:"off",placeholder:"\uc2b5\uad00\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(b.jsx)("button",{className:"add-button",children:"Add"})]})})),d=function(e){var t=e.habits,n=e.onAddHabit,c=e.onIncrement,a=e.onDecrement,i=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{onAddHabit:n}),Object(b.jsx)("ul",{className:"habits",children:t.map((function(e){return Object(b.jsx)(j,{habit:e,onIncrement:c,onDecrement:a,onDelete:i},e.id)}))})]})},f=Object(c.memo)((function(e){var t=e.onReset;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:"habits-reset",onClick:t,children:"Reset All"})})})),h=function(){var e=Object(c.useState)([{id:"habit1",name:"Reading",count:0},{id:"habit2",name:"Running",count:0},{id:"habit3",name:"Coding",count:0},{id:"4",name:"\ubb3c\ub9c8\uc2dc\uae30",count:0},{id:"5",name:"\uc220\ub9c8\uc2dc\uae30",count:0},{id:"6",name:"\ucee4\ud53c\ub9c8\uc2dc\uae30",count:0},{id:"7",name:"\uc0b0\ucc45\ud558\uae30",count:0},{id:"8",name:"\uac77\uae30",count:0},{id:"9",name:"\uc804\ud654\ud558\uae30",count:0},{id:"10",name:"\ub178\ub798\ub4e3\uae30",count:0},{id:"11",name:"\ub178\ub798\ubd80\ub974\uae30",count:0},{id:"12",name:"\uac00",count:0},{id:"13",name:"\ub098",count:0}]),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useCallback)((function(e){n.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("\uac19\uc74c \uc774\ub984\uc758 \uc2b5\uad00\uc774 \uc788\uc2b5\ub2c8\ub2e4"):(n.push(),a((function(t){return[].concat(Object(r.a)(t),[{id:"habit_"+e,name:e,count:0}])})))}),[]),o=Object(c.useCallback)((function(e){a((function(t){return t.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)({},e),{},{count:t.count+1}):t}))}))}),[]),j=Object(c.useCallback)((function(e){a((function(t){return t.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(s.a)(Object(s.a)({},e),{},{count:n<0?0:n})}return t}))}))}),[]),m=Object(c.useCallback)((function(e){a((function(t){return t.filter((function(t){return t.id!==e.id}))}))}),[]),h=Object(c.useCallback)((function(){a((function(e){return e.map((function(e){return 0!==e.count?Object(s.a)(Object(s.a)({},e),{},{count:0}):e}))}))}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l,{totalCount:n.filter((function(e){return e.count>0})).length}),Object(b.jsx)(d,{habits:n,onIncrement:o,onDecrement:j,onDelete:m,onAddHabit:i}),Object(b.jsx)(f,{onReset:h})]})};n(17);o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c79b951f.chunk.js.map
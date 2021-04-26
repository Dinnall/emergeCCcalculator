(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{50:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(28),c=a.n(s),i=(a(50),a(3)),l=a(4),d=a(6),o=a(5),h=a(15),u=a(9),j=a(2),b=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"card-result",children:[Object(j.jsx)("label",{children:this.props.label}),Object(j.jsx)("span",{children:this.props.value})]})}}]),a}(r.a.Component),p={single:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};Object.assign(a,e);var n={monthly:0,payoff:0,total:0,interestPaid:0,schedule:[]};if("object"!==typeof a||"undefined"===typeof a.balance||"undefined"===typeof a.rate||"undefined"===typeof a.minimum)return n;a.balance=parseFloat((a.balance/100).toFixed(2)),n.monthly=a.minimum*a.balance/100,n.monthly=this.round(n.monthly);var r=this.getSchedule(a,t);return Object.assign(n,r),n.interestPaid=this.round(n.total-a.balance),n.payoff-=1,n},getSchedule:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={payoff:0,total:0,schedule:[]},n=e.balance,r=e.rate/360,s=30*r;a.schedule.push({payment:0,interest:0,principal:0,balance:n});for(var c=0;c<999&&!(this.round(n)<=0);c++){var i=e.minimum*n/100;e.extra&&t&&(i+=parseFloat(e.extra/100)),i<15&&(i=15);var l=s*n/100;i>n+l&&(i=n+l);var d=(i=this.round(i))-(l=this.round(l));n-=d,a.schedule.push({payment:this.round(i),interest:this.round(l),principal:this.round(d),balance:this.round(n)}),a.payoff++,a.total+=i}return a.total=this.round(a.total),a},all:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={monthly:0,payoff:0,total:0,interestPaid:0,schedule:[]};return e.forEach((function(e){var r=t.single(e,a);n.monthly+=r.monthly,r.payoff>n.payoff&&(n.payoff=r.payoff),n.total+=r.total,n.interestPaid+=r.interestPaid,n.schedule=t.mergeSchedules(n.schedule,r.schedule)})),n},mergeSchedules:function(e,t){var a,n;return e.length>t.length?(a=e,n=t):(a=t,n=e),n.forEach((function(e,t){a[t].payment+=e.payment,a[t].interest+=e.interest,a[t].principal+=e.principal,a[t].balance+=e.balance})),a},round:function(e){return Math.round(100*e)/100}},m={usd:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("number"===typeof(e=p.round(e,1))&&/^[0-9]+\.[0-9]{1,2}$/.test(e.toString()))return"$".concat(e)+(t?" USD":"");var a=this.getOnlyNumber(e),n=a[0],r=a[1];","===(n=(n=n.split("").reverse().join("")).replace(/[0-9]{3}/g,"$&,")).slice(-1)&&(n=n.substr(0,n.length-1)),n=n.split("").reverse().join("");var s="$".concat(n,".").concat(r);return t?"".concat(s," USD"):s},months:function(e){if(e>12){var t=Math.floor(e/12),a=e-12*t;return"".concat(t," Years and ").concat(a," Months")}return"".concat(e," Months")},getOnlyNumber:function(e){var t=e.toString().replaceAll(/[^0-9]/g,""),a="00";return t.length>2&&(a=t.slice(-2),t=t.substr(0,t.length-2)),[t,a]},percent:function(e,t){return e.toString().replaceAll(/[^0-9]/g,"")+"%"}},O=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={editing:!1,drag:!1},n.dragStartHandler=n.dragStartHandler.bind(Object(u.a)(n)),n.dragEndHandler=n.dragEndHandler.bind(Object(u.a)(n)),n.dragHandler=n.dragHandler.bind(Object(u.a)(n)),n.fakeChange=n.fakeChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.value;switch(this.props.type){case"big":t=this.state.editing?(t/100).toFixed(2):m.usd(t);break;case"bubble":t="extra"===this.props.name?this.state.editing?(t/100).toFixed(2):m.usd(t,!1):this.state.editing?t:m.percent(t)}var a=0,n=1;switch(this.props.name){case"extra":a=1e5,n=1;break;case"rate":a=36;break;case"minimum":a=20}return Object(j.jsxs)("div",{className:"card-header-input "+this.props.type,children:[Object(j.jsx)("label",{children:this.props.label}),Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("input",{type:"text",name:this.props.name,value:t,onChange:this.props.onChange,onFocus:function(){return e.setState({editing:!0})},onBlur:function(){return e.setState({editing:!1})},draggable:"bubble"===this.props.type,onDragStart:this.dragStartHandler,onDrag:this.dragHandler,onDragEnd:this.dragEndHandler}),"bubble"===this.props.type&&Object(j.jsx)("input",{type:"range",step:n,min:0,max:a,value:this.props.value,name:this.props.name,onChange:this.props.onChange})]})]})}},{key:"dragStartHandler",value:function(e){var t=new Image;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0),this.setState({drag:e.clientX})}},{key:"dragEndHandler",value:function(){this.setState({drag:!1})}},{key:"dragHandler",value:function(e){if(!1!==this.state.drag){var t=e.clientX-this.state.drag;if(t%20===0){this.setState({drag:e.clientX});var a=parseInt(e.target.value,10);t>0?a++:a--,this.fakeChange(a)}}}},{key:"fakeChange",value:function(e){this.props.onChange({target:{name:this.props.name,value:e.toString()}})}}]),a}(r.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.single(this.props.data);return Object(j.jsxs)("div",{className:"single-card",children:[Object(j.jsxs)("div",{className:"card-header",children:[Object(j.jsx)(O,{name:"balance",value:this.props.data.balance,type:"big",onChange:this.handleChange,label:"Credit card balance"}),Object(j.jsx)(O,{name:"rate",value:this.props.data.rate,type:"bubble",onChange:this.handleChange,label:"Credit card rate"}),Object(j.jsx)(O,{name:"minimum",value:this.props.data.minimum,type:"bubble",onChange:this.handleChange,label:"Minimum payment"}),Object(j.jsx)(O,{name:"extra",value:this.props.data.extra,type:"bubble",onChange:this.handleChange,label:"Monthly additionally"})]}),Object(j.jsxs)("div",{className:"card-summary",ref:function(t){return e.componentRef=t},children:[Object(j.jsx)(b,{label:"Monthly payment",value:m.usd(100*t.monthly)}),Object(j.jsx)(b,{label:"Balance payoff",value:m.months(t.payoff)}),Object(j.jsx)(b,{label:"Total payments",value:m.usd(100*t.total)})]}),Object(j.jsxs)("div",{className:"card-footer",children:[this.props.clone&&Object(j.jsx)("div",{className:"card-clone pointer",onClick:function(){return e.props.clone()},children:"Clone"}),this.props.remove&&Object(j.jsx)("div",{className:"card-remove pointer",onClick:function(){return e.props.remove()},children:"Remove"})]})]})}},{key:"handleChange",value:function(e){var t=e.target.value;t=t.replaceAll(/[^0-9]/g,"");var a=e.target.name,n=this.props.data;t>36&&"rate"===a&&(t=36),t>20&&"minimum"===a&&(t=20),t>1e5&&"extra"===a&&(t=1e5),"undefined"!==typeof n[a]&&(n[a]=t,this.props.update(n))}}]),a}(r.a.Component),x=(a(52),a(41)),v=a(11),y=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[],a=[];return this.props.schedule.forEach((function(n,r){e.props.schedule.length>12&&r%12!==0||(a.push(r),t.push({x:r,y:100*n.balance}))})),Object(j.jsx)("div",{className:"BalanceChart",children:Object(j.jsx)(x.a,{children:function(e){var n=e.width,r=e.height;return Object(j.jsxs)(v.e,{margin:{left:100},height:r,width:n,children:[Object(j.jsx)(v.c,{}),Object(j.jsx)(v.b,{}),Object(j.jsx)(v.d,{tickValues:a}),Object(j.jsx)(v.f,{tickFormat:function(e){return m.usd(e)}}),Object(j.jsx)(v.a,{className:"paymentChart",curve:"curveLinear",data:t,color:"#33208e"})]})}})})}}]),a}(r.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.all(this.props.cards,this.props.addExtra);return Object(j.jsxs)("div",{className:"big-result",children:[Object(j.jsxs)("div",{className:"result-main single-result",children:[Object(j.jsx)("label",{children:this.props.addExtra?"Paying a little more than required minimum total":"Debt repayment using credit card minimums total"}),Object(j.jsx)("span",{children:m.usd(100*t.total,!1)})]}),Object(j.jsx)("button",{className:"view-report",onClick:function(){return e.props.report()},children:"View report"}),Object(j.jsxs)("div",{className:"result-secondary",children:[Object(j.jsxs)("div",{className:"single-result",children:[Object(j.jsx)("label",{children:"Time to Payoff"}),Object(j.jsx)("span",{children:m.months(t.payoff)})]}),Object(j.jsxs)("div",{className:"single-result",children:[Object(j.jsx)("label",{children:"Interests paid"}),Object(j.jsx)("span",{children:m.usd(100*t.interestPaid)})]})]}),Object(j.jsxs)("div",{className:"result-chart single-result",children:[Object(j.jsxs)("label",{children:["Debt payoff is estimated at ",m.months(t.payoff)]}),Object(j.jsx)(y,{schedule:t.schedule})]})]})}}]),a}(r.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.all(this.props.cards,this.props.addExtra);return Object(j.jsxs)("div",{className:"big-result",children:[Object(j.jsxs)("div",{className:"result-main single-result",children:[Object(j.jsx)("label",{children:this.props.addExtra?"Paying a little more than required minimum total":"Debt repayment using credit card minimums total"}),Object(j.jsx)("span",{children:m.usd(100*t.total,!1)})]}),Object(j.jsx)("button",{className:"view-report",onClick:function(){return e.props.report()},children:"View report"}),Object(j.jsxs)("div",{className:"result-secondary",children:[Object(j.jsxs)("div",{className:"single-result",children:[Object(j.jsx)("label",{children:"Time to Payoff"}),Object(j.jsx)("span",{children:m.months(t.payoff)})]}),Object(j.jsxs)("div",{className:"single-result",children:[Object(j.jsx)("label",{children:"Interests Saved"}),Object(j.jsx)("span",{children:m.usd(100*t.interestPaid)})]})]}),Object(j.jsxs)("div",{className:"result-chart single-result",children:[Object(j.jsxs)("label",{children:["Debt payoff is estimated at ",m.months(t.payoff)]}),Object(j.jsx)(y,{schedule:t.schedule})]})]})}}]),a}(r.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=p.all(this.props.cards),t=0,a=0;return this.props.cards.forEach((function(e){t+=parseFloat(e.balance)})),this.props.cards.forEach((function(e){a+=e.balance/t*e.rate})),a=p.round(a),Object(j.jsx)("div",{className:"debt-summary",children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("thead",{children:[Object(j.jsx)("tr",{children:Object(j.jsx)("th",{colSpan:"100",children:"Debt summary"})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"Balance"}),Object(j.jsx)("th",{children:"Interest Rate"}),Object(j.jsx)("th",{children:"Monthly Payment"}),Object(j.jsx)("th",{children:"Interest Paid"}),Object(j.jsx)("th",{children:"Total Payments"}),Object(j.jsx)("th",{children:"Time to Payoff"})]})]}),Object(j.jsx)("tbody",{children:this.props.cards.map((function(e,t){var a=p.single(e);return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("th",{children:["Credit Card #",t+1]}),Object(j.jsx)("td",{children:m.usd(e.balance,!1)}),Object(j.jsx)("td",{children:m.percent(e.rate)}),Object(j.jsx)("td",{children:m.usd(100*a.monthly,!1)}),Object(j.jsx)("td",{children:m.usd(100*a.interestPaid,!1)}),Object(j.jsx)("td",{children:m.usd(100*a.total,!1)}),Object(j.jsx)("td",{children:m.months(a.payoff)})]},t)}))}),Object(j.jsx)("tfoot",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Totals"}),Object(j.jsx)("td",{children:m.usd(t,!1)}),Object(j.jsx)("td",{children:a+"%"}),Object(j.jsx)("td",{children:m.usd(100*e.monthly,!1)}),Object(j.jsx)("td",{children:m.usd(100*e.interestPaid,!1)}),Object(j.jsx)("td",{children:m.usd(100*e.total,!1)}),Object(j.jsx)("td",{children:m.months(e.payoff)})]})})]})})}}]),a}(r.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"payment-schedule",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"Payment"}),Object(j.jsx)("th",{children:"Interest"}),Object(j.jsx)("th",{children:"Principal"}),Object(j.jsx)("th",{children:"Balance"})]})}),Object(j.jsx)("tbody",{children:this.props.schedule.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:t||""}),Object(j.jsx)("td",{children:m.usd(100*e.payment,!1)}),Object(j.jsx)("td",{children:m.usd(e.interest,!1)}),Object(j.jsx)("td",{children:m.usd(e.principal,!1)}),Object(j.jsx)("td",{children:m.usd(100*e.balance,!1)})]},t)}))})]})})}}]),a}(r.a.Component),S=(a(73),a(43)),A=a.n(S),P=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.all(this.props.cards,this.props.addExtra),a=0;return this.props.cards.forEach((function(e){a+=parseFloat(e.balance)})),Object(j.jsx)("div",{className:"report",children:Object(j.jsxs)("div",{className:"report-inner",ref:function(t){return e.componentRef=t},children:[Object(j.jsx)(A.a,{trigger:function(){return Object(j.jsx)("span",{className:"print-report",children:"Print this report"})},content:function(){return e.componentRef}}),Object(j.jsx)("span",{className:"close-report",onClick:function(){return e.props.report()},children:"Close report"}),this.props.addExtra?Object(j.jsxs)("h4",{children:["Paying a little more than required minimum total will take ",m.months(t.payoff)," to payoff your debt."]}):Object(j.jsxs)("h4",{children:["Minimum payments will take ",m.months(t.payoff)," to payoff your debt."]}),this.props.addExtra?Object(j.jsxs)("p",{children:["You owe a total of ",m.usd(a)," having a total monthly payment of ",m.usd(100*t.monthly),". If you continue to make this same amount of additional payments it will take you ",m.months(t.payoff)," to payoff this debt. Your total interest paid will now be ",m.usd(100*t.interestPaid),"."]}):Object(j.jsxs)("p",{children:["You owe a total of ",m.usd(a)," having a total monthly payment of ",m.usd(100*t.monthly),". If you continue to make the minimum payments it will take you ",m.months(t.payoff)," to payoff this debt. The total interest paid will be ",m.usd(100*t.interestPaid),"."]}),Object(j.jsxs)("h3",{children:["Debt payoff is estimated at ",m.months(t.payoff)]}),Object(j.jsx)(y,{schedule:t.schedule}),Object(j.jsx)(k,{cards:this.props.cards}),Object(j.jsx)("h4",{children:"Credit Card Payment Schedule"}),Object(j.jsx)(N,{schedule:t.schedule})]})})}}]),a}(r.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var r=localStorage.getItem("current-cards")?JSON.parse(localStorage.getItem("current-cards")):[{balance:3e5,rate:20,minimum:10,extra:0}];return n.state={cards:r,report:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"calculator",children:[Object(j.jsxs)("div",{className:"cards-container",children:[this.state.cards.map((function(t,a){return Object(j.jsx)(f,{data:t,update:function(t){return e.update(a,t)},clone:function(){return e.clone(a)},remove:e.state.cards.length>1&&function(){return e.remove(a)}},a)})),Object(j.jsx)("button",{className:"add-card",onClick:function(){return e.add()},children:"Add new card"})]}),Object(j.jsxs)("div",{className:"twin-results",children:[Object(j.jsx)(g,{cards:this.state.cards,report:function(){return e.setState({report:!1})},addExtra:!1}),Object(j.jsx)(C,{cards:this.state.cards,report:function(){return e.setState({report:!0})},addExtra:!0})]}),0!==this.state.report&&Object(j.jsx)(P,{cards:this.state.cards,report:function(){return e.setState({report:0})},addExtra:this.state.report})]})}},{key:"update",value:function(e,t){var a=Object(h.a)(this.state.cards);a[e]=t,this.updateCards(a)}},{key:"remove",value:function(e){var t=Object(h.a)(this.state.cards);t.length<=1||(t.splice(e,1),this.updateCards(t))}},{key:"clone",value:function(e){var t=Object(h.a)(this.state.cards);if(t[e]){var a={};Object.assign(a,t[e]),t.push(a),this.updateCards(t)}}},{key:"add",value:function(){var e=Object(h.a)(this.state.cards);e.push({balance:0,rate:0,minimum:0,extra:0}),this.updateCards(e)}},{key:"updateCards",value:function(e){this.setState({cards:e}),localStorage.setItem("current-cards",JSON.stringify(e))}}]),a}(r.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Header",children:"Emerge CC Payment Calculator"})}}]),a}(r.a.Component),I=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(E,{}),Object(j.jsx)(w,{})]})}}]),a}(r.a.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.47f060fb.chunk.js.map
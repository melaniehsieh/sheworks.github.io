(this.webpackJsonpsheworks=this.webpackJsonpsheworks||[]).push([[0],{123:function(e,t,a){e.exports=a(133)},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(66),o=a.n(l),i=a(7),u=a(1),c=(a(64),function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"/sheworks_logo_wo_tag.png"}),r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"what is sheworks?"),r.a.createElement("p",null,"sheworks is a web app that allows women to track their time spent on domestic labor.")),r.a.createElement("div",{id:"container"},r.a.createElement("img",{src:"/6.png"}),r.a.createElement("p",null,"share how much time you spend on hard work with your loved ones, so they can help too.")),r.a.createElement("div",{id:"container"},r.a.createElement("img",{src:"/8.png"}),r.a.createElement("p",null,"celebrate your accomplishments with your family & friends because you deserve it!")),r.a.createElement("div",{id:"container"},r.a.createElement("img",{src:"/7.png"}),r.a.createElement("p",null,"empower yourself to appreciate your contributions, value your time, and do your best work.")))}),s=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"About sheworks"),r.a.createElement("h3",null,"Have you ever read Melinda Gates' book, Moment Of Lift?"),r.a.createElement("p",null,"She talks about this topic of unpaid labor where women usually do alot of unpaid labor like housework, taking care of their kids, making food etc. And because of this they are put in a state where it's much more difficult for them to find time and energy to actually put effort into working on improving themselves, whether that be getting a job, education or exploring their own interest etc."),r.a.createElement("p",null,"Sheworks can help them track their unpaid labor each day. We remind them that they too also have the right to improve themselves and should be valued for their work.")))},d=a(10),m=a(11),h=a(13),p=a(12),E=a(2),y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=this.props.width,t=this.props.height,a=this.props.margin,n=Math.min(e,t)/2-a,r=E.l("#donut_time").append("svg").attr("width",e).attr("height",t).append("g").attr("transform","translate("+e/2+","+t/2+")"),l={Father:27,Mother:44,Older_Sister:24,Younger_Sister:10,Older_Brother:20,Younger_Brother:6},o=E.j().domain(l).range(E.k),i=E.h().sort(null).value((function(e){return e.value}))(E.d(l)),u=E.a().innerRadius(.5*n).outerRadius(.8*n),c=E.a().innerRadius(.9*n).outerRadius(.9*n);r.selectAll("allSlices").data(i).enter().append("path").attr("d",u).attr("fill",(function(e){return o(e.data.key)})).attr("stroke","white").style("stroke-width","2px").style("opacity",.7),r.selectAll("allPolylines").data(i).enter().append("polyline").attr("stroke","black").style("fill","none").attr("stroke-width",1).attr("points",(function(e){var t=u.centroid(e),a=c.centroid(e),r=c.centroid(e),l=e.startAngle+(e.endAngle-e.startAngle)/2;return r[0]=.95*n*(l<Math.PI?1:-1),[t,a,r]})),r.selectAll("allLabels").data(i).enter().append("text").text((function(e){return e.data.value})).attr("transform",(function(e){var t=c.centroid(e),a=e.startAngle+(e.endAngle-e.startAngle)/2;return t[0]=.99*n*(a<Math.PI?1:-1),"translate("+t+")"})).style("text-anchor",(function(e){return e.startAngle+(e.endAngle-e.startAngle)/2<Math.PI?"start":"end"}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"donut_time"})}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){document.addEventListener("DOMContentLoaded",(function(e){var t=10,a=50,n=50,r=60,l=460-r-a,o=400-t-n,i=E.l("#my_dataviz").append("svg").attr("width",l+r+a).attr("height",o+t+n).append("g").attr("transform","translate("+r+","+t+")"),u=[{days:"1",id:"1",Hours:1},{days:"2",id:"1",Hours:2},{days:"3",id:"1",Hours:1.5},{days:"4",id:"1",Hours:1},{days:"5",id:"1",Hours:2},{days:"6",id:"1",Hours:1.5},{days:"7",id:"1",Hours:1.5},{days:"1",id:"2",Hours:6},{days:"2",id:"2",Hours:5},{days:"3",id:"2",Hours:7},{days:"4",id:"2",Hours:3},{days:"5",id:"2",Hours:4},{days:"6",id:"2",Hours:2},{days:"7",id:"2",Hours:5},{days:"1",id:"3",Hours:2},{days:"2",id:"3",Hours:1},{days:"3",id:"3",Hours:.1},{days:"4",id:"3",Hours:4},{days:"5",id:"3",Hours:.5},{days:"6",id:"3",Hours:.75},{days:"7",id:"3",Hours:.5}],c=E.g().key((function(e){return e.id})).entries(u),s=E.i().domain([1,E.f(u,(function(e){return e.days}))]).range([0,l]);i.append("g").attr("transform","translate(0,"+o+")").call(E.b(s).ticks(3));var d=E.i().domain([0,E.f(u,(function(e){return+e.Hours}))]).range([o,0]);i.append("g").call(E.c(d));var m=c.map((function(e){return e.key})),h=E.j().domain(m).range(E.k);i.selectAll(".line").data(c).enter().append("path").attr("fill","none").attr("stroke",(function(e){return h(e.key)})).attr("stroke-width",5).attr("d",(function(e){return E.e().x((function(e){return s(e.days)})).y((function(e){return d(+e.Hours)}))(e.values)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"my_dataviz"})}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={width:450,height:500,margin:40},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("h1",null,"Daily"),r.a.createElement(y,{width:this.state.width,height:this.state.height,margin:this.state.margin})),r.a.createElement("div",null,r.a.createElement("h1",null,"Weekly"),r.a.createElement(f,null)),r.a.createElement("div",null,r.a.createElement("h1",null,"Family Members"),r.a.createElement("ul",null,r.a.createElement("li",{style:{background:"#2AB290"}},"Father"),r.a.createElement("li",{style:{background:"#F17B3C"}},"Mother"),r.a.createElement("li",{style:{background:"#7B68B4"}},"Older Sister"),r.a.createElement("li",{style:{background:"#FF3D96"}},"Younger Sister"),r.a.createElement("li",{style:{background:"#87B858"}},"Older Brother"),r.a.createElement("li",{style:{background:"#F4B644"}},"Younger Brother"))))}}]),a}(r.a.Component),v=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"Family"),r.a.createElement("p",null,"This is your family"),r.a.createElement("h2",null,"Father"),r.a.createElement("h2",null,"Mother"),r.a.createElement("h2",null,"Older Sister"),r.a.createElement("h2",null,"Younger Sister"),r.a.createElement("h2",null,"Older Brother"),r.a.createElement("h2",null,"Yonger Brother")))},b=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Let's login!"),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit"))))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"No match"))},w=function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement("ul",null,r.a.createElement("h1",null,"sheworks"),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},"about")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/time"},"time")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/family"},"family")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login"},"login"))))};var H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(w,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:c}),r.a.createElement(u.a,{path:"/about",component:s}),r.a.createElement(u.a,{path:"/time",component:g}),r.a.createElement(u.a,{path:"/family",component:v}),r.a.createElement(u.a,{path:"/login",component:b}),r.a.createElement(u.a,{component:k}))))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))},64:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.e2373d91.chunk.js.map
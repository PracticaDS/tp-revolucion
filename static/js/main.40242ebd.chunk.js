(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(18).concat([function(e,t,n){e.exports=n.p+"static/media/furnace.617ec208.PNG"},function(e,t,n){e.exports=n.p+"static/media/seller.3d538c9e.PNG"},function(e,t,n){e.exports=n.p+"static/media/crafter.42bc2297.PNG"},function(e,t,n){e.exports=n.p+"static/media/starter.8d09d4f3.PNG"},function(e,t,n){e.exports=n.p+"static/media/transporter.0c46748f.PNG"},function(e,t,n){e.exports=n.p+"static/media/move.cbfcb2fb.PNG"},function(e,t,n){e.exports=n.p+"static/media/delete.6e7a49f4.PNG"},function(e,t,n){e.exports=n.p+"static/media/rotate.d45efe18.PNG"},,,function(e,t,n){e.exports=n(45)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),i=n.n(r),l=(n(33),n(1)),o=n(2),s=n(4),u=n(3),p=n(5),d=(n(34),n(35),n(36),n(7)),m=function(e){return function(t){t({type:"SELECT_MACHINE",payload:e})}},h=function(){return function(e){e({type:"UNSELECT_MACHINE",payload:null})}},E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).hasMachine=function(){return n.props.machine},n.onClick=function(){n.hasMachine()?(n.props.selectCell({cellId:n.props.id,machine:n.props.machine}),n.props.selectMachine(n.props.id)):n.props.selectedMachine&&(n.props.addMachineToCell(n.props.selectedMachine,n.props.id),n.props.unselectMachine())},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Cell "+(this.props.selected?"selected":""),onClick:this.onClick},this.props.machine?a.a.createElement("img",{src:this.props.machine.img,className:this.props.machine.direction?this.props.machine.direction:"",alt:"actions"}):null)}}]),t}(c.Component),f={unselectMachine:h,addMachineToCell:function(e,t){return function(n){n({type:"ADD_MACHINE_TO_CELL",payload:{machine:e,cellId:t}})}},selectCell:function(e){return function(t){t({type:"SELECT_CELDA",payload:e})}},selectMachine:function(e){return function(t){t({type:"SELECT_MACHINE_2",payload:e})}}},b=Object(d.b)(function(e){return{selectedMachine:e.machineSelected.machine}},f)(E),C=(n(41),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"newCell",value:function(e){return a.a.createElement(b,{key:e.id,id:e.id,machine:e.machine,selected:e.selected})}},{key:"createCells",value:function(){return this.props.cells.map(this.newCell)}},{key:"render",value:function(){return a.a.createElement("div",{className:"Board"},this.createCells())}}]),t}(c.Component)),O=Object(d.b)(function(e){return{cells:e.cells}},null)(C),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).triggerSelectMachineAction=function(){n.props.selectMachine({name:n.props.name,img:n.props.src,price:n.props.price})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.selected&&this.props.name===this.props.machine.name?a.a.createElement("div",{className:"ButtonToolbox seleccionado"},a.a.createElement("img",{src:this.props.src,alt:"actions"})):a.a.createElement("div",{className:"ButtonToolbox",onClick:this.triggerSelectMachineAction},a.a.createElement("img",{src:this.props.src,alt:"actions"}))}}]),t}(c.Component);y.defaultProps={selected:!1};var j=Object(d.b)(function(e){return{machine:e.machineSelected.machine,selected:e.machineSelected.selected}},{selectMachine:m,unselectMachine:h})(y),v=(n(42),n(18)),N=n.n(v),M=n(19),T=n.n(M),A=n(20),g=n.n(A),S=n(21),k=n.n(S),L=n(22),w=n.n(L),_=n(23),I=n.n(_),B=n(24),H=n.n(B),x=n(25),P=n.n(x),D=(n(43),"DELETE"),R="MOVE",G="ROTATE",U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).onClick=function(){if(n.props.selectedCell)switch(n.props.type){case D:n.props.clearCell(n.props.selectedCell.cellId),n.props.unselectCelda();break;case G:n.props.rotateMachine(n.props.selectedCell.cellId),n.props.unselectCelda();break;case R:n.props.clearCell(n.props.selectedCell.cellId),n.props.selectMachine(n.props.selectedCell.machine),n.props.unselectCelda();break;default:n.props.unselectCelda()}},n.clearCell=function(e){return n.props.clearCell(e)},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.selected&&this.props.name===this.props.machine.name?a.a.createElement("div",{className:"EditionButton seleccionado"},a.a.createElement("img",{src:this.props.src,alt:"actions"})):a.a.createElement("div",{className:"EditionButton",onClick:this.onClick},a.a.createElement("img",{src:this.props.src,alt:"actions"}))}}]),t}(c.Component),W={clearCell:function(e){return function(t){t({type:"CLEAR_CELL",payload:e})}},unselectCelda:function(){return function(e){e({type:"UNSELECT_CELL",payload:null})}},rotateMachine:function(e){return function(t){t({type:"ROTATE_MACHINE",payload:e})}},selectMachine:m},J=Object(d.b)(function(e){return{selectedCell:e.selectedCelda.celda}},W)(U),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={toolSeleccionado:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"crearBoton",value:function(e){return a.a.createElement(j,{seleccionado:e.name===this.state.toolSeleccionado,name:e.name,src:e.src,price:e.price})}},{key:"createEditionButton",value:function(e){return a.a.createElement(J,{seleccionado:e.name===this.state.toolSeleccionado,machine:e.name,src:e.src,type:e.type})}},{key:"render",value:function(){return a.a.createElement("div",{className:"ToolBox"},a.a.createElement("h3",null,"M\xe1quinas"),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,this.crearBoton({name:"starter",src:k.a,price:400})),a.a.createElement("td",null,this.crearBoton({name:"crafter",src:g.a,price:500}))),a.a.createElement("tr",null,a.a.createElement("td",null,this.crearBoton({name:"seller",src:T.a,price:300})),a.a.createElement("td",null,this.crearBoton({name:"furnace",src:N.a,price:200}))),a.a.createElement("tr",null,a.a.createElement("td",null,this.crearBoton({name:"transporter",src:w.a,price:100}))))),a.a.createElement("h3",null,"Edici\xf3n"),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,this.createEditionButton({name:"delete",src:H.a,type:D})),a.a.createElement("td",null,this.createEditionButton({name:"move",src:I.a,type:R}))),a.a.createElement("tr",null,a.a.createElement("td",null,this.createEditionButton({name:"rotate",src:P.a,type:G}))))))}}]),t}(c.Component),q=(n(44),function(e){function t(){var e,n;Object(l.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getName=function(){var e=n.props.selectedMachine;return e&&e.name?e.name.charAt(0).toUpperCase()+e.name.slice(1):""},n.getPrice=function(){var e=n.props.selectedMachine;return e&&e.price?"$".concat(e.price):""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"MachineDescription"},a.a.createElement("h3",null,"Descripci\xf3n"),a.a.createElement("div",{className:"description"},a.a.createElement("p",null,"Name:",a.a.createElement("span",null,this.getName())),a.a.createElement("p",null,"Precio:",a.a.createElement("span",null,this.getPrice()))))}}]),t}(c.Component)),F=Object(d.b)(function(e){return{selectedMachine:e.machineSelected.machine}},null)(q),V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Fabrica"},a.a.createElement($,null),a.a.createElement(O,null),a.a.createElement(F,null))}}]),t}(c.Component),z=n(8),K=n(26),Q=n(6),X={},Y={},Z=function(){for(var e=[],t=1;t<=100;t++)e.push({id:t,machine:void 0});return e}(),ee=function(e,t){return e.map(function(e){return e.id===t?{id:e.id}:e})},te=function(e,t){return e.map(function(e){return e.id===t?Object(Q.a)({},e,{selected:!0}):Object(Q.a)({},e,{selected:!1})})},ne=function(e,t){return e.map(function(e){return e.id===t.cellId?{id:e.id,machine:Object(Q.a)({},t.machine,{direction:t.machine.direction?t.machine.direction:"SOUTH"})}:e})},ce=function(e,t){return e.map(function(e){return e.id===t?{id:e.id,machine:ae(e.machine)}:e})},ae=function(e){switch(e.direction){case"SOUTH":return Object(Q.a)({},e,{direction:"EAST"});case"EAST":return Object(Q.a)({},e,{direction:"NORTH"});case"NORTH":return Object(Q.a)({},e,{direction:"WEST"});case"WEST":return Object(Q.a)({},e,{direction:"SOUTH"});default:return e}},re=Object(z.combineReducers)({machineSelected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_MACHINE":return Object(Q.a)({},e,{machine:t.payload,selected:!0});case"UNSELECT_MACHINE":return Object(Q.a)({},e,{machine:t.payload,selected:!1});default:return e}},selectedCelda:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CELDA":return Object(Q.a)({},e,{celda:t.payload});case"UNSELECT_CELL":return Object(Q.a)({},e,{celda:null});case"EDIT_MACHINE":return Object(Q.a)({},e,{editionAction:t.payload});default:return e}},cells:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROTATE_MACHINE":return ce(e,t.payload);case"SELECT_MACHINE_2":return te(e,t.payload);case"ADD_MACHINE_TO_CELL":return ne(e,t.payload);case"CLEAR_CELL":return ee(e,t.payload);default:return e}}}),ie=n(27),le=[K.a],oe=Object(z.createStore)(re,{},Object(ie.composeWithDevTools)(z.applyMiddleware.apply(void 0,le))),se=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,{store:oe},a.a.createElement("div",{className:"Container"},a.a.createElement("h1",null,"Revoluci\xf3n Industrial"),a.a.createElement("div",{className:"App"},a.a.createElement(V,null))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[28,1,2]]]);
//# sourceMappingURL=main.40242ebd.chunk.js.map
(function(r){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(r[a]=c[a]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var r,e=0;e<o.length;e++){for(var t=o[e],a=!0,s=1;s<t.length;s++){var c=t[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),r=i(i.s=t[0]))}return r}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=a,i.d=function(r,e,t){i.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)i.d(t,a,function(e){return r[e]}.bind(null,a));return t},i.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(e,"a",e),e},i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},i.p="./";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(r,e,t){r.exports=t("56d7")},1:function(r,e){},"56d7":function(r,e,t){"use strict";t.r(e);t("99af"),t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-app",[t("v-main",[t("Principal")],1)],1)},o=[],i=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("v-tabs",{attrs:{"background-color":"cyan",dark:"","fixed-tabs":"","icons-and-text":""},model:{value:r.tab,callback:function(e){r.tab=e},expression:"tab"}},[t("v-tabs-slider",{attrs:{color:"yellow"}}),t("v-tab",[r._v(" Horarios "),t("v-icon",[r._v("mdi-clipboard-clock")])],1),t("v-tab",[r._v(" Reportes "),t("v-icon",[r._v("mdi-file-table-box-multiple")])],1),t("v-tab",[r._v(" Comisiones "),t("v-icon",[r._v("mdi-currency-usd")])],1),t("v-tab",[r._v(" Rutas "),t("v-icon",[r._v("mdi-bus")])],1),t("v-tab",[r._v(" Acerca de "),t("v-icon",[r._v("mdi-information-outline")])],1)],1),t("v-tabs-items",{model:{value:r.tab,callback:function(e){r.tab=e},expression:"tab"}},[t("v-tab-item",[t("Horarios",{ref:"horarios",on:{actualizados:function(e){return r.actualizarReporte()}}})],1),t("v-tab-item",[t("Reportes",{ref:"reportes"})],1),t("v-tab-item",[t("Comisiones")],1),t("v-tab-item",[t("Rutas",{on:{actualizadas:r.actualizarRutasEnHorarios}})],1),t("v-tab-item",[t("AcercaDe")],1)],1)],1)},s=[],c=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{attrs:{flat:""}},[t("ConfirmarEliminacionRuta",{attrs:{ruta:r.rutaSeleccionada,mostrar:r.mostrarDialogoEliminar},on:{confirmado:function(e){return r.eliminarRutaSeleccionada()},cerrar:r.cerrarDialogo}}),t("AgregarRuta",{attrs:{mostrar:r.mostrarDialogoAgregar},on:{guardada:r.onRutaGuardada,cerrar:function(e){r.mostrarDialogoAgregar=!1}}}),r.rutas.length>0?t("div",r._l(r.rutas,(function(e,a){return t("div",{key:a},[t("v-list-item",{attrs:{"two-line":""},on:{click:function(t){return r.confirmarEliminacion(e)}}},[t("v-list-item-content",[t("v-list-item-title",[r._v(r._s(e.nombre))])],1)],1),t("v-divider")],1)})),0):t("div",[t("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[r._v(" Todavía no hay rutas. Agrega una con el botón flotante ")])],1),t("v-btn",{attrs:{color:"primary",fab:"",elevation:"2",right:"",bottom:"",fixed:""},on:{click:function(e){return r.mostrarDialogoAgregarRuta()}}},[t("v-icon",[r._v("mdi-plus")])],1),t("v-snackbar",{attrs:{top:"",timeout:"700"},model:{value:r.snackbar.mostrar,callback:function(e){r.$set(r.snackbar,"mostrar",e)},expression:"snackbar.mostrar"}},[r._v(" "+r._s(r.snackbar.texto)+" ")])],1)},u=[],l=(t("96cf"),t("1da1")),d=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[r._v(" Confirmación ")]),t("v-card-text",[r._v("¿Eliminar "),t("strong",[r._v(r._s(r.ruta.nombre))]),r._v("?"),t("br"),r._v(" Se van a eliminar los horarios relacionados ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:r.confirmar}},[r._v(" Eliminar ")])],1)],1)],1)},m=[],f={props:["mostrar","ruta"],name:"ConfirmarEliminacionRuta",data:function(){return{}},methods:{cerrar:function(){this.$emit("cerrar")},confirmar:function(){this.$emit("confirmado")}}},v=f,p=t("2877"),h=t("6544"),g=t.n(h),b=t("8336"),_=t("b0af"),R=t("99d9"),x=t("169a"),O=t("2fa4"),w=Object(p["a"])(v,d,m,!1,null,"6fe8b434",null),C=w.exports;g()(w,{VBtn:b["a"],VCard:_["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDialog:x["a"],VSpacer:O["a"]});var k=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[r._v(" Nueva ruta ")]),t("v-form",{ref:"formulario",staticClass:"mx-2",model:{value:r.formularioValido,callback:function(e){r.formularioValido=e},expression:"formularioValido"}},[t("v-text-field",{attrs:{rules:r.reglasValidacion.nombre,label:"Nombre",required:""},model:{value:r.ruta.nombre,callback:function(e){r.$set(r.ruta,"nombre",e)},expression:"ruta.nombre"}}),t("v-text-field",{style:{backgroundColor:r.ruta.color},attrs:{label:"Color",type:"color"},model:{value:r.ruta.color,callback:function(e){r.$set(r.ruta,"color",e)},expression:"ruta.color"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{color:"green darken-1",disabled:!r.formularioValido,text:""},on:{click:r.guardar}},[r._v(" Guardar ")])],1)],1)],1)},S=[],I=(t("7db0"),t("16b2")),j=t("5d16");I["a"].plugin(j["a"]);var y=new I["a"]("rutas");y.createIndex({index:{fields:["hora"]}});var T=y,V=(t("d3b7"),t("25f0"),{restarHorarios:function(r,e){var t=this.formatearFechaActual(),a=new Date(t+"T"+r),n=new Date(t+"T"+e);return a-n},idConSufijo:function(r){return r.concat("_",this.formatearFechaYHoraParaId())},formatearFechaYHoraParaId:function(){var r=new Date,e=r.getMonth()+1,t=r.getDate(),a="".concat(r.getFullYear(),"-").concat(this.agregarCeroSiEsNecesario(e),"-").concat(this.agregarCeroSiEsNecesario(t)),n="".concat(this.agregarCeroSiEsNecesario(r.getHours()),"_").concat(this.agregarCeroSiEsNecesario(r.getMinutes()),"_").concat(this.agregarCeroSiEsNecesario(r.getSeconds()));return a+"_"+n},formatearHoraActual:function(){var r=new Date;return"".concat(this.agregarCeroSiEsNecesario(r.getHours()),":").concat(this.agregarCeroSiEsNecesario(r.getMinutes()),":").concat(this.agregarCeroSiEsNecesario(r.getSeconds()))},formatearFechaActual:function(){var r=new Date,e=r.getMonth()+1,t=r.getDate();return"".concat(r.getFullYear(),"-").concat(this.agregarCeroSiEsNecesario(e),"-").concat(this.agregarCeroSiEsNecesario(t))},agregarCeroSiEsNecesario:function(r){return r<10?"0".concat(r):r.toString()}}),A=V,E="Rojo",D="R-3",H={TIPO_ROJO:E,TIPO_COMBI:D,TIPOS_UNIDAD:[D,E],PREFIJO_RUTAS:"rutas",PREFIJO_HORARIOS:"horarios",PREFIJO_COMISIONES:"comisiones",NUMEROS_PARA_COMISION:[1,4,5,6,7,8,9,10,11,12,13,16,18,19,20,21,22,23,24,25,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,46,47]},$=H,F=(t("a434"),t("b85c")),P={eliminarDeRuta:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.find({selector:{_id:{$gte:$.PREFIJO_HORARIOS,$lte:$.PREFIJO_HORARIOS+"￰"},idRuta:r}});case 2:t=e.sent,a=Object(F["a"])(t.docs),e.prev=4,a.s();case 6:if((n=a.n()).done){e.next=14;break}return o=n.value,console.log("Eliminando"),console.log(o),e.next=12,T.remove(o);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](4),a.e(e.t0);case 19:return e.prev=19,a.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})))()},nuevo:function(r,e,t,a,n){return Object(l["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,T.put({_id:A.idConSufijo($.PREFIJO_HORARIOS),idRuta:r,fecha:e,hora:t,tipoUnidad:a,numero:n});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}}),o)})))()},obtenerNumerosPorFechaRutaYTipoUnidad:function(r,e,t){return Object(l["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,T.find({selector:{_id:{$gte:$.PREFIJO_HORARIOS,$lte:$.PREFIJO_HORARIOS+"￰"},fecha:r,idRuta:e,tipoUnidad:t,hora:{$gte:null}}});case 2:return n=a.sent,a.abrupt("return",n.docs);case 4:case"end":return a.stop()}}),a)})))()},obtenerPorFechaEIdRuta:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.find({selector:{_id:{$gte:$.PREFIJO_HORARIOS,$lte:$.PREFIJO_HORARIOS+"￰"},fecha:r,idRuta:e,hora:{$gte:null}},sort:[{hora:"desc"}]});case 2:return a=t.sent,t.abrupt("return",a.docs);case 4:case"end":return t.stop()}}),t)})))()},obtenerUltimoHorarioRegistrado:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.find({selector:{_id:{$gte:$.PREFIJO_HORARIOS,$lte:$.PREFIJO_HORARIOS+"￰"},fecha:r,idRuta:e,hora:{$gt:null}},sort:[{hora:"desc"}],limit:2});case 2:if(a=t.sent,n=a.docs,!(n.length<=0)){t.next=6;break}return t.abrupt("return","");case 6:return t.abrupt("return",n.splice(0,2));case 7:case"end":return t.stop()}}),t)})))()},eliminar:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.remove(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},N=P,U={nueva:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.put({_id:A.idConSufijo($.PREFIJO_RUTAS),nombre:r,color:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},obtener:function(){return Object(l["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T.find({selector:{_id:{$gte:$.PREFIJO_RUTAS,$lte:$.PREFIJO_RUTAS+"￰"}}});case 2:return e=r.sent,r.abrupt("return",e.docs);case 4:case"end":return r.stop()}}),r)})))()},eliminar:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.eliminarDeRuta(r._id);case 2:return e.next=4,T.remove(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()}},J=U,M={name:"AgregarRuta",props:["mostrar"],data:function(){return{ruta:{nombre:"",color:"ffffff"},formularioValido:!1,reglasValidacion:{nombre:[function(r){return!!r||"Escribe el nombre"}]}}},methods:{antesDeCerrar:function(){this.$refs.formulario.resetValidation(),this.$refs.formulario.reset()},cerrar:function(){this.antesDeCerrar(),this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.nueva(r.ruta.nombre,r.ruta.color);case 2:r.ruta.nombre="",r.ruta.color="ffffff",r.antesDeCerrar(),r.$emit("guardada");case 6:case"end":return e.stop()}}),e)})))()}}},z=M,L=t("4bd4"),B=t("8654"),G=Object(p["a"])(z,k,S,!1,null,null,null),Y=G.exports;g()(G,{VBtn:b["a"],VCard:_["a"],VCardActions:R["a"],VCardTitle:R["c"],VDialog:x["a"],VForm:L["a"],VSpacer:O["a"],VTextField:B["a"]});var Z={name:"Rutas",components:{AgregarRuta:Y,ConfirmarEliminacionRuta:C},data:function(){return{rutas:[],rutaSeleccionada:{},mostrarDialogoEliminar:!1,mostrarDialogoAgregar:!1,snackbar:{mostrar:!1,texto:""}}},mounted:function(){this.obtenerRutas()},methods:{onRutaGuardada:function(){this.snackbar.mostrar=!0,this.snackbar.texto="Ruta guardada",this.mostrarDialogoAgregar=!1,this.$emit("actualizadas"),this.obtenerRutas()},mostrarDialogoAgregarRuta:function(){this.mostrarDialogoAgregar=!0},confirmarEliminacion:function(r){this.rutaSeleccionada=r,this.mostrarDialogoEliminar=!0},eliminarRutaSeleccionada:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.eliminar(r.rutaSeleccionada);case 2:r.rutaSeleccionada={},r.mostrarDialogoEliminar=!1,r.$emit("actualizadas"),r.obtenerRutas();case 6:case"end":return e.stop()}}),e)})))()},cerrarDialogo:function(){this.mostrarDialogoEliminar=!1},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.obtener();case 2:r.rutas=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},q=Z,W=t("0798"),K=t("ce7e"),Q=t("132d"),X=t("da13"),rr=t("5d23"),er=t("2db4"),tr=Object(p["a"])(q,c,u,!1,null,"156af335",null),ar=tr.exports;g()(tr,{VAlert:W["a"],VBtn:b["a"],VCard:_["a"],VDivider:K["a"],VIcon:Q["a"],VListItem:X["a"],VListItemContent:rr["a"],VListItemTitle:rr["b"],VSnackbar:er["a"]});var nr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{attrs:{flat:""}},[t("DialogoAgregarHorario",{attrs:{ruta:r.rutaSeleccionada,mostrar:r.dialogoRegistrarHorario},on:{guardado:r.onHorarioGuardado,cerrar:function(e){r.dialogoRegistrarHorario=!1}}}),t("v-row",[t("v-col",{directives:[{name:"show",rawName:"v-show",value:r.mostrarNotas,expression:"mostrarNotas"}],staticStyle:{padding:"0"},attrs:{cols:"2"}},[r.rutasTemporales.length>0?t("div",r._l(r.rutasTemporales,(function(e,a){return t("div",{key:a,on:{click:function(t){return r.clickRutaTemporal(e)}}},[t("v-list-item",{style:{backgroundColor:e.marcada?"#FF8F00":"white"},attrs:{"two-line":""}},[t("v-list-item-content",[t("v-list-item-title",{staticStyle:{"font-size":"0.77rem"}},[t("strong",[r._v(r._s(e.nombre)),t("br"),r._v(r._s(e.sufijo))])])],1)],1),t("v-divider")],1)})),0):r._e()]),t("v-col",{attrs:{cols:r.mostrarNotas?10:12}},[r.rutas.length>0?t("div",r._l(r.rutas,(function(e,a){return t("div",{key:a},[t("v-list-item",{style:{backgroundColor:e.color},attrs:{"three-line":""},on:{click:function(t){return r.registrarHorario(e)}}},[t("v-list-item-content",{staticStyle:{padding:"0",margin:"0"}},[t("v-list-item-title",[t("h5",{staticClass:"text-h4",staticStyle:{"text-align":"right","margin-bottom":"10px"}},[r._v(" "+r._s(e.nombre)+" ")]),e.horarios?t("div",r._l(e.horarios,(function(e,a){return t("v-row",{key:a},[0===a?[t("v-col",{staticStyle:{"padding-bottom":"0 !important","padding-top":"0 !important",margin:"0 !important"},attrs:{cols:"3"}},[0===a?t("TipoTransporte",{attrs:{horario:e}}):r._e()],1),t("v-col",{staticStyle:{"padding-bottom":"0 !important","padding-top":"0 !important",margin:"0 !important","font-size":"1.2rem"},style:{backgroundColor:e.transcurrido>=r.rangoNotificacionInicio&&e.transcurrido<=r.rangoNotificacionFin&&0===a&&r.esRojo(e)?"white":"inherit"},attrs:{cols:"9"}},[r._v(" "+r._s(e.hora)+" | "),t("strong",{style:{fontSize:0===a?"1.5rem":"1.2rem"}},[r._v(r._s(r._f("milisegundosCortos")(e.transcurrido)))])])]:[t("v-col",{staticStyle:{"padding-top":"0 !important","padding-bottom":"0 !important","text-align":"right"},attrs:{cols:"12"}},[t("p",[r._v(" Se llevó "),t("strong",[r._v(r._s(r._f("milisegundosCortos")(e.transcurrido)))]),r._v(" de "+r._s(e.tipoUnidad)+":"),t("strong",[r._v(r._s(e.numero))])])])]],2)})),1):t("div",[t("p",[r._v("Sin información de horario. Toca para agregar")])])])],1)],1),t("v-divider")],1)})),0):t("div",[t("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[r._v(" Todavía no hay rutas. Ve a "),t("strong",[r._v("Rutas")]),r._v(" y agrega algunas ")])],1)])],1),t("v-snackbar",{attrs:{top:"",timeout:"700"},model:{value:r.snackbar.mostrar,callback:function(e){r.$set(r.snackbar,"mostrar",e)},expression:"snackbar.mostrar"}},[r._v(" "+r._s(r.snackbar.texto)+" ")])],1)},or=[],ir=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",{staticClass:"pt-2"},[t("v-container",[t("v-text-field",{ref:"campoNumero",attrs:{label:"Número",type:"number"},model:{value:r.numeroUnidad,callback:function(e){r.numeroUnidad=e},expression:"numeroUnidad"}})],1),t("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"success"}},[t("strong",{staticClass:"text-h4"},[r._v(r._s(r.ruta.nombre)+" | "+r._s(r.numeroUnidad))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!r.tomarHoraActual,expression:"!tomarHoraActual"}]},[t("v-time-picker",{attrs:{"full-width":"",format:"ampm","use-seconds":""},model:{value:r.horario,callback:function(e){r.horario=e},expression:"horario"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:!r.horario,expression:"!horario"}]},[t("p",[r._v("Por favor selecciona el horario")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:r.horario,expression:"horario"}]},[r._v(" Se registrará con la hora: "),t("strong",[r._v(r._s(r.horario))])])],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{dark:"",color:"red",large:""},on:{click:function(e){return r.guardarMicro()}}},[r._v(" Rojo ")]),t("v-btn",{attrs:{large:"",text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{color:"blue ",large:"",dark:""},on:{click:function(e){return r.guardarCombi()}}},[r._v(" R-3 ")])],1)],1)],1)},sr=[],cr={props:["mostrar","ruta"],name:"DialogoAgregarHorario",data:function(){return{horario:"",horaRefrescada:"",idInterval:null,tomarHoraActual:!0,tipos:[],tipoUnidad:"",numeroUnidad:""}},mounted:function(){var r=this;this.tipos=$.TIPOS_UNIDAD,this.tipoUnidad=this.tipos[0],this.idInterval=setInterval((function(){r.refrescarHora()}),500)},beforeDestroy:function(){console.log("Destroy!")},watch:{mostrar:function(){var r=this;this.mostrar&&setTimeout((function(){r.$refs.campoNumero.$refs.input.focus()}),50)}},methods:{guardarCombi:function(){this.tipoUnidad=$.TIPO_COMBI,this.guardar()},guardarMicro:function(){this.tipoUnidad=$.TIPO_ROJO,this.guardar()},antesDeCerrar:function(){this.tipoUnidad=this.tipos[0],this.numeroUnidad=""},refrescarHora:function(){this.horaRefrescada=A.formatearHoraActual()},cerrar:function(){this.antesDeCerrar(),this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.tomarHoraActual||r.horario){e.next=2;break}return e.abrupt("return");case 2:return t="",t=r.tomarHoraActual?A.formatearHoraActual():r.horario,e.next=6,N.nuevo(r.ruta._id,A.formatearFechaActual(),t,r.tipoUnidad,r.numeroUnidad);case 6:r.antesDeCerrar(),r.$emit("guardado");case 8:case"end":return e.stop()}}),e)})))()}}},ur=cr,lr=t("a523"),dr=t("c964"),mr=Object(p["a"])(ur,ir,sr,!1,null,null,null),fr=mr.exports;g()(mr,{VAlert:W["a"],VBtn:b["a"],VCard:_["a"],VCardActions:R["a"],VContainer:lr["a"],VDialog:x["a"],VSpacer:O["a"],VTextField:B["a"],VTimePicker:dr["a"]});var vr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("v-btn",{staticClass:"white--text",staticStyle:{border:"1px solid white !important"},attrs:{color:this.esRojo()?"error":"info",depressed:""}},[r._v(" "+r._s(r.horario.numero)+" ")])],1)},pr=[],hr={name:"TipoTransporte",props:["horario"],methods:{esRojo:function(){return this.horario.tipoUnidad===$.TIPO_ROJO}}},gr=hr,br=Object(p["a"])(gr,vr,pr,!1,null,"15f24d78",null),_r=br.exports;g()(br,{VBtn:b["a"]});var Rr={name:"Horarios",components:{TipoTransporte:_r,DialogoAgregarHorario:fr},data:function(){return{rangoNotificacionInicio:3e5,rangoNotificacionFin:42e4,snackbar:{texto:"",mostrar:!1},mostrarNotas:!0,dialogoRegistrarHorario:!1,rutas:[],rutasTemporales:[{nombre:"  ",marcada:!1,sufijo:""},{nombre:"TALZ",marcada:!1,sufijo:""},{nombre:"TEZO",marcada:!1,sufijo:""},{nombre:"CALI",marcada:!1,sufijo:""},{nombre:"SOSA",marcada:!1,sufijo:""},{nombre:"SANI",marcada:!1,sufijo:""},{nombre:"TALZ",marcada:!1,sufijo:""},{nombre:"TEZO",marcada:!1,sufijo:""},{nombre:"CALI",marcada:!1,sufijo:""},{nombre:"SOSA",marcada:!1,sufijo:""},{nombre:"SANI",marcada:!1,sufijo:""}],rutaSeleccionada:{},idInterval:null,pausado:!1}},mounted:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.obtenerRutas();case 2:r.iniciarIntervalRefrescarTiempo();case 3:case"end":return e.stop()}}),e)})))()},methods:{clickRutaTemporal:function(r){r.marcada=!r.marcada,r.marcada?r.sufijo=prompt("Ingresa el texto: "):r.sufijo=""},esRojo:function(r){return r.tipoUnidad===$.TIPO_ROJO},intercambiarVista:function(){this.mostrarNotas=!this.mostrarNotas},clickBoton:function(){this.pausado?(this.iniciarIntervalRefrescarTiempo(),this.pausado=!1):(clearInterval(this.idInterval),this.pausado=!0)},iniciarIntervalRefrescarTiempo:function(){var r=this;clearInterval(this.idInterval),this.refrescarTiempoTranscurrido(),this.idInterval=setInterval((function(){r.refrescarTiempoTranscurrido()}),5e3)},refrescarTiempoTranscurrido:function(){var r,e=A.formatearFechaActual(),t=new Date,a=Object(F["a"])(this.rutas);try{for(a.s();!(r=a.n()).done;){var n,o=r.value,i=0,s=Object(F["a"])(o.horarios);try{for(s.s();!(n=s.n()).done;){var c=n.value;if(c.hora){var u=new Date(e+"T"+c.hora);c.transcurrido=t-u,1===i&&(c.transcurrido=new Date(e+"T"+o.horarios[0].hora)-u),i++}else o.transcurrido=""}}catch(l){s.e(l)}finally{s.f()}}}catch(l){a.e(l)}finally{a.f()}},onHorarioGuardado:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.snackbar={texto:"Horario guardado",mostrar:!0},r.dialogoRegistrarHorario=!1,r.$emit("actualizados"),e.next=5,r.obtenerRutas();case 5:case"end":return e.stop()}}),e)})))()},registrarHorario:function(r){this.rutaSeleccionada=r,this.dialogoRegistrarHorario=!0},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o,i,s,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=A.formatearFechaActual(),e.next=3,J.obtener();case 3:a=e.sent,n=Object(F["a"])(a),e.prev=5,n.s();case 7:if((o=n.n()).done){e.next=19;break}return i=o.value,e.next=11,N.obtenerUltimoHorarioRegistrado(t,i._id);case 11:s=e.sent,c=Object(F["a"])(s);try{for(c.s();!(u=c.n()).done;)l=u.value,l.transcurrido=0}catch(d){c.e(d)}finally{c.f()}i.horarios=s,i.transcurrido=0,i.marcada=!1;case 17:e.next=7;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](5),n.e(e.t0);case 24:return e.prev=24,n.f(),e.finish(24);case 27:r.rutas=a;case 28:case"end":return e.stop()}}),e,null,[[5,21,24,27]])})))()}}},xr=Rr,Or=t("62ad"),wr=t("0fd9"),Cr=Object(p["a"])(xr,nr,or,!1,null,null,null),kr=Cr.exports;g()(Cr,{VAlert:W["a"],VCard:_["a"],VCol:Or["a"],VDivider:K["a"],VListItem:X["a"],VListItemContent:rr["a"],VListItemTitle:rr["b"],VRow:wr["a"],VSnackbar:er["a"]});var Sr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{staticStyle:{"background-color":"#18FFFF",margin:"0 40px 0 40px"},attrs:{flat:""}},[t("v-select",{attrs:{items:r.rutas,"item-text":"nombre","item-value":"_id",label:"Ruta","no-data-text":"No has registrado ninguna ruta"},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},scopedSlots:r._u([{key:"item",fn:function(e){var a=e.item;return[t("h1",[r._v(r._s(a.nombre))])]}}]),model:{value:r.rutaSeleccionada,callback:function(e){r.rutaSeleccionada=e},expression:"rutaSeleccionada"}}),r.horarios.length>0?t("div",[t("v-row",{attrs:{justify:"center"}},[t("h6",{staticClass:"text-h5 mb-2"},[r._v("Promedio R3: "+r._s(r._f("milisegundosCortos")(r.promedios.combi)))])]),t("v-divider"),r._l(r.horarios,(function(e,a){return t("div",{key:a},[t("v-list-item",{attrs:{"two-line":""}},[t("v-list-item-content",[t("v-list-item-title"),t("v-row",[t("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"4"}},[t("TipoTransporte",{attrs:{horario:e}})],1),t("v-col",{staticStyle:{"font-size":"1.0rem"},attrs:{cols:"8"}},[t("v-icon",[r._v("mdi-clock-outline")]),r._v(" "+r._s(e.hora)+" | "),t("strong",{staticStyle:{"font-size":"1.3rem"}},[r._v(r._s(r._f("milisegundosCortos")(e.tiempoGeneral)))])],1)],1)],1)],1),t("v-divider")],1)}))],2):t("div",[t("v-alert",{attrs:{type:"info"}},[r._v(" No hay horarios para la fecha y ruta seleccionados ")])],1)],1)},Ir=[],jr={name:"Reportes",components:{TipoTransporte:_r},data:function(){return{fechaSeleccionada:"",rutas:[],modal:!1,rutaSeleccionada:"",horarios:[],promedios:{rojo:"",combi:"",general:""},TIPO_COMBI:$.TIPO_COMBI}},mounted:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.refrescarTodo();case 2:case"end":return e.stop()}}),e)})))()},methods:{refrescarTodo:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.fechaSeleccionada=A.formatearFechaActual(),e.next=3,r.obtenerRutas();case 3:return r.rutas.length>0&&(r.rutaSeleccionada=r.rutas[0]._id),e.next=6,r.obtenerHorariosConFechaYRutaSeleccionada();case 6:case"end":return e.stop()}}),e)})))()},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.obtener();case 2:r.rutas=e.sent;case 3:case"end":return e.stop()}}),e)})))()},obtenerHorariosConFechaYRutaSeleccionada:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o,i,s,c,u,l,d,m,f,v,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.fechaSeleccionada&&r.rutaSeleccionada){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,N.obtenerPorFechaEIdRuta(r.fechaSeleccionada,r.rutaSeleccionada);case 4:if(t=e.sent,t.length>0){for(a="",n="",o=0,i=0,s=0,c=0,u=0,t[t.length-1].tipoUnidad===$.TIPO_ROJO?a=t[t.length-1].hora:n=t[t.length-1].hora,l=t.length-2;l>=0;l--)d=t[l].hora,m=t[l+1].hora,f=A.restarHorarios(d,m),s+=f,t[l].tiempoGeneral=f,t[l].tipoUnidad===$.TIPO_ROJO?(a&&(v=A.restarHorarios(d,a),o+=v,c++,t[l].tiempoMismoTipo=v),a=d):(n&&(p=A.restarHorarios(d,n),i+=p,u++,t[l].tiempoMismoTipo=p),n=d);r.promedios.general=s/(t.length-1),r.promedios.rojo=o/c,r.promedios.combi=i/u}r.horarios=t;case 7:case"end":return e.stop()}}),e)})))()}}},yr=jr,Tr=t("b974"),Vr=Object(p["a"])(yr,Sr,Ir,!1,null,null,null),Ar=Vr.exports;g()(Vr,{VAlert:W["a"],VCard:_["a"],VCol:Or["a"],VDivider:K["a"],VIcon:Q["a"],VListItem:X["a"],VListItemContent:rr["a"],VListItemTitle:rr["b"],VRow:wr["a"],VSelect:Tr["a"]});var Er=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{staticClass:"py-6 px-6",attrs:{flat:""}},[t("v-alert",{attrs:{type:"info"}},[t("h2",[r._v("Acerca de")]),t("p",[r._v("Creado y mantenido por "),t("a",{staticClass:"text-button",attrs:{href:"https://parzibyte.me/blog"}},[r._v("Parzibyte")]),r._v(". Código fuente disponible en "),t("a",{attrs:{href:"https://parzibyte.me/blog"}},[r._v("parzibyte.me/blog")])]),t("h2",[r._v("Créditos")]),t("p",[r._v(" Iconos diseñados por "),t("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[r._v("Freepik")]),r._v(" from "),t("a",{attrs:{href:"https://www.flaticon.es/",title:"Flaticon"}},[r._v("www.flaticon.es")])])])],1)},Dr=[],Hr={name:"AcercaDe"},$r=Hr,Fr=(t("742b"),Object(p["a"])($r,Er,Dr,!1,null,"109b8790",null)),Pr=Fr.exports;g()(Fr,{VAlert:W["a"],VCard:_["a"]});var Nr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{attrs:{flat:""}},[t("DialogoAgregarComision",{attrs:{"numero-unidad":r.numeroUnidadSeleccionada,mostrar:r.dialogoComision},on:{guardado:r.onComisionGuardada,cerrar:function(e){r.dialogoComision=!1}}}),t("h2",{staticClass:"ml-2"},[r._v("Total: $"+r._s(r.total()))]),t("v-btn",{staticClass:"mb-3 ml-2",attrs:{color:"info"},on:{click:r.eliminarTodas}},[r._v("Eliminar todas")]),t("br"),r._l(r.unidades,(function(e,a){return t("v-badge",{key:a,attrs:{overlap:"",bordered:"",color:"success",content:e.comision}},[t("v-btn",{staticClass:"mx-3 my-2",attrs:{"x-large":"",depressed:"",color:"error",dark:""},on:{click:function(t){return r.agregarComision(e)}}},[r._v(r._s(e.numero)+" ")])],1)}))],2)},Ur=[],Jr=(t("ddb0"),t("3835")),Mr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",{staticClass:"pt-2 pl-2"},[t("h2",[r._v("Unidad "+r._s(r.numeroUnidad))]),t("v-container",[t("v-text-field",{ref:"campoCantidad",attrs:{label:"Comisión",type:"number"},model:{value:r.comision,callback:function(e){r.comision=e},expression:"comision"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{dark:"",color:"success",depressed:""},on:{click:function(e){return r.guardar()}}},[r._v(" Guardar ")]),t("v-btn",{attrs:{large:"",text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")])],1)],1)],1)},zr=[],Lr={nueva:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=parseFloat(e),t.next=3,T.put({_id:A.idConSufijo($.PREFIJO_COMISIONES),numero:r,comision:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},obtener:function(){return Object(l["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T.find({selector:{_id:{$gte:$.PREFIJO_COMISIONES,$lte:$.PREFIJO_COMISIONES+"￰"}}});case 2:return e=r.sent,r.abrupt("return",e.docs);case 4:case"end":return r.stop()}}),r)})))()},eliminarTodas:function(){return Object(l["a"])(regeneratorRuntime.mark((function r(){var e,t,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Lr.obtener();case 2:e=r.sent,t=Object(F["a"])(e),r.prev=4,t.s();case 6:if((a=t.n()).done){r.next=12;break}return n=a.value,r.next=10,T.remove(n);case 10:r.next=6;break;case 12:r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](4),t.e(r.t0);case 17:return r.prev=17,t.f(),r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[4,14,17,20]])})))()}},Br=Lr,Gr={name:"DialogoAgregarComision",props:["numeroUnidad","mostrar"],data:function(){return{comision:null}},watch:{mostrar:function(){var r=this;this.mostrar&&setTimeout((function(){r.$refs.campoCantidad.$refs.input.focus()}),50)}},methods:{cerrar:function(){this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.comision){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Br.nueva(r.numeroUnidad,r.comision);case 4:r.comision=null,r.$emit("guardado");case 6:case"end":return e.stop()}}),e)})))()}}},Yr=Gr,Zr=Object(p["a"])(Yr,Mr,zr,!1,null,null,null),qr=Zr.exports;g()(Zr,{VBtn:b["a"],VCard:_["a"],VCardActions:R["a"],VContainer:lr["a"],VDialog:x["a"],VSpacer:O["a"],VTextField:B["a"]});var Wr={},Kr={name:"Comisiones",components:{DialogoAgregarComision:qr},data:function(){return{unidades:[],dialogoComision:!1,numeroUnidadSeleccionada:null}},mounted:function(){this.prepararArregloNumeros(),this.refrescarComisiones()},methods:{eliminarTodas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(confirm("¿Seguro?")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Br.eliminarTodas();case 4:return r.prepararArregloNumeros(),e.next=7,r.refrescarComisiones();case 7:case"end":return e.stop()}}),e)})))()},total:function(){var r,e=0,t=Object(F["a"])(this.unidades);try{for(t.s();!(r=t.n()).done;){var a=r.value;e+=a.comision}}catch(n){t.e(n)}finally{t.f()}return e},prepararArregloNumeros:function(){var r=$.NUMEROS_PARA_COMISION,e=[];Wr={};var t,a=Object(F["a"])(r.entries());try{for(a.s();!(t=a.n()).done;){var n=Object(Jr["a"])(t.value,2),o=n[0],i=n[1];Wr[i]=o,e.push({numero:i,comision:0})}}catch(s){a.e(s)}finally{a.f()}this.unidades=e},refrescarComisiones:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Br.obtener();case 2:t=e.sent,console.log({comisionesRegistradas:t}),a=Object(F["a"])(t);try{for(a.s();!(n=a.n()).done;)o=n.value,i=Wr[o.numero],(i||0===i)&&(r.unidades[i].comision=o.comision)}catch(s){a.e(s)}finally{a.f()}case 6:case"end":return e.stop()}}),e)})))()},mostrarDialogoComision:function(){this.dialogoComision=!0},agregarComision:function(r){r.comision>0||(this.numeroUnidadSeleccionada=r.numero,this.dialogoComision=!0)},onComisionGuardada:function(){this.dialogoComision=!1,this.refrescarComisiones()}}},Qr=Kr,Xr=t("4ca6"),re=Object(p["a"])(Qr,Nr,Ur,!1,null,"2297299b",null),ee=re.exports;g()(re,{VBadge:Xr["a"],VBtn:b["a"],VCard:_["a"]});var te={name:"HelloWorld",components:{Comisiones:ee,AcercaDe:Pr,Reportes:Ar,Horarios:kr,Rutas:ar},data:function(){return{tab:0}},methods:{actualizarReporte:function(){this.$refs.reportes.refrescarTodo()},actualizarRutasEnHorarios:function(){this.$refs.horarios.obtenerRutas(),this.$refs.reportes.refrescarTodo()}}},ae=te,ne=t("71a3"),oe=t("c671"),ie=t("fe57"),se=t("aac8"),ce=t("9a96"),ue=Object(p["a"])(ae,i,s,!1,null,null,null),le=ue.exports;g()(ue,{VIcon:Q["a"],VTab:ne["a"],VTabItem:oe["a"],VTabs:ie["a"],VTabsItems:se["a"],VTabsSlider:ce["a"]});var de={name:"App",components:{Principal:le},data:function(){return{}}},me=de,fe=(t("cf25"),t("7496")),ve=t("f6c4"),pe=Object(p["a"])(me,n,o,!1,null,null,null),he=pe.exports;g()(pe,{VApp:fe["a"],VMain:ve["a"]});t("5363");var ge=t("f309");a["a"].use(ge["a"]);var be=new ge["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,a["a"].filter("milisegundosALegible",(function(r){if(!r)return"-";var e=new Date(r).toISOString().substr(11,8),t=parseInt(e.substring(0,2)),a=parseInt(e.substring(3,5)),n=parseInt(e.substring(6,8)),o="";return t&&(o=o.concat("".concat(t," hr").concat(t>1?"s":""," "))),a&&(o=o.concat("".concat(a," min").concat(a>1?"s":""," "))),n&&(o=o.concat("".concat(n," seg").concat(n>1?"s":""," "))),o})),a["a"].filter("milisegundosCortos",(function(r){if(!r)return"-";var e=new Date(r).toISOString().substr(14,5);return e})),new a["a"]({vuetify:be,render:function(r){return r(he)}}).$mount("#app")},"742b":function(r,e,t){"use strict";t("8a84")},"8a84":function(r,e,t){},cf25:function(r,e,t){"use strict";t("fea6")},fea6:function(r,e,t){}});
//# sourceMappingURL=app.6f59fe51.js.map
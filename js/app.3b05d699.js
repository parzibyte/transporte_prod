(function(r){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=s[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var r,e=0;e<o.length;e++){for(var t=o[e],a=!0,c=1;c<t.length;c++){var s=t[c];0!==n[s]&&(a=!1)}a&&(o.splice(e--,1),r=i(i.s=t[0]))}return r}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=a,i.d=function(r,e,t){i.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)i.d(t,a,function(e){return r[e]}.bind(null,a));return t},i.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(e,"a",e),e},i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},i.p="./";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),t()})({0:function(r,e,t){r.exports=t("56d7")},1:function(r,e){},"56d7":function(r,e,t){"use strict";t.r(e);t("99af"),t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-app",[t("v-main",[t("Principal")],1)],1)},o=[],i=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("v-tabs",{attrs:{"background-color":"cyan",dark:"","fixed-tabs":"","icons-and-text":""},model:{value:r.tab,callback:function(e){r.tab=e},expression:"tab"}},[t("v-tabs-slider",{attrs:{color:"yellow"}}),t("v-tab",[r._v(" Rutas "),t("v-icon",[r._v("mdi-bus")])],1),t("v-tab",[r._v(" Horarios "),t("v-icon",[r._v("mdi-clipboard-clock")])],1),t("v-tab",[r._v(" Reportes "),t("v-icon",[r._v("mdi-file-table-box-multiple")])],1),t("v-tab",[r._v(" Acerca de "),t("v-icon",[r._v("mdi-information-outline")])],1)],1),t("v-tabs-items",{model:{value:r.tab,callback:function(e){r.tab=e},expression:"tab"}},[t("v-tab-item",[t("Rutas",{on:{actualizadas:r.actualizarRutasEnHorarios}})],1),t("v-tab-item",[t("Horarios",{ref:"horarios",on:{actualizados:function(e){return r.actualizarReporte()}}})],1),t("v-tab-item",[t("Reportes",{ref:"reportes"})],1),t("v-tab-item",[t("AcercaDe")],1)],1)],1)},c=[],s=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{attrs:{flat:""}},[t("ConfirmarEliminacionRuta",{attrs:{ruta:r.rutaSeleccionada,mostrar:r.mostrarDialogoEliminar},on:{confirmado:function(e){return r.eliminarRutaSeleccionada()},cerrar:r.cerrarDialogo}}),t("AgregarRuta",{attrs:{mostrar:r.mostrarDialogoAgregar},on:{guardada:r.onRutaGuardada,cerrar:function(e){r.mostrarDialogoAgregar=!1}}}),r.rutas.length>0?t("div",r._l(r.rutas,(function(e,a){return t("div",{key:a},[t("v-list-item",{attrs:{"two-line":""},on:{click:function(t){return r.confirmarEliminacion(e)}}},[t("v-list-item-content",[t("v-list-item-title",[r._v(r._s(e.nombre))])],1)],1),t("v-divider")],1)})),0):t("div",[t("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[r._v(" Todavía no hay rutas. Agrega una con el botón flotante ")])],1),t("v-btn",{attrs:{color:"primary",fab:"",elevation:"2",right:"",bottom:"",fixed:""},on:{click:function(e){return r.mostrarDialogoAgregarRuta()}}},[t("v-icon",[r._v("mdi-plus")])],1),t("v-snackbar",{attrs:{top:"",timeout:"700"},model:{value:r.snackbar.mostrar,callback:function(e){r.$set(r.snackbar,"mostrar",e)},expression:"snackbar.mostrar"}},[r._v(" "+r._s(r.snackbar.texto)+" ")])],1)},u=[],l=(t("96cf"),t("1da1")),d=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[r._v(" Confirmación ")]),t("v-card-text",[r._v("¿Eliminar "),t("strong",[r._v(r._s(r.ruta.nombre))]),r._v("?"),t("br"),r._v(" Se van a eliminar los horarios relacionados ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:r.confirmar}},[r._v(" Eliminar ")])],1)],1)],1)},f=[],m={props:["mostrar","ruta"],name:"ConfirmarEliminacionRuta",data:function(){return{}},methods:{cerrar:function(){this.$emit("cerrar")},confirmar:function(){this.$emit("confirmado")}}},v=m,h=t("2877"),p=t("6544"),b=t.n(p),g=t("8336"),R=t("b0af"),_=t("99d9"),x=t("169a"),w=t("2fa4"),O=Object(h["a"])(v,d,f,!1,null,"6fe8b434",null),k=O.exports;b()(O,{VBtn:g["a"],VCard:R["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:x["a"],VSpacer:w["a"]});var S=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[r._v(" Nueva ruta ")]),t("v-form",{ref:"formulario",staticClass:"mx-2",model:{value:r.formularioValido,callback:function(e){r.formularioValido=e},expression:"formularioValido"}},[t("v-text-field",{attrs:{rules:r.reglasValidacion.nombre,label:"Nombre",required:""},model:{value:r.ruta.nombre,callback:function(e){r.$set(r.ruta,"nombre",e)},expression:"ruta.nombre"}}),t("v-text-field",{style:{backgroundColor:r.ruta.color},attrs:{label:"Color",type:"color"},model:{value:r.ruta.color,callback:function(e){r.$set(r.ruta,"color",e)},expression:"ruta.color"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{color:"green darken-1",disabled:!r.formularioValido,text:""},on:{click:r.guardar}},[r._v(" Guardar ")])],1)],1)],1)},C=[],I=(t("7db0"),t("16b2")),V=t("5d16");I["a"].plugin(V["a"]);var T=new I["a"]("rutas");T.createIndex({index:{fields:["hora"]}});var y=T,A=(t("d3b7"),t("25f0"),{restarHorarios:function(r,e){var t=this.formatearFechaActual(),a=new Date(t+" "+r),n=new Date(t+" "+e);return a-n},idConSufijo:function(r){return r.concat("_",this.formatearFechaYHoraParaId())},formatearFechaYHoraParaId:function(){var r=new Date,e=r.getMonth()+1,t=r.getDate(),a="".concat(r.getFullYear(),"-").concat(this.agregarCeroSiEsNecesario(e),"-").concat(this.agregarCeroSiEsNecesario(t)),n="".concat(this.agregarCeroSiEsNecesario(r.getHours()),"_").concat(this.agregarCeroSiEsNecesario(r.getMinutes()),"_").concat(this.agregarCeroSiEsNecesario(r.getSeconds()));return a+"_"+n},formatearHoraActual:function(){var r=new Date;return"".concat(this.agregarCeroSiEsNecesario(r.getHours()),":").concat(this.agregarCeroSiEsNecesario(r.getMinutes()),":").concat(this.agregarCeroSiEsNecesario(r.getSeconds()))},formatearFechaActual:function(){var r=new Date,e=r.getMonth()+1,t=r.getDate();return"".concat(r.getFullYear(),"-").concat(this.agregarCeroSiEsNecesario(e),"-").concat(this.agregarCeroSiEsNecesario(t))},agregarCeroSiEsNecesario:function(r){return r<10?"0".concat(r):r.toString()}}),j=A,E="Rojo",H="R-3",D={TIPO_ROJO:E,TIPO_COMBI:H,TIPOS_UNIDAD:[H,E],PREFIJO_RUTAS:"rutas",PREFIJO_HORARIOS:"horarios",PREFIJO_COMISIONES:"comisiones"},P=D,$=(t("a434"),t("b85c")),F={eliminarDeRuta:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.find({selector:{_id:{$gte:P.PREFIJO_HORARIOS,$lte:P.PREFIJO_HORARIOS+"￰"},idRuta:r}});case 2:t=e.sent,a=Object($["a"])(t.docs),e.prev=4,a.s();case 6:if((n=a.n()).done){e.next=14;break}return o=n.value,console.log("Eliminando"),console.log(o),e.next=12,y.remove(o);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](4),a.e(e.t0);case 19:return e.prev=19,a.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})))()},nuevo:function(r,e,t,a,n){return Object(l["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,y.put({_id:j.idConSufijo(P.PREFIJO_HORARIOS),idRuta:r,fecha:e,hora:t,tipoUnidad:a,numero:n});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}}),o)})))()},obtenerNumerosPorFechaRutaYTipoUnidad:function(r,e,t){return Object(l["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,y.find({selector:{_id:{$gte:P.PREFIJO_HORARIOS,$lte:P.PREFIJO_HORARIOS+"￰"},fecha:r,idRuta:e,tipoUnidad:t,hora:{$gte:null}}});case 2:return n=a.sent,a.abrupt("return",n.docs);case 4:case"end":return a.stop()}}),a)})))()},obtenerPorFechaEIdRuta:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.find({selector:{_id:{$gte:P.PREFIJO_HORARIOS,$lte:P.PREFIJO_HORARIOS+"￰"},fecha:r,idRuta:e,hora:{$gte:null}},sort:[{hora:"desc"}]});case 2:return a=t.sent,t.abrupt("return",a.docs);case 4:case"end":return t.stop()}}),t)})))()},obtenerUltimoHorarioRegistrado:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.find({selector:{_id:{$gte:P.PREFIJO_HORARIOS,$lte:P.PREFIJO_HORARIOS+"￰"},fecha:r,idRuta:e,hora:{$gt:null}},sort:[{hora:"desc"}],limit:2});case 2:if(a=t.sent,n=a.docs,!(n.length<=0)){t.next=6;break}return t.abrupt("return","");case 6:return t.abrupt("return",n.splice(0,2));case 7:case"end":return t.stop()}}),t)})))()},eliminar:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.remove(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},U=F,N={nueva:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.put({_id:j.idConSufijo(P.PREFIJO_RUTAS),nombre:r,color:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},obtener:function(){return Object(l["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,y.find({selector:{_id:{$gte:P.PREFIJO_RUTAS,$lte:P.PREFIJO_RUTAS+"￰"}}});case 2:return e=r.sent,r.abrupt("return",e.docs);case 4:case"end":return r.stop()}}),r)})))()},eliminar:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.eliminarDeRuta(r._id);case 2:return e.next=4,y.remove(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()}},J=N,M={name:"AgregarRuta",props:["mostrar"],data:function(){return{ruta:{nombre:"",color:"ffffff"},formularioValido:!1,reglasValidacion:{nombre:[function(r){return!!r||"Escribe el nombre"}]}}},methods:{antesDeCerrar:function(){this.$refs.formulario.resetValidation(),this.$refs.formulario.reset()},cerrar:function(){this.antesDeCerrar(),this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.nueva(r.ruta.nombre,r.ruta.color);case 2:r.ruta.nombre="",r.ruta.color="ffffff",r.antesDeCerrar(),r.$emit("guardada");case 6:case"end":return e.stop()}}),e)})))()}}},z=M,B=t("4bd4"),L=t("8654"),Y=Object(h["a"])(z,S,C,!1,null,null,null),G=Y.exports;b()(Y,{VBtn:g["a"],VCard:R["a"],VCardActions:_["a"],VCardTitle:_["c"],VDialog:x["a"],VForm:B["a"],VSpacer:w["a"],VTextField:L["a"]});var q={name:"Rutas",components:{AgregarRuta:G,ConfirmarEliminacionRuta:k},data:function(){return{rutas:[],rutaSeleccionada:{},mostrarDialogoEliminar:!1,mostrarDialogoAgregar:!1,snackbar:{mostrar:!1,texto:""}}},mounted:function(){this.obtenerRutas()},methods:{onRutaGuardada:function(){this.snackbar.mostrar=!0,this.snackbar.texto="Ruta guardada",this.mostrarDialogoAgregar=!1,this.$emit("actualizadas"),this.obtenerRutas()},mostrarDialogoAgregarRuta:function(){this.mostrarDialogoAgregar=!0},confirmarEliminacion:function(r){this.rutaSeleccionada=r,this.mostrarDialogoEliminar=!0},eliminarRutaSeleccionada:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.eliminar(r.rutaSeleccionada);case 2:r.rutaSeleccionada={},r.mostrarDialogoEliminar=!1,r.$emit("actualizadas"),r.obtenerRutas();case 6:case"end":return e.stop()}}),e)})))()},cerrarDialogo:function(){this.mostrarDialogoEliminar=!1},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.obtener();case 2:r.rutas=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},K=q,W=t("0798"),Q=t("ce7e"),X=t("132d"),Z=t("da13"),rr=t("5d23"),er=t("2db4"),tr=Object(h["a"])(K,s,u,!1,null,"156af335",null),ar=tr.exports;b()(tr,{VAlert:W["a"],VBtn:g["a"],VCard:R["a"],VDivider:Q["a"],VIcon:X["a"],VListItem:Z["a"],VListItemContent:rr["a"],VListItemTitle:rr["b"],VSnackbar:er["a"]});var nr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{attrs:{flat:""}},[t("DialogoAgregarHorario",{attrs:{ruta:r.rutaSeleccionada,mostrar:r.dialogoRegistrarHorario},on:{guardado:r.onHorarioGuardado,cerrar:function(e){r.dialogoRegistrarHorario=!1}}}),r.rutas.length>0?t("div",r._l(r.rutas,(function(e,a){return t("div",{key:a},[t("v-list-item",{style:{backgroundColor:e.color},attrs:{"three-line":""},on:{click:function(t){return r.registrarHorario(e)}}},[t("v-list-item-content",[t("v-list-item-title",[t("h5",{staticClass:"text-h4"},[r._v(r._s(e.nombre))]),e.horarios?t("div",[r._l(e.horarios,(function(e,a){return t("v-row",{key:a},[t("v-col",[t("TipoTransporte",{attrs:{horario:e}})],1),t("v-col",[t("v-icon",[r._v("mdi-clock-outline")]),r._v(" "+r._s(e.hora)+" | "),t("strong",[r._v(r._s(r._f("milisegundosCortos")(e.transcurrido)))])],1)],1)})),t("h5",{staticClass:"text-h6"})],2):t("div",[t("p",[r._v(" Sin información de horario. Toca para agregar ")])])])],1)],1),t("v-divider")],1)})),0):t("div",[t("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[r._v(" Todavía no hay rutas. Ve a "),t("strong",[r._v("Rutas")]),r._v(" y agrega algunas ")])],1),t("v-snackbar",{attrs:{top:"",timeout:"700"},model:{value:r.snackbar.mostrar,callback:function(e){r.$set(r.snackbar,"mostrar",e)},expression:"snackbar.mostrar"}},[r._v(" "+r._s(r.snackbar.texto)+" ")])],1)},or=[],ir=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[t("v-card",{staticClass:"pt-2"},[t("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[t("strong",{staticClass:"text-h4"},[r._v(r._s(r.ruta.nombre))])]),t("v-container",[t("v-text-field",{attrs:{label:"Número",type:"number"},model:{value:r.numeroUnidad,callback:function(e){r.numeroUnidad=e},expression:"numeroUnidad"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!r.tomarHoraActual,expression:"!tomarHoraActual"}]},[t("v-time-picker",{attrs:{"full-width":"",format:"ampm","use-seconds":""},model:{value:r.horario,callback:function(e){r.horario=e},expression:"horario"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:!r.horario,expression:"!horario"}]},[t("p",[r._v("Por favor selecciona el horario")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:r.horario,expression:"horario"}]},[r._v(" Se registrará con la hora: "),t("strong",[r._v(r._s(r.horario))])])],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{dark:"",color:"red",large:""},on:{click:function(e){return r.guardarMicro()}}},[r._v(" Rojo ")]),t("v-btn",{attrs:{large:"",text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{color:"blue ",large:"",dark:""},on:{click:function(e){return r.guardarCombi()}}},[r._v(" R-3 ")])],1)],1)],1)},cr=[],sr={props:["mostrar","ruta"],name:"DialogoAgregarHorario",data:function(){return{horario:"",horaRefrescada:"",idInterval:null,tomarHoraActual:!0,tipos:[],tipoUnidad:"",numeroUnidad:""}},mounted:function(){var r=this;this.tipos=P.TIPOS_UNIDAD,this.tipoUnidad=this.tipos[0],this.idInterval=setInterval((function(){r.refrescarHora()}),500)},beforeDestroy:function(){console.log("Destroy!")},methods:{guardarCombi:function(){this.tipoUnidad=P.TIPO_COMBI,this.guardar()},guardarMicro:function(){this.tipoUnidad=P.TIPO_ROJO,this.guardar()},antesDeCerrar:function(){this.tipoUnidad=this.tipos[0],this.numeroUnidad=""},refrescarHora:function(){this.horaRefrescada=j.formatearHoraActual()},cerrar:function(){this.antesDeCerrar(),this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.tomarHoraActual||r.horario){e.next=2;break}return e.abrupt("return");case 2:return t="",t=r.tomarHoraActual?j.formatearHoraActual():r.horario,e.next=6,U.nuevo(r.ruta._id,j.formatearFechaActual(),t,r.tipoUnidad,r.numeroUnidad);case 6:r.antesDeCerrar(),r.$emit("guardado");case 8:case"end":return e.stop()}}),e)})))()}}},ur=sr,lr=t("a523"),dr=t("c964"),fr=Object(h["a"])(ur,ir,cr,!1,null,null,null),mr=fr.exports;b()(fr,{VAlert:W["a"],VBtn:g["a"],VCard:R["a"],VCardActions:_["a"],VContainer:lr["a"],VDialog:x["a"],VSpacer:w["a"],VTextField:L["a"],VTimePicker:dr["a"]});var vr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("v-icon",[r._v("mdi-bus")]),t("v-badge",{attrs:{overlap:"",bordered:"",color:this.esRojo()?"error":"info",content:r.horario.numero,value:r.horario.numero}},[t("v-btn",{staticClass:"white--text",attrs:{color:this.esRojo()?"error":"info",depressed:""}},[r._v(" "+r._s(r.horario.tipoUnidad)+" ")])],1)],1)},hr=[],pr={name:"TipoTransporte",props:["horario"],methods:{esRojo:function(){return this.horario.tipoUnidad===P.TIPO_ROJO}}},br=pr,gr=t("4ca6"),Rr=Object(h["a"])(br,vr,hr,!1,null,"8445c65e",null),_r=Rr.exports;b()(Rr,{VBadge:gr["a"],VBtn:g["a"],VIcon:X["a"]});var xr={name:"Horarios",components:{TipoTransporte:_r,DialogoAgregarHorario:mr},data:function(){return{snackbar:{texto:"",mostrar:!1},dialogoRegistrarHorario:!1,rutas:[],rutaSeleccionada:{},idInterval:null,pausado:!1}},mounted:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.obtenerRutas();case 2:r.iniciarIntervalRefrescarTiempo();case 3:case"end":return e.stop()}}),e)})))()},methods:{clickBoton:function(){this.pausado?(this.iniciarIntervalRefrescarTiempo(),this.pausado=!1):(clearInterval(this.idInterval),this.pausado=!0)},iniciarIntervalRefrescarTiempo:function(){var r=this;clearInterval(this.idInterval),this.refrescarTiempoTranscurrido(),this.idInterval=setInterval((function(){r.refrescarTiempoTranscurrido()}),5e3)},refrescarTiempoTranscurrido:function(){var r,e=j.formatearFechaActual(),t=new Date,a=Object($["a"])(this.rutas);try{for(a.s();!(r=a.n()).done;){var n,o=r.value,i=0,c=Object($["a"])(o.horarios);try{for(c.s();!(n=c.n()).done;){var s=n.value;if(s.hora){var u=new Date(e+" "+s.hora);s.transcurrido=t-u,1===i&&(s.transcurrido=new Date(e+" "+o.horarios[0].hora)-u),i++}else o.transcurrido=""}}catch(l){c.e(l)}finally{c.f()}}}catch(l){a.e(l)}finally{a.f()}},onHorarioGuardado:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.snackbar={texto:"Horario guardado",mostrar:!0},r.dialogoRegistrarHorario=!1,r.$emit("actualizados"),e.next=5,r.obtenerRutas();case 5:case"end":return e.stop()}}),e)})))()},registrarHorario:function(r){this.rutaSeleccionada=r,this.dialogoRegistrarHorario=!0},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o,i,c,s,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=j.formatearFechaActual(),e.next=3,J.obtener();case 3:a=e.sent,n=Object($["a"])(a),e.prev=5,n.s();case 7:if((o=n.n()).done){e.next=18;break}return i=o.value,e.next=11,U.obtenerUltimoHorarioRegistrado(t,i._id);case 11:c=e.sent,s=Object($["a"])(c);try{for(s.s();!(u=s.n()).done;)l=u.value,l.transcurrido=0}catch(d){s.e(d)}finally{s.f()}i.horarios=c,i.transcurrido=0;case 16:e.next=7;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](5),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:r.rutas=a;case 27:case"end":return e.stop()}}),e,null,[[5,20,23,26]])})))()}}},wr=xr,Or=t("62ad"),kr=t("0fd9"),Sr=Object(h["a"])(wr,nr,or,!1,null,null,null),Cr=Sr.exports;b()(Sr,{VAlert:W["a"],VCard:R["a"],VCol:Or["a"],VDivider:Q["a"],VIcon:X["a"],VListItem:Z["a"],VListItemContent:rr["a"],VListItemTitle:rr["b"],VRow:kr["a"],VSnackbar:er["a"]});var Ir=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{staticClass:"mx-2",attrs:{flat:""}},[t("v-dialog",{ref:"dialog",attrs:{"return-value":r.fechaSeleccionada,persistent:"",width:"290px"},on:{"update:returnValue":function(e){r.fechaSeleccionada=e},"update:return-value":function(e){r.fechaSeleccionada=e}},scopedSlots:r._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[t("v-text-field",r._g(r._b({attrs:{label:"Fecha","prepend-icon":"mdi-calendar",readonly:""},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},model:{value:r.fechaSeleccionada,callback:function(e){r.fechaSeleccionada=e},expression:"fechaSeleccionada"}},"v-text-field",n,!1),a))]}}]),model:{value:r.modal,callback:function(e){r.modal=e},expression:"modal"}},[t("v-date-picker",{attrs:{locale:"es-la",scrollable:""},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},model:{value:r.fechaSeleccionada,callback:function(e){r.fechaSeleccionada=e},expression:"fechaSeleccionada"}},[t("v-spacer"),t("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){r.modal=!1}}},[r._v(" Cancelar ")]),t("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return r.$refs.dialog.save(r.fechaSeleccionada)}}},[r._v(" OK ")])],1)],1),t("v-select",{attrs:{items:r.rutas,"item-text":"nombre","item-value":"_id",label:"Ruta","no-data-text":"No has registrado ninguna ruta"},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},model:{value:r.rutaSeleccionada,callback:function(e){r.rutaSeleccionada=e},expression:"rutaSeleccionada"}}),r.horarios.length>0?t("div",[t("v-row",{attrs:{justify:"center"}},[t("h6",{staticClass:"text-h5 mb-2"},[r._v("Promedio R3: "+r._s(r._f("milisegundosCortos")(r.promedios.combi)))])]),t("v-divider"),r._l(r.horarios,(function(e,a){return t("div",{key:a},[t("v-list-item",{attrs:{"two-line":""}},[t("v-list-item-content",[t("v-list-item-title"),t("v-row",[t("v-col",[t("TipoTransporte",{attrs:{horario:e}})],1),t("v-col",[t("v-icon",[r._v("mdi-clock-outline")]),r._v(" "+r._s(e.hora)+" | "),t("strong",[r._v(r._s(r._f("milisegundosCortos")(e.tiempoGeneral)))])],1)],1)],1)],1),t("v-divider")],1)}))],2):t("div",[t("v-alert",{attrs:{type:"info"}},[r._v(" No hay horarios para la fecha y ruta seleccionados ")])],1)],1)},Vr=[],Tr={name:"Reportes",components:{TipoTransporte:_r},data:function(){return{fechaSeleccionada:"",rutas:[],modal:!1,rutaSeleccionada:"",horarios:[],promedios:{rojo:"",combi:"",general:""},TIPO_COMBI:P.TIPO_COMBI}},mounted:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.refrescarTodo();case 2:case"end":return e.stop()}}),e)})))()},methods:{refrescarTodo:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.fechaSeleccionada=j.formatearFechaActual(),e.next=3,r.obtenerRutas();case 3:return r.rutas.length>0&&(r.rutaSeleccionada=r.rutas[0]._id),e.next=6,r.obtenerHorariosConFechaYRutaSeleccionada();case 6:case"end":return e.stop()}}),e)})))()},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.obtener();case 2:r.rutas=e.sent;case 3:case"end":return e.stop()}}),e)})))()},obtenerHorariosConFechaYRutaSeleccionada:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o,i,c,s,u,l,d,f,m,v,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.fechaSeleccionada&&r.rutaSeleccionada){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,U.obtenerPorFechaEIdRuta(r.fechaSeleccionada,r.rutaSeleccionada);case 4:if(t=e.sent,t.length>0){for(a="",n="",o=0,i=0,c=0,s=0,u=0,t[t.length-1].tipoUnidad===P.TIPO_ROJO?a=t[t.length-1].hora:n=t[t.length-1].hora,l=t.length-2;l>=0;l--)d=t[l].hora,f=t[l+1].hora,m=j.restarHorarios(d,f),c+=m,t[l].tiempoGeneral=m,t[l].tipoUnidad===P.TIPO_ROJO?(a&&(v=j.restarHorarios(d,a),o+=v,s++,t[l].tiempoMismoTipo=v),a=d):(n&&(h=j.restarHorarios(d,n),i+=h,u++,t[l].tiempoMismoTipo=h),n=d);r.promedios.general=c/(t.length-1),r.promedios.rojo=o/s,r.promedios.combi=i/u}r.horarios=t;case 7:case"end":return e.stop()}}),e)})))()}}},yr=Tr,Ar=t("2e4b"),jr=t("b974"),Er=Object(h["a"])(yr,Ir,Vr,!1,null,null,null),Hr=Er.exports;b()(Er,{VAlert:W["a"],VBtn:g["a"],VCard:R["a"],VCol:Or["a"],VDatePicker:Ar["a"],VDialog:x["a"],VDivider:Q["a"],VIcon:X["a"],VListItem:Z["a"],VListItemContent:rr["a"],VListItemTitle:rr["b"],VRow:kr["a"],VSelect:jr["a"],VSpacer:w["a"],VTextField:L["a"]});var Dr=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-card",{staticClass:"py-6 px-6",attrs:{flat:""}},[t("v-alert",{attrs:{type:"info"}},[t("h2",[r._v("Acerca de")]),t("p",[r._v("Creado y mantenido por "),t("a",{staticClass:"text-button",attrs:{href:"https://parzibyte.me/blog"}},[r._v("Parzibyte")]),r._v(". Código fuente disponible en "),t("a",{attrs:{href:"https://parzibyte.me/blog"}},[r._v("parzibyte.me/blog")])]),t("h2",[r._v("Créditos")]),t("p",[r._v(" Iconos diseñados por "),t("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[r._v("Freepik")]),r._v(" from "),t("a",{attrs:{href:"https://www.flaticon.es/",title:"Flaticon"}},[r._v("www.flaticon.es")])])])],1)},Pr=[],$r={name:"AcercaDe"},Fr=$r,Ur=(t("742b"),Object(h["a"])(Fr,Dr,Pr,!1,null,"109b8790",null)),Nr=Ur.exports;b()(Ur,{VAlert:W["a"],VCard:R["a"]});var Jr={name:"HelloWorld",components:{AcercaDe:Nr,Reportes:Hr,Horarios:Cr,Rutas:ar},data:function(){return{tab:1}},methods:{actualizarReporte:function(){this.$refs.reportes.refrescarTodo()},actualizarRutasEnHorarios:function(){this.$refs.horarios.obtenerRutas(),this.$refs.reportes.refrescarTodo()}}},Mr=Jr,zr=t("71a3"),Br=t("c671"),Lr=t("fe57"),Yr=t("aac8"),Gr=t("9a96"),qr=Object(h["a"])(Mr,i,c,!1,null,null,null),Kr=qr.exports;b()(qr,{VIcon:X["a"],VTab:zr["a"],VTabItem:Br["a"],VTabs:Lr["a"],VTabsItems:Yr["a"],VTabsSlider:Gr["a"]});var Wr={name:"App",components:{Principal:Kr},data:function(){return{}}},Qr=Wr,Xr=(t("cf25"),t("7496")),Zr=t("f6c4"),re=Object(h["a"])(Qr,n,o,!1,null,null,null),ee=re.exports;b()(re,{VApp:Xr["a"],VMain:Zr["a"]});t("5363");var te=t("f309");a["a"].use(te["a"]);var ae=new te["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,a["a"].filter("milisegundosALegible",(function(r){if(!r)return"-";var e=new Date(r).toISOString().substr(11,8),t=parseInt(e.substring(0,2)),a=parseInt(e.substring(3,5)),n=parseInt(e.substring(6,8)),o="";return t&&(o=o.concat("".concat(t," hr").concat(t>1?"s":""," "))),a&&(o=o.concat("".concat(a," min").concat(a>1?"s":""," "))),n&&(o=o.concat("".concat(n," seg").concat(n>1?"s":""," "))),o})),a["a"].filter("milisegundosCortos",(function(r){if(!r)return"-";var e=new Date(r).toISOString().substr(14,5);return e})),new a["a"]({vuetify:ae,render:function(r){return r(ee)}}).$mount("#app")},"742b":function(r,e,t){"use strict";t("8a84")},"8a84":function(r,e,t){},cf25:function(r,e,t){"use strict";t("fea6")},fea6:function(r,e,t){}});
//# sourceMappingURL=app.3b05d699.js.map
(function(r){function e(e){for(var t,i,s=e[0],c=e[1],u=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(r[t]=c[t]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var r,e=0;e<o.length;e++){for(var a=o[e],t=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(t=!1)}t&&(o.splice(e--,1),r=i(i.s=a[0]))}return r}var t={},n={app:0},o=[];function i(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return r[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=r,i.c=t,i.d=function(r,e,a){i.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:a})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)i.d(a,t,function(e){return r[e]}.bind(null,t));return a},i.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(e,"a",e),e},i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},i.p="./";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(r,e,a){r.exports=a("56d7")},1:function(r,e){},"56d7":function(r,e,a){"use strict";a.r(e);a("99af"),a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),n=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-app",[a("v-main",[a("Principal")],1)],1)},o=[],i=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",[a("v-tabs",{attrs:{"background-color":"cyan",dark:"","fixed-tabs":"","icons-and-text":""},model:{value:r.tab,callback:function(e){r.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",[r._v(" Rutas "),a("v-icon",[r._v("mdi-bus")])],1),a("v-tab",[r._v(" Horarios "),a("v-icon",[r._v("mdi-clipboard-clock")])],1),a("v-tab",[r._v(" Reportes "),a("v-icon",[r._v("mdi-file-table-box-multiple")])],1)],1),a("v-tabs-items",{model:{value:r.tab,callback:function(e){r.tab=e},expression:"tab"}},[a("v-tab-item",[a("Rutas",{on:{actualizadas:r.actualizarRutasEnHorarios}})],1),a("v-tab-item",[a("Horarios",{ref:"horarios",on:{actualizados:function(e){return r.actualizarReporte()}}})],1),a("v-tab-item",[a("Reportes",{ref:"reportes"})],1)],1)],1)},s=[],c=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-card",{attrs:{flat:""}},[a("ConfirmarEliminacionRuta",{attrs:{ruta:r.rutaSeleccionada,mostrar:r.mostrarDialogoEliminar},on:{confirmado:function(e){return r.eliminarRutaSeleccionada()},cerrar:r.cerrarDialogo}}),a("AgregarRuta",{attrs:{mostrar:r.mostrarDialogoAgregar},on:{guardada:r.onRutaGuardada,cerrar:function(e){r.mostrarDialogoAgregar=!1}}}),r.rutas.length>0?a("div",r._l(r.rutas,(function(e,t){return a("div",{key:t},[a("v-list-item",{attrs:{"two-line":""},on:{click:function(a){return r.confirmarEliminacion(e)}}},[a("v-list-item-content",[a("v-list-item-title",[r._v(r._s(e.nombre))])],1)],1),a("v-divider")],1)})),0):a("div",[a("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[r._v(" Todavía no hay rutas. Agrega una con el botón flotante ")])],1),a("v-btn",{attrs:{color:"primary",fab:"",elevation:"2",right:"",bottom:"",fixed:""},on:{click:function(e){return r.mostrarDialogoAgregarRuta()}}},[a("v-icon",[r._v("mdi-plus")])],1),a("v-snackbar",{attrs:{top:"",timeout:"700"},model:{value:r.snackbar.mostrar,callback:function(e){r.$set(r.snackbar,"mostrar",e)},expression:"snackbar.mostrar"}},[r._v(" "+r._s(r.snackbar.texto)+" ")])],1)},u=[],l=(a("96cf"),a("1da1")),d=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[r._v(" Confirmación ")]),a("v-card-text",[r._v("¿Eliminar "),a("strong",[r._v(r._s(r.ruta.nombre))]),r._v("?"),a("br"),r._v(" Se van a eliminar los horarios relacionados ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:r.confirmar}},[r._v(" Eliminar ")])],1)],1)],1)},m=[],v={props:["mostrar","ruta"],name:"ConfirmarEliminacionRuta",data:function(){return{}},methods:{cerrar:function(){this.$emit("cerrar")},confirmar:function(){this.$emit("confirmado")}}},f=v,p=a("2877"),h=a("6544"),b=a.n(h),g=a("8336"),_=a("b0af"),x=a("99d9"),w=a("169a"),R=a("2fa4"),k=Object(p["a"])(f,d,m,!1,null,"6fe8b434",null),V=k.exports;b()(k,{VBtn:g["a"],VCard:_["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VDialog:w["a"],VSpacer:R["a"]});var C=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[r._v(" Nueva ruta ")]),a("v-form",{ref:"formulario",staticClass:"mx-2",model:{value:r.formularioValido,callback:function(e){r.formularioValido=e},expression:"formularioValido"}},[a("v-text-field",{attrs:{rules:r.reglasValidacion.nombre,label:"Nombre",required:""},model:{value:r.ruta.nombre,callback:function(e){r.$set(r.ruta,"nombre",e)},expression:"ruta.nombre"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),a("v-btn",{attrs:{color:"green darken-1",disabled:!r.formularioValido,text:""},on:{click:r.guardar}},[r._v(" Guardar ")])],1)],1)],1)},S=[],O=(a("7db0"),a("16b2")),T=a("5d16");O["a"].plugin(T["a"]);var y=new O["a"]("rutas");y.createIndex({index:{fields:["hora"]}});var j=y,A=(a("d3b7"),a("25f0"),{restarHorarios:function(r,e){var a=this.formatearFechaActual(),t=new Date(a+" "+r),n=new Date(a+" "+e);return t-n},idConSufijo:function(r){return r.concat("_",this.formatearFechaYHoraParaId())},formatearFechaYHoraParaId:function(){var r=new Date,e=r.getMonth()+1,a=r.getDate(),t="".concat(r.getFullYear(),"-").concat(this.agregarCeroSiEsNecesario(e),"-").concat(this.agregarCeroSiEsNecesario(a)),n="".concat(this.agregarCeroSiEsNecesario(r.getHours()),"_").concat(this.agregarCeroSiEsNecesario(r.getMinutes()),"_").concat(this.agregarCeroSiEsNecesario(r.getSeconds()));return t+"_"+n},formatearHoraActual:function(){var r=new Date;return"".concat(this.agregarCeroSiEsNecesario(r.getHours()),":").concat(this.agregarCeroSiEsNecesario(r.getMinutes()),":").concat(this.agregarCeroSiEsNecesario(r.getSeconds()))},formatearFechaActual:function(){var r=new Date,e=r.getMonth()+1,a=r.getDate();return"".concat(r.getFullYear(),"-").concat(this.agregarCeroSiEsNecesario(e),"-").concat(this.agregarCeroSiEsNecesario(a))},agregarCeroSiEsNecesario:function(r){return r<10?"0".concat(r):r.toString()}}),H=A,I="rutas",D={nueva:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.put({_id:H.idConSufijo(I),nombre:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},obtener:function(){return Object(l["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,j.find({selector:{_id:{$gte:I,$lte:I+"￰"}}});case 2:return e=r.sent,r.abrupt("return",e.docs);case 4:case"end":return r.stop()}}),r)})))()},eliminar:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.remove(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},E=D,$={name:"AgregarRuta",props:["mostrar"],data:function(){return{ruta:{nombre:""},formularioValido:!1,reglasValidacion:{nombre:[function(r){return!!r||"Escribe el nombre"}]}}},methods:{antesDeCerrar:function(){this.$refs.formulario.resetValidation(),this.$refs.formulario.reset()},cerrar:function(){this.antesDeCerrar(),this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.nueva(r.ruta.nombre);case 2:r.ruta.nombre="",r.antesDeCerrar(),r.$emit("guardada");case 5:case"end":return e.stop()}}),e)})))()}}},N=$,P=a("4bd4"),U=a("8654"),F=Object(p["a"])(N,C,S,!1,null,null,null),M=F.exports;b()(F,{VBtn:g["a"],VCard:_["a"],VCardActions:x["a"],VCardTitle:x["c"],VDialog:w["a"],VForm:P["a"],VSpacer:R["a"],VTextField:U["a"]});var L={name:"Rutas",components:{AgregarRuta:M,ConfirmarEliminacionRuta:V},data:function(){return{rutas:[],rutaSeleccionada:{},mostrarDialogoEliminar:!1,mostrarDialogoAgregar:!1,snackbar:{mostrar:!1,texto:""}}},mounted:function(){this.obtenerRutas()},methods:{onRutaGuardada:function(){this.snackbar.mostrar=!0,this.snackbar.texto="Ruta guardada",this.mostrarDialogoAgregar=!1,this.$emit("actualizadas"),this.obtenerRutas()},mostrarDialogoAgregarRuta:function(){this.mostrarDialogoAgregar=!0},confirmarEliminacion:function(r){this.rutaSeleccionada=r,this.mostrarDialogoEliminar=!0},eliminarRutaSeleccionada:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.eliminar(r.rutaSeleccionada);case 2:r.rutaSeleccionada={},r.mostrarDialogoEliminar=!1,r.$emit("actualizadas"),r.obtenerRutas();case 6:case"end":return e.stop()}}),e)})))()},cerrarDialogo:function(){this.mostrarDialogoEliminar=!1},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.obtener();case 2:r.rutas=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},B=L,G=a("0798"),z=a("ce7e"),Y=a("132d"),J=a("da13"),q=a("5d23"),K=a("2db4"),W=Object(p["a"])(B,c,u,!1,null,"156af335",null),Q=W.exports;b()(W,{VAlert:G["a"],VBtn:g["a"],VCard:_["a"],VDivider:z["a"],VIcon:Y["a"],VListItem:J["a"],VListItemContent:q["a"],VListItemTitle:q["b"],VSnackbar:K["a"]});var X=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-card",{attrs:{flat:""}},[a("DialogoAgregarHorario",{attrs:{ruta:r.rutaSeleccionada,mostrar:r.dialogoRegistrarHorario},on:{guardado:r.onHorarioGuardado,cerrar:function(e){r.dialogoRegistrarHorario=!1}}}),r.rutas.length>0?a("div",r._l(r.rutas,(function(e,t){return a("div",{key:t},[a("v-list-item",{attrs:{"three-line":""},on:{click:function(a){return r.registrarHorario(e)}}},[a("v-list-item-content",[a("v-list-item-title",[a("h5",{staticClass:"text-h4"},[r._v(r._s(e.nombre))]),e.horario?a("div",[a("h5",{staticClass:"text-h6"},[a("v-icon",[r._v("mdi-clock-outline")]),r._v(" "+r._s(e.horario.hora)+" | Hace "+r._s(r._f("milisegundosALegible")(e.transcurrido))+" ")],1),a("TipoTransporte",{attrs:{horario:e.horario}})],1):a("div",[a("p",[r._v(" Sin información de horario. Toca para agregar ")])])])],1)],1),a("v-divider")],1)})),0):a("div",[a("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[r._v(" Todavía no hay rutas. Ve a "),a("strong",[r._v("Rutas")]),r._v(" y agrega algunas ")])],1),a("v-snackbar",{attrs:{top:"",timeout:"700"},model:{value:r.snackbar.mostrar,callback:function(e){r.$set(r.snackbar,"mostrar",e)},expression:"snackbar.mostrar"}},[r._v(" "+r._s(r.snackbar.texto)+" ")]),a("v-btn",{attrs:{color:"primary",fab:"",elevation:"2",right:"",bottom:"",fixed:""},on:{click:function(e){return r.clickBoton()}}},[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:r.pausado,expression:"pausado"}]},[r._v("mdi-play")]),a("v-icon",{directives:[{name:"show",rawName:"v-show",value:!r.pausado,expression:"!pausado"}]},[r._v("mdi-pause")])],1)],1)},Z=[],rr=a("b85c"),er=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-dialog",{attrs:{persistent:""},model:{value:r.mostrar,callback:function(e){r.mostrar=e},expression:"mostrar"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[r._v("Registrar pase")]),a("v-alert",{staticClass:"mx-2 my-2",attrs:{dense:"",type:"info"}},[a("strong",[r._v(r._s(r.ruta.nombre))])]),a("div",{staticClass:"mx-2"},[a("v-select",{attrs:{items:r.tipos,label:"Tipo de unidad"},model:{value:r.tipoUnidad,callback:function(e){r.tipoUnidad=e},expression:"tipoUnidad"}}),a("v-text-field",{attrs:{label:"Número",type:"number"},model:{value:r.numeroUnidad,callback:function(e){r.numeroUnidad=e},expression:"numeroUnidad"}}),a("v-switch",{attrs:{label:"Tomar hora actual"},model:{value:r.tomarHoraActual,callback:function(e){r.tomarHoraActual=e},expression:"tomarHoraActual"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:r.tomarHoraActual,expression:"tomarHoraActual"}]},[r._v(" Al presionar el botón, se registrará con la hora: "),a("strong",[r._v(r._s(r.horaRefrescada))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!r.tomarHoraActual,expression:"!tomarHoraActual"}]},[a("v-time-picker",{attrs:{"full-width":"",format:"ampm","use-seconds":""},model:{value:r.horario,callback:function(e){r.horario=e},expression:"horario"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!r.horario,expression:"!horario"}]},[a("p",[r._v("Por favor selecciona el horario")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:r.horario,expression:"horario"}]},[r._v(" Se registrará con la hora: "),a("strong",[r._v(r._s(r.horario))])])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:r.cerrar}},[r._v(" Cancelar ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:r.guardar}},[r._v(" Guardar ")])],1)],1)],1)},ar=[],tr="horarios",nr={nuevo:function(r,e,a,t,n){return Object(l["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,j.put({_id:H.idConSufijo(tr),idRuta:r,fecha:e,hora:a,tipoUnidad:t,numero:n});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}}),o)})))()},obtenerPorFechaEIdRuta:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,j.find({selector:{_id:{$gte:tr,$lte:tr+"￰"},fecha:r,idRuta:e}});case 2:return t=a.sent,a.abrupt("return",t.docs);case 4:case"end":return a.stop()}}),a)})))()},obtenerUltimoHorarioRegistrado:function(r,e){return Object(l["a"])(regeneratorRuntime.mark((function a(){var t,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,j.find({selector:{_id:{$gte:tr,$lte:tr+"￰"},fecha:r,idRuta:e,hora:{$gt:null}},sort:[{hora:"desc"}],limit:1});case 2:if(t=a.sent,n=t.docs,!(n.length<=0)){a.next=6;break}return a.abrupt("return","");case 6:return a.abrupt("return",n[0]);case 7:case"end":return a.stop()}}),a)})))()},eliminar:function(r){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.remove(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},or=nr,ir="Rojo",sr="Combi",cr={TIPO_ROJO:ir,TIPO_COMBI:sr,TIPOS_UNIDAD:[sr,ir]},ur=cr,lr={props:["mostrar","ruta"],name:"DialogoAgregarHorario",data:function(){return{horario:"",horaRefrescada:"",idInterval:null,tomarHoraActual:!0,tipos:[],tipoUnidad:"",numeroUnidad:""}},mounted:function(){var r=this;this.tipos=ur.TIPOS_UNIDAD,this.tipoUnidad=this.tipos[0],this.idInterval=setInterval((function(){r.refrescarHora()}),500)},beforeDestroy:function(){console.log("Destroy!")},methods:{antesDeCerrar:function(){this.tipoUnidad=this.tipos[0],this.numeroUnidad=""},refrescarHora:function(){this.horaRefrescada=H.formatearHoraActual()},cerrar:function(){this.antesDeCerrar(),this.$emit("cerrar")},guardar:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.tomarHoraActual||r.horario){e.next=2;break}return e.abrupt("return");case 2:return a="",a=r.tomarHoraActual?H.formatearHoraActual():r.horario,e.next=6,or.nuevo(r.ruta._id,H.formatearFechaActual(),a,r.tipoUnidad,r.numeroUnidad);case 6:r.antesDeCerrar(),r.$emit("guardado");case 8:case"end":return e.stop()}}),e)})))()}}},dr=lr,mr=a("b974"),vr=a("b73d"),fr=a("c964"),pr=Object(p["a"])(dr,er,ar,!1,null,null,null),hr=pr.exports;b()(pr,{VAlert:G["a"],VBtn:g["a"],VCard:_["a"],VCardActions:x["a"],VCardTitle:x["c"],VDialog:w["a"],VSelect:mr["a"],VSpacer:R["a"],VSwitch:vr["a"],VTextField:U["a"],VTimePicker:fr["a"]});var br=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",[a("v-icon",[r._v("mdi-bus")]),a("v-badge",{attrs:{bordered:"",color:this.esRojo()?"error":"info",overlap:"",content:r.horario.numero,value:r.horario.numero}},[a("v-btn",{staticClass:"white--text",attrs:{color:this.esRojo()?"error":"info",depressed:""}},[r._v(" "+r._s(r.horario.tipoUnidad)+" ")])],1)],1)},gr=[],_r={name:"TipoTransporte",props:["horario"],methods:{esRojo:function(){return this.horario.tipoUnidad===ur.TIPO_ROJO}}},xr=_r,wr=a("4ca6"),Rr=Object(p["a"])(xr,br,gr,!1,null,"a8b523de",null),kr=Rr.exports;b()(Rr,{VBadge:wr["a"],VBtn:g["a"],VIcon:Y["a"]});var Vr={name:"Horarios",components:{TipoTransporte:kr,DialogoAgregarHorario:hr},data:function(){return{snackbar:{texto:"",mostrar:!1},dialogoRegistrarHorario:!1,rutas:[],rutaSeleccionada:{},idInterval:null,pausado:!1}},mounted:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.obtenerRutas();case 2:r.iniciarIntervalRefrescarTiempo();case 3:case"end":return e.stop()}}),e)})))()},methods:{clickBoton:function(){this.pausado?(this.iniciarIntervalRefrescarTiempo(),this.pausado=!1):(clearInterval(this.idInterval),this.pausado=!0)},iniciarIntervalRefrescarTiempo:function(){var r=this;clearInterval(this.idInterval),this.refrescarTiempoTranscurrido(),this.idInterval=setInterval((function(){r.refrescarTiempoTranscurrido()}),2e3)},refrescarTiempoTranscurrido:function(){var r,e=H.formatearFechaActual(),a=new Date,t=Object(rr["a"])(this.rutas);try{for(t.s();!(r=t.n()).done;){var n=r.value;if(n.horario.hora){var o=new Date(e+" "+n.horario.hora);n.transcurrido=a-o}else n.transcurrido=""}}catch(i){t.e(i)}finally{t.f()}},onHorarioGuardado:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.snackbar={texto:"Horario guardado",mostrar:!0},e.next=3,r.obtenerRutas();case 3:r.dialogoRegistrarHorario=!1,r.$emit("actualizados");case 5:case"end":return e.stop()}}),e)})))()},registrarHorario:function(r){this.rutaSeleccionada=r,this.dialogoRegistrarHorario=!0},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,t,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=H.formatearFechaActual(),e.next=3,E.obtener();case 3:t=e.sent,n=Object(rr["a"])(t),e.prev=5,n.s();case 7:if((o=n.n()).done){e.next=15;break}return i=o.value,e.next=11,or.obtenerUltimoHorarioRegistrado(a,i._id);case 11:i.horario=e.sent,i.transcurrido=0;case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](5),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:r.rutas=t;case 24:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})))()}}},Cr=Vr,Sr=Object(p["a"])(Cr,X,Z,!1,null,null,null),Or=Sr.exports;b()(Sr,{VAlert:G["a"],VBtn:g["a"],VCard:_["a"],VDivider:z["a"],VIcon:Y["a"],VListItem:J["a"],VListItemContent:q["a"],VListItemTitle:q["b"],VSnackbar:K["a"]});var Tr=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-card",{staticClass:"mx-2",attrs:{flat:""}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":r.fechaSeleccionada,persistent:"",width:"290px"},on:{"update:returnValue":function(e){r.fechaSeleccionada=e},"update:return-value":function(e){r.fechaSeleccionada=e}},scopedSlots:r._u([{key:"activator",fn:function(e){var t=e.on,n=e.attrs;return[a("v-text-field",r._g(r._b({attrs:{label:"Fecha","prepend-icon":"mdi-calendar",readonly:""},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},model:{value:r.fechaSeleccionada,callback:function(e){r.fechaSeleccionada=e},expression:"fechaSeleccionada"}},"v-text-field",n,!1),t))]}}]),model:{value:r.modal,callback:function(e){r.modal=e},expression:"modal"}},[a("v-date-picker",{attrs:{locale:"es-la",scrollable:""},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},model:{value:r.fechaSeleccionada,callback:function(e){r.fechaSeleccionada=e},expression:"fechaSeleccionada"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){r.modal=!1}}},[r._v(" Cancelar ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return r.$refs.dialog.save(r.fechaSeleccionada)}}},[r._v(" OK ")])],1)],1),a("v-select",{attrs:{items:r.rutas,"item-text":"nombre","item-value":"_id",label:"Ruta","no-data-text":"No has registrado ninguna ruta"},on:{change:function(e){return r.obtenerHorariosConFechaYRutaSeleccionada()}},model:{value:r.rutaSeleccionada,callback:function(e){r.rutaSeleccionada=e},expression:"rutaSeleccionada"}}),r.horarios.length>0?a("div",[a("v-row",{attrs:{justify:"center"}},[a("h6",{staticClass:"text-h5"},[r._v("Promedios")])]),a("v-row",{attrs:{justify:"center"}},[a("v-chip",{staticClass:"mr-1",attrs:{color:"success"}},[r._v("General")]),a("v-chip",{staticClass:"mr-1",attrs:{color:"info"}},[r._v("Combi")]),a("v-chip",{attrs:{color:"red",dark:""}},[r._v("Rojo")])],1),a("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[a("v-chip",{staticClass:"mr-1 my-1",attrs:{color:"success"}},[r._v(r._s(r._f("milisegundosALegible")(r.promedios.general)))]),a("v-chip",{staticClass:"mr-1 my-1",attrs:{color:"info"}},[r._v(r._s(r._f("milisegundosALegible")(r.promedios.combi)))]),a("v-chip",{staticClass:"mr-1 my-1",attrs:{color:"red",dark:""}},[r._v(r._s(r._f("milisegundosALegible")(r.promedios.rojo)))])],1),a("v-divider",{staticClass:"mt-4"}),r._l(r.horarios,(function(e,t){return a("div",{key:t},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[a("h6",{staticClass:"text-h6"},[r._v(" "+r._s(e.hora)+" ")])]),a("TipoTransporte",{attrs:{horario:e}}),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.tiempoMismoTipo,expression:"horario.tiempoMismoTipo"}]},[a("strong",[r._v(r._s(e.tipoUnidad)+" anterior: "),a("br")]),r._v(" "+r._s(r._f("milisegundosALegible")(e.tiempoMismoTipo))+" ")])]),a("v-col",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.tiempoGeneral,expression:"horario.tiempoGeneral"}]},[a("strong",[r._v("Transporte anterior: ")]),a("br"),r._v(" "+r._s(r._f("milisegundosALegible")(e.tiempoGeneral))+" ")])])],1)],1)],1),a("v-divider")],1)}))],2):a("div",[a("v-alert",{attrs:{type:"info"}},[r._v(" No hay horarios para la fecha y ruta seleccionados ")])],1)],1)},yr=[],jr={name:"Reportes",components:{TipoTransporte:kr},data:function(){return{fechaSeleccionada:"",rutas:[],modal:!1,rutaSeleccionada:"",horarios:[],promedios:{rojo:"",combi:"",general:""},TIPO_COMBI:ur.TIPO_COMBI}},mounted:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.refrescarTodo();case 2:case"end":return e.stop()}}),e)})))()},methods:{refrescarTodo:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.fechaSeleccionada=H.formatearFechaActual(),e.next=3,r.obtenerRutas();case 3:return r.rutas.length>0&&(r.rutaSeleccionada=r.rutas[0]._id),e.next=6,r.obtenerHorariosConFechaYRutaSeleccionada();case 6:case"end":return e.stop()}}),e)})))()},obtenerRutas:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.obtener();case 2:r.rutas=e.sent;case 3:case"end":return e.stop()}}),e)})))()},obtenerHorariosConFechaYRutaSeleccionada:function(){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,t,n,o,i,s,c,u,l,d,m,v,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.fechaSeleccionada&&r.rutaSeleccionada){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,or.obtenerPorFechaEIdRuta(r.fechaSeleccionada,r.rutaSeleccionada);case 4:if(a=e.sent,a.length>0){for(t="",n="",o=0,i=0,s=0,c=0,u=0,a[0].tipoUnidad===ur.TIPO_ROJO?t=a[0].hora:n=a[0].hora,l=1;l<a.length;l++)d=a[l].hora,m=a[l-1].hora,v=H.restarHorarios(d,m),s+=v,a[l].tiempoGeneral=v,a[l].tipoUnidad===ur.TIPO_ROJO?(t&&(f=H.restarHorarios(d,t),o+=f,c++,a[l].tiempoMismoTipo=f),t=d):(n&&(p=H.restarHorarios(d,n),i+=p,u++,a[l].tiempoMismoTipo=p),n=d);r.promedios.general=s/a.length-1,r.promedios.rojo=o/c,r.promedios.combi=i/u}r.horarios=a;case 7:case"end":return e.stop()}}),e)})))()}}},Ar=jr,Hr=a("cc20"),Ir=a("62ad"),Dr=a("2e4b"),Er=a("0fd9"),$r=Object(p["a"])(Ar,Tr,yr,!1,null,"0147185a",null),Nr=$r.exports;b()($r,{VAlert:G["a"],VBtn:g["a"],VCard:_["a"],VChip:Hr["a"],VCol:Ir["a"],VDatePicker:Dr["a"],VDialog:w["a"],VDivider:z["a"],VListItem:J["a"],VListItemContent:q["a"],VListItemTitle:q["b"],VRow:Er["a"],VSelect:mr["a"],VSpacer:R["a"],VTextField:U["a"]});var Pr={name:"HelloWorld",components:{Reportes:Nr,Horarios:Or,Rutas:Q},data:function(){return{tab:1}},methods:{actualizarReporte:function(){this.$refs.reportes.refrescarTodo()},actualizarRutasEnHorarios:function(){this.$refs.horarios.obtenerRutas(),this.$refs.reportes.refrescarTodo()}}},Ur=Pr,Fr=a("71a3"),Mr=a("c671"),Lr=a("fe57"),Br=a("aac8"),Gr=a("9a96"),zr=Object(p["a"])(Ur,i,s,!1,null,null,null),Yr=zr.exports;b()(zr,{VIcon:Y["a"],VTab:Fr["a"],VTabItem:Mr["a"],VTabs:Lr["a"],VTabsItems:Br["a"],VTabsSlider:Gr["a"]});var Jr={name:"App",components:{Principal:Yr},data:function(){return{}}},qr=Jr,Kr=(a("cf25"),a("7496")),Wr=a("f6c4"),Qr=Object(p["a"])(qr,n,o,!1,null,null,null),Xr=Qr.exports;b()(Qr,{VApp:Kr["a"],VMain:Wr["a"]});a("5363");var Zr=a("f309");t["a"].use(Zr["a"]);var re=new Zr["a"]({icons:{iconfont:"mdi"}});t["a"].config.productionTip=!1,t["a"].filter("milisegundosALegible",(function(r){if(!r)return"-";var e=new Date(r).toISOString().substr(11,8),a=parseInt(e.substring(0,2)),t=parseInt(e.substring(3,5)),n=parseInt(e.substring(6,8)),o="";return a&&(o=o.concat("".concat(a," hr").concat(a>1?"s":""," "))),t&&(o=o.concat("".concat(t," min").concat(t>1?"s":""," "))),n&&(o=o.concat("".concat(n," seg").concat(n>1?"s":""," "))),o})),new t["a"]({vuetify:re,render:function(r){return r(Xr)}}).$mount("#app")},cf25:function(r,e,a){"use strict";a("fea6")},fea6:function(r,e,a){}});
//# sourceMappingURL=app.65ef78fb.js.map
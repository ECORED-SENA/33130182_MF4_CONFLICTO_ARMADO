/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2055, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bton-instrucciones}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("instru").show();
         
         sym.getSymbol("instru").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("rta-texto1").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         sym.$("btn-siguiente").show();
         Siguiente="text2"
         sym.$("btnText1").hide();
         
         // Mostrar un elemento 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         $('.sombra').mouseover(function(event) { 	
         	$(this).css({"background": "rgba(192,192,192,0.2)","-webkit-box-shadow": "10px 11px 30px -5px rgba(192,192,192,0.77)","-moz-box-shadow": "10px 11px 30px -5px rgba(192,192,192,0.77)","box-shadow": "10px 11px 30px -5px rgba(192,192,192,0.77))","transition": "all 0.5s ease"});
         })
         
         $('.sombra').mouseout(function(event) { 	
         	$(this).css({"background": "rgba(170,92,157,0.00)","-webkit-box-shadow": "0px 0px 0px 0px","-moz-box-shadow": "0px 0px 0px 0px","box-shadow": "0px 0px 0px 0px","transition": "all 0.5s ease"});
         })
         
         Siguiente="";
         mostrar3=0;
         mostrar4=0;
         mostrar7=0;
         mostrar8=0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-siguiente}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play(Siguiente);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3395, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4070, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5425, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6095, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6775, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText2}", "click", function(sym, e) {
         sym.$("rta-texto2").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         sym.$("btn-siguiente").show();
         Siguiente="text3"
         sym.$("btnText2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText3}", "click", function(sym, e) {
         sym.$("rta1-texto3").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar3++;
         if (mostrar3==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar3==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text4"
         sym.$("btnText3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText3Copy}", "click", function(sym, e) {
         sym.$("rta3-texto3").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         mostrar3++;
         if (mostrar3==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar3==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text4"
         sym.$("btnText3Copy").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText3Copy2}", "click", function(sym, e) {
         sym.$("rta2-texto3").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar3++;
         if (mostrar3==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar3==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text4"
         sym.$("btnText3Copy2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText4Copy}", "click", function(sym, e) {
         sym.$("rta1-texto4").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar4++;
         if (mostrar4==2){
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text5"
         sym.$("btnText4Copy").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText4}", "click", function(sym, e) {
         sym.$("rta2-texto4").show("clip", { direction: "bounce" }, 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar4++;
         if (mostrar4==2){
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text5"
         sym.$("btnText4").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("rta-texto5").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         sym.$("btn-siguiente").show();
         Siguiente="text6"
         sym.$("btnText5").hide();
         
         // Mostrar un elemento 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("rta-texto6").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         sym.$("btn-siguiente").show();
         Siguiente="text7"
         sym.$("btnText6").hide();
         
         // Mostrar un elemento 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText7}", "click", function(sym, e) {
         sym.$("rta1-texto7").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar7++;
         if (mostrar7==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar7==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text8"
         sym.$("btnText7").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText7Copy}", "click", function(sym, e) {
         sym.$("rta2-texto7").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar7++;
         if (mostrar7==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar7==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text8"
         sym.$("btnText7Copy").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText7Copy2}", "click", function(sym, e) {
         sym.$("rta3-texto7").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar7++;
         if (mostrar7==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar7==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="text8"
         sym.$("btnText7Copy2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText8}", "click", function(sym, e) {
         sym.$("rta1-texto8").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar8++;
         if (mostrar8==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar8==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="fin"
         sym.$("btnText8").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText8Copy}", "click", function(sym, e) {
         sym.$("rta2-texto8").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar8++;
         if (mostrar8==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar8==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="fin"
         sym.$("btnText8Copy").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnText8Copy2}", "click", function(sym, e) {
         sym.$("rta3-texto8").show("clip", 1000);
         
         // Reproducir una pista de audio 
         sym.$("click")[0].play(0);
         
         mostrar8++;
         if (mostrar8==1){
         	sym.$("texto-aun-faltan").show();
         }else if (mostrar8==3){
         
         	sym.$("btn-siguiente").show();
         }
         Siguiente="fin"
         sym.$("btnText8Copy2").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7073, function(sym, e) {
         // introducir código aquí
         
         // Mostrar un elemento 
         sym.$("bien").show();
         
         sym.getSymbol("bien").play(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instru'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("instru");
   //Edge symbol end:'instru'

   //=========================================================
   
   //Edge symbol: 'bien'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         window.close();

      });
      //Edge binding end

   })("bien");
   //Edge symbol end:'bien'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1286161787");
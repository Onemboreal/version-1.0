/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         this.onMove=function(posX, posY){
         	timelinecontrol= Number(posX)*20;
         	//console.log(timelinecontrol);
         	sym.stop(timelinecontrol);
         }
         
         
         sym.getSymbol("cloudFront_sym").play();
         
         
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${eggs_sym}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code for mouse click here
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("crack")[0].currentTime = 0;
         if (sym.$("crack")[0].paused) {
         	sym.$("crack")[0].play();
         
         	// Play the timeline at a label or specific time. For example:
         	// sym.play(500); or sym.play("myLabel");
         	sym.getSymbol("eggs_sym").play(5000);
         
         // Set the volume of an audio track to 20% 
         sym.$("ambience")[0].volume = 0.9;
         sym.$("ambience")[0].volume = 0.6;
         sym.$("ambience")[0].volume = 0.3;
         sym.$("ambience")[0].volume = 0.2;
         
         setTimeout(function() { window.open("menu.html", "_self"); }, 2000);
         
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         // insert code to be run when a user drags an object (for touch devices only)
         this.onMove(e.pageX, e.pageY);

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         this.onMove(e.pageX, e.pageY);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         
      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${eggs_sym}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code for mouse click here
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("crack")[0].currentTime = 0;
         if (sym.$("crack")[0].paused) {
         	sym.$("crack")[0].play();
         
         	// Play the timeline at a label or specific time. For example:
         	// sym.play(500); or sym.play("myLabel");
         	sym.getSymbol("eggs_sym").play(5000);
         
         // Set the volume of an audio track to 20% 
         sym.$("ambience")[0].volume = 0.9;
         sym.$("ambience")[0].volume = 0.6;
         sym.$("ambience")[0].volume = 0.3;
         sym.$("ambience")[0].volume = 0.2;
         
         setTimeout(function() { window.open("menu.html", "_self"); }, 2000);
         
         }
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("eggs_sym");
   //Edge symbol end:'eggs_sym'

   //=========================================================
   
   //Edge symbol: 'palmera_symbol'
   (function(symbolName) {   
   
   })("palmera_symbol");
   //Edge symbol end:'palmera_symbol'

   //=========================================================
   
   //Edge symbol: 'palmeraSymbol'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${hitarea1}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("palmera")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("palmera")[0].paused) {
         	sym.getComposition().getStage().$("palmera")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hitarea1}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("palmera")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("palmera")[0].paused) {
         	sym.getComposition().getStage().$("palmera")[0].play();
         }
         

      });
      //Edge binding end

   })("palmeraSymbol");
   //Edge symbol end:'palmeraSymbol'

   //=========================================================
   
   //Edge symbol: 'clouds'
   (function(symbolName) {   
   
   })("clouds");
   //Edge symbol end:'clouds'

   //=========================================================
   
   //Edge symbol: 'cloudFront_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("cloudFront_sym");
   //Edge symbol end:'cloudFront_sym'

   //=========================================================
   
   //Edge symbol: 'bicho'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // insert code here
         sym.playReverse();

      });
      //Edge binding end

   })("bicho");
   //Edge symbol end:'bicho'

   //=========================================================
   
   //Edge symbol: 'logoSym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${logo2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         sym.play(0);
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("giggle")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("giggle")[0].paused) {
         	sym.getComposition().getStage().$("giggle")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${logo2}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         sym.play(0);
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("giggle")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("giggle")[0].paused) {
         	sym.getComposition().getStage().$("giggle")[0].play();
         }
         

      });
      //Edge binding end

   })("logoSym");
   //Edge symbol end:'logoSym'

   //=========================================================
   
   //Edge symbol: 'nubes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("nubes");
   //Edge symbol end:'nubes'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-534483870");
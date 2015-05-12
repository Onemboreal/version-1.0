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
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${trex_sym2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         sym.getSymbol("trex_sym2").getSymbol("headGroup_trex").play(0);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("rawrmed")[0].currentTime = 0;
         if (sym.$("rawrmed")[0].paused) {
         	sym.$("rawrmed")[0].play();
         	setTimeout(function() { window.open("trex.html", "_self"); }, 2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stegosaurus_sym}", "touchstart", function(sym, e) {
         
         sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").play(2500);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("giantangry")[0].currentTime = 0;
         if (sym.$("giantangry")[0].paused) {
         	sym.$("giantangry")[0].play();
          setTimeout(function() { window.open("stegosaurus.html", "_self"); }, 3000);
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trex_sym2}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         sym.getSymbol("trex_sym2").getSymbol("headGroup_trex").play(0);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("rawrmed")[0].currentTime = 0;
         if (sym.$("rawrmed")[0].paused) {
         	sym.$("rawrmed")[0].play();
         	setTimeout(function() { window.open("trex.html", "_self"); }, 2000);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stegosaurus_sym}", "click", function(sym, e) {
         
         sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").play(2500);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("giantangry")[0].currentTime = 0;
         if (sym.$("giantangry")[0].paused) {
         	sym.$("giantangry")[0].play();
          setTimeout(function() { window.open("stegosaurus.html", "_self"); }, 3000);
         }
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'tacha_btn_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tacha_btn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play();
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tinybtn_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tinybtn_sound")[0].paused) {
         	sym.getComposition().getStage().$("tinybtn_sound")[0].play();
         	setTimeout(function() { window.open("index.html", "_self"); }, 1000);
         }
         
         

      });
      //Edge binding end

   })("tacha_btn_sym");
   //Edge symbol end:'tacha_btn_sym'

   //=========================================================
   
   //Edge symbol: 'allbodyparent'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("allbodyparent");
   //Edge symbol end:'allbodyparent'

   //=========================================================
   
   //Edge symbol: 'head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

   })("head");
   //Edge symbol end:'head'

   //=========================================================
   
   //Edge symbol: 'eye'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye");
   //Edge symbol end:'eye'

   //=========================================================
   
   //Edge symbol: 'tail'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("tail");
   //Edge symbol end:'tail'

   //=========================================================
   
   //Edge symbol: 'body'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("body");
   //Edge symbol end:'body'

   //=========================================================
   
   //Edge symbol: 'allbody'
   (function(symbolName) {   
   
   })("allbody");
   //Edge symbol end:'allbody'

   //=========================================================
   
   //Edge symbol: 'eye_trex'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye_trex");
   //Edge symbol end:'eye_trex'

   //=========================================================
   
   //Edge symbol: 'trex_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("trex_sym");
   //Edge symbol end:'trex_sym'

   //=========================================================
   
   //Edge symbol: 'body_trex'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("body_trex");
   //Edge symbol end:'body_trex'

   //=========================================================
   
   //Edge symbol: 'tail_trex'
   (function(symbolName) {   
   
   })("tail_trex");
   //Edge symbol end:'tail_trex'

   //=========================================================
   
   //Edge symbol: 'headGroup_trex'
   (function(symbolName) {   
   
   })("headGroup_trex");
   //Edge symbol end:'headGroup_trex'

   //=========================================================
   
   //Edge symbol: 'rarm_trex'
   (function(symbolName) {   
   
   })("rarm_trex");
   //Edge symbol end:'rarm_trex'

   //=========================================================
   
   //Edge symbol: 'larm_trex'
   (function(symbolName) {   
   
   })("larm_trex");
   //Edge symbol end:'larm_trex'

   //=========================================================
   
   //Edge symbol: 'tacha_btn_sym_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tacha_btn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play();
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tiny_btn")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tiny_btn")[0].paused) {
         	sym.getComposition().getStage().$("tiny_btn")[0].play();
         	setTimeout(function() { window.open("index.html", "_self"); }, 1000);
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tacha_btn}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play();
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tiny_btn")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tiny_btn")[0].paused) {
         	sym.getComposition().getStage().$("tiny_btn")[0].play();
         	setTimeout(function() { window.open("index.html", "_self"); }, 1000);
         }
         
         
         

      });
      //Edge binding end

   })("tacha_btn_sym_1");
   //Edge symbol end:'tacha_btn_sym_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-534730691");
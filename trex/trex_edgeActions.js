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
      
      
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Defines the depth
         theDepth = 0;
         
         // create an array to items eaten by the dino
         var myPlants = ["planta3hojas_sym", "plantaverde_sym", "planta3hojas2_sym", "plantaverdeinversa_sym"];
         var plantsNum = 0;
         
         //Drag and drop function
         sym.dragDrop = function(item, theLeft, theTop) {
             sym.$(item).draggable({
                 opacity: 0.35,
                 revert: "invalid"
             });
         
             sym.$("dropArea").droppable({
                 accept: sym.$(item),
                 drop: function() {
         //stop the im hungry message
                     if (plantsNum == myPlants.length - 2) {
                         sym.getSymbol("hungry_sym").stop(0);}
         
                     // loop to keep track of the array
                     if (plantsNum < myPlants.length - 1) {
                         // alert('im hungry');
                         sym.getSymbol(item).play("dissapear");
         
                         plantsNum = plantsNum + 1;
         
         
                         sym.getSymbol("corazon_sym").play();
         
         
         
                         // Set a toggle to play or pause the symbol timeline 
                         if (sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").isPlaying()) {
                             sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").play(0);
                         } else {
                             sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").play(0);
                         }
         
         
                         // Replay an audio track from the beginning, regardless of current playing state 
                         sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").$("chew")[0].currentTime = 0;
                         if (sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").$("chew")[0].paused) {
                             sym.getSymbol("stegosaurus_sym").getSymbol("allbodychild").getSymbol("head").$("chew")[0].play();
                         }
         
                     } else {
         
         
                         sym.getSymbol("full_sym").play();
         
                         sym.getSymbol("hungry_sym").stop(0);
         
                         sym.$(item).animate({
                             "left": theLeft,
                             "top": theTop
                         }, "slow");
                     }
         
         
                 }
             });
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${plantaverde_sym}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().dragDrop("plantaverde_sym","385px","614px");
         
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${plantaverde_sym}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         theDepth += 1;
         sym.$("plantaverde_sym").css({"position": "absolute", "z-index": theDepth});

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${plantaverdeinversa_sym}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         theDepth += 1;
         sym.$("plantaverdeinversa_sym").css({"position": "absolute", "z-index": theDepth});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plantaverdeinversa_sym}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().dragDrop("plantaverdeinversa_sym","924px","506px");
         
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${plantaverde_sym}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.getComposition().getStage().dragDrop("plantaverde_sym","385px","614px");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${plantaverdeinversa_sym}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.getComposition().getStage().dragDrop("plantaverdeinversa_sym","924px","506px");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code for mouse click here
         // insert code to be run when a user touches the object (for touch devices only)
         
         sym.getSymbol("trex_sym2").getSymbol("headGroup_trex").play(0);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("rawrmed")[0].currentTime = 0;
         if (sym.$("rawrmed")[0].paused) {
         	sym.$("rawrmed")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code for mouse click here
         // insert code to be run when a user touches the object (for touch devices only)
         
         sym.getSymbol("trex_sym2").getSymbol("headGroup_trex").play(0);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.$("rawrmed")[0].currentTime = 0;
         if (sym.$("rawrmed")[0].paused) {
         	sym.$("rawrmed")[0].play();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'info_btn_sym'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${info_btn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         
         //fact box play
         sym.getComposition().getStage().getSymbol("factbox_sym").play(0);
         
         // Set timeout & hide elements
         setTimeout(function() { sym.getSymbolElement().hide();},125);
         setTimeout(function() { sym.getComposition().getStage().$("tacha_btn_sym").hide();},125);
         
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tinybtn_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tinybtn_sound")[0].paused) {
         	sym.getComposition().getStage().$("tinybtn_sound")[0].play();
         }
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("bonce_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("bonce_sound")[0].paused) {
         	sym.getComposition().getStage().$("bonce_sound")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${info_btn}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         
         //fact box play
         sym.getComposition().getStage().getSymbol("factbox_sym").play(0);
         
         // Set timeout & hide elements
         setTimeout(function() { sym.getSymbolElement().hide();},125);
         setTimeout(function() { sym.getComposition().getStage().$("tacha_btn_sym").hide();},125);
         
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tinybtn_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tinybtn_sound")[0].paused) {
         	sym.getComposition().getStage().$("tinybtn_sound")[0].play();
         }
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("bonce_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("bonce_sound")[0].paused) {
         	sym.getComposition().getStage().$("bonce_sound")[0].play();
         }
         

      });
      //Edge binding end

   })("info_btn_sym");
   //Edge symbol end:'info_btn_sym'

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
         	setTimeout(function() { window.open("menu.html", "_self"); }, 1000);
         }
         
         
         

      });
      //Edge binding end

      

   })("tacha_btn_sym");
   //Edge symbol end:'tacha_btn_sym'

   //=========================================================
   
   //Edge symbol: 'factbox_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tacha_btn_factbox}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Show elements 
         sym.getComposition().getStage().$("tacha_btn_sym").show();
         sym.getComposition().getStage().$("info_btn_sym").show();
         
         	// Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("factbox_sym").play(500);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tinybtn_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tinybtn_sound")[0].paused) {
         	sym.getComposition().getStage().$("tinybtn_sound")[0].play();
         }
         
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("whoosh_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("whoosh_sound")[0].paused) {
         	sym.getComposition().getStage().$("whoosh_sound")[0].play();
         }
         
         

      });
      //Edge binding end

      

   })("factbox_sym");
   //Edge symbol end:'factbox_sym'

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
   
   //Edge symbol: 'plantaverde_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(1000);
         

      });
      //Edge binding end

   })("plantaverde_sym");
   //Edge symbol end:'plantaverde_sym'

   //=========================================================
   
   //Edge symbol: 'planta3hojas_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(1000);
         

      });
      //Edge binding end

   })("planta3hojas_sym");
   //Edge symbol end:'planta3hojas_sym'

   //=========================================================
   
   //Edge symbol: 'planta3hojas2_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(1000);
         

      });
      //Edge binding end

   })("planta3hojas2_sym");
   //Edge symbol end:'planta3hojas2_sym'

   //=========================================================
   
   //Edge symbol: 'corazon_sym'
   (function(symbolName) {   
   
   })("corazon_sym");
   //Edge symbol end:'corazon_sym'

   //=========================================================
   
   //Edge symbol: 'hungry_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("hungry_sym");
   //Edge symbol end:'hungry_sym'

   //=========================================================
   
   //Edge symbol: 'full_sym'
   (function(symbolName) {   
   
   })("full_sym");
   //Edge symbol end:'full_sym'

   //=========================================================
   
   //Edge symbol: 'cloudFront_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
         // insert code here
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse("nubesfinal");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse("nubesfinal");

      });
      //Edge binding end

   })("cloudFront_sym");
   //Edge symbol end:'cloudFront_sym'

   //=========================================================
   
   //Edge symbol: 'plantaverdeinversa_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(1000);
         

      });
      //Edge binding end

   })("plantaverdeinversa_sym");
   //Edge symbol end:'plantaverdeinversa_sym'

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

   //=========================================================
   
   //Edge symbol: 'tacha_btn_sym_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tacha_btn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tinybtn_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tinybtn_sound")[0].paused) {
         	sym.getComposition().getStage().$("tinybtn_sound")[0].play();
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tacha_btn}", "click", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         
         // Replay an audio track from the beginning, regardless of current playing state 
         sym.getComposition().getStage().$("tinybtn_sound")[0].currentTime = 0;
         if (sym.getComposition().getStage().$("tinybtn_sound")[0].paused) {
         	sym.getComposition().getStage().$("tinybtn_sound")[0].play();
            setTimeout(function() { window.open("menu.html", "_self"); }, 1000);
         }
         
         

      });
      //Edge binding end

   })("tacha_btn_sym_1");
   //Edge symbol end:'tacha_btn_sym_1'

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
   
   //Edge symbol: 'larm_trex'
   (function(symbolName) {   
   
   })("larm_trex");
   //Edge symbol end:'larm_trex'

   //=========================================================
   
   //Edge symbol: 'rarm_trex'
   (function(symbolName) {   
   
   })("rarm_trex");
   //Edge symbol end:'rarm_trex'

   //=========================================================
   
   //Edge symbol: 'headGroup_trex'
   (function(symbolName) {   
   
   })("headGroup_trex");
   //Edge symbol end:'headGroup_trex'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-168874202");
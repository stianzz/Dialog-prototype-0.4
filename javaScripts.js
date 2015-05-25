		/////////////////////////////////////////////////////////////
		// inneholder javascript for menyen og bakgrunnsbilder     //
		/////////////////////////////////////////////////////////////
		
		
		//Index
		$(document).ready(function(){
		$("#link").click(function(){
		$("#huskeliste").hide();
		$("#dialogTag").empty();
		$("#startTag").empty();
		setTimeout( function(){
		$("#huskeliste").show();
		}, 500);
		});
		});
		
		//StartVindu
		$(document).ready(function(){
		$("#link2").click(function(){
		$("#huskeliste").hide();
		$("#startTag").empty();
		$("#dialogTag").empty();
		setTimeout( function(){
		$("#startTag").load("content.html #start");
		$.getScript("tts.js");
		$("#startTag").show();
		}, 500);
		});
		});
		
		//DialogVindu
		$(document).ready(function(){
		$("#link3").click(function(){
		$("#huskeliste").hide();
		$("#startTag").empty();
		$("#dialogTag").empty();
		setTimeout( function(){
		$("#dialogTag").load("content.html #dialog", function() {;
		$.getScript("tts.js");
		$("#dialogTag").show();
		});
		}, 500);
		});
		});
	
		
	
	
	
		//skifter bakgrunn (GLOBAL)
		var backgr1 = "Pics/grungy-summer-sun-pattern9.jpg";
		var backgr2 = "Pics/grungy-summer-sun-pattern6.jpg";

		var	cur = Math.round(6 * Math.random());
		if (cur<=3) {
		backgr=backgr1
		}
		else{
		backgr=backgr2
		}
		
		document.write('<body background="'+backgr+'">')
		document.body.style.backgroundPosition="top center"; // can be changed to anything else (e.g. bottom center, top left, center right...)
		document.body.style.backgroundRepeat="repeat";
		
		//Spill av Lyd. (DIALOG)
		function play(){
		var audio = document.getElementById("audio");
		audio.play();
		}
		
		
		
		
		
		

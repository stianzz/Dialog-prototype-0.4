		/////////////////////////////////////////////////////////////
		// inneholder javascript for startsiden og tts funksjonene //
		/////////////////////////////////////////////////////////////
		
		//Startside redirect
		$(function() {
		$("#buttonkontakt").click(function(){
		$("#huskeliste").hide();
		$("#startTag").hide();
		$("#dialogTag").hide();
		setTimeout( function(){
		$("#startTag").empty();
		$("#dialogTag").empty();
		$("#startTag").load("content.html #Kontaktliste");
		$.getScript("tts.js");
		$("#startTag").show();
		}, 500);
		});
		});
		
		//Startside instillinger 
		$(function() {
		$("#buttoninstillinger").click(function(){
		alert("Instillinger blir inkludert i en senere versjon.");
		});
		});
		
		//Kontakter redirect
		$(function() {
		$(".fan").click(function(){
		$("#huskeliste").hide();
		$("#startTag").empty();
		$("#dialogTag").empty();
		setTimeout( function(){
		$("#startTag").load("content.html #dialog");
		$.getScript("tts.js");
		$("#startTag").show();
		}, 500);
		});
		});
		
		//DIALOGSIDE REDIRECT
		
		//Avslutte samtale
		$(function() {
		$("#bilde2").click(function(){
		if (confirm('Vil du virkelig avslutte samtalen?')) {
		$('#link2').click(); //kaller på metode 
		} 
		else {
	
		}
		});
		});
		
		//Lagre samtale
		$(function() {
		$("#bilde").click(function(){
		alert("Lagre Samtale - Denne funksjonen er ikke tilgjengelig enda.");
		});
		});
		
		//TEXT TO SPEECH TTS 
		$(function() {
		
		// Text to speech
		$('a.say').on('click', function(e) {
		e.preventDefault();
		
		if ($('#text').val() == '' ) { //Validering av tekstfelt
		alert('Vennligst skriv noe i tekstboksen.');
		}
		else {
		
		var text = $('input[name ="text"]').val();
		text = encodeURIComponent(text);
		console.log(text);
		var url = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + text + "&tl=no";
		$('audio').attr('src', url).get(0).play();
		
		// Selve meldingen
		var startbubble = "<div id = 'chatbubble'>";
		var Melding = document.getElementById("text").value; 
		var d = new Date();
		var br = "<br /> <br />";
		var skriftdato = "<div id = 'dato'>";
		var date = d.toUTCString();			
		var endbubble = "</div></div>";
			

		document.getElementById('melding').innerHTML += startbubble += Melding += br += skriftdato += date += endbubble;
		document.getElementById('text').value = "";
		
		//scroller nedover automatisk
		var objDiv = document.getElementById("melding");
		objDiv.scrollTop = objDiv.scrollHeight;
		
		// Kaller på tid og svar metodene
		Tid()
		}
		});
		});
		
		// Tid
		var timer;
		function Tid() {
		timer = setTimeout(Svar, 4000);
		}
		// Svar 
		function Svar() {
		
			var startbubble = "<div id = 'chatbubble2'>";
			var Melding = " Hei! Dette er et testsvar ifra mottaker"; 
			var d = new Date();
			var br = "<br /> <br />";
			var skriftdato = "<div id = 'dato'>";
			var date = d.toUTCString();			
			var endbubble = "</div></div>";
				
		document.getElementById('melding').innerHTML += startbubble += Melding += br += skriftdato += date += endbubble;
		
		//scroller nedover automatisk
		var objDiv = document.getElementById("melding");
		objDiv.scrollTop = objDiv.scrollHeight;
		}
        
		
	
	
	
	
		
		
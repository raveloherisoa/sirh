$(document).ready(function(){
	$("#autre").click(function(){
		var text = document.createElement("input");
	    text.setAttribute("type", "text");
	    text.setAttribute("name", "autreQualite");		    
	    text.setAttribute("id", "autreQualite");
	    text.setAttribute("class", "form-control focus_activated");
	    text.setAttribute("placeholder", "Votre personnalité *");
	    text.setAttribute("data-validation-regex-regex", "^[a-zA-Z|éèêëôöîïâàùç |'-]*");
	    text.setAttribute("data-validation-regex-message", "Caractère non valide");

		var paragraphe = document.createElement("p");
	    paragraphe.setAttribute("class", "help-block text-danger");

	    document.getElementById("block-personnalite").append(text);
	    document.getElementById("block-personnalite").append(paragraphe);
	});

	$("#submit").click(function(){
		var checkbox   = document.getElementsByName('qualite');
		var input      = document.getElementsByName('autreQualite');
		var perso      = ""; 
		var autrePerso = "";
		for (var i = 0; i < checkbox.length; i++) {
			var check = checkbox[i].checked;
			if (check) {
				perso += checkbox[i].value + "_";
			}
		}
		for (var i = 0; i < input.length; i++) {
			if (input[i].value != "") {
				autrePerso += input[i].value + "_";
			}
		}
		$("#autrePersonnalite").val(autrePerso);
		$("#personnalite").val(perso + autrePerso);
	});
});
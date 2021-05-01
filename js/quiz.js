	
var lugnac; 
var fechnac;
var internado;
var kcollege;
var mjami;
var consultor;
var soreal;
var delito;
var princeton;
var doctorado;
var conferencia;
var ace;
var mturing;
var galardon;
var unituring;
var disculpas;
var muerte;

$( document ).ready(function() {
	$('#btnEnviar').on('click', function(){
		lugnac= $("#Turing input[id='lugnac']:radio").is(':checked'); 
		fechnac= $("#Turing input[id='fechnac']:radio").is(':checked');
		internado= $("#Turing input[id='internado']:radio").is(':checked');
		kcollege= $("#Turing input[id='kcollege']:radio").is(':checked');
		mjami= $("#Turing input[id='mjami']:radio").is(':checked');
		consultor= $("#Turing input[id='consultor']:radio").is(':checked');
		soreal= $("#Turing input[id='soreal']:radio").is(':checked');
		delito= $("#Turing input[id='delito']:radio").is(':checked');
		princeton= $("#Turing input[id='princeton']:radio").is(':checked');
		doctorado= $("#Turing input[id='doctorado']:radio").is(':checked');
		conferencia= $("#Turing input[id='conferencia']:radio").is(':checked');
		ace= $("#Turing input[id='ace']:radio").is(':checked');
		mturing= $("#Turing input[id='mturing']:radio").is(':checked');
		galardon= $("#Turing input[id='galardon']:radio").is(':checked');
		unituring= $("#Turing input[id='unituring']:radio").is(':checked');
		disculpas= $("#Turing input[id='disculpas']:radio").is(':checked');
		muerte= $("#Turing input[id='muerte']:radio").is(':checked');

		var porcentajeCorrectas = porcC();
		var porcentajeIncorrectas = porcI();
		var cantidadCorrectas = cantC();
		var cantidadIncorrectas = CantI();
		var resultado = "";
		if (porcentajeCorrectas >= 1 && porcentajeCorrectas <= 40) {
			resultado = "Desastre";
		}
		if (porcentajeCorrectas >= 41 && porcentajeCorrectas <= 69) {
			resultado = "regular";
		}
		if (porcentajeCorrectas == 70) {
			resultado = "Bueno";
		}
		if (porcentajeCorrectas > 70) {
			resultado = "Muy buenas respuestas";
		}
		$.reject({

			reject: { all: true }, 
			display: ['firefox','chrome','opera'],
			browserInfo: { 
			chrome: {
				text: ' ',
			},
			firefox: {
				text: ' ',
			},
			opera: {
				text: ' ',
			}
			},
			header: 'Resultados del Quiz', 
			paragraph1: 'Porcentaje de respuestas Correctas: '+porcentajeCorrectas+'%<br> Porcentaje de respuestas incorrectas: '+porcentajeIncorrectas+'%<br> Cantidad de respuestas Correctas: '+cantidadCorrectas+'<br> Cantidad de respuestas Incorrectas: '+cantidadIncorrectas,
			paragraph2: 'Evaluacion: '+resultado,
			closeMessage: ' ',
			closeLink: 'Cerrar' 
		})
	})
});

function porcC(){
	 
	var contador=cantC();
	var porcentajeC = parseInt(contador *100/17);
	
	return porcentajeC;	
}

function porcI(){

	var contadori=CantI();
	var porcentajeI = parseInt(contadori *100/17);
	
	return porcentajeI+1;
}

function cantC(){
	 
	var contadora=0;
 
	 
	if(lugnac)
	{
		contadora++;
	}
	if (fechnac)
	{
		contadora ++;
	}
	if (internado)
	{
		contadora ++;
	}
	if (kcollege)
	{
		contadora ++;
	}
	if (mjami)
	{
		contadora ++;
	}
	if (consultor)
	{
		contadora ++;
	}
	if (soreal)
	{
		contadora ++;
	}
	if (delito)
	{
		contadora ++;
	}
	if (princeton)
	{
		contadora ++;
	}
	if (doctorado)
	{
		contadora ++;
	}
	if (conferencia)
	{
		contadora ++;
	}
	if (ace)
	{
		contadora ++;
	}
	if (mturing)
	{
		contadora ++;
	}
	if (galardon)
	{
		contadora ++;
	}
	if (unituring)
	{
		contadora ++;
	}
	if (disculpas)
	{
		contadora ++;
	}
	if (muerte)
	{
		contadora ++;
	}
	
	return contadora;	
}

function CantI(){

	var contadore=0;
	 
	if(!lugnac)
	{
		contadore++;
	}
	if (!fechnac)
	{
		contadore ++;
	}
	if (!internado)
	{
		contadore ++;
	}
	if (!kcollege)
	{
		contadore ++;
	}
	if (!mjami)
	{
		contadore ++;
	}
	if (!consultor)
	{
		contadore ++;
	}
	if (!soreal)
	{
		contadore ++;
	}
	if (!delito)
	{
		contadore ++;
	}
	if (!princeton)
	{
		contadore ++;
	}
	if (!doctorado)
	{
		contadore ++;
	}
	if (!conferencia)
	{
		contadore ++;
	}
	if (!ace)
	{
		contadore ++;
	}
	if (!mturing)
	{
		contadore ++;
	}
	if (!galardon)
	{
		contadore ++;
	}
	if (!unituring)
	{
		contadore ++;
	}
	if (!disculpas)
	{
		contadore ++;
	}
	if (!muerte)
	{
		contadore ++;
	}
	
	return contadore;
}
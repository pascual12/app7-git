// JavaScript Document

$(document).ready(function (e) {
	document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Desliza a la izquierda",function(){"Aplicacion7","Aceptar"});
		});
		
		$('#derecha').on("swipeleft",function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notificacion.beep(2);
					break;
					
					case 2:
					navigator.notificacion.vibrate(1000);
					break;
				}
			},"Aplicacion7","Beep,Vibrate,Cancelar");
			
		});
	},false);
        });
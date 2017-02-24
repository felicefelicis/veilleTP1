	/***************************   UN OEIL QUI TE FIXE   ************************************/
	var oeil = document.querySelectorAll("#svg_3 path")[0];	

	var longueurOeil = oeil.getTotalLength();

	oeil.style.strokeDasharray = longueurOeil;

	oeil.style.strokeDashoffset = longueurOeil;

	window.addEventListener("scroll", maTraceOeil);

	function maTraceOeil() {

		console.log('scrollTop de body = ' + document.body.scrollTop)
		console.log('scrollTop de documentElement = ' + document.documentElement.scrollTop)
		console.log('scrollHeight de documentElement = ' + document.documentElement.scrollHeight)	
		console.log('clientHeight de documentElement = ' + document.documentElement.clientHeight)			


	  var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	  var traceOeil = longueurOeil * fractionDuScroll;

	  oeil.style.strokeDashoffset = longueurOeil - traceOeil ;
	}
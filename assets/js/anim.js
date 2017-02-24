	/***************************   UN OEIL QUI TE FIXE   ************************************/
	console.log("anim.js")
	console.log(window)

	var oeilPath = document.querySelectorAll("#svg_3 path")[0];	

	var longueurOeil = oeilPath.getTotalLength();

	oeilPath.style.strokeDasharray = longueurOeil;

	oeilPath.style.strokeDashoffset = longueurOeil;

    var parallax = document.querySelectorAll("#parallax")[0];


	function maTraceOeil() {
	  //var oeilPosition = document.querySelectorAll("#svg_3")[0].offset();

	  //var parallaxPosition = parallax.offset();

	  var fractionDuScroll = Math.min(parallax.scrollTop - window.innerHeight, parallax.scrollHeight - window.innerHeight) / (parallax.scrollHeight - window.innerHeight);

	  var traceOeil = longueurOeil * fractionDuScroll;

	  oeilPath.style.strokeDashoffset = longueurOeil - traceOeil ;

	}

	parallax.addEventListener("scroll", maTraceOeil);
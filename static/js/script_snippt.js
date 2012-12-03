/* Author: uriel tzel 

*/
	$(document).ready(function(){
		mos=false
		$("a").click(function(event){
			if (titu=="Python"){
				$("#"+titu).show("slow");
			}
			if(mos){
				$("#mostrar").show("slow");
				}



			$("h1").text(titu);	 
		})
	


	})






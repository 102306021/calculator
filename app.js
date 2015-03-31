$(function(){
   
    var currentText=""; 
    var priorValue="";
    var operation;

    
	$("#btn1").on("click",function(){
		if(currentText.length<10){
			currentText=currentText+"1"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn2").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"2"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn3").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"3"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn4").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"4"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn5").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"5"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn6").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"6"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn7").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"7"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn8").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"8"
			render();
		}
	    else{
	    	keep();
	    }    
    });


    $("#btn9").on("click",function(){
	    if(currentText.length<10){
			currentText=currentText+"9"
			render();
		}
	    else{
	    	keep();
	    }
    });


    $("#btn0").on("click",function(){
    	if(currentText!=0){
    		if(currentText.length<10){
    		    currentText=currentText+"0"
    		    render();	
    		}
    		else{
    			keep();
    		}
    		
    	}
    	else{
    		zero();
    	}
    	
    });

    

    $("#plus").on("click",function(){
    	getValue();
        operation=plus;
	});

	$("#minus").on("click",function(){
		getValue();
        operation=minus;
		       
	});

	$("#multiply").on("click",function(){
        getValue();
        operation=multiply;
	       
	});


	$("#divide").on("click",function(){
        getValue();
        operation=divide;
	       
	});

	

	$("#equal").on("click",function(){
       if(operation==plus){
       	    currentText=parseInt(priorValue)+parseInt(currentText);
       	    render();
       	    currentText="";
       }

       if(operation==minus){
       	    currentText=priorValue-currentText;
       	    render();
       	    currentText="";
       }

       if(operation==multiply){
       	    currentText=priorValue*currentText;
       	    render();
       	    currentText="";
       }

       if(operation==divide){
       	    currentText=priorValue/currentText;
       	    render();
       	    currentText="";
       }

  
	});



	$("#clear").on("click",function(){
       zero();
	       
	});

   


    function render(){
        $("#message").text(currentText);
    }


    function zero(){
    	currentText="";
    	$("#message").text("0");
    }

    function keep(){
    	currentText=currentText;
    }

    function getValue(){
    	priorValue=currentText;
    	currentText="";
    }

});






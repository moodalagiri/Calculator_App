var input = '';
var elem = '';
var mathOp = '';
var _baseUrl = 'http://localhost:3000/';

function reqToServer(){
	var num1, num2;
	var inpArr = '';
	
	switch(mathOp){
		case 'Add' :
			inpArr = input.split("+");
			num1 = inpArr[0];
			num2 = inpArr[1];
			input = '';
			// Ajax request to the server from client.
			$.ajax({
		        url:_baseUrl + "sum",
		        type:'GET',
		        data:{"num1": num1,"num2": num2},
		        success: function(data) {
		        	input = data;
		        	$('.displayStr').val(data);
		        	//alert('success : ' + data);
		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		            alert('error ' + textStatus + " " + errorThrown);
		        }
		    });
			break;
			
		case 'Sub' :
			inpArr = input.split("-");
			num1 = inpArr[0];
			num2 = inpArr[1];
			input = '';
			// Ajax request to the server from client.
			$.ajax({
		        url:_baseUrl + "sub",
		        type:'GET',
		        data: {"num1": num1,"num2": num2},
		        success: function(data) {
		        	input = data;
		        	$('.displayStr').val(data);
		        	//alert('success : ' + data);
		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		            alert('error ' + textStatus + " " + errorThrown);
		        }
		    });
			break;
			
		case 'Mul' :
			inpArr = input.split("*");
			num1 = inpArr[0];
			num2 = inpArr[1];
			input = '';
			// Ajax request to the server from client.
			$.ajax({
		        url:_baseUrl + "mul",
		        type:'GET',
		        data:({"num1" : num1, "num2" : num2}),
		        success: function(data) {
		        	input = data;
		        	$('.displayStr').val(data);
		        	//alert('success : ' + data);
		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		            alert('error ' + textStatus + " " + errorThrown);
		        }
		    });
			break;
			
		case 'Div' :
			inpArr = input.split("/");
			num1 = inpArr[0];
			num2 = inpArr[1];
			input = '';
			// Ajax request to the server from client.
			$.ajax({
		        url:_baseUrl + "div",
		        type:'GET',
		        data: {"num1": num1, "num2": num2},
		        success: function(data) {
		        	input = data;
		        	$('.displayStr').val(data);
		        	//alert('success : ' + data);
		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		            alert('error ' + textStatus + " " + errorThrown);
		        }
		    });
			break;
	}
}

function operate_Func(op){
	switch(op){
		case 'btnEq' :
				reqToServer();
				break;
		case 'Add' :
				if(input.indexOf('-') != 1 && input.indexOf('+') != 1 && input.indexOf('/') != 1 && input.indexOf('*') != 1){
					mathOp = "Add";
					elem = $("#btn" + op).val();
					input += elem;
					$(".displayStr").val(input);
				}	
				break;
		case 'Mul' :
				if(input.indexOf('-') != 1 && input.indexOf('+') != 1 && input.indexOf('/') != 1 && input.indexOf('*') != 1){
					mathOp = "Mul";
					elem = $("#btn" + op).val();
					input += elem;
					$(".displayStr").val(input);
				}	
				break;
		case 'Div' :
				if(input.indexOf('-') != 1 && input.indexOf('+') != 1 && input.indexOf('/') != 1 && input.indexOf('*') != 1){	
					mathOp = "Div";
					elem = $("#btn" + op).val();
					input += elem;
					$(".displayStr").val(input);
				}
				break;
			
		case 'Sub' :
				if(input.indexOf('-') != 1 && input.indexOf('+') != 1 && input.indexOf('/') != 1 && input.indexOf('*') != 1){
					mathOp = "Sub";
					elem = $("#btn" + op).val();
					input += elem;
					$(".displayStr").val(input);
				}
				break;
		case 'C' : 
				input = '';
				$(".displayStr").val('');
				break;
			
		default : 
			elem = $("#btn" + op).val();
			input += elem;
			$(".displayStr").val(input);
			break;
	}
}
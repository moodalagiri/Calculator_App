/*
 * Mathematics operations to be performed on Numbers.
 */

var ejs = require("ejs");

exports.sumNum = function(req, res) {
	var output = '';
	var num1 = req.query.num1;
	var num2 = req.query.num2;
	console.log('Type : ' + typeof(num1));
	output = parseInt(num1,10) + parseInt(num2,10);
	console.log("op : " + output);
	res.end(output.toString());
	//res.render('index', {title : 'Calculator Client', Result : output});
};

function divNum(req, res){
	var output = '';
	var num1 = req.query.num1;
	var num2 = req.query.num2;
	if(parseInt(num2,10) === 0){
		output = 'Err';
		res.end(output);
	} else {
		output = num1 / num2;
		res.end(output.toString());
	}
	console.log("op : " + output);
}

function mulNum(req, res){
	var output = '';
	var num1 = req.query.num1;
	var num2 = req.query.num2;
	output = num1 * num2;
	console.log("op : " + output);
	res.end(output.toString());
	//res.render('index', {title : 'Calculator Client', Result : output});
}

exports.subNum = function(req,res){
	var output = '';
	var num1 = req.query.num1;
	var num2 = req.query.num2;
	output = num1 - num2;
	console.log("op : " + typeof(output));
	res.end(output.toString());
	
	//res.render('index', {title : 'Calculator Client', Result : output});
};

exports.divNum = divNum;
exports.mulNum = mulNum;

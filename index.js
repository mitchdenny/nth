var validator = require('validator');


function getSuffix(number) {
	if (validator.isInt(number) != true)
	{
		throw new 'Oh no';
	}

	var digits = Math.abs(number).toString().split('').reverse();

	if(digits.length > 1 && digits[1] == 1){
		return 'th'
	}else{
		if(digits[0] == 1){
			return 'st'
		}else if(digits[0] == 2){
			return 'nd'
		}else if(digits[0] == 3){
			return 'rd'
		}else{
			return 'th'
		}
	}
}

module.exports = {
	getSuffix: getSuffix,
	appendSuffix: function(number){
		var suffix = getSuffix(number);
		return number.toString() + suffix;
	}
};

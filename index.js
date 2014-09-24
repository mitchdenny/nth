var util = require('util');
var validator = require('validator');

function Nth()
{
	var that = this;
	that.getLastDigit = function(number)
	{
		var numberAsString = number.toString();
		var lastDigit = numberAsString[numberAsString.length - 1];
		return lastDigit;
	};

	return {
		appendSuffix: function(number)
		{
			if (validator.isInt(number) != true)
			{
				throw new 'Oh no';
			}

			if (number > 3 && number < 21) {
				return util.format('%sth', number);
			}

			var lastDigit = that.getLastDigit(number);

			if (lastDigit == '1') {
				return util.format('%sst', number);
			} else if (lastDigit == '2') {
				return util.format('%snd', number);
			} else if (lastDigit == '3') {
				return util.format('%srd', number);
			} else {
				return util.format('%sth', number);
			}
		}
	};
}

module.exports = new Nth();
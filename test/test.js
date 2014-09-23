var nth = require('../index.js');
var assert = require('assert');

describe('Nth', function(){
	describe('#convert', function() {
		it('should convert 1 to 1st', function() {
			var result = nth.appendSuffix(1);
			assert.equal('1st', result);
		});

		it('should convert 2 to 2nd', function() {
			var result = nth.appendSuffix(2);
			assert.equal('2nd', result);
		});

		it('should convert 3 to 3rd', function() {
			var result = nth.appendSuffix(3);
			assert.equal('3rd', result);
		});

		it('should convert 4 to 4th', function() {
			var result = nth.appendSuffix(4);
			console.log('returned %s', result);
			assert.equal('4th', result);
		});

		it('should convert 5 to 5th', function() {
			var result = nth.appendSuffix(5);
			assert.equal('5th', result);
		});

		it('should convert 10 to 10th', function() {
			var result = nth.appendSuffix(10);
			assert.equal('10th', result);
		});

		it('should convert 11 to 11th', function() {
			var result = nth.appendSuffix(11);
			assert.equal('11th', result);
		});
		
		it('should convert 12 to 12th', function() {
			var result = nth.appendSuffix(12);
			assert.equal('12th', result);
		});
		
		it('should convert 13 to 13th', function() {
			var result = nth.appendSuffix(13);
			assert.equal('13th', result);
		});
		
		it('should convert 14 to 14th', function() {
			var result = nth.appendSuffix(14);
			assert.equal('14th', result);
		});
		
		it('should convert 15 to 15th', function() {
			var result = nth.appendSuffix(15);
			assert.equal('15th', result);
		});
		
		it('should convert 16 to 16th', function() {
			var result = nth.appendSuffix(16);
			assert.equal('16th', result);
		});
		
		it('should convert 17 to 17th', function() {
			var result = nth.appendSuffix(17);
			assert.equal('17th', result);
		});
		
		it('should convert 18 to 18th', function() {
			var result = nth.appendSuffix(18);
			assert.equal('18th', result);
		});
		
		it('should convert 19 to 19th', function() {
			var result = nth.appendSuffix(19);
			assert.equal('19th', result);
		});
		
		it('should convert 20 to 20th', function() {
			var result = nth.appendSuffix(20);
			assert.equal('20th', result);
		});
		
		it('should convert 21 to 21st', function() {
			var result = nth.appendSuffix(21);
			assert.equal('21st', result);
		});
		
		it('should convert 22 to 22nd', function() {
			var result = nth.appendSuffix(22);
			assert.equal('22nd', result);
		});
		
		it('should convert 23 to 23rd', function() {
			var result = nth.appendSuffix(23);
			assert.equal('23rd', result);
		});		

		it('should convert 24 to 24th', function() {
			var result = nth.appendSuffix(24);
			assert.equal('24th', result);
		});
	});
});
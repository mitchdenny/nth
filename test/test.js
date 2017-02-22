var nth = require('../index.js');
var assert = require('assert');
var chai = require('chai');

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

		it('should convert 101 to 101st', function() {
			var result = nth.appendSuffix(101);
			assert.equal('101st', result);
		});

		it('should convert 102 to 102nd', function() {
			var result = nth.appendSuffix(102);
			assert.equal('102nd', result);
		});

		it('should convert 103 to 103rd', function() {
			var result = nth.appendSuffix(103);
			assert.equal('103rd', result);
		});

		it('should convert 111 to 111th', function() {
			var result = nth.appendSuffix(111);
			assert.equal('111th', result);
		});

		it('should convert 112 to 112th', function() {
			var result = nth.appendSuffix(112);
			assert.equal('112th', result);
		});

		it('should convert 113 to 113th', function() {
			var result = nth.appendSuffix(113);
			assert.equal('113th', result);
		});

		it('should convert -1 to -1st', function() {
			var result = nth.appendSuffix(-1);
			assert.equal('-1st', result);
		});

		it('should convert -2 to -2nd', function() {
			var result = nth.appendSuffix(-2);
			assert.equal('-2nd', result);
		});

		it('should convert -3 to -3rd', function() {
			var result = nth.appendSuffix(-3);
			assert.equal('-3rd', result);
		});

		it('should convert -4 to -4th', function() {
			var result = nth.appendSuffix(-4);
			assert.equal('-4th', result);
		});

		it('should throw an error if something that is not a number is not passed in', function() {
			chai.expect(function () { nth.appendSuffix('not a number'); }).to.throw();
		});
	});
	describe('#convert', function() {
		it('should get st for 1', function() {
			var result = nth.getSuffix(1);
			assert.equal('st', result);
		});

		it('should get nd for 2', function() {
			var result = nth.getSuffix(2);
			assert.equal('nd', result);
		});

		it('should get rd for 3', function() {
			var result = nth.getSuffix(3);
			assert.equal('rd', result);
		});

		it('should get th for 4', function() {
			var result = nth.getSuffix(4);
			assert.equal('th', result);
		});

		it('should get th for 5', function() {
			var result = nth.getSuffix(5);
			assert.equal('th', result);
		});

		it('should get th for 10', function() {
			var result = nth.getSuffix(10);
			assert.equal('th', result);
		});

		it('should get th for 11', function() {
			var result = nth.getSuffix(11);
			assert.equal('th', result);
		});

		it('should get th for 12', function() {
			var result = nth.getSuffix(12);
			assert.equal('th', result);
		});

		it('should get th for 13', function() {
			var result = nth.getSuffix(13);
			assert.equal('th', result);
		});

		it('should get th for 14', function() {
			var result = nth.getSuffix(14);
			assert.equal('th', result);
		});

		it('should get th for 15', function() {
			var result = nth.getSuffix(15);
			assert.equal('th', result);
		});

		it('should get th for 16', function() {
			var result = nth.getSuffix(16);
			assert.equal('th', result);
		});

		it('should get th for 17', function() {
			var result = nth.getSuffix(17);
			assert.equal('th', result);
		});

		it('should get th for 18', function() {
			var result = nth.getSuffix(18);
			assert.equal('th', result);
		});

		it('should get th for 19', function() {
			var result = nth.getSuffix(19);
			assert.equal('th', result);
		});

		it('should get th for 20', function() {
			var result = nth.getSuffix(20);
			assert.equal('th', result);
		});

		it('should get st for 21', function() {
			var result = nth.getSuffix(21);
			assert.equal('st', result);
		});

		it('should get nd for 22', function() {
			var result = nth.getSuffix(22);
			assert.equal('nd', result);
		});

		it('should get rd for 23', function() {
			var result = nth.getSuffix(23);
			assert.equal('rd', result);
		});

		it('should get th for 24', function() {
			var result = nth.getSuffix(24);
			assert.equal('th', result);
		});

		it('should get st for 101', function() {
			var result = nth.getSuffix(101);
			assert.equal('st', result);
		});

		it('should get nd for 102', function() {
			var result = nth.getSuffix(102);
			assert.equal('nd', result);
		});

		it('should get rd for 103', function() {
			var result = nth.getSuffix(103);
			assert.equal('rd', result);
		});

		it('should get th for 111', function() {
			var result = nth.getSuffix(111);
			assert.equal('th', result);
		});

		it('should get th for 112', function() {
			var result = nth.getSuffix(112);
			assert.equal('th', result);
		});

		it('should get th for 113', function() {
			var result = nth.getSuffix(113);
			assert.equal('th', result);
		});

		it('should get st for -1', function() {
			var result = nth.getSuffix(-1);
			assert.equal('st', result);
		});

		it('should get nd for -2', function() {
			var result = nth.getSuffix(-2);
			assert.equal('nd', result);
		});

		it('should get rd for -3', function() {
			var result = nth.getSuffix(-3);
			assert.equal('rd', result);
		});

		it('should get th for -4', function() {
			var result = nth.getSuffix(-4);
			assert.equal('th', result);
		});

		it('should throw an error if something that is not a number is not passed in', function() {
			chai.expect(function () { nth.getSuffix('not a number'); }).to.throw();
		});
		it('should throw an error if not an integer is passed in', function() {
			chai.expect(function () { nth.getSuffix(1.234); }).to.throw();
		});
	});
});

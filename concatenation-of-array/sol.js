// https://leetcode.com/problems/concatenation-of-array/

var getConcatenation = (nums) => {
	// Mutable variables
	let numbers = nums;
	let ans = [];

	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < numbers.length; j++) {
			ans.push(numbers[j]);
		}
	}

	return ans;
};
// https://leetcode.com/problems/two-sum/

var twoSum = (nums, target) => {
	// Mutable variables
	let numbers = [...nums], t = target;
	let ans = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] == t) {
				ans.push(numbers.indexOf(numbers[i]));
				numbers[numbers.indexOf(numbers[i])] = null;
				ans.push(numbers.indexOf(numbers[j]));
				return ans;
			}
		}
	}
};
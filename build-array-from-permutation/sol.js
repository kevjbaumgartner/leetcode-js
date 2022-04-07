// https://leetcode.com/problems/build-array-from-permutation/

var buildArray = (nums) => {
	// Mutable variables
	let numbers = nums;
	let ans = [];

	for (num in numbers) {
		ans[num] = numbers[numbers[num]];
	}

	return ans;
};
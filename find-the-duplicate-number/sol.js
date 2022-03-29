// https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = (nums) => {
	// Immutable array
	const numbers = nums;
	// Mutable variables
	let exists = [];
	let ans;

	// Save the existance of a number found in the array
	// and return it if it's found again
	for (let number of numbers) {
		if (exists[number] == true) {
			ans = number;
			break;
		} else {
			exists[number] = true;
		}
	}
	return ans;
};
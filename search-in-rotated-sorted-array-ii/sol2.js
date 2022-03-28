// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

var search = (nums, target) => {
	// Mutable variables
	let input = [...new Set(nums)]; // Remove duplicates by only saving the first instance of each number
	const t = target;
	let left = 0, right = input.length - 1, middle;
	let ans;

	// Start a binary search
	while (left <= right) {
		middle = Math.floor((left + right) / 2); // Find the middle of the array

		// If the potiner is on the target
		if (input[middle] == t) {
			return ans = true;
		} else if (input[left] <= input[middle]) {
			// If the target is greater or equal to the number on the left
			// or the target is less than the middle number
			if (input[left] <= t && t < input[middle]) {
				right = middle - 1; // Traverse the left side
			} else {
				left = middle + 1; // Traverse the right side
			}
		} else {
			// If the target is greater than the middle number
			// or the target is less or equal to the number to on the right
			if (input[middle] < t && t <= input[right]) {
				left = middle + 1; // Traverse the right side
			} else {
				right = middle - 1; // Traverse the left side
			}
		}
	}

	// If the number wasn't found and the search range has completed
	return ans = false;
};
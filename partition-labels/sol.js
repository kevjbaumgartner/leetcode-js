// https://leetcode.com/problems/partition-labels/

var partitionLabels = (s) => {
	const str = s; // Mutable string
	let finalPositions = [];
	let partArray = [];

	// Find and store the last known position for each letter
	for (var i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		finalPositions[char] = i;
	}

	// Define pointer and counter
	let pointer;
	let letterCount = 0;

	for (let i = 0; i < str.length; i++) {
		letterCount++; // Count a letter

		// Continue counting letters until you encounter the
		// last position of the first character in the partition
		if (pointer === undefined || finalPositions[str[i]] > pointer) {
			pointer = finalPositions[str[i]];
		}

		// Store the counted letters in partArray
		if (pointer == i) {
			partArray.push(letterCount);

			// Partition cutoff, reset pointer and counter
			pointer = undefined;
			letterCount = 0;
		}
	}

	return partArray;
};
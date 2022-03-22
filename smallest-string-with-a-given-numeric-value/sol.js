// https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/

var getSmallestString = (n, k) => {
	// Fill array 0 -> 25 with the lowercase alphabet
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	const num = n;

	// Mutable variables
	let remainder = k;
	let str = '';

	for (var i = num; i > 0; i--) {
		// Calculate the remainder value after reserving at least
		// "1 unit of numeric value" for each character in the string
		let temp = remainder - (i - 1);
		// If the remainder is still >= than 26, prepend a z
		if (temp >= 26) {
			str = alphabet[25] + str;
			remainder -= 26;
			continue;
		}
		// If the remainder is < 26, prepend the corresponding letter
		else {
			str = alphabet[temp - 1] + str;
			remainder -= temp;
			continue;
		}
	}
	return str;
};
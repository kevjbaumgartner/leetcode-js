// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

var kWeakestRows = (mat, k) => {
	// Mutable variables
	const matrix = mat;
	const amount = k;

	// Sort the matrix based on the sum of soldiers in that row
	let sorted = ([...matrix].sort((a, b) => (a.reduce((a, b) => a + b)) - (b.reduce((a, b) => a + b))));
	let weakest = [];

	// Push the k lowest sums of the sorted array
	for (let i = 0; i < amount; i++) {
		weakest.push(matrix.indexOf(sorted[i]));
	}

	return weakest;
};
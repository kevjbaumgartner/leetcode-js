// https://leetcode.com/problems/two-city-scheduling/

var twoCitySchedCost = (costs) => {
	// Mutable variables
	let c = [...costs].sort((a, b) => (a[0] - a[1]) - (b[0] - b[1])); // Sort based on biggest difference between bCost and aCost
	let amt = 0;
	for (let i = 0; i < c.length; i++) {
		amt += i < (c.length / 2) ? c[i][0] : c[i][1]; // Take aCost for the first half and bCost for the second
	}
	return amt;
};
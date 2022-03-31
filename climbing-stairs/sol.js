// https://leetcode.com/problems/climbing-stairs/

var climbStairs = (n) => {
	// Mutable variables
	let stairs = n;
	let ans = 0;

	if (stairs <= 2) {
		ans = stairs;
	} else {
		let f = 1, s = 2, nth;
		for (let i = 3; i <= stairs; i++) {
			nth = f + s;
			f = s;
			s = nth;
		}
		ans = s;
	}

	return ans;
};
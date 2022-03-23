// https://leetcode.com/problems/broken-calculator/

var brokenCalc = (startValue, target) => {
	// Mutable variables
	let start = startValue;
	let end = target;

	// Counter
	let opCount = 0;

	// Inversely solve from end to start
	while (start != end) {
		opCount++;
		// Subtract 1 (inversely, do addition) from the number on display
		if (end < start || end % 2 == 1) {
			end += 1;
			continue;
		}
		// Multiply (inversely, do division) the number on display by 2
		else {
			end /= 2;
			continue;
		}
	};

	return opCount;
};
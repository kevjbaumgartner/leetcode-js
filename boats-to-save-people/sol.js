// https://leetcode.com/problems/boats-to-save-people/

var numRescueBoats = (people, limit) => {
	// Mutable variables
	let peopleArray = people.sort((a, b) => (a - b)); // Sort in ascending order of weight
	let peopleCount = peopleArray.length - 1;
	let boatLimit = limit;
	let boatCount = 0;

	// Use two pointers to iterate through all the people
	// Consistently remove the heaviest person and create a boat
	// If a person on the lighter end can fit onto a boat with a heavier person, remove them as well
	for (var i = 0; i <= peopleCount; peopleCount--) {
		let p1 = peopleArray[i]; // Far left = lightest
		let p2 = peopleArray[peopleCount]; // Far right = heaviest
		if (p1 + p2 <= boatLimit) {
			i++;
		}
		boatCount++;
	}

	return boatCount;
};
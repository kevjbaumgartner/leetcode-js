// https://leetcode.com/problems/roman-to-integer/

var romanToInt = (val) => {
	let str = val;
	let num = 0;

	for (var i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		let nextChar = str.charAt(i + 1);

		if (char == 'I') {
			if (nextChar == 'V') {
				num += 4;
				i++;
				continue;
			}
			else if (nextChar == 'X') {
				num += 9;
				i++;
				continue;
			}
			else {
				num += 1;
				continue;
			}
		}
		else if (char == 'V') {
			num += 5;
			continue;
		}
		else if (char == 'X') {
			if (nextChar == 'L') {
				num += 40;
				i++;
				continue;
			}
			else if (nextChar == 'C') {
				num += 90;
				i++;
				continue;
			}
			else {
				num += 10;
				continue;
			}
		}
		else if (char == 'L') {
			num += 50;
			continue;
		}
		else if (char == 'C') {
			if (nextChar == 'D') {
				num += 400;
				i++;
				continue;
			}
			else if (nextChar == 'M') {
				num += 900;
				i++;
				continue;
			}
			else {
				num += 100;
				continue;
			}
		}
		else if (char == 'D') {
			num += 500;
			continue;
		}
		else if (char == 'M') {
			num += 1000;
			continue;
		}
	}

	return num;
};
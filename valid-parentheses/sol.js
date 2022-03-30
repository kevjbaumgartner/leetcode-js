// https://leetcode.com/problems/valid-parentheses/

var isValid = (s) => {
	// Mutable variables
	let string = [...s];
	let stack = [];

	if (string[0] == ")" || string[0] == "}" || string[0] == "]") {
		return false;
	}
	for (let i = 0; i < string.length; i++) {
		let current = string[i], next = string[i + 1];
		if (current == "(" || current == "{" || current == "[") {
			switch (current) {
				case "(": {
					stack.push(")");
					break;
				}
				case "{": {
					stack.push("}");
					break;
				}
				case "[": {
					stack.push("]");
					break;
				}
			}
		} else if (current == ")" || current == "}" || current == "]") {
			if (current != stack[stack.length - 1]) {
				return false;
			}
			if (current == stack[stack.length - 1]) {
				stack.pop();
				continue;
			}
		}
		if ((next == ")" || next == "}" || next == "]") && stack.length == 0) {
			return false;
		}
	}
	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
};
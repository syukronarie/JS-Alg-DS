// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

function reverseInt(n) {
	/**
   * * reverseInt Pseudocode
   1. Turn number to string
   2. Reverse the string
   3. Turn the String back into a Number
   
   * ! There are three method to convert into number in JavaScript
   1. parseInt() # The parseInt() method converts a string into an integer (a whole number)
   2. parseFloat() # The parseFloat() method converts a string into a point number (a number with decimal points)
   3. Number() # The Number() method converts a string to a number
   
   * ! Differentiate between Number() and parseInt()
   e.g
   Number("31-") => NaN
   parseInt("31-") => 31
   */

	let reversed = n.toString().split("").reverse().join("");
	reversed = parseInt(reversed);

	if (n < 0) {
		return reversed * -1;
	}

	return reversed;

	/**
	 * ? reserveInt Complexity Analysis
	 Time Complexity: O(log N) If Input increases by factor of 10, we do one more operation
	 */
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Integer Reversal", () => {
	it("reverseInt() works on positive numbers", () => {
		assert.equal(reverseInt(3), 3);
		assert.equal(reverseInt(13), 31);
		assert.equal(reverseInt(100), 1);
		assert.equal(reverseInt(1408), 8041);
	});

	it("reverseInt() works on negative numbers numbers", () => {
		assert.equal(reverseInt(-3), -3);
		assert.equal(reverseInt(-13), -31);
		assert.equal(reverseInt(-100), -1);
		assert.equal(reverseInt(-1408), -8041);
	});
});

mocha.run();

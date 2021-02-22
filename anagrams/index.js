// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
	/**
   * * Anagram Pseudocode
   If input string do NOT have same length, return false immediately
   Create a Character Count Object for one of the Input String
    Use .replace() with a regular expressions so that only letter character remain
    Use .toLowerCase() for case insensitifity
  Loop through the other Input String, decrementing Character Count Object 
    Return false if number in Character Count is undefined or 0 
  Return true
   *  */

	// Solution #1
	// stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
	// stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

	// if (stringA.length !== stringB.length) {
	// 	return false;
	// }

	// const stringACharCount = {};

	// for (let i = 0; i < stringA.length; i++) {
	// 	const aChar = stringA[i];
	// 	stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
	// }

	// for (let i = 0; i < stringB.length; i++) {
	// 	const bChar = stringB[i];

	// 	if (!stringACharCount[bChar]) {
	// 		return false;
	// 	} else {
	// 		stringACharCount[bChar]--;
	// 	}
	// }

	// return true;

	// Solution #2
	stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
	stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

	const stringASorted = stringA.split("").sort().join("");
	const stringBSorted = stringB.split("").sort().join("");

	return stringASorted === stringBSorted;
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

describe("Anagrams", () => {
	it("works if case sensitivity and non word characters NOT taken into account", () => {
		assert.equal(anagrams("earth", "heart"), true);

		assert.equal(anagrams("love", "meow"), false);
		assert.equal(anagrams("lol", "lolc"), false);
	});
	it("is case insensitive. 'HEART' and 'earth' should return true", () => {
		assert.equal(anagrams("HEART", "earth"), true);
		assert.equal(anagrams("heart", "EARTH"), true);

		assert.equal(anagrams("love", "meow"), false);
		assert.equal(anagrams("lol", "lolc"), false);
	});
	it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
		assert.equal(anagrams("heart!", " earth"), true);

		assert.equal(anagrams("love", "meow"), false);
		assert.equal(anagrams("lol", "lolc"), false);
	});
});

mocha.run();

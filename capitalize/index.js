// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(str) {
	/**
   * * Capitalize Pseudocode
   Split the String into an array of words using .split()
   
   Iterate thru above array, fill an empty array with properly cased word
      You can use .slice() or .substring() to grab parts of a string
      You cam use .toLowerCase() and .toUpperCase() to case a word
      
  Turn the array of properly cased words back into a string with .join()
   */

	const arrOfWords = str.split(" ");
	const arrOfWordsCased = [];

	for (let i = 0; i < arrOfWords.length; i++) {
		const word = arrOfWords[i];
		arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
	}

	return arrOfWordsCased.join(" ");

	/**
   * * capitalize Complexity Analyis
   time complexity: o(n)
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

describe("Capitalization", () => {
	it("capitalizes the first letter of each word", () => {
		assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
	});
	it("lowercases the rest of the word", () => {
		assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
	});
});

mocha.run();

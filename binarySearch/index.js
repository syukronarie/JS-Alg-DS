// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

/**
 * ? What is Binary Search?
 It is a Searching Algorithm that can search in O(log n) time for a sorted array,
 compared to Linear Search's O(n) time for unsorted array.
 
Binary Search only works on SORTED Arrays, and is able to search that array much faster than Linear Search due to the presort. 
 */

/**
 * ! Example
 // Using Linear Search
 I'm thinking of a # from 1 to 100 (Answer 1)
    Is it the number 100? => "NO"
    Is it the number 99? => "NO"
    Is it the number 98? => "NO"
    Is it the number 97? => "NO"
    Is it the number 96? => "NO"
    Is it the number 95? => "NO"
               ...
 100 "Operations" / Guesses (Worst Case)
 
 // Using Binary Search
 I'm thinking of a # from 1 to 100 (Answer 1)
   Is it the number 50? => "No it is less than that"
   Is it the number 25? => "No it is less than that"
   Is it the number 12? => "No it is less than that"
   Is it the number 6? => "No it is less than that"
   Is it the number 3? => "No it is less than that"
   Is it the number 2? => "No it is less than that"
      Is it the number 1? => "YES!"
              ...
 7 "Operations" / Guesses (Worst Case)
 */

/**
 * * BINARY SEARCH COMPLEXITY ANALYSIS
 Binary Search can achieve O(log n) Time Complexity by eliminating HALF of the remaining things 
 to search for with each search.
 */

const binarySearch = (sortedArr, value) => {};

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

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch()", () => {
	it("returns correct index on sortedArray with just one number", () => {
		assert.equal(binarySearch([5], 5), 0);
		assert.equal(binarySearch([15], 5), -1);
	});
	it("works on sorted array with 10 numbers", () => {
		assert.equal(binarySearch(sortedNumsArray, 10), 10);
		assert.equal(binarySearch(sortedNumsArray, 0), 0);
		assert.equal(binarySearch(sortedNumsArray, 5), 5);
		assert.equal(binarySearch(sortedNumsArray, 7), 7);
		assert.equal(binarySearch(sortedNumsArray, 1337), -1);
	});
});

mocha.run();

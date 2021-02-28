/**
 * * Sorting Definition
 * ? What is Sorting?
 Sorting is the process of rearranging the items in a collection, to be in a certain order.
 
 * ! Example
 [4, 2, 3, 5, 1]
 
 => [5, 4, 3 ,2 ,1]
         OR
 => [1, 2, 3, 4, 5]
 
 * * Sorting is so commonly needed and used...
 That the Javascript Language give us its own implementation, so we do not have to write one from scratch!
 
 * * Different Sorting Algorithms
 - Bubble Sort
 - Insertion Sort
 - Selection Sort 
 - Quick Sort
 - Merge Sort
 - Radix Sort 
 - Bucket Sort 
 - Tim Sort 
 
 All these different sorts have different time complexities, and vary in their difficulty to conceptualize and implement
 */

// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {}

//bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {}

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {}

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

describe("swap()", () => {
	it("swaps values in an array when provided with 2 indexes.", () => {
		const arr = [13, 2, 4];
		swap(arr, 0, 1);
		assert.deepEqual(arr, [2, 13, 4]);
	});
});

describe.skip("Bubble Sort", () => {
	it("sorts an array", () => {
		assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
	});
});

describe.skip("Selection Sort", () => {
	it("sorts an array", () => {
		assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
	});
});

mocha.run();

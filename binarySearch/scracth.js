const linearSearch = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		console.log("Search operation from Linear on a Sorted Array");
		if (arr[i] === value) return i;
	}

	return -1;
};

const binarySearch = (sortedArr, value) => {
	let left = 0;
	let right = sortedArr.length - 1;

	while (left <= right) {
		console.log("Search operation from Binary on a Sorted Array");
		const mid = Math.floor((left + right) / 2);
		const midVal = sortedArr[mid];

		if (midVal === value) {
			return mid;
		} else if (midVal < value) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};

let arrTo100 = [];

for (let i = 1; i <= 100; i++) {
	arrTo100.push(i);
}

linearSearch(arrTo100, 100);
binarySearch(arrTo100, 100);

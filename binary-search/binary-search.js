'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
//Brute Force
//Loop through the array
//Check if the element is strictly equal to target
//If equal, return true
//Else return false

//We think this is better than brute:
//Take Math.floor(array.length/2) to find the middle
//array.slice(0, middle) for array A and array.slice(middle) for array b
//Base case: if Math.floor = 0 return false
//Check if last element of array A is >= target. 
	//If last element === target return true
	//else, recurse through Array A
//Else recurse through Array B

array[middle] = 5
//step 25
//store the 5 as prev halfway point
//store 2 as new halfway point
//number > 2 and < 5...
//if < prev halfway but > new halfway, create
//new pointer 
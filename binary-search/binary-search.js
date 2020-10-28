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

///EXTRA CREDIT------------

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



// target = 4
//this first eexample is a little confusing because the elements and indeces are the same yikes

{
  firsthalfway: arr[index] // index = 10 ------------> 5 --> 5
  secondhalfway: Math.floor(firsthalfway / 2) // 5 --> 2 --> 4
}

Math.floor(arr.length / 2) // 20 / 2
arr[index] >= target? // element at idx 10 (10) >= target (4) ?

if yes:
secondhalfway = Math.floor(firsthalfway / 2) // Math.floor(10) => 5


secondhalfway  >= target? // element at idx 5 (5) >= target (4)

if yes:
firsthalfway = secondhalfway // firsthalfway now = 5
      //recurse? jump back to line 16
      if yes:
      secondhalfway = Math.floor(firsthalfway / 2) // Math.floor(5) => 2


      secondhalfway  >= target? // element at idx 2 (2) >= target (4)?
      if no:
      secondhalfway = Math.floor((firsthalfway + secondhalfway) / 2) // (5 + 2) / 2 => 7/2 => 3

        //recurse? jump back to line 29
        secondhalfway  >= target? // element at idx 3 (3) >= target (4)?
        if no:
        secondhalfway = Math.floor((firsthalfway + secondhalfway) / 2) // (5 + 3) / 2 => 8/2 => 4

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const test3 = [-0.5, 0.03, 2.6, 3.77777777];
//              0.    1.    2.    3   

// target = -0.5

{
  firsthalfwayELEMENT: // 2.6 ---> 0.03
  secondhalfwayELEMENT: // 0.03 -> -0.5
  firsthalfwayINDEX: // 2 -------> 1
  secondhalfwayINDEX: // 1 ------> 0
}

firsthalfwayINDEX = Math.floor(arr.length / 2) // index = 2
firsthalfwayELEMENT = arr[firsthalfwayINDEX] // 2.6

is:
arr[firsthalfwayIDX] >= target? // (2.6) >= target (-0.5)? 

if yes:
secondhalfwayINDEX = Math.floor(firsthalfway / 2) // Math.floor(2) => 1
secondhalfwayELEMENT = arr[secondhalfwayINDEX] // 0.03


secondhalfwayELEMENT  >= target? // 0.03) >= target (-0.5)?

if yes:
firsthalfwayINDEX = secondhalfwayINDEX // firsthalfwayINDEX now = 1
      //recurse? (gotta jump back to line 16)
      if yes:
      secondhalfwayINDEX = Math.floor(firsthalfway / 2) // Math.floor() => 1 / 2 => .5 => 0
      
      firsthalfwayELEMENT = secondhalfwayELEMENT // firsthalfwayELEMENT = 0.03
      secondhalfwayELEMENT = arr[secondhalfwayINDEX] // secondhalfwayELEMENT = -0.5

      secondhalfwayELEMENT  >= target? //  -0.5

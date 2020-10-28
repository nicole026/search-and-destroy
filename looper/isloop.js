'use strict';

//Complete this algo
const isLoop = (linkedlist) => {};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

/* Way #1

 - create empty hash table/obj (?)
 - traverse the list and store head and tail values for each node within the hash table
 - check if the node's tail matches any other node's tail
 - if true, it's a loop!
 - else, return false

 */

/* Way #2 - TWO RUNNERS

- create empty hash table/obj (?)
- slow runner: traverse the list and store head and tail values for each node within the hash table
- fast runner: get to end asap in order to determine if it's a loop
- if the fast runner finds that tail === null at any point, return false, there is no cycle
- if fast runner === slow runner, break (end the fast runner)
- otherwise, slow runner will store the tail values and check if the node's tail matches any other node's tail
 - if true, it's a loop!
 - else, return false

 // fullstack problem suggests setting the slow pointer (or fast pointer?) to the beginning... why?

  */

/* Way #3 - EXTRA CREDIT
 Does your algorithm work for both doubley-linked and singly-linked lists? 

- our code does work with a doubley-linked list, but instead of checking if only two nodes have a particular node as a tail, we'd just have to check for three -- if three have a particular node as a tail, it is a doubley-linked loop.


What if values are non-unique?
- we would have to make sure to store the values with keys

  */

/* Way #4 - CHALLENEGE

  - Once we get to the part where a node's tail (8) points to a node (3) that another node (2) has its tail, make sure to store the node that we're on (8)'s value

  */

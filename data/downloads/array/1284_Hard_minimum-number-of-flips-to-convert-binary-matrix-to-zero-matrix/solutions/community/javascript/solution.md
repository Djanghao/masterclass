# JavaScript BFS with explanation (2 approaches)

**Author:** stevenkinouye
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/446466/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/446466/)

---

# Version 1
```javascript
// I do realize that this isn't using a real queue
// the real Queue class is implemented in version 2

// This is similar to JSON.stringify but with a little less overhead
// you can substitute this function for simplicity with JSON.stringify
const stringify = (matrix) => matrix.reduce((str, row) => `${str}-${row.join('-')}`, '');

// flips the element if it exists
const flip = (matrix, row, col) => {
    if (matrix[row] && matrix[row][col] !== undefined) {
        matrix[row][col] = matrix[row][col] ? 0 : 1;
    }
}

/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  // create a copy of the matrix with all elements as 0
  // stringify the copy so that it can be compared to another matrix in constant time
  const final = stringify(mat.map((row) => row.map(() => 0)));
  
  const seen = new Set();
  
  // queue holds the matrix and the number of flips for BFS
  const queue = [[mat, 0]];
  
  // directions are the delta from the current position in the format of [deltaRow, deltaCol]
  const directions = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
  
  while (queue.length) {
    const [matrix, numFlips] = queue.shift();
	
	// stringify matrix so that you can see if it has been visited or is the final result in constant time;
    const strMatrix = stringify(matrix);
	
	// if all elements are 0, return the number of flips
    if (strMatrix === final) return numFlips;
	
	// skip this matrix if the matrix has already been attempted
    if (!seen.has(strMatrix)) {
      seen.add(strMatrix);
	  
	  // iterate through all elements in the matrix and flip each element;
      for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
		
		  // copy matrix
          const newMatrix = matrix.map((row) => [...row]) 
		  
		  // flip each position corresponding to the current position
          directions.forEach(([down, right]) => flip(newMatrix, i + down, j + right))
		  
		  // push matrix into the queue
          queue.push([newMatrix, numFlips + 1]);
        }
      }
    }
  }
  
  // if no results were found return -1
  return -1;
};
```
# Version 2
```javascript
// this uses the the knowledge that you can easily make a copy of a deeply nested object with JSON.parse(JSON.stringify(object))
// with this knowledge we put the matrix through the JSON.stringify and enqueue this into the Queue
// since we will be enqueue-ing a string, we can allow the Queue to be smart and see if the matrix has been visited or not
// also since we are going to be dequeue-ing a stringified version of the matrix, we can JSON.parse this matrix and have a deeply copied matrix

// stores reference to the queue and number of rows and columns
const storeQueueAndValues = (queue, numRows, numCols) => {
  
  // directions holds the change in down and right movement from current position
  const directions = [[0,0], [0,1],[0,-1],[1,0],[-1,0]];
  
  // this will be returned so that we can call this function needing to pass only 2 arguments
  const flip = (strMatrix, numFlips) => {
   
   // iterate through the matrix
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
	  
	    // parses the string matrix to create a copy
        const matrix = JSON.parse(strMatrix);
		
		// flips elements corresponding to the current position
        for (let [down, right] of directions) {
          const [nextRow,nextCol] = [row + down, col + right];
          if (matrix[nextRow] && matrix[nextRow][nextCol] !== undefined) {
            matrix[nextRow][nextCol] = matrix[nextRow][nextCol] ? 0 : 1;
          }
        }
		
		// stringifies the matrix
        queue.enqueue({matrix: JSON.stringify(matrix), numFlips})
      }
    }
  }
  return flip
}

/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  // make a copy with all elements as 0 and strigify to refence if we have hit the final matrix
  const final = JSON.stringify(mat.map(row => row.map(() => 0)));
  const queue = new Queue();
  
  // store the queue, number of rows and number of columns to have reference to in the function
  const flip = storeQueueAndValues(queue, mat.length, mat[0].length);
  queue.enqueue({ matrix: JSON.stringify(mat), numFlips: 0 });
  while (!queue.isEmpty()) {
  
    // since matrix is a stringified version of the matrix, we can compare it to the final stringified matrix in constant time
    let { matrix, numFlips } = queue.dequeue();
    if (matrix === final) return numFlips;
	
    // attempt to flip each position and neighboring positions in the matrix
    flip(matrix, numFlips + 1);
  }
  return -1;
};


// standard Queue class that only enqueues matrix that have not been seen before
// this can be referenced in the above function because of JavaScript hoisting
class Queue {
    constructor() {
        this.head = new Node();
        this.tail = this.head;
        this.seen = new Set();
    }

    isEmpty() {
      return this.head.next === null;
    }

    enqueue(value) {
      const { matrix } = value;
      if (!this.seen.has(matrix)) {
        this.seen.add(matrix);
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
      }
    }

    dequeue() {
        const { next } = this.head;
        if (next === this.tail) this.tail = this.head;
        this.head.next = next.next;
        return next.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```
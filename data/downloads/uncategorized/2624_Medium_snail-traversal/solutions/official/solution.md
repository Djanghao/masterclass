# Official Solution

**Link:** [https://leetcode.com/problems/snail-traversal/solution/](https://leetcode.com/problems/snail-traversal/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem involves implementing an extension method for JavaScript arrays, the `snail(rowsCount, colsCount)`, that takes two arguments - `rowsCount` and `colsCount`. It transforms a given one-dimensional array into a two-dimensional array, following the snail traversal order. This kind of problem is commonly asked in UI-focused interviews, particularly in FAANG companies.

The Snail Traversal Order follows an alternating pattern starting from the top left cell of the two-dimensional array. The pattern consists of moving through the entire first column from top to bottom, then moving to the next column on the right, and traversing it from bottom to top. This pattern alternates the direction of traversal with each column until the entire array is covered.

To make this task more practical and relevant to UI development, one can attempt to solve this problem using their favorite JavaScript framework (React, Vue, Angular etc.) or even vanilla JavaScript to visualize the snail traversal order in a UI. This would involve not only transforming the array but also creating the necessary UI components to display the two-dimensional array in the required snail traversal order.

A solid understanding of multi-dimensional arrays, array manipulations, and iterative control structures is crucial for solving this problem effectively. Moreover, it's important to be familiar with how to extend JavaScript's built-in objects with custom methods. To review these concepts, particularly around the Array prototype, we recommend starting with the [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/editorial/) editorial.

#### Multi-Dimensional Arrays in JavaScript
In JavaScript, arrays can contain any type of values including other arrays. These *nested* arrays can be used to represent multiple dimensions of data, such as a matrix (a 2D array) or even higher dimensions.

Working with multi-dimensional arrays in JavaScript involves understanding how they are structured and how to index them correctly. For instance, a 2D array is essentially an array of arrays. Each sub-array represents a *row* of the 2D array. Accessing elements within a 2D array involves using two indices - the first for the row and the second for the column.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
```

#### Extending Built-in JavaScript Objects
In JavaScript, it's possible to extend built-in objects with additional methods or properties. This is often done by adding new methods to the object's prototype.

For instance, you can add a `snail` method to all arrays in JavaScript by adding it to the `Array.prototype`. This is how the solution to this problem is implemented. It adds the `snail` method to the `Array.prototype` so that it can be called on any array.

```javascript
Array.prototype.snail = function(rowsCount, colsCount) {
  // ... implementation ...
};
```

Do note that extending built-in objects is often discouraged in JavaScript because it can cause conflicts with other code that might be using the same method names. However, in controlled environments or for specific purposes, it can be a powerful technique.

##### JavaScript's Array Prototype
In JavaScript, all arrays inherit from the Array.prototype which is part of the prototype chain. Array.prototype includes various methods that can be used on any array. Because of JavaScript's prototypal inheritance, methods defined on this prototype are available to all arrays created in the application. This crucial concept is further elucidated in the [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/editorial/) editorial.

Extending the prototype is a powerful feature, as it allows developers to define custom methods that can be used on all arrays. However, this feature should be used with care because it modifies the global `Array` object and could potentially cause conflicts with other parts of an application or third-party libraries.

In the *Snail Traversal* problem, a snail method is added to the `Array.prototype`. It's worth noting that in a real-world application, modifying `Array.prototype` is generally discouraged because of the risk of naming conflicts and unexpected behavior. However, for the context of this problem, it is a crucial part of the implementation.

```javascript
Array.prototype.snail = function(rowsCount, colsCount) {
  // Implementation of the method...
};
```

Here, the `snail` method is added to `Array.prototype`, allowing it to be called on any array in the application. Understanding this aspect of JavaScript's prototype system is important to solve this problem and a valuable skill in JavaScript programming in general.

#### Iterative Control Structures
Iterative control structures like loops are fundamental in programming and they have various use cases in JavaScript, including iterating over arrays or other collections, repeating an action a certain number of times, or creating loop-based animations.

This problem involves creating a 2D array from a 1D array, and iterative control structures like `for` loops are used to iterate over the input array and fill up the new 2D array in the correct order.

Understanding and using loops effectively is crucial for solving this problem, as well as many other programming tasks. A good understanding of the various types of loops in JavaScript - including `for`, `while`, and `do-while` loops, as well as the `Array.prototype` methods like `forEach`, `map`, `filter`, etc. - is vital for efficient and effective JavaScript programming. You can also learn more about them in our other problems and editorials, for example [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/editorial/), [Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/editorial/) and [Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation/editorial/). 

#### Traversal Patterns in 2D Arrays
The traversal pattern in a 2D array can be a critical part of various problems, especially in graphical or spatial contexts. The pattern followed when reading or writing to a 2D array could make a significant difference in how the problem is solved. For instance, traversing row by row (row-major order) versus column by column (column-major order) can lead to quite different outcomes.

In the *Snail Traversal* problem, a specific pattern is required: starting at the top-left cell, moving through the first column from top to bottom, then moving to the next column on the right and traversing it from bottom to top, and so on, until the entire array is covered.

Understanding this kind of traversal and being able to implement it effectively is a critical part of solving this problem. Moreover, grasping various traversal patterns can be advantageous when facing a myriad of programming problems involving 2D arrays or matrices. We suggest exploring other traversal patterns such as [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) or [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/). These are frequently encountered in frontend interviews and provide a practical assessment of both data modeling and UI skills. The UI tasks associated with such problems are typically standard: rendering an `N`x`M` 2D grid and highlighting specific cells based on state. A 2D array is nearly always the appropriate data structure to use. Frameworks like React prove to be very helpful for these tasks. It allows you to concentrate on state modifications, and the UI will automatically update correctly.

##### User Interface (UI) Questions in Coding Interviews
UI coding interviews, particularly at MAANG companies, often involve data manipulation using JavaScript and a UI library such as React, Angular, or Vue.js.

One typical task is the *Snail Traversal* problem, which requires transforming a 1D array into a specific 2D grid pattern. To enhance your skills, practice this problem in a UI context: convert an array into a 2D snail traversal pattern and display it on a webpage, creating a table similar to the one shown in this task's description. We recommend utilizing tools like [CodePen](https://codepen.io/) or [CodeSandbox](https://codesandbox.io/) for this purpose.

#### Use Cases of Multi-dimensional Arrays and Traversal Patterns

Multi-dimensional arrays and the associated traversal patterns have extensive applications in various programming scenarios.

##### Game Development
Many games, especially board games like chess or Sudoku, require the use of a 2D grid. In such cases, the game board can be modeled as a multi-dimensional array, where each element of the array represents a cell or a piece on the game board. Different traversal patterns can represent various moves or actions in the game.

```javascript
const chessBoard = new Array(8).fill(null).map(() => new Array(8).fill(null));
```
This simple 2D array can serve as the basis for a chessboard, with each item representing a square on the board that can hold a chess piece. Traverse this 2D array to find the position of pieces, evaluate possible moves, check the game's status, and more.

##### Image Processing
Images can be represented as a 2D array of pixels, where each pixel is typically represented as a tuple of RGB values. Traversal patterns come into play when applying filters or transformations to these images. For example, applying a blur filter may involve averaging the RGB values of a pixel's neighbors.

##### Graph Algorithms
Graphs can be represented as adjacency matrices, which are 2D arrays where each element represents the connection between two nodes. Traversal patterns are used in many graph algorithms, including finding the shortest path, checking for cycles, and more.

#### Geospatial Data Processing
Geo-data, like elevation data, is often represented as a 2D array, where each cell in the array represents a geographic location's elevation. Traversal patterns can be used to calculate the slope, aspect, and other terrain attributes.

#### Simulation of Physical Processes
Many physical processes, like fluid dynamics or heat distribution, can be modeled using a grid or a 3D array. These simulations often involve applying a set of rules at each time step, where each cell's new state depends on its neighbors' current states.

---

### Approach 1: Iterative Transformation of Array with Index Reversal

#### Intuition
Considering that we are transforming a 1D array into a 2D array in a snail traversal pattern, we will iterate through the input array while determining the placement of each element in the 2D array. To do this effectively, we need to manage the position of each element based on its index and the desired 2D array's shape (number of rows and columns). In this process, we take into consideration the *snail* nature of the traversal - moving in a horizontal line from left to right, then vertically from top to bottom, and then in a horizontal line from right to left, and so on in a zig-zag pattern.

#### Algorithm
1. Check if the product of the input number of rows and columns is equal to the length of the array. If not, return an empty array since the desired 2D array cannot be formed with the available data.
2. Initialize the resulting 2D array with zeros.
3. Start iterating through the input array's elements.
4. In each iteration:
   1. Calculate the row and column index for the current element.
   2. Depending on the current row, determine the direction of the traversal (normal or reversed).
   3. Place the current element in the corresponding position in the 2D array.
   4. If the end of the current row is reached, switch the direction of the traversal.

#### Implementation

<iframe src="https://leetcode.com/playground/BjcU8Fq6/shared" frameBorder="0" width="100%" height="480" name="BjcU8Fq6"></iframe>


Let's understand the following lines of code:

```javascript
const row = !isReversed ? i % rowsCount :  rowsCount - 1 - (i % rowsCount)
const col = Math.floor(i / rowsCount)
```

In the snail traversal pattern, we're effectively moving in a zigzag pattern. That is, we start from the top, move downwards, then upwards, and so on. In each column, we either move from the top to the bottom or from the bottom to the top, which depends on whether the column index is even or odd.

This is where `isReversed` comes into play. If `isReversed` is `false`, we're moving downwards, so the row index is simply `i % rowsCount`, where `i` is the current index in the original array. The modulo operation wraps around the index so that it doesn't exceed the number of rows. If `isReversed` is `true`, we're moving upwards, so the row index is `rowsCount - 1 - (i % rowsCount)`. This inverts the row index so that it starts from the bottom.

The column index is calculated as `Math.floor(i / rowsCount)`. This gives us the integer quotient of `i` divided by `rowsCount`, which corresponds to the column index. We use `Math.floor()` to round down to the nearest integer because the quotient could be a floating-point number.

Next, let's understand this condition:
```javascript
if((i % rowsCount) === rowsCount - 1) {
    isReversed = !isReversed
}
```

This condition checks whether we've reached the end of the current column in the 2D array. When `i % rowsCount` equals `rowsCount - 1`, it means we've finished traversing the current column and need to move to the next column. At this point, we flip the direction of traversal by setting `isReversed = !isReversed`.

For example, let's consider a 2D array with `rowsCount = 3` and `colsCount = 4`. Here's how the original array gets mapped to the 2D array:

```
Original array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

2D array:
[
 [1, 6, 7, 12],
 [2, 5, 8, 11],
 [3, 4, 9, 10]
]
```

We start from the top in the first column, move downwards until we reach the bottom, then move to the second column and start from the bottom, move upwards until we reach the top, and so on. This is exactly what the snail traversal pattern does.

#### Complexity Analysis

Time complexity: $O(N)$ where $N$ is the number of elements in the input array. This is because we iterate over the input array exactly once, visiting each element a single time. The operations within each iteration, such as calculating the row and column indexes and assigning the value, are constant-time operations.

Space complexity: $O(N)$, where $N$ is the length of the input array. The space complexity arises from the space required to store the resultant 2D array. The size of this 2D array is proportional to the size of the input array. Hence, the space complexity is linear

### Approach 2: Direct Calculation of 2D Array Indices

#### Intuition
In this approach, we essentially achieve the same goal as Approach 1 but with a different pattern. Instead of tracking the "reversed" state, we utilize the column index to determine whether we should go upwards or downwards in the current column. 

#### Algorithm
1. Ensure the size of the given array matches `rowsCount * colsCount`. If not, return an empty array.
2. Initialize result as a 2D array with `rowsCount` number of rows.
3. Iterate over each element in the array.
4. In each iteration, calculate the row and column indexes of the current element in the 2D array. If the column index is even, we're moving downwards, so the row index is simply `j % rowsCount`. If the column index is odd, we're moving upwards, so the row index is `rowsCount - j % rowsCount - 1`.
Place the current element into its corresponding position in the 2D array.

#### Implementation

<iframe src="https://leetcode.com/playground/Tq5sm7vH/shared" frameBorder="0" width="100%" height="480" name="Tq5sm7vH"></iframe>

This approach, like the first, implements a function that maps the original array into a 2D array in a snail traversal pattern. However, it determines the direction of traversal based on the column index rather than explicitly maintaining a boolean variable to track the direction. This makes the code somewhat simpler and more straightforward. However, its performance and complexity are similar to the first approach.

##### Row and Column Index Calculation:
The core of this approach relies on properly calculating the row and column indexes for each element in the original array.

```javascript
const i = Math.floor(j / rowsCount);
```

Here `i` is calculated as the floor division of the current index `j` by `rowsCount`. Since we're incrementing `j` with each iteration and `rowsCount` is constant, `i` essentially represents the column index in our resulting 2D array. Each time `j` reaches a multiple of `rowsCount`, `i` increments by `1`, indicating a move to the next column.

```javascript
if (i % 2 === 0) {
    result[j % rowsCount][i] = this[j];
    continue;
}

result[rowsCount - j % rowsCount - 1][i] = this[j];
```

In this block, we're determining the row index based on whether `i` is even or odd. When `i` is even (or in other words, when we're at an even-indexed column), we're moving downwards. Therefore, the row index is `j % rowsCount`, which cycles from `0` to `rowsCount - 1` as `j` increments.

When `i` is odd (indicating we're at an odd-indexed column), we're moving upwards. Therefore, the row index is `rowsCount - j % rowsCount - 1`. This expression ensures that as `j` cycles from `0` to `rowsCount - 1`, the row index cycles from `rowsCount - 1` to `0`.

##### Direction Reversal:
The direction of traversal (downwards or upwards) alternates with each column. This is controlled by the condition `i % 2 === 0`, which checks whether the column index `i` is even. If `i` is even, we're moving downwards, so the row index is `j % rowsCount`. If `i` is odd, we're moving upwards, so the row index is `rowsCount - j % rowsCount - 1`.

This mathematical expression of the direction of traversal simplifies the code by removing the need for an explicit boolean variable to track the direction. The direction is inferred directly from the column index.

#### Complexity Analysis

Time complexity: $O(N)$, where $n$ is the length of the input array. This is because we are iterating over the input array only once.

Space complexity: $O(N)$, where $N$ is the length of the input array. The space complexity arises from the space required to store the resultant 2D array. The size of this 2D array is proportional to the size of the input array. Hence, the space complexity is linear.

### Approach 3: Dual Iteration on Rows and Columns

#### Intuition
This approach involves iterating over the columns and rows of the output array simultaneously and mapping each element of the input array directly to its corresponding position in the output array based on the snail pattern.

#### Algorithm
1. Ensure the size of the given array matches `rowsCount * colsCount`. If not, return an empty array.
2. Initialize result as a 2D array with `rowsCount` number of rows and `colsCount` number of columns.
3. Iterate over the rows and columns of the output array.
4. In each iteration, calculate the index of the current element in the input array based on the current row and column. If the current column is even, the index is `rowsCount * currCol + currRow`. If the current column is odd, the index is `rowsCount * currCol + rowsCount - 1 - currRow`.
5. Place the element with the calculated index from the input array into its corresponding position in the output array.

#### Implementation

<iframe src="https://leetcode.com/playground/WdMrEtop/shared" frameBorder="0" width="100%" height="463" name="WdMrEtop"></iframe>

This approach, like the first two, implements a function that maps the original array into a 2D array in a snail traversal pattern. However, this approach directly maps the elements from the input array to the output array by calculating their corresponding indexes in the input array. This is done by iterating over the rows and columns of the output array and using their indexes to calculate the index of each element in the input array.

##### Input Array Index Calculation:

The core of this approach lies in the calculation of the index of each element in the input array. This is done based on whether the current column in the output array is even or odd.

```javascript
  res[currRow][currCol] = this[rowsCount * currCol + currRow];
}
```

Here, if `currCol` is even, we're moving downwards in the current column. Thus, the index of the current element in the input array is calculated as `rowsCount * currCol + currRow`. This calculation effectively maps the element at the calculated index in the input array to its correct position in the output array, based on the snail pattern.

```javascript
if (currCol % 2 !== 0) {
  res[currRow][currCol] = this[rowsCount * currCol + rowsCount - 1 - currRow];
}
```

In this block, if `currCol` is odd, we're moving upwards in the current column. Therefore, the index of the current element in the input array is `rowsCount * currCol + rowsCount - 1 - currRow`. This calculation similarly maps the element at the calculated index in the input array to its correct position in the output array.

#### Complexity Analysis

Time complexity: $O(N)$, where $N$ is the length of the input array. This is because we are iterating over the rows and columns of the output array only once.

Space complexity: $O(N)$, where $N$ is the length of the input array. The space complexity arises from the space required to store the resultant 2D array. The size of this 2D array is proportional to the size of the input array. Hence, the space complexity is linear.


### Approach 4: Simulation - Down and Up Movement

#### Intuition
The problem essentially asks us to create a snail pattern in a 2D matrix. This can be thought of as simulating the movement of a snail that initially moves downwards, then moves upwards, and repeats this cycle, while moving from left to right after reaching the end of each column.

This approach simulates the movement of the snail by maintaining the current direction of movement (down or up) and changing the direction whenever the snail hits a boundary (top or bottom of a column). When the snail hits a boundary, it moves to the next column and changes its direction.

#### Algorithm
1. Ensure the size of the given array matches `rowsCount * colsCount`. If not, return an empty array.
2. Initialize result as a 2D array with `rowsCount` number of rows and `colsCount` number of columns.
3. Initialize the directions for the snail (down and up).
4. Initialize the current position of the snail (top-left corner of the output array) and the current direction of movement (down).
5. Iterate over the elements of the input array.
6. In each iteration, place the current element in the current position of the snail in the output array, calculate the next position of the snail based on the current direction of movement, and update the current position and direction if necessary.

#### Implementation

<iframe src="https://leetcode.com/playground/gBsy6iwt/shared" frameBorder="0" width="100%" height="500" name="gBsy6iwt"></iframe>

The main part of the implementation is the loop that iterates over the elements of the input array. In each iteration, it places the current element in the current position of the snail in the output array, calculates the next position of the snail based on the current direction of movement, and updates the current position and direction if necessary. The snail changes its direction when it hits a boundary, and moves to the next column.


#### Complexity Analysis

Time complexity: $O(N)$, where $N$ is the total number of elements in the input array. The main loop iterates over each element in the input array exactly once to place it in the appropriate position in the output 2D array according to the snail pattern.

Space complexity: $O(N)$, where $N$ is the total number of elements in the input array. The space complexity is primarily due to the additional 2D array we're creating to store the result. This 2D array will have as many elements as the original array, hence, the space complexity is linear.

---
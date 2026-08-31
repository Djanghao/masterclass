# Official Solution

**Link:** [https://leetcode.com/problems/flatten-deeply-nested-array/solution/](https://leetcode.com/problems/flatten-deeply-nested-array/solution/)

---

[TOC]


## Overview:

You are given a multi-dimensional array `arr` and an integer `n`. Your task is to flatten the array `arr` by removing sub-arrays up to a depth of `n`. A flattened array should only contain the actual elements from the sub-arrays, and not the sub-arrays themselves.

---

## Use Cases:

**Data Processing:**
* When working with data in a nested format, such as JSON or XML, flattening the structure can simplify data processing tasks. For example, if you have a nested JSON response from an API and you only need certain fields, flattening the JSON can make it easier to extract and analyze the required data.
* For example: 
  ```js
  const people = [
  {name: 'Mike', items: ['hammer', 'axe']}
  {name: 'Steve', items: ['rock', 'stick']}
  ]

  const allItems = people.map(d => d.items).flat()
  ```
**Tree Traversal:** 
* In computer science, trees are often used to represent hierarchical structures. When traversing a tree-like structure, flattening can be used to convert the tree into a linear representation, allowing easier navigation and manipulation of the data.

**Recursive Algorithms:** 
* Many algorithms involve recursive operations on data structures. Flattening nested arrays can be beneficial in such cases. For instance, when implementing algorithms like depth-first search or recursive backtracking, flattening can simplify the process by providing a linear view of the data.

**Database Queries:** 
* In database systems, nested structures can be stored as arrays or JSON objects. When querying the data, flattening the nested arrays can be useful to retrieve specific elements or perform aggregations across different levels of the structure.

---

## Approach 1: Recursive approach
### Intuition:
As it is a deeply nested structure there will be some repetitive steps to achieve in the solution to make them flatten, so recursion is the go to way to the approach.

### Algorithm:
* Let's create a recursive function `flattening` which takes an array `nums` and a level `l` as arguments
* Inside `flattening`, a `for...of` loop is used to iterate over the elements of the `nums` array.
* For each element, it checks if the element is an array and if the level `l` is within the specified range `(l > 0 and l <= n)`.
  * If the element is an array and the level condition is met, it recursively calls `flattening` with the nested array and decrements the level by `1` i.e., `(l - 1)`.
  * If the element is not an array or the level condition is not met, it pushes the element into the `res` array.
* The `flattening` function is initially called with the `arr` and `n` arguments to start the flattening process.
* Finally, the `res` array containing the flattened elements is returned as the result.

### Implementation:


<iframe src="https://leetcode.com/playground/esgDoLVH/shared" frameBorder="0" width="100%" height="395" name="esgDoLVH"></iframe>


### Complexity Analysis:

**Time complexity:**
* In the worst-case scenario, where every element in `arr` is an array and the maximum depth `n` is reached, the recursive function will be called for each nested array at each level. 
* This results in a total of `O(k*n)` recursive calls, where `k` represents the average number of nested arrays at each level, and `n` is the maximum depth level.

**Space complexity:**
* The space complexity of the solution is determined by the depth level `n` since it affects the maximum depth of recursion. 
* Each recursive call consumes additional space on the call stack. Therefore, the space complexity is `O(n)` as we need space for `n` recursive calls on the call stack.

---

## Approach 2: Using Iterative Queue
### Intuition:
We can put all the children of the nested arrays in a queue for processing at a later iteration.

### Algorithm:
* We initialize a boolean variable `nestedArrayElement` to `true`, which indicates whether there are still nested arrays to be flattened.
* We also initialize a variable `queue` to store the elements during the flattening process.
* A variable `depth` is set to `0` initially, representing the current depth level.
* The function enters a while loop, which continues as long as there are single array elements to be processed (`nestedArrayElement` is `true`) and the depth is less than `n`.
  * Within each iteration of the loop, `nestedArrayElement` is set to `false` initially, indicating that no nested arrays have been encountered yet.
  * A new empty `queue` is created to store the elements during the current iteration.
  * A for loop is used to iterate over each element of the `arr`.
    * If the element is an array, its elements are spread into the `queue`, and `nestedArrayElement` is set to `true` to indicate that a nested array has been encountered.
    * If the element is not an array, it is directly pushed into the `queue`.
  * After processing all the elements of `arr`, the `arr` is updated to contain the elements in the queue. 
  * In `arr = [...queue]`, the `arr` variable is effectively updated with the flattened elements of the nested array at the current level with the help of spread operation. This updated `arr` is then used in the next iteration of the while loop to flatten the next level of nested arrays.
  * The depth is incremented to indicate that a new level of nesting has been processed.
* The loop continues until there are no more single array elements (`nestedArrayElement` is `false`) or the depth reaches the specified level `n`.
* Finally, the updated `arr` is returned as the flattened array.

### Implementation:


<iframe src="https://leetcode.com/playground/8J2basCr/shared" frameBorder="0" width="100%" height="500" name="8J2basCr"></iframe>


### Complexity Analysis:

**Time Complexity:**
* The time complexity is `O(n * m)`, where `n` is the maximum depth level and `m` is the total number of items in the array. We iterate through all the items in the array for each level, resulting in a total complexity of `O(n * m)`.

**Space Complexity:**
* The space complexity is `O(m)` as we use an extra queue to store the items in the array.

---

## Approach 3: Using Iterative Stack
### Intuition:
We can map each item of the input array along with the initial depth level `n` into a stack. Then, in a while loop, we pop an item and its corresponding depth from the stack. If the item is an array and the depth is greater than `0`, it maps each element of the array along with a reduced depth and pushes them back into the stack. This process continues until the stack is empty. If the item is not an array or the depth is `0`, it is considered a leaf element and gets pushed into the result array. Finally, the result array is `reversed` to maintain the original order of elements.

### Algorithm:
* We initialize a stack called `stack` with the elements of the `arr` along with their corresponding `depth` levels. Each element is represented as a pair `[item, depth]`.
* We also initialize an empty array `res` to store the flattened result.
* The function enters a while loop, which continues as long as there are elements in the `stack`.
  * Within each iteration of the loop, the top element `[item, depth]` is retrieved from the `stack` using the `pop()` method.
  * If the `item` is an array and the current depth `depth` is greater than `0`, it means the element is a box containing items that need to be further flattened.
    * Each element `el` of the `item` array is mapped to a pair `[el, depth - 1]`, representing the element along with a reduced depth level `(depth - 1)`.
    * These mapped pairs are then pushed back to the `stack` using the `push()` method, effectively queuing them for further processing.
  * If the `item` is not an array or the depth is `0`, it means the element is an item, which can be directly added to the `res` array.
* The loop continues until there are no more elements in the `stack`.
* Finally, the `res` array containing the flattened elements is returned, but in reverse order. This reversal is done using the `reverse()` method to ensure the elements are in the original order.

### Implementation:


<iframe src="https://leetcode.com/playground/QdzcV6jv/shared" frameBorder="0" width="100%" height="412" name="QdzcV6jv"></iframe>


### Complexity Analysis:

**Time complexity:** 
* The code involves a while loop that continues until the stack becomes empty, and within each iteration, elements are popped from the stack and processed.
* In the worst case scenario, each element is processed exactly once, which requires iterating over the elements of the input array and mapping them to pairs for the stack.
* Therefore, the time complexity of the code is `O(m)`, where `m` is the total number of elements in the input array.

**Space complexity:** 
* The space complexity of the code is `O(m)`, where `m` is the total number of elements in the input array.

---


## Interview Tips:

* Explain the concept of flattening a multi-dimensional array. Why might flattening be useful in certain scenarios?
  * Flattening a multi-dimensional array means converting it into a single-dimensional array by removing any nested arrays and replacing them with their actual elements. This can be useful when we need to process or analyze the array as a flat list, disregarding its original nested structure. It simplifies operations such as searching, filtering, or transforming the elements of the array.

* Are there any edge cases or special scenarios that need to be considered when solving this problem? How does your solution handle them?
  * Yes, we should consider edge cases such as empty arrays or arrays with no nested arrays. In such cases, the function should return the original array as there are no nested arrays to flatten. Additionally, we need to handle scenarios where the depth n is negative or exceeds the actual depth of the array. In these cases, the function should also return the original array without flattening.

* How does your solution handle circular references or self-referencing arrays within the input array?
  * Circular references or self-referencing arrays can lead to infinite recursion. The provided solution does not explicitly handle circular references. If the input array contains circular references, the recursive flattening process may result in an infinite loop or stack overflow error.

---
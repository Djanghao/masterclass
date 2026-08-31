# Official Solution

**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solution/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition  

We need to count the number of negative elements in the given matrix `grid`.  
The brute force way is to iterate over all matrix elements and count all the negative elements.

#### Algorithm

1. Initialize a variable `count = 0`, to count the total number of negative elements in the matrix.
2. Using two nested for-loops iterate on each `element` of the matrix `grid`, and if the `element` is negative increment the `count` by `1`.
3. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/hkLV6U6s/shared" frameBorder="0" width="100%" height="327" name="hkLV6U6s"></iframe>


#### Complexity Analysis

Here, $m \times n$ is the size of the input matrix.  

* Time complexity: $$O(m \cdot n)$$  
    - We iterate on each element of the matrix once, and the total number of the elements in the matrix is $m \cdot n$.
* Space complexity: $$O(1)$$
    - We don't use any additional space.

<br/>

---

### Approach 2: Binary Search

#### Intuition  

We can use the fact that the elements in the rows are sorted. In the previous approach, we were linearly iterating on all row elements.  
But instead, we can use **binary search** to find the first negative element of each row, and as elements are sorted, all elements after the first negative element will also be negative.

**Understanding how binary search works here:**  
In binary search algorithms, we keep two pointers `left` and `right` pointing to the ends of the search space. Then we find the middle position of the current search space `mid` to reduce the search space by half until only one element is left in the search space.  

We repeatedly reduce our search space based on the following conditions:  
- If the element at the `mid` position is non-negative then it will mean elements from `left` to `mid` all are non-negative, thus we can discard these elements as the first negative element will be present in elements from `mid + 1` to `right`.  
- Otherwise, if it is negative then it means elements from `mid` to `right` all are negative, thus we can discard these elements, as the first negative element will be present in elements from `left` to `mid`.

In the end, we will be left will only one element in our search space which will be the first negative element.

![binary_search](../Figures/1351/Slide1.PNG)

> **Note**:  If you are new to this concept we recommend you to read our [Binary Search Explore Card](https://leetcode.com/explore/learn/card/binary-search/).    
> Also, we are listing some related problems for you to practice:  
> - [Binary Search](https://leetcode.com/problems/binary-search/)  
> - [Sqrt(x)](https://leetcode.com/problems/sqrtx/)  
> - [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)

#### Algorithm

1. Initialize variables:
    - `count = 0`, to count the total number of negative elements in the matrix.
    - `n = grid[0].size()`, to store the number of elements in each row.

2. We iterate on each `row` of the matrix `grid`, and for each row, we find the index of the first negative element `left`. As all the elements from `left` to `n - 1` will be negative elements thus we increment `count` by `n - left`.  
**Note:** You can use in-built STL methods for the binary search like `upper_bound`, etc., or implement it on your own.

3. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/cVnaquSk/shared" frameBorder="0" width="100%" height="463" name="cVnaquSk"></iframe>

#### Complexity Analysis

Here, $m \times n$ is the size of the input matrix.  

* Time complexity: $$O(m \log n)$$  
    - For each row of the matrix we perform a binary search which will take $O(\log n)$ time.
    - Thus, for $m$ rows, overall we will take $O(m \log n)$ time.
* Space complexity: $$O(1)$$
    - We don't use any additional space.

<br/>

---

### Approach 3: Linear Traversal

#### Intuition  

In the problem description, it's given that the numbers are also sorted in column-wise order. This implies that, if $\text{i}^{th}$ row has the first negative element at index $\text{x}$, then the first negative for $\text{i + 1}^{th}$ row can never be at indices greater than $\text{x}$.

![linear_traversal](../Figures/1351/Slide2.PNG)

Thus, it means if we know the index of the first negative element of any row then the next row's first negative element will be present on the left side of the previous row's first negative index.

So we traverse from right to left in each row starting from the previous row's first negative element's index to find the current row's first negative element index.

#### Algorithm

1. Initialize variables:
    - `count = 0`, to count the total number of negative elements in the matrix.
    - `n = grid[0].size()`, to store the number of elements in each row.
    - `currRowNegativeIndex = n - 1`, to store the current row's first negative element's index.

2. For each `row` of the grid, we decrease `currRowNegativeIndex` by `1` until we point to the last positive element of the current row. And thus, we know all elements to the right of this pointer will be negative so we add `n - (currRowNegativeIndex + 1)` to the `count`.

3. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/YHTUHWgr/shared" frameBorder="0" width="100%" height="395" name="YHTUHWgr"></iframe>


#### Complexity Analysis

Here, $m \times n$ is the size of the input matrix.  

* Time complexity: $$O(m + n)$$  
    - We will iterate on one row and one column i.e. $(m + n)$ elements of the matrix.
    - An easier way to think about this: we start in the top right square. We can only move left and down, and we cannot move more than $m + n$ times without exiting the grid.

* Space complexity: $$O(1)$$
    - We don't use any additional space.
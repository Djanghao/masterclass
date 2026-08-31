# Official Solution

**Link:** [https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/solution/](https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/solution/)

---

[TOC]

## Solution

---

### Approach: Traversal

#### Intuition

First, calculate the absolute difference between the first and last elements to initialize the maximum absolute difference. Then, traverse the array to calculate the absolute difference between adjacent elements and update the answer.

Finally, return the maximum absolute difference in the circular array.

#### Implementation

<iframe src="https://leetcode.com/playground/cfyXn7V9/shared" frameBorder="0" width="100%" height="242" name="cfyXn7V9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexity: $O(n)$.
  
  Only need to traverse the array once.

- Space complexity: $O(1)$.
  
  Only a few additional variables are needed.
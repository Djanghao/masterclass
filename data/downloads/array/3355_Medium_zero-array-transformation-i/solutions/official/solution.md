# Official Solution

**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solution/](https://leetcode.com/problems/zero-array-transformation-i/solution/)

---

[TOC]

## Solution

--- 

### Approach: Difference Array

#### Intuition

We count the maximum number of operations that can be performed at each position using a difference array. Construct the difference array `deltaArray` with a length of `n + 1` (where `n` is the length of the array `nums`), which is used to record the increment for each query on the number of operations. 

For each query interval `[left, right]`, increment `deltaArray[left]` by `+1`, indicating an increase in the operation count starting from `left`. Decrement `deltaArray[right + 1]` by `-1`, indicating that the operation count returns to its original value after `right + 1`. 

Next, perform a prefix sum accumulation on the difference array `deltaArray` to obtain the total operation count at each position in the array, storing these counts in `operationCounts`. Traverse the `nums` array and the `operationCounts` array, comparing the actual operation counts (`operations`) at each position to see if they meet the minimum number of operations (`target`) required for zeroing. If all positions meet `operations >= target`, return `true`; otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/iN556nLp/shared" frameBorder="0" width="100%" height="497" name="iN556nLp"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$ and $m$ be the length of $\textit{queries}$.

- Time complexity: $O(n + m)$.
  
  We need $O(m)$ time to construct the difference array, followed by checking all $O(n)$ positions.

- Space complexity: $O(n)$.
  
  We need $O(n)$ space to store the difference array.
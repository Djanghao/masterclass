# Official Solution

**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solution/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Hash map

#### Intuition

According to the problem, if the maximum value of the current array is $x$, and the second largest value (if it exists) is $y$, then we can choose an $h$ such that $y \le h \lt x$, and replace all occurrences of $x$ in the array with $h$.

Therefore, to minimize the number of operations required to turn all numbers in the array into `k`:

- If there is a number smaller than $k$ in the array, there is no solution.
- Otherwise, count the number of different numbers greater than $k$ in the array, which is the number of operations.

We use a hash map to count the numbers greater than $k$ in the array. During the traversal of the array, if we encounter a number smaller than $k$, we directly return $-1$.

#### Implementation

<iframe src="https://leetcode.com/playground/PupPgL7o/shared" frameBorder="0" width="100%" height="500" name="PupPgL7o"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.

We only need to traverse $\textit{nums}$ once, and the time complexity of adding elements to the hash map is $O(1)$, so the overall time complexity is $O(n)$.

- Space complexity: $O(n)$.

The space complexity of using a hash map is $O(n)$.
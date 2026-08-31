# Official Solution

**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solution/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solution/)

---

[TOC]

## Solution
---
### Approach 1: Two Pointers

**Algorithm**

We can apply [Two Sum's solutions](https://leetcode.com/articles/two-sum/) directly to get $$O(n^2)$$ time, $$O(1)$$ space using brute force and $$O(n)$$ time, $$O(n)$$ space using hash table. However, both existing solutions do not make use of the property that the input array is sorted. We can do better.

We use two indices, initially pointing to the first and the last element, respectively. Compare the sum of these two elements with `target`. If the sum is equal to `target`, we found the exactly only solution. If it is less than `target`, we increase the smaller index by one. If it is greater than `target`, we decrease the larger index by one. Move the indices and repeat the comparison until the solution is found.

Let $$[... , a, b, c, ... , d, e, f, ...]$$ be the input array that is sorted in ascending order and let the elements $$b$$ and $$e$$ be the exactly only solution. Because we are moving the smaller index from left to right, and the larger index from right to left, at some point, one of the indices must reach either $$b$$ or $$e$$. Without loss of generality, suppose the smaller index reaches $$b$$ first. At this time, the sum of these two elements must be greater than `target`. Based on our algorithm, we will keep moving the larger index to the left until we reach the solution.

**Implementation**

<iframe src="https://leetcode.com/playground/75vUvf5c/shared" frameBorder="0" width="100%" height="463" name="75vUvf5c"></iframe>

**Follow-Up**
    
What if the problem constraints were different and we needed to consider integer overflow when adding $$numbers[low]$$ and $$numbers[high]$$? In that case, to prevent an overflow error, we could cast our numbers from `int` data type to `long` data type before adding them together, e.g.: `long sum = static_cast<long>(numbers[low]) + numbers[high]` for C++. Casting ensures that we will not get the overflow error since the signed `long` data type supports numbers up to `2^63 - 1`. Alternatively, if we cannot use long integers, then we can check if `numbers[low] > (1 << 31) - 1 - numbers[high]` at the beginning of each iteration. If this condition is true, then `numbers[low] + numbers[high]` will result in integer overflow, and so we would move the larger index to the left.

**Complexity Analysis**

* Time complexity: $$O(n)$$.
The input array is traversed at most once. Thus the time complexity is $$O(n)$$.

* Space complexity: $$O(1)$$.
We only use additional space to store two indices and the sum, so the space complexity is $$O(1)$$.
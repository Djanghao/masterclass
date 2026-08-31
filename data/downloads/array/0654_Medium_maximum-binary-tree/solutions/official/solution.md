# Official Solution

**Link:** [https://leetcode.com/problems/maximum-binary-tree/solution/](https://leetcode.com/problems/maximum-binary-tree/solution/)

---

[TOC]


## Solution

---
### Approach 1: Recursive Solution

The current solution is very simple. We make use of a function `construct(nums, l, r)`, which returns the maximum binary tree consisting of numbers within the indices $$l$$ and $$r$$ in the given $$nums$$ array(excluding the $$r^{th}$$ element).

The algorithm consists of the following steps:

1. Start with the function call `construct(nums, 0, n)`. Here, $$n$$ refers to the number of elements in the given $$nums$$ array.

2. Find the index, $$max_i$$, of the largest element in the current range of indices $$(l:r-1)$$. Make this largest element, $$nums[max\_i]$$ as the local root node.

3. Determine the left child using `construct(nums, l, max_i)`. Doing this recursively finds the largest element in the subarray left to the current largest element.

4. Similarly, determine the right child using `construct(nums, max_i + 1, r)`.

5. Return the root node to the calling function.

<iframe src="https://leetcode.com/playground/3hVy3spd/shared" frameBorder="0" width="100%" height="429" name="3hVy3spd"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n^2)$$. The function `construct` is called $$n$$ times. At each level of the recursive tree, we traverse over all the $$n$$ elements to find the maximum element.  In the average case, there will be a $$\log n$$ levels leading to a complexity of $$O\big(n\log n\big)$$. In the worst case, the depth of the recursive tree can grow upto $$n$$, which happens in the case of a sorted $$nums$$ array, giving a complexity of $$O(n^2)$$.

* Space complexity : $$O(n)$$. The size of the $$set$$ can grow upto $$n$$ in the worst case. In the average case, the size will be $$\log n$$ for $$n$$ elements in $$nums$$, giving an average case complexity of $$O(\log n)$$
# Official Solution

**Link:** [https://leetcode.com/problems/find-pivot-index/solution/](https://leetcode.com/problems/find-pivot-index/solution/)

---

[TOC]

### Approach #1: Prefix Sum [Accepted]

**Intuition and Algorithm**

We need to quickly compute the sum of values to the left and the right of every index.

Let's say we knew `S` as the sum of the numbers, and we are at index `i`. If we knew the sum of numbers `leftsum` that are to the left of index `i`, then the other sum to the right of the index would just be `S - nums[i] - leftsum`.  

As such, we only need to know about `leftsum` to check whether an index is a pivot index in constant time. Let's do that: as we iterate through candidate indexes `i`, we will maintain the correct value of `leftsum`.

<iframe src="https://leetcode.com/playground/cgoXss73/shared" frameBorder="0" width="100%" height="293" name="cgoXss73"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the length of `nums`.

* Space Complexity: $$O(1)$$, the space used by `leftsum` and `S`.
# Official Solution

**Link:** [https://leetcode.com/problems/flipping-an-image/solution/](https://leetcode.com/problems/flipping-an-image/solution/)

---

[TOC]

---
### Approach #1: Direct [Accepted]

**Intuition and Algorithm**

We can do this in place.  In each row, the `i`th value from the left is equal to the inverse of the `i`th value from the right.

We use `(C+1) / 2` (with floor division) to iterate over all indexes `i` in the first half of the row, including the center.

<iframe src="https://leetcode.com/playground/8fjB4LMj/shared" frameBorder="0" width="100%" height="276" name="8fjB4LMj"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where `N` is the total number of elements in `A`.

* Space Complexity: $$O(1)$$ in *additional* space complexity.
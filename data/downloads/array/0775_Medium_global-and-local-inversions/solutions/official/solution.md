# Official Solution

**Link:** [https://leetcode.com/problems/global-and-local-inversions/solution/](https://leetcode.com/problems/global-and-local-inversions/solution/)

---

[TOC]

---
### Approach #1: Brute Force [Time Limit Exceeded]

**Intuition and Algorithm**

A local inversion is also a global inversion.  Thus, we only need to check if our permutation has any non-local inversion (`A[i] > A[j], i < j`) with `j - i > 1`.

To do this, we can check every `i, j` directly.


<iframe src="https://leetcode.com/playground/TZ8KPDdQ/shared" frameBorder="0" width="100%" height="208" name="TZ8KPDdQ"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2)$$, where $$N$$ is the length of `A`.

* Space Complexity: $$O(1)$$.

---
### Approach #2: Remember Minimum [Accepted]

**Intuition**

In performing a brute force, we repeatedly want to check whether there is some `j >= i+2` for which `A[i] > A[j]`.  This is the same as checking for `A[i] > min(A[i+2:])`.  If we knew these minimums `min(A[0:]), min(A[1:]), min(A[2:]), ...` we could make this check quickly.

**Algorithm**

Let's iterate through `A` from right to left, remembering the minimum value we've seen.  If we remembered the minimum `floor = min(A[i:])` and `A[i-2] > floor`, then we should return `False`.  This search is exhaustive, so if we don't find anything after iterating through `A`, we should return `True`.

<iframe src="https://leetcode.com/playground/Bu9jopE2/shared" frameBorder="0" width="100%" height="242" name="Bu9jopE2"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity: $$O(1)$$.

---
### Approach #3: Linear Scan [Accepted]

**Intuition and Algorithm**

Let's try to characterize all *ideal* permutations: ones that do not have non-local inversions.  Where does the `0` go?

If the `0` occurs at index `2` or greater, then `A[0] > A[2] = 0` is a non-local inversion.  So `0` can only occur at index `0` or `1`.  If `A[1] = 0`, then we must have `A[0] = 1` otherwise `A[0] > A[j] = 1` is a non-local inversion.  Otherwise, `A[0] = 0`.  To recap, the possibilities are either `A = [0] + (ideal permutation of 1...N-1)` or `A = [1, 0] + (ideal permutation of 2...N-1)`.

A necessary and sufficient condition for these possibilities is that `Math.abs(A[i] - i) <= 1`.  So we check this for every `i`.

<iframe src="https://leetcode.com/playground/5di8DnrG/shared" frameBorder="0" width="100%" height="191" name="5di8DnrG"></iframe>
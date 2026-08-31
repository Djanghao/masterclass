# Official Solution

**Link:** [https://leetcode.com/problems/sort-array-by-parity/solution/](https://leetcode.com/problems/sort-array-by-parity/solution/)

---

[TOC]

## Solution
---
### Approach 1: Sort

**Intuition and Algorithm**

Use a custom comparator when sorting, to sort by parity.

<iframe src="https://leetcode.com/playground/QtegwFN3/shared" frameBorder="0" width="100%" height="412" name="QtegwFN3"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(N)$$ for the sort, depending on the built-in implementation of `sort`.
<br />
<br />


---
### Approach 2: Two Pass

**Intuition and Algorithm**

Write all the even elements first, then write all the odd elements.

<iframe src="https://leetcode.com/playground/gYZ6ypth/shared" frameBorder="0" width="100%" height="327" name="gYZ6ypth"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(N)$$, the space used by the answer.
<br />
<br />


---
### Approach 3: In-Place

**Intuition**

If we want to do the sort in-place, we can use quicksort, a standard textbook algorithm.

**Algorithm**

We'll maintain two pointers `i` and `j`.  The loop invariant is everything below `i` has parity `0` (ie. `A[k] % 2 == 0` when `k < i`), and everything above `j` has parity `1`.

Then, there are 4 cases for `(A[i] % 2, A[j] % 2)`:

* If it is `(0, 1)`, then everything is correct: `i++` and `j--`.

* If it is `(1, 0)`, we swap them so they are correct, then continue.

* If it is `(0, 0)`, only the `i` place is correct, so we `i++` and continue.

* If it is `(1, 1)`, only the `j` place is correct, so we `j--` and continue.

Throughout all 4 cases, the loop invariant is maintained, and `j-i` is getting smaller.  So eventually we will be done with the array sorted as desired.

<iframe src="https://leetcode.com/playground/LzeP93gL/shared" frameBorder="0" width="100%" height="344" name="LzeP93gL"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.  Each step of the while loop makes `j-i` decrease by at least one.  (Note that while quicksort is $$O(N \log N)$$ normally, this is $$O(N)$$ because we only need one pass to sort the elements.)

* Space Complexity:  $$O(1)$$ in additional space complexity.
<br />
<br />
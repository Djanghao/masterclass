# Official Solution

**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solution/](https://leetcode.com/problems/largest-perimeter-triangle/solution/)

---

[TOC]

## Solution
---
### Approach: Sort

**Intuition**

Without loss of generality, say the sidelengths of the triangle are $$a \leq b \leq c$$.  The necessary and sufficient condition for these lengths to form a triangle of non-zero area is $$a + b > c$$.

Say we knew $$c$$ already.  There is no reason not to choose the largest possible $$a$$ and $$b$$ from the array.  If $$a + b > c$$, then it forms a triangle, otherwise it doesn't.

**Algorithm**

This leads to a simple algorithm:  Sort the array.  For any $$c$$ in the array, we choose the largest possible $$a \leq b \leq c$$:  these are just the two values adjacent to $$c$$.  If this forms a triangle, we return the answer.

<iframe src="https://leetcode.com/playground/nQXaVZjb/shared" frameBorder="0" width="100%" height="259" name="nQXaVZjb"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log N)$$, where $$N$$ is the length of `A`.

* Space Complexity:
    * **Java (code uses `Arrays.sort`)**: $O(\log N)$)$ auxiliary space due to recursion stack in the dual-pivot quicksort used for primitive arrays.

    * **Python (`list.sort()` / `A.sort()`)**: $O(N)$ extra space in the worst case because TimSort may allocate temporary buffers proportional to the input size. Everything after the sort is $O(1)$ space.

    * **C++ (`std::sort`)**: $O(\log N)$ auxiliary space due to recursion depth in Introsort (a hybrid of quicksort, heapsort, and insertion sort). Sorting is otherwise in-place.

---
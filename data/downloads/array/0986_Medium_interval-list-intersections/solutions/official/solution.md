# Official Solution

**Link:** [https://leetcode.com/problems/interval-list-intersections/solution/](https://leetcode.com/problems/interval-list-intersections/solution/)

---

[TOC]

## Solution
---
### Approach 1: Merge Intervals

**Intuition**

In an interval `[a, b]`, call `b` the "endpoint".

Among the given intervals, consider the interval `A[0]` with the smallest endpoint.  (Without loss of generality, this interval occurs in array `A`.)

Then, among the intervals in array `B`, `A[0]` can only intersect one such interval in array `B`.  (If two intervals in `B` intersect `A[0]`, then they both share the endpoint of `A[0]` -- but intervals in `B` are disjoint, which is a contradiction.)

**Algorithm**

If `A[0]` has the smallest endpoint, it can only intersect `B[0]`.  After, we can discard `A[0]` since it cannot intersect anything else.

Similarly, if `B[0]` has the smallest endpoint, it can only intersect `A[0]`, and we can discard `B[0]` after since it cannot intersect anything else.

We use two pointers, `i` and `j`, to virtually manage "discarding" `A[0]` or `B[0]` repeatedly.

<iframe src="https://leetcode.com/playground/D3erxXBi/shared" frameBorder="0" width="100%" height="463" name="D3erxXBi"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(M + N)$$, where $$M, N$$ are the lengths of `A` and `B` respectively.

* Space Complexity:  $$O(M + N)$$, the maximum size of the answer.
<br />
<br />
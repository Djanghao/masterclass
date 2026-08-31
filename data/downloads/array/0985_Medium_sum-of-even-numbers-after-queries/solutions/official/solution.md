# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solution/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solution/)

---

[TOC]

## Solution
---
### Approach 1: Maintain Array Sum

**Intuition and Algorithm**

Let's try to maintain `S`, the sum of the array throughout one query operation.

When acting on an array element `A[index]`, the rest of the values of `A` remain the same.  Let's remove `A[index]` from `S` if it is even, then add `A[index] + val` back (if it is even.)

Here are some examples:

* If we have `A = [2,2,2,2,2]`, `S = 10`, and we do `A[0] += 4`: we will update `S -= 2`, then `S += 6`.  At the end, we will have `A = [6,2,2,2,2]` and `S = 14`.

* If we have `A = [1,2,2,2,2]`, `S = 8`, and we do `A[0] += 3`: we will skip updating `S` (since `A[0]` is odd), then `S += 4`.  At the end, we will have `A = [4,2,2,2,2]` and `S = 12`.

* If we have `A = [2,2,2,2,2]`, `S = 10` and we do `A[0] += 1`: we will update `S -= 2`, then skip updating `S` (since `A[0] + 1` is odd.)  At the end, we will have `A = [3,2,2,2,2]` and `S = 8`.

* If we have `A = [1,2,2,2,2]`, `S = 8` and we do `A[0] += 2`: we will skip updating `S` (since `A[0]` is odd), then skip updating `S` again (since `A[0] + 2` is odd.)  At the end, we will have `A = [3,2,2,2,2]` and `S = 8`.

These examples help illustrate that our algorithm actually maintains the value of `S` throughout each query operation.

<iframe src="https://leetcode.com/playground/4PDgoSBy/shared" frameBorder="0" width="100%" height="395" name="4PDgoSBy"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N+Q)$$, where $$N$$ is the length of `A` and $$Q$$ is the number of `queries`.

* Space Complexity:  $$O(Q)$$, though we only allocate $$O(1)$$ additional space.
<br />
<br />
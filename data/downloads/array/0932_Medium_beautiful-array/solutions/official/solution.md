# Official Solution

**Link:** [https://leetcode.com/problems/beautiful-array/solution/](https://leetcode.com/problems/beautiful-array/solution/)

---

[TOC]

## Solution
---

### Approach 1: Divide and Conquer

**Intuition**

First, notice that the condition is equivalent to saying that `A` has no arithmetic subsequence.  We'll use the term "*arithmetic-free*" interchangeably with "*beautiful*".

One way is to guess that we should divide and conquer.  One reason for this is that the condition is linear, so if the condition is satisfied by variables taking on values `(1, 2, ..., n)`, it is satisfied by those variables taking on values `(a + b, a + 2*b, a + 3*b, ..., a + (n-1)*b)` instead.

If we perform a divide and conquer, then we have two parts `left` and `right`, such that each part is arithmetic-free, and we only want that a triple from both parts is not arithmetic.  Looking at the conditions:

* `2*A[k] = A[i] + A[j]`
* `(i < k < j)`, `i` from `left`, `j` from `right`

we can guess that because the left hand side `2*A[k]` is even, we can choose `left` to have all odd elements, and `right` to have all even elements.

Another way we could arrive at this is to try to place a number in the middle, like `5`.  We will have `4` and `6` say, to the left of `5`, and `7` to the right of `6`, etc.  We see that in general, odd numbers move towards one direction and even numbers towards another direction.

One final way we could arrive at this is to inspect possible answers arrived at by brute force.  On experimentation, we see that many answers have all the odd elements to one side, and all the even elements to the other side, with only minor variation.

**Algorithm**

Looking at the elements `1, 2, ..., N`, there are `(N+1) / 2` odd numbers and `N / 2` even numbers.

We solve for elements `1, 2, ..., (N+1) / 2` and map these numbers onto `1, 3, 5, ...`.  Similarly, we solve for elements `1, 2, ..., N/2` and map these numbers onto `2, 4, 6, ...`.

We can compose these solutions by concatenating them, since an arithmetic sequence never starts and ends with elements of different parity.

We memoize the result to arrive at the answer quicker.

<iframe src="https://leetcode.com/playground/4hz2DfYm/shared" frameBorder="0" width="100%" height="480" name="4hz2DfYm"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log N)$$.  The function `f` is called only $$O(\log N)$$ times, and each time does $$O(N)$$ work.

* Space Complexity:  $$O(N \log N)$$.
<br />
<br />
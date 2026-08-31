# Official Solution

**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solution/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solution/)

---

[TOC]

---
### Approach #1: Counting [Accepted]

**Intuition**

We can make the following logical steps to arrive at the solution:

As we only care about whether each element is less than, between, or greater than the interval `[L, R]`, let's pretend each element is either `0` if it is less than `L`; `1` if it is between `L` and `R`; or `2` if it is greater than `R`.

Then, we want the number of subarrays with no `2` and at least one `1`.  The `2`s split the array into groups of arrays with only `0`s and `1`s.  For example, if our array is `[0, 0, 1, 2, 2, 1, 0, 2, 0]`, then the answer is just the answer for `[0, 0, 1]` plus the answer for `[1, 0]` plus the answer for `[0]`.

For each such group (arrays of only `0`s or `1`s), to count the number of subarrays that have at least one `1`, let's count all the subarrays in the group, minus the subarrays that only have zeroes.  

For example, `[0, 0, 1]` has 6 subarrays, 3 of which are zero-only, which adds 3 to the answer; `[1, 0]` has 3 subarrays, 1 of which is zero-only, which adds 2 to the answer; and `[0]` has 1 subarray, 1 of which is zero-only, which adds 0 to the answer.  The final answer to the previous original example of `A = [0, 0, 1, 2, 2, 1, 0, 2, 0]` is `3 + 2 + 0 = 5`.

**Algorithm**

Say `count(B)` is the number of subarrays that have all elements less than or equal to `B`.  From the above reasoning, the answer is `count(R) - count(L-1)`.

How do we compute `count(B)`?  We remember `cur`, the number of contiguous, previous elements less than or equal to `B`.  When we see a new element less than or equal to `B`, the number of valid subarrays ending at this position is `cur + 1`.  When we see a new element greater than `B`, the number of valid subarrays ending at this position is 0.

<iframe src="https://leetcode.com/playground/oEyyUUE9/shared" frameBorder="0" width="100%" height="293" name="oEyyUUE9"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity: $$O(1)$$.
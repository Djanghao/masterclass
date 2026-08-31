# Official Solution

**Link:** [https://leetcode.com/problems/binary-gap/solution/](https://leetcode.com/problems/binary-gap/solution/)

---

[TOC]

## Solution
---
### Approach 1: Store Indexes

**Intuition**

Since we wanted to inspect the distance between consecutive 1s in the binary representation of `N`, let's write down the index of each `1` in that binary representation.  For example, if `N = 22 = 0b10110`, then we'll write `A = [1, 2, 4]`.  This makes it easier to proceed, as now we have a problem about adjacent values in an array.

**Algorithm**

Let's make a list `A` of indices `i` such that `N` has the `i`th bit set.

With this array `A`, finding the maximum distance between consecutive `1`s is much easier: it's the maximum distance between adjacent values of this array.

<iframe src="https://leetcode.com/playground/6YTZNRpD/shared" frameBorder="0" width="100%" height="293" name="6YTZNRpD"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log N)$$.  Note that $$\log N$$ is the number of digits in the binary representation of $$N$$.

* Space Complexity:  $$O(\log N)$$, the space used by `A`.
<br />
<br />


---
### Approach 2: One Pass

**Intuition**

In *Approach 1*, we created an array `A` of indices `i` for which `N` had the `i`th bit set.

Since we only care about consecutive values of this array `A`, we don't need to store the whole array.  We only need to remember the last value seen.

**Algorithm**

We'll store `last`, the last value added to the *virtual* array `A`.  If `N` has the `i`th bit set, a candidate answer is `i - last`, and then the new last value added to `A` would be `last = i`.

<iframe src="https://leetcode.com/playground/UTrNsmQ4/shared" frameBorder="0" width="100%" height="276" name="UTrNsmQ4"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log N)$$.  Note that $$\log N$$ is the number of digits in the binary representation of $$N$$.

* Space Complexity:  $$O(1)$$.
<br />
<br />
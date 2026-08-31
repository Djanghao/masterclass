# Official Solution

**Link:** [https://leetcode.com/problems/monotonic-array/solution/](https://leetcode.com/problems/monotonic-array/solution/)

---

[TOC]

## Solution
---
### Approach 1: Two Pass

**Intuition**

An array is *monotonic* if it is monotone increasing, or monotone decreasing.  Since `a <= b` and `b <= c` implies `a <= c`, we only need to check adjacent elements to determine if the array is monotone increasing (or decreasing, respectively).  We can check each of these properties in one pass.

**Algorithm**

To check whether an array `A` is monotone increasing, we'll check `A[i] <= A[i+1]` for all `i`.  The check for monotone decreasing is similar.

<iframe src="https://leetcode.com/playground/8NfmHAyb/shared" frameBorder="0" width="100%" height="344" name="8NfmHAyb"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(1)$$.
<br />
<br />


---
### Approach 2: One Pass

**Intuition**

To perform this check in one pass, we want to handle a stream of comparisons from $$\{-1, 0, 1\}$$, corresponding to `<`, `==`, or `>`.  For example, with the array `[1, 2, 2, 3, 0]`, we will see the stream `(-1, 0, -1, 1)`.

**Algorithm**

Keep track of `store`, equal to the first non-zero comparison seen (if it exists.)  If we see the opposite comparison, the answer is `False`.

Otherwise, every comparison was (necessarily) in the set $$\{-1, 0\}$$, or every comparison was in the set $$\{0, 1\}$$, and therefore the array is monotonic.

<iframe src="https://leetcode.com/playground/M69AAxCQ/shared" frameBorder="0" width="100%" height="310" name="M69AAxCQ"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(1)$$.
<br />
<br />


---
### Approach 3: One Pass (Simple Variant)

**Intuition and Algorithm**

To perform this check in one pass, we want to remember if it is monotone increasing or monotone decreasing.

It's monotone increasing if there aren't some adjacent values `A[i], A[i+1]` with `A[i] > A[i+1]`, and similarly for monotone decreasing.

If it is either monotone increasing or monotone decreasing, then `A` is monotonic.

<iframe src="https://leetcode.com/playground/jzjdtkH6/shared" frameBorder="0" width="100%" height="293" name="jzjdtkH6"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(1)$$.
<br />
<br />
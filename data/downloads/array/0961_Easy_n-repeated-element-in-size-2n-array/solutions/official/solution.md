# Official Solution

**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solution/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solution/)

---

[TOC]

## Solution
---
### Approach 1: Count

**Intuition and Algorithm**

Let's count the number of elements.  We can use a `HashMap` or an array - here, we use a `HashMap`.

After, the element with a count larger than 1 must be the answer.

<iframe src="https://leetcode.com/playground/ehRMy3ZE/shared" frameBorder="0" width="100%" height="293" name="ehRMy3ZE"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(N)$$.
<br />
<br />


---
### Approach 2: Compare

**Intuition and Algorithm**

If we ever find a repeated element, it must be the answer.  Let's call this answer the *major element*.

Consider all subarrays of length 4.  There must be a major element in at least one such subarray.

This is because either:

* There is a major element in a length 2 subarray, or;
* Every length 2 subarray has exactly 1 major element, which means that a length 4 subarray that begins at a major element will have 2 major elements.

Thus, we only have to compare elements with their neighbors that are distance 1, 2, or 3 away.

<iframe src="https://leetcode.com/playground/FKAVZDLN/shared" frameBorder="0" width="100%" height="225" name="FKAVZDLN"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(1)$$.
<br />
<br />
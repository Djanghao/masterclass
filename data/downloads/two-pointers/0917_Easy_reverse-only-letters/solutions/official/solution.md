# Official Solution

**Link:** [https://leetcode.com/problems/reverse-only-letters/solution/](https://leetcode.com/problems/reverse-only-letters/solution/)

---

[TOC]

## Solution
---
### Approach 1: Stack of Letters

**Intuition and Algorithm**

Collect the letters of `S` separately into a stack, so that popping the stack reverses the letters.  (Alternatively, we could have collected the letters into an array and reversed the array.)

Then, when writing the characters of `S`, any time we need a letter, we use the one we have prepared instead.

<iframe src="https://leetcode.com/playground/CZS4Xt2M/shared" frameBorder="0" width="100%" height="361" name="CZS4Xt2M"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `S`.

* Space Complexity:  $$O(N)$$.
<br />
<br />


---
### Approach 2: Reverse Pointer

**Intuition**

Write the characters of `S` one by one.  When we encounter a letter, we want to write the next letter that occurs if we iterated through the string backwards.

So we do just that: keep track of a pointer `j` that iterates through the string backwards.  When we need to write a letter, we use it.

<iframe src="https://leetcode.com/playground/6GZqDBvz/shared" frameBorder="0" width="100%" height="344" name="6GZqDBvz"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `S`.

* Space Complexity:  $$O(N)$$.
<br />
<br />
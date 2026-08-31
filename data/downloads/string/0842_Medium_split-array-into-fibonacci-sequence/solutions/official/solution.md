# Official Solution

**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solution/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solution/)

---

[TOC]

---
### Approach #1: Brute Force [Accepted]

**Intuition**

The first two elements of the array uniquely determine the rest of the sequence.

**Algorithm**

For each of the first two elements, assuming they have no leading zero, let's iterate through the rest of the string.  At each stage, we expect a number less than or equal to `2^31 - 1` that starts with the sum of the two previous numbers.

<iframe src="https://leetcode.com/playground/FjRr9KuG/shared" frameBorder="0" width="100%" height="500" name="FjRr9KuG"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2)$$, where $$N$$ is the length of `S`, and with the requirement that the values of the answer are $$O(1)$$ in length.

* Space Complexity:  $$O(N)$$.
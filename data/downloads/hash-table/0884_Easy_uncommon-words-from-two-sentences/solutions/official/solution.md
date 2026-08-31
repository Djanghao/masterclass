# Official Solution

**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solution/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solution/)

---

[TOC]

## Solution

---

### Approach 1: Counting 

**Intuition and Algorithm**

Every uncommon word occurs exactly once in total.  We can count the number of occurrences of every word, then return ones that occur exactly once.

<iframe src="https://leetcode.com/playground/K9coviyW/shared" frameBorder="0" width="100%" height="500" name="K9coviyW"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(M + N)$$, where $$M, N$$ are the lengths of `A` and `B` respectively.

* Space Complexity:  $$O(M + N)$$, the space used by `count`.
<br />
<br />
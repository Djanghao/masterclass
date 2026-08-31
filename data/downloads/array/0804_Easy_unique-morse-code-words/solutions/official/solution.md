# Official Solution

**Link:** [https://leetcode.com/problems/unique-morse-code-words/solution/](https://leetcode.com/problems/unique-morse-code-words/solution/)

---

[TOC]

---
### Approach 1: Hash Set

**Intuition and Algorithm**

We can transform each `word` into it's Morse Code representation.

After, we put all transformations into a set `seen`, and return the size of the set.

<iframe src="https://leetcode.com/playground/ZFBkJ472/shared" frameBorder="0" width="100%" height="361" name="ZFBkJ472"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(S)$$, where $$S$$ is the sum of the lengths of words in `words`.  We iterate through each character of each word in `words`.

* Space Complexity: $$O(S)$$.
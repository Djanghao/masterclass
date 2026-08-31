# Official Solution

**Link:** [https://leetcode.com/problems/consecutive-characters/solution/](https://leetcode.com/problems/consecutive-characters/solution/)

---

[TOC]

## Solution

---

### Overview

This problem is very similar to [674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/), and the only difference is that we need a substring with the same characters instead of an increasing one. Therefore, similar methods can be applied. Below, a similar and simple approach is introduced.

---

### Approach #1: One Pass

**Intuition and Algorithm**

Recall the problem, we need to find "the maximum length of a non-empty substring that contains only one unique character".

In other words, we need to find the Longest Substring with **the same characters**.

We can iterate over the given string, and use a variable `count` to record the length of that substring.

When the next character is the same as the previous one, we increase `count` by one. Else, we reset `count` to 1.

With this method, when reaching the end of a substring with the same characters, `count` will be the length of that substring, since we reset the `count` when that substring starts, and increase `count` when iterate that substring.

Therefore, the maximum value of `count` is what we need. Another variable is needed to store the maximum while iterating.


<iframe src="https://leetcode.com/playground/Ua6cWMdS/shared" frameBorder="0" width="100%" height="395" name="Ua6cWMdS"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `s`.

* Time Complexity: $$O(N)$$, since we perform one loop through `s`.

* Space Complexity: $$O(1)$$, since we only have two integer variables `count` and `max_count`(`maxCount`), and one character variable `previous`.
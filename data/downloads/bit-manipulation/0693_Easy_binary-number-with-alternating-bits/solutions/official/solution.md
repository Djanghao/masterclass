# Official Solution

**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solution/](https://leetcode.com/problems/binary-number-with-alternating-bits/solution/)

---

[TOC]

### Approach #1: Convert to String [Accepted]

**Intuition and Algorithm**

Let's convert the given number into a string of binary digits. Then, we should simply check that no two adjacent digits are the same.

<iframe src="https://leetcode.com/playground/79o5Wvyy/shared" frameBorder="0" name="79o5Wvyy" width="100%" height="241"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(1)$$. For arbitrary inputs, we do $$O(w)$$ work, where $$w$$ is the number of bits in `n`. However, $$w \leq 32$$.

* Space complexity: $$O(1)$$, or alternatively $$O(w)$$.

---

### Approach #2: Divide By Two [Accepted]

**Intuition and Algorithm**

We can get the last bit and the rest of the bits via `n % 2` and `n // 2` operations. Let's remember `cur`, the last bit of `n`. If the last bit ever equals the last bit of the remaining, then two adjacent bits have the same value, and the answer is `False`.  Otherwise, the answer is `True`.

Also note that instead of `n % 2` and `n // 2`, we could have used operators `n & 1` and `n >>= 1` instead.

<iframe src="https://leetcode.com/playground/oFAELrSA/shared" frameBorder="0" name="oFAELrSA" width="100%" height="258"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(1)$$. For arbitrary inputs, we do $$O(w)$$ work, where $$w$$ is the number of bits in `n`. However, $$w \leq 32$$.

* Space complexity: $$O(1)$$.
# Official Solution

**Link:** [https://leetcode.com/problems/letter-case-permutation/solution/](https://leetcode.com/problems/letter-case-permutation/solution/)

---

[TOC]

---
### Approach #1: Recursion [Accepted]

**Intuition**

Maintain the correct answer as we increase the size of the prefix of `S` we are considering.

For example, when `S = "abc"`, maintain `ans = [""]`, and update it to `ans = ["a", "A"]`, `ans = ["ab", "Ab", "aB", "AB"]`, `ans = ["abc", "Abc", "aBc", "ABc", "abC", "AbC", "aBC", "ABC"]` as we consider the letters `"a", "b", "c"`.

**Algorithm**

If the next character `c` is a letter, then we will duplicate all words in our current answer, and add `lowercase(c)` to every word in the first half, and `uppercase(c)` to every word in the second half.

If instead `c` is a digit, we'll add it to every word.

<iframe src="https://leetcode.com/playground/3DaZ7aZE/shared" frameBorder="0" width="100%" height="480" name="3DaZ7aZE"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(2^{N} * N)$$, where $$N$$ is the length of `S`.  This reflects the cost of writing the answer.

* Space Complexity:  $$O(2^N * N)$$.

---
### Approach #2: Binary Mask [Accepted]

**Intuition**

Say there are $$B$$ letters in the string `S`.  There will be $$2^B$$ strings in the answer, which we can represent uniquely by the bitmask `bits`.

For example, we could represent `a7b` by `00`, `a7B` by `01`, `A7b` by `10`, and `A7B` by `11`.  Note that numbers are not part of the bitmask.

**Algorithm**

For every possible bitmask, construct the correct result to put in the final answer.  If the next letter in the word is a letter, write a lowercase or uppercase letter depending on the bitmask.  Otherwise, write the digit as given.

<iframe src="https://leetcode.com/playground/ZgzajeoN/shared" frameBorder="0" width="100%" height="500" name="ZgzajeoN"></iframe>

**Complexity Analysis**

* Time and Space Complexity:  $$O(2^{N} * N)$$.  The analysis is the same as in *Approach #1*.

---
### Approach #3: Built-In Library Function [Accepted]

**Intuition and Algorithm**

A *cartesian product* of sets is every possible combination of one choice from those sets.  For example, `{1, 2} x {a, b, c} = {1a, 1b, 1c, 2a, 2b, 2c}`.

For languages that have a built-in function to calculate a cartesian product, we can use this function to minimize our work.

<iframe src="https://leetcode.com/playground/doKfd7bF/shared" frameBorder="0" width="100%" height="123" name="doKfd7bF"></iframe>

**Complexity Analysis**

* Time and Space Complexity:  $$O(2^{N} * N)$$.  The analysis is the same as in *Approach #1*.
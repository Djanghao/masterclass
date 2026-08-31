# Official Solution

**Link:** [https://leetcode.com/problems/reordered-power-of-2/solution/](https://leetcode.com/problems/reordered-power-of-2/solution/)

---

[TOC]

## Solution
---
### Approach 1: Permutations

**Intuition**

For each permutation of the digits of `N`, let's check if that permutation is a power of 2.

**Algorithm**

This approach has two steps: how will we generate the permutations of the digits, and how will we check that the permutation represents a power of 2?

To generate permutations of the digits, we place any digit into the first position (`start = 0`), then any of the remaining digits into the second position (`start = 1`), and so on.  In Python, we can use the builtin function `itertools.permutations`.

To check whether a permutation represents a power of 2, we check that there is no leading zero, and divide out all factors of 2.  If the result is `1` (that is, it contained no other factors besides `2`), then it was a power of 2.  In Python, we can use the check `bin(N).count('1') == 1`.


<iframe src="https://leetcode.com/playground/5NVeXRvi/shared" frameBorder="0" width="100%" height="500" name="5NVeXRvi"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O((\log N)! * \log N)$$.  Note that $$\log N$$ is the number of digits in the binary representation of $$N$$.  For each of $$(\log N)!$$ permutations of the digits of $$N$$, we need to check that it is a power of 2 in $$O(\log N)$$ time.

* Space Complexity:  $$O(\log N)$$, the space used by `A` (or `cand` in Python).
<br />
<br />


---
### Approach 2: Counting

**Intuition and Algorithm**

We can check whether two numbers have the same digits by comparing the *count* of their digits.  For example, 338 and 833 have the same digits because they both have exactly two 3's and one 8.

Since $$N$$ could only be a power of 2 with 9 digits or less (namely, $$2^0, 2^1, \cdots, 2^{29}$$), we can just check whether $$N$$ has the same digits as any of these possibilities.

<iframe src="https://leetcode.com/playground/b8P7cCzD/shared" frameBorder="0" width="100%" height="395" name="b8P7cCzD"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log^2 N)$$.  There are $$\log N$$ different candidate powers of 2, and each comparison has $$O(\log N)$$ time complexity.

* Space Complexity:  $$O(\log N)$$.
<br />
<br />
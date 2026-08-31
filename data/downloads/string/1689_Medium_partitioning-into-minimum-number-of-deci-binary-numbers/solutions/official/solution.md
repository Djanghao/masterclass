# Official Solution

**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solution/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solution/)

---

[TOC]

## Solution

---

#### Overview

This is an interesting problem that requires a little observation and insight. It's recommended to try a few examples on pen and paper to look for patterns. Below, we discuss a simple approach to solve this problem.

---

#### Approach 1: Math

**Intuition**

Let's begin with an example, `n = "28734"`. We need to decompose it into several numbers that only include `0` and/or `1`, as few as possible. Let's consider two sub-problems.

The first sub-problem is:

> What is the lower bound of our solution? For this example, can it be less than `8`?

For `n = "28734"`, it cannot be less than `8`. Since there is an `8` in `28734` and what we have are only `0` and `1`, we need at least eight `1`'s to add up to `8`. In other words, we need at least **eight** numbers for `n = "28734"`.

![Figure 1.1](../Documents/5626/5626_1_1.drawio.svg)

The second sub-problem is:

> Can eight numbers work? That is to say, can we make up `28734` with **eight** numbers that only include `0` and/or `1`?

Yes. Note that if we put `0`s in the spare spaces in the above figure, we get eight numbers:

![Figure 1.2](../Documents/5626/5626_1_2.drawio.svg)

Each horizontal line represents a number that only includes `0` and/or `1`.

Add those numbers to get `28734`.

From the above two solutions, we know that `8` numbers are feasible, and the solution cannot be less than `8`. That is to say, `8` is the correct solution to `n = "28734"`.

This example gives us an important insight:

> The required minimum number of deci-binary numbers is the **max** digit in the string `n`.

**Algorithm**

Return the maximum digit in the string `n`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/ZDXWmFvs/shared" frameBorder="0" width="100%" height="208" name="ZDXWmFvs"></iframe>

**Complexity Analysis**

Let $$M$$ be the length of string `n`. If instead of being a string, `n` were a number, then $$O(M) = O(\log_{10} n)$$, as $$\log_{10}$$ of a number gives its length.

- Time Complexity: $$O(M)$$, since we need to iterate over string `n` to find the maximum digit.

- Space Complexity: $$O(1)$$, since no additional data structures are required. Note that here we do not take the space of the input `n` into account.
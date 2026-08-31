# Official Solution

**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solution/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solution/)

---

[TOC]

## Solution
---
### Approach 1: Dynamic Programming + Counting

**Intuition**

First, call a positive integer `X` *valid* if `X <= N` and `X` only consists of digits from `D`.  Our goal is to find the number of valid integers.

Say `N` has `K` digits.  If we write a valid number with `k` digits (`k < K`), then there are $$(D\text{.length})^k$$ possible numbers we could write, since all of them will definitely be less than `N`.

Now, say we are to write a valid `K` digit number from left to right.  For example, `N = 2345`, `K = 4`, and `D = '1', '2', ..., '9'`.  Let's consider what happens when we write the first digit.

 * If the first digit we write is less than the first digit of `N`, then we could write any numbers after, for a total of $$(D\text{.length})^{K-1}$$ valid numbers from this one-digit prefix.  In our example, if we start with `1`, we could write any of the numbers `1111` to `1999` from this prefix.

 * If the first digit we write is the same, then we require that the next digit we write is equal to or lower than the next digit in `N`.  In our example (with `N = 2345`), if we start with `2`, the next digit we write must be `3` or less.

 * We can't write a larger digit, because if we started with eg. `3`, then even a number of `3000` is definitely larger than `N`.

**Algorithm**

Let `dp[i]` be the number of ways to write a valid number if `N` became `N[i], N[i+1], ...`.  For example, if `N = 2345`, then `dp[0]` would be the number of valid numbers at most `2345`, `dp[1]` would be the ones at most `345`, `dp[2]` would be the ones at most `45`, and `dp[3]` would be the ones at most `5`.

Then, by our reasoning above, `dp[i] = (number of d in D with d < S[i]) * ((D.length) ** (K-i-1))`, plus `dp[i+1]` if `S[i]` is in `D`.

<iframe src="https://leetcode.com/playground/7GhVBz5s/shared" frameBorder="0" width="100%" height="446" name="7GhVBz5s"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log N)$$, and assuming $$D\text{.length}$$ is constant.  (We could make this better by pre-calculating the number of `d < S[i]` for all possible digits `S[i]`, but this isn't necessary.)

* Space Complexity:  $$O(\log N)$$, the space used by `S` and `dp`.  (Actually, we could store only the last 2 entries of `dp`, but this isn't necessary.)
<br />
<br />


---
### Approach 2: Mathematical


**Intuition**

As in *Approach #1*, call a positive integer `X` *valid* if `X <= N` and `X` only consists of digits from `D`.

Now let `B = D.length`.  There is a bijection between valid integers and so called "bijective-base-`B`" numbers.  For example, if `D = ['1', '3', '5', '7']`, then we could write the numbers `'1', '3', '5', '7', '11', '13', '15', '17', '31', ...` as (bijective-base-`B`) numbers `'1', '2', '3', '4', '11', '12', '13', '14', '21', ...`.

It is clear that both of these sequences are increasing, which means that the first sequence is a contiguous block of valid numbers, followed by invalid numbers.

Our approach is to find the largest valid integer, and convert it into bijective-base-`B` from which it is easy to find its rank (position in the sequence.)  Because of the bijection, the rank of this element must be the number of valid integers.

Continuing our example, if `N = 64`, then the valid numbers are `'1', '3', ..., '55', '57'`, which can be written as bijective-base-4 numbers `'1', '2', ..., '33', '34'`.  Converting this last entry `'34'` to decimal, the answer is `16` (3 * 4 + 4).

**Algorithm**

Let's convert `N` into the largest possible valid integer `X`, convert `X` to bijective-base-B, then convert that result to a decimal answer.  The last two conversions are relatively straightforward, so let's focus on the first part of the task.

Let's try to write `X` one digit at a time.  Let's walk through an example where `D = ['2', '4', '6', '8']`.  There are some cases:

* If the first digit of `N` is in `D`, we write that digit and continue.  For example, if `N = 25123`, then we will write `2` and continue.

* If the first digit of `N` is larger than `min(D)`, then we write the largest possible number from `D` less than that digit, and the rest of the numbers will be big.  For example, if `N = 5123`, then we will write `4888` (`4` then `888`).

* If the first digit of `N` is smaller than `min(D)`, then we must "subtract 1" (in terms of `X`'s bijective-base-B representation), and the rest of the numbers will be big.

    For example, if  `N = 123`, we will write `88`.  If `N = 4123`, we will write `2888`.  And if `N = 22123`, we will write `8888`.  This is because "subtracting 1" from `'', '4', '22'` yields `'', '2', '8'` (can't go below 0).

Actually, in our solution, it is easier to write in bijective-base-B, so instead of writing digits of `D`, we'll write the index of those digits (1-indexed).  For example, `X = 24888` will be `A = [1, 2, 4, 4, 4]`.  Afterwards, we convert this to decimal.

<iframe src="https://leetcode.com/playground/ctcgU9Fs/shared" frameBorder="0" width="100%" height="500" name="ctcgU9Fs"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log N)$$, and assuming $$D\text{.length}$$ is constant.

* Space Complexity:  $$O(\log N)$$, the space used by `A`.
<br />
<br />
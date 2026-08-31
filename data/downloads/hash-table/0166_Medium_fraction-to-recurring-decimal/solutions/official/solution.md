# Official Solution

**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solution/](https://leetcode.com/problems/fraction-to-recurring-decimal/solution/)

---

[TOC]

## Summary

This is a straight forward coding problem but with a fair amount of details to get right.

## Hints

1. No scary math, just apply elementary math knowledge. Still remember how to perform a <i>long division</i>?
2. Try a long division on $$\dfrac{4}{9}$$, the repeating part is obvious. Now try $$\dfrac{4}{333}$$. Do you see a pattern?
3. Be wary of edge cases! List out as many test cases as you can think of and test your code thoroughly.

## Solution
---
### Approach: Long Division

**Intuition**

The key insight here is to notice that once the remainder starts repeating, so does the divided result.

$$
\begin{array}{rll}
 0.16 \\
6{\overline{\smash{\big)}\,1.00}} \\[-1pt]
\underline{0\phantom{.00}} \\[-1pt]
1\phantom{.}0 \phantom{0} && \Leftarrow \textrm{$remainder$ = 1, mark 1 as seen at $position$ = 0.} \\[-1pt]
\underline{\phantom{0}6\phantom{0}} \\[-1pt]
\phantom{0}40 && \Leftarrow \textrm{$remainder$ = 4, mark 4 as seen at $position$ = 1.} \\[-1pt]
\underline{\phantom{0}36} \\[-1pt]
\phantom{00}4 && \Leftarrow \textrm{$remainder$ = 4 was seen before at $position$ = 1,} \\ \phantom{00} && \quad \textrm{so the fractional part starts repeating at $position$ = 1} \Rightarrow 1(6). \\[-1pt]
\end{array}
$$

<br>

**Algorithm**

You will need a hash table that maps from the remainder to its position of the fractional part. Once you found a repeating remainder, you may enclose the reoccurring fractional part with parentheses by consulting the position from the table.

The remainder could be zero while doing the division. That means there is no repeating fractional part and you should stop right away.

Just like the question [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/), be wary of edge cases such as negative fractions and nasty extreme case such as $$\dfrac{-2147483648}{-1}$$.


Here are some good test cases:


| Test case | Explanation |
| ------------- | ---------------- |
| $$\frac{0}{1}$$ | Numerator is zero. |
| $$\frac{1}{0}$$ | Divisor is 0, should handle it by throwing an exception but here we ignore for simplicity sake. |
| $$\frac{20}{4}$$ | Answer is a whole integer, should not contain the fractional part. |
| $$\frac{1}{2}$$ | Answer is 0.5, no recurring decimal. |
| $$\frac{-1}{4}$$ or $$\frac{1}{-4}$$ | One of the numerator or denominator is negative, fraction is negative. |
| $$\frac{-1}{-4}$$ | Both numerator and denominator are negative, should result in positive fraction. |
| $$\frac{-2147483648}{-1}$$ | Beware of overflow if you cast to positive. |

<br>
<iframe src="https://leetcode.com/playground/8U5gHpPC/shared" frameBorder="0" width="100%" height="500" name="8U5gHpPC"></iframe>

#### Complexity Analysis

Let $n$ be the number of digits in the repeating decimal representation of the fraction formed by `numerator / denominator`.

* Time complexity: $O(n)$

    We perform integer division and remainder operations iteratively until the remainder becomes `0` or a repeating pattern is detected.

    Each unique remainder can appear at most once before a repetition occurs because once a remainder repeats, the decimal starts looping.

    Therefore, we process at most `n` distinct remainders, and each iteration involves constant-time operations like division, modulus, lookup, and insertion in the hash map (`unordered_map`). Hence, the total time complexity is $O(n)$.

* Space complexity: $O(n)$

    The hash map `map` stores each distinct remainder and its corresponding index in the result string. In the worst case, every remainder before repetition is unique, so we may store up to `n` entries. Additionally, the `fraction` string stores up to `n` digits for the decimal part. Therefore, the total space complexity is $O(n)$.

---
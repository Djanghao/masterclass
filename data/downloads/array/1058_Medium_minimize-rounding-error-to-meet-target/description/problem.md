# [1058. Minimize Rounding Error to Meet Target](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 157 | 149 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `airbnb`

## Description

Given an array of `prices` `[p_1,p_2...,p_n]` and a `target`, round each price `p_i` to `Round_i(p_i)` so that the rounded array `[Round_1(p_1),Round_2(p_2)...,Round_n(p_n)]` sums to the given `target`. Each operation `Round_i(p_i)` could be either `Floor(p_i)` or `Ceil(p_i)`.

Return the string `"-1"` if the rounded array is impossible to sum to `target`. Otherwise, return the smallest rounding error, which is defined as `&Sigma; |Round_i(p_i) - (p_i)|` for `i` from `1` to `n`, as a string with three places after the decimal.

 

**Example 1:**

```

Input: prices = [&quot;0.700&quot;,&quot;2.800&quot;,&quot;4.900&quot;], target = 8
Output: &quot;1.000&quot;
Explanation:
Use Floor, Ceil and Ceil operations to get (0.7 - 0) + (3 - 2.8) + (5 - 4.9) = 0.7 + 0.2 + 0.1 = 1.0 .

```

**Example 2:**

```

Input: prices = [&quot;1.500&quot;,&quot;2.500&quot;,&quot;3.500&quot;], target = 10
Output: &quot;-1&quot;
Explanation: It is impossible to meet the target.

```

**Example 3:**

```

Input: prices = [&quot;1.500&quot;,&quot;2.500&quot;,&quot;3.500&quot;], target = 9
Output: &quot;1.500&quot;

```

 

**Constraints:**

	- `1 <= prices.length <= 500`

	- Each string `prices[i]` represents a real number in the range `[0.0, 1000.0]` and has exactly 3 decimal places.

	- `0 <= target <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/) | [Solutions](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/)

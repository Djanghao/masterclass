# [1977. Number of Ways to Separate Numbers](https://leetcode.com/problems/number-of-ways-to-separate-numbers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 532 | 60 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`suffix-array`](https://leetcode.com/tag/suffix-array)

**Companies:** `walmart-labs`

## Description

You wrote down many **positive** integers in a string called `num`. However, you realized that you forgot to add commas to seperate the different numbers. You remember that the list of integers was **non-decreasing** and that **no** integer had leading zeros.

Return *the **number of possible lists of integers** that you could have written down to get the string *`num`. Since the answer may be large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: num = &quot;327&quot;
Output: 2
Explanation: You could have written down the numbers:
3, 27
327

```

**Example 2:**

```

Input: num = &quot;094&quot;
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.

```

**Example 3:**

```

Input: num = &quot;0&quot;
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.

```

 

**Constraints:**

	- `1 <= num.length <= 3500`

	- `num` consists of digits `'0'` through `'9'`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-ways-to-separate-numbers/) | [Solutions](https://leetcode.com/problems/number-of-ways-to-separate-numbers/)

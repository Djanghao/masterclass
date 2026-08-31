# [1987. Number of Unique Good Subsequences](https://leetcode.com/problems/number-of-unique-good-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 739 | 17 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

You are given a binary string `binary`. A **subsequence** of `binary` is considered **good** if it is **not empty** and has **no leading zeros** (with the exception of `"0"`).

Find the number of **unique good subsequences** of `binary`.

	- For example, if `binary = "001"`, then all the **good** subsequences are `["0", "0", "1"]`, so the **unique** good subsequences are `"0"` and `"1"`. Note that subsequences `"00"`, `"01"`, and `"001"` are not good because they have leading zeros.

Return *the number of **unique good subsequences** of *`binary`. Since the answer may be very large, return it **modulo** `10^9 + 7`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

**Example 1:**

```

Input: binary = &quot;001&quot;
Output: 2
Explanation: The good subsequences of binary are [&quot;0&quot;, &quot;0&quot;, &quot;1&quot;].
The unique good subsequences are &quot;0&quot; and &quot;1&quot;.

```

**Example 2:**

```

Input: binary = &quot;11&quot;
Output: 2
Explanation: The good subsequences of binary are [&quot;1&quot;, &quot;1&quot;, &quot;11&quot;].
The unique good subsequences are &quot;1&quot; and &quot;11&quot;.
```

**Example 3:**

```

Input: binary = &quot;101&quot;
Output: 5
Explanation: The good subsequences of binary are [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;10&quot;, &quot;11&quot;, &quot;101&quot;]. 
The unique good subsequences are &quot;0&quot;, &quot;1&quot;, &quot;10&quot;, &quot;11&quot;, and &quot;101&quot;.

```

 

**Constraints:**

	- `1 <= binary.length <= 10^5`

	- `binary` consists of only `'0'`s and `'1'`s.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-unique-good-subsequences/) | [Solutions](https://leetcode.com/problems/number-of-unique-good-subsequences/)

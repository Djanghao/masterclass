# [1759. Count Number of Homogenous Substrings](https://leetcode.com/problems/count-number-of-homogenous-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1577 | 104 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `virtu`, `google`

## Description

Given a string `s`, return *the number of **homogenous** substrings of *`s`*.* Since the answer may be too large, return it **modulo** `10^9 + 7`.

A string is **homogenous** if all the characters of the string are the same.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;abbcccaa&quot;
Output: 13
Explanation: The homogenous substrings are listed as below:
&quot;a&quot;   appears 3 times.
&quot;aa&quot;  appears 1 time.
&quot;b&quot;   appears 2 times.
&quot;bb&quot;  appears 1 time.
&quot;c&quot;   appears 3 times.
&quot;cc&quot;  appears 2 times.
&quot;ccc&quot; appears 1 time.
3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.
```

**Example 2:**

```

Input: s = &quot;xy&quot;
Output: 2
Explanation: The homogenous substrings are &quot;x&quot; and &quot;y&quot;.
```

**Example 3:**

```

Input: s = &quot;zzzzz&quot;
Output: 15

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-number-of-homogenous-substrings/) | [Solutions](https://leetcode.com/problems/count-number-of-homogenous-substrings/)

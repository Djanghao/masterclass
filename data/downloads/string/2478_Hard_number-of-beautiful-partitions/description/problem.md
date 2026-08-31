# [2478. Number of Beautiful Partitions](https://leetcode.com/problems/number-of-beautiful-partitions/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 368 | 18 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`

## Description

You are given a string `s` that consists of the digits `'1'` to `'9'` and two integers `k` and `minLength`.

A partition of `s` is called **beautiful** if:

	- `s` is partitioned into `k` non-intersecting substrings.

	- Each substring has a length of **at least** `minLength`.

	- Each substring starts with a **prime** digit and ends with a **non-prime** digit. Prime digits are `'2'`, `'3'`, `'5'`, and `'7'`, and the rest of the digits are non-prime.

Return* the number of **beautiful** partitions of *`s`. Since the answer may be very large, return it **modulo** `10^9 + 7`.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;23542185131&quot;, k = 3, minLength = 2
Output: 3
Explanation: There exists three ways to create a beautiful partition:
&quot;2354 | 218 | 5131&quot;
&quot;2354 | 21851 | 31&quot;
&quot;2354218 | 51 | 31&quot;

```

**Example 2:**

```

Input: s = &quot;23542185131&quot;, k = 3, minLength = 3
Output: 1
Explanation: There exists one way to create a beautiful partition: &quot;2354 | 218 | 5131&quot;.

```

**Example 3:**

```

Input: s = &quot;3312958&quot;, k = 3, minLength = 1
Output: 1
Explanation: There exists one way to create a beautiful partition: &quot;331 | 29 | 58&quot;.

```

 

**Constraints:**

	- `1 <= k, minLength <= s.length <= 1000`

	- `s` consists of the digits `'1'` to `'9'`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-beautiful-partitions/) | [Solutions](https://leetcode.com/problems/number-of-beautiful-partitions/)

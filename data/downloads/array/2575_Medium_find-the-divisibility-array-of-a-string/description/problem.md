# [2575. Find the Divisibility Array of a String](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 583 | 25 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `amazon`

## Description

You are given a **0-indexed** string `word` of length `n` consisting of digits, and a positive integer `m`.

The **divisibility array** `div` of `word` is an integer array of length `n` such that:

	- `div[i] = 1` if the **numeric value** of `word[0,...,i]` is divisible by `m`, or

	- `div[i] = 0` otherwise.

Return* the divisibility array of** *`word`.

 

**Example 1:**

```

Input: word = &quot;998244353&quot;, m = 3
Output: [1,1,0,0,0,1,1,0,0]
Explanation: There are only 4 prefixes that are divisible by 3: &quot;9&quot;, &quot;99&quot;, &quot;998244&quot;, and &quot;9982443&quot;.

```

**Example 2:**

```

Input: word = &quot;1010&quot;, m = 10
Output: [0,1,0,1]
Explanation: There are only 2 prefixes that are divisible by 10: &quot;10&quot;, and &quot;1010&quot;.

```

 

**Constraints:**

	- `1 <= n <= 10^5`

	- `word.length == n`

	- `word` consists of digits from `0` to `9`

	- `1 <= m <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/) | [Solutions](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/)

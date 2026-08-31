# [2539. Count the Number of Good Subsequences](https://leetcode.com/problems/count-the-number-of-good-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 38 | 81 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`combinatorics`](https://leetcode.com/tag/combinatorics), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `palantir-technologies`, `nvidia`, `tusimple`

## Description

A **subsequence** of a string is good if it is not empty and the frequency of each one of its characters is the same.

Given a string `s`, return *the number of good subsequences of* `s`. Since the answer may be too large, return it modulo `10^9 + 7`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

 

**Example 1:**

```

Input: s = &quot;aabb&quot;
Output: 11
Explanation: The total number of subsequences is 24. There are five subsequences which are not good: &quot;aabb&quot;, &quot;aabb&quot;, &quot;aabb&quot;, &quot;aabb&quot;, and the empty subsequence. Hence, the number of good subsequences is 24-5 = 11.
```

**Example 2:**

```

Input: s = &quot;leet&quot;
Output: 12
Explanation: There are four subsequences which are not good: &quot;leet&quot;, &quot;leet&quot;, &quot;leet&quot;, and the empty subsequence. Hence, the number of good subsequences is 24-4 = 12.

```

**Example 3:**

```

Input: s = &quot;abcd&quot;
Output: 15
Explanation: All of the non-empty subsequences are good subsequences. Hence, the number of good subsequences is 24-1 = 15.

```

 

**Constraints:**

	- `1 <= s.length <= 10^4`

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-the-number-of-good-subsequences/) | [Solutions](https://leetcode.com/problems/count-the-number-of-good-subsequences/)

# [2405. Optimal Partition of String](https://leetcode.com/problems/optimal-partition-of-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2800 | 113 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `amazon`, `microsoft`, `google`

## Description

Given a string `s`, partition the string into one or more **substrings** such that the characters in each substring are **unique**. That is, no letter appears in a single substring more than **once**.

Return *the **minimum** number of substrings in such a partition.*

Note that each character should belong to exactly one substring in a partition.

 

**Example 1:**

```

Input: s = &quot;abacaba&quot;
Output: 4
Explanation:
Two possible partitions are (&quot;a&quot;,&quot;ba&quot;,&quot;cab&quot;,&quot;a&quot;) and (&quot;ab&quot;,&quot;a&quot;,&quot;ca&quot;,&quot;ba&quot;).
It can be shown that 4 is the minimum number of substrings needed.

```

**Example 2:**

```

Input: s = &quot;ssssss&quot;
Output: 6
Explanation:
The only valid partition is (&quot;s&quot;,&quot;s&quot;,&quot;s&quot;,&quot;s&quot;,&quot;s&quot;,&quot;s&quot;).

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of only English lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/optimal-partition-of-string/) | [Solutions](https://leetcode.com/problems/optimal-partition-of-string/)

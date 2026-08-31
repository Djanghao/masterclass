# [712. Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4123 | 109 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `triplebyte`

## Description

Given two strings `s1` and `s2`, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

 

**Example 1:**

```

Input: s1 = &quot;sea&quot;, s2 = &quot;eat&quot;
Output: 231
Explanation: Deleting &quot;s&quot; from &quot;sea&quot; adds the ASCII value of &quot;s&quot; (115) to the sum.
Deleting &quot;t&quot; from &quot;eat&quot; adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

```

**Example 2:**

```

Input: s1 = &quot;delete&quot;, s2 = &quot;leet&quot;
Output: 403
Explanation: Deleting &quot;dee&quot; from &quot;delete&quot; to turn the string into &quot;let&quot;,
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting &quot;e&quot; from &quot;leet&quot; adds 101[e] to the sum.
At the end, both strings are equal to &quot;let&quot;, and the answer is 100+101+101+101 = 403.
If instead we turned both strings into &quot;lee&quot; or &quot;eet&quot;, we would get answers of 433 or 417, which are higher.

```

 

**Constraints:**

	- `1 <= s1.length, s2.length <= 1000`

	- `s1` and `s2` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) | [Solutions](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

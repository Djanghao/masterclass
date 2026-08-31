# [521. Longest Uncommon Subsequence I](https://leetcode.com/problems/longest-uncommon-subsequence-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 103 | 332 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`, `google`

## Description

Given two strings `a` and `b`, return *the length of the **longest uncommon subsequence** between *`a` *and* `b`. *If no such uncommon subsequence exists, return* `-1`*.*

An **uncommon subsequence** between two strings is a string that is a **subsequence of exactly one of them**.

 

**Example 1:**

```

Input: a = &quot;aba&quot;, b = &quot;cdc&quot;
Output: 3
Explanation: One longest uncommon subsequence is &quot;aba&quot; because &quot;aba&quot; is a subsequence of &quot;aba&quot; but not &quot;cdc&quot;.
Note that &quot;cdc&quot; is also a longest uncommon subsequence.

```

**Example 2:**

```

Input: a = &quot;aaa&quot;, b = &quot;bbb&quot;
Output: 3
Explanation:&nbsp;The longest uncommon subsequences are &quot;aaa&quot; and &quot;bbb&quot;.

```

**Example 3:**

```

Input: a = &quot;aaa&quot;, b = &quot;aaa&quot;
Output: -1
Explanation:&nbsp;Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.

```

 

**Constraints:**

	- `1 <= a.length, b.length <= 100`

	- `a` and `b` consist of lower-case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-uncommon-subsequence-i/) | [Solutions](https://leetcode.com/problems/longest-uncommon-subsequence-i/)

# [1092. Shortest Common Supersequence ](https://leetcode.com/problems/shortest-common-supersequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 5819 | 101 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`, `microsoft`, `amazon`, `facebook`

## Description

Given two strings `str1` and `str2`, return *the shortest string that has both *`str1`* and *`str2`* as **subsequences***. If there are multiple valid strings, return **any** of them.

A string `s` is a **subsequence** of string `t` if deleting some number of characters from `t` (possibly `0`) results in the string `s`.

 

**Example 1:**

```

Input: str1 = &quot;abac&quot;, str2 = &quot;cab&quot;
Output: &quot;cabac&quot;
Explanation: 
str1 = &quot;abac&quot; is a subsequence of &quot;cabac&quot; because we can delete the first &quot;c&quot;.
str2 = &quot;cab&quot; is a subsequence of &quot;cabac&quot; because we can delete the last &quot;ac&quot;.
The answer provided is the shortest such string that satisfies these properties.

```

**Example 2:**

```

Input: str1 = &quot;aaaaaaaa&quot;, str2 = &quot;aaaaaaaa&quot;
Output: &quot;aaaaaaaa&quot;

```

 

**Constraints:**

	- `1 <= str1.length, str2.length <= 1000`

	- `str1` and `str2` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-common-supersequence/) | [Solutions](https://leetcode.com/problems/shortest-common-supersequence/)

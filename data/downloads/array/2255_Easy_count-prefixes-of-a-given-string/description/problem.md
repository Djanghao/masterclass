# [2255. Count Prefixes of a Given String](https://leetcode.com/problems/count-prefixes-of-a-given-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 600 | 24 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given a string array `words` and a string `s`, where `words[i]` and `s` comprise only of **lowercase English letters**.

Return *the **number of strings** in* `words` *that are a **prefix** of* `s`.

A **prefix** of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;ab&quot;,&quot;bc&quot;,&quot;abc&quot;], s = &quot;abc&quot;
Output: 3
Explanation:
The strings in words which are a prefix of s = &quot;abc&quot; are:
&quot;a&quot;, &quot;ab&quot;, and &quot;abc&quot;.
Thus the number of strings in words which are a prefix of s is 3.
```

**Example 2:**

```

Input: words = [&quot;a&quot;,&quot;a&quot;], s = &quot;aa&quot;
Output: 2
Explanation:
Both of the strings are a prefix of s. 
Note that the same string can occur multiple times in words, and it should be counted each time.
```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length, s.length <= 10`

	- `words[i]` and `s` consist of lowercase English letters **only**.

---

**Links:** [Submissions](https://leetcode.com/problems/count-prefixes-of-a-given-string/) | [Solutions](https://leetcode.com/problems/count-prefixes-of-a-given-string/)

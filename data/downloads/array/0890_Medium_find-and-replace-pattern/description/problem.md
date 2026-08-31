# [890. Find and Replace Pattern](https://leetcode.com/problems/find-and-replace-pattern/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4017 | 174 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `amazon`

## Description

Given a list of strings `words` and a string `pattern`, return *a list of* `words[i]` *that match* `pattern`. You may return the answer in **any order**.

A word matches the pattern if there exists a permutation of letters `p` so that after replacing every letter `x` in the pattern with `p(x)`, we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

 

**Example 1:**

```

Input: words = [&quot;abc&quot;,&quot;deq&quot;,&quot;mee&quot;,&quot;aqq&quot;,&quot;dkd&quot;,&quot;ccc&quot;], pattern = &quot;abb&quot;
Output: [&quot;mee&quot;,&quot;aqq&quot;]
Explanation: &quot;mee&quot; matches the pattern because there is a permutation {a -&gt; m, b -&gt; e, ...}. 
&quot;ccc&quot; does not match the pattern because {a -&gt; c, b -&gt; c, ...} is not a permutation, since a and b map to the same letter.

```

**Example 2:**

```

Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], pattern = &quot;a&quot;
Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]

```

 

**Constraints:**

	- `1 <= pattern.length <= 20`

	- `1 <= words.length <= 50`

	- `words[i].length == pattern.length`

	- `pattern` and `words[i]` are lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/find-and-replace-pattern/) | [Solutions](https://leetcode.com/problems/find-and-replace-pattern/)

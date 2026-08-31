# [1662. Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3131 | 204 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`, `amazon`

## Description

Given two string arrays `word1` and `word2`, return* *`true`* if the two arrays **represent** the same string, and *`false`* otherwise.*

A string is **represented** by an array if the array elements concatenated **in order** forms the string.

 

**Example 1:**

```

Input: word1 = [&quot;ab&quot;, &quot;c&quot;], word2 = [&quot;a&quot;, &quot;bc&quot;]
Output: true
Explanation:
word1 represents string &quot;ab&quot; + &quot;c&quot; -&gt; &quot;abc&quot;
word2 represents string &quot;a&quot; + &quot;bc&quot; -&gt; &quot;abc&quot;
The strings are the same, so return true.
```

**Example 2:**

```

Input: word1 = [&quot;a&quot;, &quot;cb&quot;], word2 = [&quot;ab&quot;, &quot;c&quot;]
Output: false

```

**Example 3:**

```

Input: word1  = [&quot;abc&quot;, &quot;d&quot;, &quot;defg&quot;], word2 = [&quot;abcddefg&quot;]
Output: true

```

 

**Constraints:**

	- `1 <= word1.length, word2.length <= 10^3`

	- `1 <= word1[i].length, word2[i].length <= 10^3`

	- `1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3`

	- `word1[i]` and `word2[i]` consist of lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/) | [Solutions](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

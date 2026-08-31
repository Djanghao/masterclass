# [792. Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5752 | 244 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `uber`, `amazon`, `bloomberg`, `facebook`, `visa`, `apple`

## Description

Given a string `s` and an array of strings `words`, return *the number of* `words[i]` *that is a subsequence of* `s`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

	- For example, `"ace"` is a subsequence of `"abcde"`.

 

**Example 1:**

```

Input: s = &quot;abcde&quot;, words = [&quot;a&quot;,&quot;bb&quot;,&quot;acd&quot;,&quot;ace&quot;]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: &quot;a&quot;, &quot;acd&quot;, &quot;ace&quot;.

```

**Example 2:**

```

Input: s = &quot;dsahjpjauf&quot;, words = [&quot;ahjpjau&quot;,&quot;ja&quot;,&quot;ahbwzgqnuk&quot;,&quot;tnmlanowax&quot;]
Output: 2

```

 

**Constraints:**

	- `1 <= s.length <= 5 * 10^4`

	- `1 <= words.length <= 5000`

	- `1 <= words[i].length <= 50`

	- `s` and `words[i]` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-matching-subsequences/) | [Solutions](https://leetcode.com/problems/number-of-matching-subsequences/)

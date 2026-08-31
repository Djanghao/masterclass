# [1065. Index Pairs of a String](https://leetcode.com/problems/index-pairs-of-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 383 | 109 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`

## Description

Given a string `text` and an array of strings `words`, return *an array of all index pairs *`[i, j]`* so that the substring *`text[i...j]`* is in `words`*.

Return the pairs `[i, j]` in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).

 

**Example 1:**

```

Input: text = &quot;thestoryofleetcodeandme&quot;, words = [&quot;story&quot;,&quot;fleet&quot;,&quot;leetcode&quot;]
Output: [[3,7],[9,13],[10,17]]

```

**Example 2:**

```

Input: text = &quot;ababa&quot;, words = [&quot;aba&quot;,&quot;ab&quot;]
Output: [[0,1],[0,2],[2,3],[2,4]]
Explanation: Notice that matches can overlap, see &quot;aba&quot; is found in [0,2] and [2,4].

```

 

**Constraints:**

	- `1 <= text.length <= 100`

	- `1 <= words.length <= 20`

	- `1 <= words[i].length <= 50`

	- `text` and `words[i]` consist of lowercase English letters.

	- All the strings of `words` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/index-pairs-of-a-string/) | [Solutions](https://leetcode.com/problems/index-pairs-of-a-string/)

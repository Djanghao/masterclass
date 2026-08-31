# [720. Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2062 | 1504 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `google`, `pinterest`

## Description

Given an array of strings `words` representing an English Dictionary, return *the longest word in* `words` *that can be built one character at a time by other words in* `words`.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

Note that the word should be built from left to right with each additional character being added to the end of a previous word. 

 

**Example 1:**

```

Input: words = [&quot;w&quot;,&quot;wo&quot;,&quot;wor&quot;,&quot;worl&quot;,&quot;world&quot;]
Output: &quot;world&quot;
Explanation: The word &quot;world&quot; can be built one character at a time by &quot;w&quot;, &quot;wo&quot;, &quot;wor&quot;, and &quot;worl&quot;.

```

**Example 2:**

```

Input: words = [&quot;a&quot;,&quot;banana&quot;,&quot;app&quot;,&quot;appl&quot;,&quot;ap&quot;,&quot;apply&quot;,&quot;apple&quot;]
Output: &quot;apple&quot;
Explanation: Both &quot;apply&quot; and &quot;apple&quot; can be built from other words in the dictionary. However, &quot;apple&quot; is lexicographically smaller than &quot;apply&quot;.

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 30`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-word-in-dictionary/) | [Solutions](https://leetcode.com/problems/longest-word-in-dictionary/)

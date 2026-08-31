# [425. Word Squares](https://leetcode.com/problems/word-squares/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1120 | 75 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`

## Description

Given an array of **unique** strings `words`, return *all the ***word squares*** you can build from *`words`. The same word from `words` can be used **multiple times**. You can return the answer in **any order**.

A sequence of strings forms a valid **word square** if the `k^th` row and column read the same string, where `0 <= k < max(numRows, numColumns)`.

	- For example, the word sequence `["ball","area","lead","lady"]` forms a word square because each word reads the same both horizontally and vertically.

 

**Example 1:**

```

Input: words = [&quot;area&quot;,&quot;lead&quot;,&quot;wall&quot;,&quot;lady&quot;,&quot;ball&quot;]
Output: [[&quot;ball&quot;,&quot;area&quot;,&quot;lead&quot;,&quot;lady&quot;],[&quot;wall&quot;,&quot;area&quot;,&quot;lead&quot;,&quot;lady&quot;]]
Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

```

**Example 2:**

```

Input: words = [&quot;abat&quot;,&quot;baba&quot;,&quot;atan&quot;,&quot;atal&quot;]
Output: [[&quot;baba&quot;,&quot;abat&quot;,&quot;baba&quot;,&quot;atal&quot;],[&quot;baba&quot;,&quot;abat&quot;,&quot;baba&quot;,&quot;atan&quot;]]
Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 4`

	- All `words[i]` have the same length.

	- `words[i]` consists of only lowercase English letters.

	- All `words[i]` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/word-squares/) | [Solutions](https://leetcode.com/problems/word-squares/)

# [1087. Brace Expansion](https://leetcode.com/problems/brace-expansion/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 659 | 57 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`stack`](https://leetcode.com/tag/stack), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `stripe`, `doordash`, `niantic`, `google`

## Description

You are given a string `s` representing a list of words. Each letter in the word has one or more options.

	- If there is one option, the letter is represented as is.

	- If there is more than one option, then curly braces delimit the options. For example, `"{a,b,c}"` represents options `["a", "b", "c"]`.

For example, if `s = "a{b,c}"`, the first character is always `'a'`, but the second character can be `'b'` or `'c'`. The original list is `["ab", "ac"]`.

Return all words that can be formed in this manner, **sorted** in lexicographical order.

 

**Example 1:**

```
Input: s = "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]

```
**Example 2:**

```
Input: s = "abcd"
Output: ["abcd"]

```

 

**Constraints:**

	- `1 <= s.length <= 50`

	- `s` consists of curly brackets `'{}'`, commas `','`, and lowercase English letters.

	- `s` is guaranteed to be a valid input.

	- There are no nested curly brackets.

	- All characters inside a pair of consecutive opening and ending curly brackets are different.

---

**Links:** [Submissions](https://leetcode.com/problems/brace-expansion/) | [Solutions](https://leetcode.com/problems/brace-expansion/)

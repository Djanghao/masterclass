# [336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 4613 | 473 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `microsoft`, `amazon`, `goldman-sachs`, `airbnb`, `google`, `yandex`, `wix`

## Description

You are given a **0-indexed** array of **unique** strings `words`.

A **palindrome pair** is a pair of integers `(i, j)` such that:

	- `0 <= i, j < words.length`,

	- `i != j`, and

	- `words[i] + words[j]` (the concatenation of the two strings) is a palindrome.

Return *an array of all the **palindrome pairs** of *`words`.

You must write an algorithm with `O(sum of words[i].length)` runtime complexity.

 

**Example 1:**

```

Input: words = [&quot;abcd&quot;,&quot;dcba&quot;,&quot;lls&quot;,&quot;s&quot;,&quot;sssll&quot;]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are [&quot;abcddcba&quot;,&quot;dcbaabcd&quot;,&quot;slls&quot;,&quot;llssssll&quot;]

```

**Example 2:**

```

Input: words = [&quot;bat&quot;,&quot;tab&quot;,&quot;cat&quot;]
Output: [[0,1],[1,0]]
Explanation: The palindromes are [&quot;battab&quot;,&quot;tabbat&quot;]

```

**Example 3:**

```

Input: words = [&quot;a&quot;,&quot;&quot;]
Output: [[0,1],[1,0]]
Explanation: The palindromes are [&quot;a&quot;,&quot;a&quot;]

```

 

**Constraints:**

	- `1 <= words.length <= 5000`

	- `0 <= words[i].length <= 300`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/palindrome-pairs/) | [Solutions](https://leetcode.com/problems/palindrome-pairs/)

# [2645. Minimum Additions to Make Valid String](https://leetcode.com/problems/minimum-additions-to-make-valid-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 583 | 28 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`, `microsoft`

## Description

Given a string `word` to which you can insert letters "a", "b" or "c" anywhere and any number of times, return *the minimum number of letters that must be inserted so that `word` becomes **valid**.*

A string is called **valid **if it can be formed by concatenating the string "abc" several times.

 

**Example 1:**

```

Input: word = &quot;b&quot;
Output: 2
Explanation: Insert the letter &quot;a&quot; right before &quot;b&quot;, and the letter &quot;c&quot; right next to &quot;b&quot; to obtain the valid string &quot;abc&quot;.

```

**Example 2:**

```

Input: word = &quot;aaa&quot;
Output: 6
Explanation: Insert letters &quot;b&quot; and &quot;c&quot; next to each &quot;a&quot; to obtain the valid string &quot;abcabcabc&quot;.

```

**Example 3:**

```

Input: word = &quot;abc&quot;
Output: 0
Explanation: word is already valid. No modifications are needed. 

```

 

**Constraints:**

	- `1 <= word.length <= 50`

	- `word` consists of letters "a", "b" and "c" only.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-additions-to-make-valid-string/) | [Solutions](https://leetcode.com/problems/minimum-additions-to-make-valid-string/)

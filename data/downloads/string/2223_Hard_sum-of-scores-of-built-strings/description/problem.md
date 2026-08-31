# [2223. Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 290 | 188 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`suffix-array`](https://leetcode.com/tag/suffix-array), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `amazon`

## Description

You are **building** a string `s` of length `n` **one** character at a time, **prepending** each new character to the **front** of the string. The strings are labeled from `1` to `n`, where the string with length `i` is labeled `s_i`.

	- For example, for `s = "abaca"`, `s_1 == "a"`, `s_2 == "ca"`, `s_3 == "aca"`, etc.

The **score** of `s_i` is the length of the **longest common prefix** between `s_i` and `s_n` (Note that `s == s_n`).

Given the final string `s`, return* the **sum** of the **score** of every *`s_i`.

 

**Example 1:**

```

Input: s = &quot;babab&quot;
Output: 9
Explanation:
For s1 == &quot;b&quot;, the longest common prefix is &quot;b&quot; which has a score of 1.
For s2 == &quot;ab&quot;, there is no common prefix so the score is 0.
For s3 == &quot;bab&quot;, the longest common prefix is &quot;bab&quot; which has a score of 3.
For s4 == &quot;abab&quot;, there is no common prefix so the score is 0.
For s5 == &quot;babab&quot;, the longest common prefix is &quot;babab&quot; which has a score of 5.
The sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.
```

**Example 2:**

```

Input: s = &quot;azbazbzaz&quot;
Output: 14
Explanation: 
For s2 == &quot;az&quot;, the longest common prefix is &quot;az&quot; which has a score of 2.
For s6 == &quot;azbzaz&quot;, the longest common prefix is &quot;azb&quot; which has a score of 3.
For s9 == &quot;azbazbzaz&quot;, the longest common prefix is &quot;azbazbzaz&quot; which has a score of 9.
For all other si, the score is 0.
The sum of the scores is 2 + 3 + 9 = 14, so we return 14.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/sum-of-scores-of-built-strings/) | [Solutions](https://leetcode.com/problems/sum-of-scores-of-built-strings/)

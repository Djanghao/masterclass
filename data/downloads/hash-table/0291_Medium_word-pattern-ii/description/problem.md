# [291. Word Pattern II](https://leetcode.com/problems/word-pattern-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 940 | 76 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking)

**Companies:** `microsoft`, `oracle`, `apple`, `dropbox`, `uber`

## Description

Given a `pattern` and a string `s`, return `true`* if *`s`* **matches** the *`pattern`*.*

A string `s` matches a `pattern` if there is some **bijective mapping** of single characters to **non-empty** strings such that if each character in `pattern` is replaced by the string it maps to, then the resulting string is `s`. A **bijective mapping** means that no two characters map to the same string, and no character maps to two different strings.

 

**Example 1:**

```

Input: pattern = &quot;abab&quot;, s = &quot;redblueredblue&quot;
Output: true
Explanation: One possible mapping is as follows:
&#39;a&#39; -&gt; &quot;red&quot;
&#39;b&#39; -&gt; &quot;blue&quot;
```

**Example 2:**

```

Input: pattern = &quot;aaaa&quot;, s = &quot;asdasdasdasd&quot;
Output: true
Explanation: One possible mapping is as follows:
&#39;a&#39; -&gt; &quot;asd&quot;

```

**Example 3:**

```

Input: pattern = &quot;aabb&quot;, s = &quot;xyzabcxzyabc&quot;
Output: false

```

 

**Constraints:**

	- `1 <= pattern.length, s.length <= 20`

	- `pattern` and `s` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/word-pattern-ii/) | [Solutions](https://leetcode.com/problems/word-pattern-ii/)

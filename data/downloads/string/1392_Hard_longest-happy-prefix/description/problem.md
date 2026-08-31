# [1392. Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1539 | 46 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `amazon`, `microsoft`, `google`

## Description

A string is called a **happy prefix** if is a **non-empty** prefix which is also a suffix (excluding itself).

Given a string `s`, return *the **longest happy prefix** of* `s`. Return an empty string `""` if no such prefix exists.

 

**Example 1:**

```

Input: s = &quot;level&quot;
Output: &quot;l&quot;
Explanation: s contains 4 prefix excluding itself (&quot;l&quot;, &quot;le&quot;, &quot;lev&quot;, &quot;leve&quot;), and suffix (&quot;l&quot;, &quot;el&quot;, &quot;vel&quot;, &quot;evel&quot;). The largest prefix which is also suffix is given by &quot;l&quot;.

```

**Example 2:**

```

Input: s = &quot;ababab&quot;
Output: &quot;abab&quot;
Explanation: &quot;abab&quot; is the largest prefix which is also suffix. They can overlap in the original string.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-happy-prefix/) | [Solutions](https://leetcode.com/problems/longest-happy-prefix/)

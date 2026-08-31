# [467. Unique Substrings in Wraparound String](https://leetcode.com/problems/unique-substrings-in-wraparound-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1518 | 190 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `maq-software`

## Description

We define the string `base` to be the infinite wraparound string of `"abcdefghijklmnopqrstuvwxyz"`, so `base` will look like this:

	- `"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...."`.

Given a string `s`, return *the number of **unique non-empty substrings** of *`s`* are present in *`base`.

 

**Example 1:**

```

Input: s = &quot;a&quot;
Output: 1
Explanation: Only the substring &quot;a&quot; of s is in base.

```

**Example 2:**

```

Input: s = &quot;cac&quot;
Output: 2
Explanation: There are two substrings (&quot;a&quot;, &quot;c&quot;) of s in base.

```

**Example 3:**

```

Input: s = &quot;zab&quot;
Output: 6
Explanation: There are six substrings (&quot;z&quot;, &quot;a&quot;, &quot;b&quot;, &quot;za&quot;, &quot;ab&quot;, and &quot;zab&quot;) of s in base.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/unique-substrings-in-wraparound-string/) | [Solutions](https://leetcode.com/problems/unique-substrings-in-wraparound-string/)

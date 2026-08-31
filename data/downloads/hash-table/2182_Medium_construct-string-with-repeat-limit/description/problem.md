# [2182. Construct String With Repeat Limit](https://leetcode.com/problems/construct-string-with-repeat-limit/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1247 | 100 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `fortinet`, `arista-networks`

## Description

You are given a string `s` and an integer `repeatLimit`. Construct a new string `repeatLimitedString` using the characters of `s` such that no letter appears **more than** `repeatLimit` times **in a row**. You do **not** have to use all characters from `s`.

Return *the **lexicographically largest** *`repeatLimitedString` *possible*.

A string `a` is **lexicographically larger** than a string `b` if in the first position where `a` and `b` differ, string `a` has a letter that appears later in the alphabet than the corresponding letter in `b`. If the first `min(a.length, b.length)` characters do not differ, then the longer string is the lexicographically larger one.

 

**Example 1:**

```

Input: s = &quot;cczazcc&quot;, repeatLimit = 3
Output: &quot;zzcccac&quot;
Explanation: We use all of the characters from s to construct the repeatLimitedString &quot;zzcccac&quot;.
The letter &#39;a&#39; appears at most 1 time in a row.
The letter &#39;c&#39; appears at most 3 times in a row.
The letter &#39;z&#39; appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return &quot;zzcccac&quot;.
Note that the string &quot;zzcccca&quot; is lexicographically larger but the letter &#39;c&#39; appears more than 3 times in a row, so it is not a valid repeatLimitedString.

```

**Example 2:**

```

Input: s = &quot;aababab&quot;, repeatLimit = 2
Output: &quot;bbabaa&quot;
Explanation: We use only some of the characters from s to construct the repeatLimitedString &quot;bbabaa&quot;. 
The letter &#39;a&#39; appears at most 2 times in a row.
The letter &#39;b&#39; appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return &quot;bbabaa&quot;.
Note that the string &quot;bbabaaa&quot; is lexicographically larger but the letter &#39;a&#39; appears more than 2 times in a row, so it is not a valid repeatLimitedString.

```

 

**Constraints:**

	- `1 <= repeatLimit <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/construct-string-with-repeat-limit/) | [Solutions](https://leetcode.com/problems/construct-string-with-repeat-limit/)

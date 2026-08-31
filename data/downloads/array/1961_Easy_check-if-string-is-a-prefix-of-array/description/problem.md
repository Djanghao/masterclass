# [1961. Check If String Is a Prefix of Array](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 546 | 109 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `uber`

## Description

Given a string `s` and an array of strings `words`, determine whether `s` is a **prefix string** of `words`.

A string `s` is a **prefix string** of `words` if `s` can be made by concatenating the first `k` strings in `words` for some **positive** `k` no larger than `words.length`.

Return `true`* if *`s`* is a **prefix string** of *`words`*, or *`false`* otherwise*.

 

**Example 1:**

```

Input: s = &quot;iloveleetcode&quot;, words = [&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;,&quot;apples&quot;]
Output: true
Explanation:
s can be made by concatenating &quot;i&quot;, &quot;love&quot;, and &quot;leetcode&quot; together.

```

**Example 2:**

```

Input: s = &quot;iloveleetcode&quot;, words = [&quot;apples&quot;,&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;]
Output: false
Explanation:
It is impossible to make s using a prefix of arr.
```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 20`

	- `1 <= s.length <= 1000`

	- `words[i]` and `s` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/) | [Solutions](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/)

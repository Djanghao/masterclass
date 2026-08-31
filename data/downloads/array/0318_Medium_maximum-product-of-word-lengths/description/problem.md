# [318. Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3607 | 146 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `google`

## Description

Given a string array `words`, return *the maximum value of* `length(word[i]) * length(word[j])` *where the two words do not share common letters*. If no such two words exist, return `0`.

 

**Example 1:**

```

Input: words = [&quot;abcw&quot;,&quot;baz&quot;,&quot;foo&quot;,&quot;bar&quot;,&quot;xtfn&quot;,&quot;abcdef&quot;]
Output: 16
Explanation: The two words can be &quot;abcw&quot;, &quot;xtfn&quot;.

```

**Example 2:**

```

Input: words = [&quot;a&quot;,&quot;ab&quot;,&quot;abc&quot;,&quot;d&quot;,&quot;cd&quot;,&quot;bcd&quot;,&quot;abcd&quot;]
Output: 4
Explanation: The two words can be &quot;ab&quot;, &quot;cd&quot;.

```

**Example 3:**

```

Input: words = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;,&quot;aaaa&quot;]
Output: 0
Explanation: No such pair of words.

```

 

**Constraints:**

	- `2 <= words.length <= 1000`

	- `1 <= words[i].length <= 1000`

	- `words[i]` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-product-of-word-lengths/) | [Solutions](https://leetcode.com/problems/maximum-product-of-word-lengths/)

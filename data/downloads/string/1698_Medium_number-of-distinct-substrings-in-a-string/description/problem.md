# [1698. Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 207 | 44 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`suffix-array`](https://leetcode.com/tag/suffix-array), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `bloomberg`, `uber`, `intuit`, `dunzo`

## Description

Given a string `s`, return *the number of **distinct** substrings of* `s`.

A **substring** of a string is obtained by deleting any number of characters (possibly zero) from the front of the string and any number (possibly zero) from the back of the string.

 

**Example 1:**

```

Input: s = &quot;aabbaba&quot;
Output: 21
Explanation: The set of distinct strings is [&quot;a&quot;,&quot;b&quot;,&quot;aa&quot;,&quot;bb&quot;,&quot;ab&quot;,&quot;ba&quot;,&quot;aab&quot;,&quot;abb&quot;,&quot;bab&quot;,&quot;bba&quot;,&quot;aba&quot;,&quot;aabb&quot;,&quot;abba&quot;,&quot;bbab&quot;,&quot;baba&quot;,&quot;aabba&quot;,&quot;abbab&quot;,&quot;bbaba&quot;,&quot;aabbab&quot;,&quot;abbaba&quot;,&quot;aabbaba&quot;]

```

**Example 2:**

```

Input: s = &quot;abcdefg&quot;
Output: 28

```

 

**Constraints:**

	- `1 <= s.length <= 500`

	- `s` consists of lowercase English letters.

 

**Follow up:** Can you solve this problem in `O(n)` time complexity?

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) | [Solutions](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)

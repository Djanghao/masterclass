# [3042. Count Prefix and Suffix Pairs I](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 589 | 44 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `google`, `autodesk`

## Description

You are given a **0-indexed** string array `words`.

Let's define a **boolean** function `isPrefixAndSuffix` that takes two strings, `str1` and `str2`:

	- `isPrefixAndSuffix(str1, str2)` returns `true` if `str1` is **both** a prefix and a suffix of `str2`, and `false` otherwise.

For example, `isPrefixAndSuffix("aba", "ababa")` is `true` because `"aba"` is a prefix of `"ababa"` and also a suffix, but `isPrefixAndSuffix("abc", "abcd")` is `false`.

Return *an integer denoting the **number** of index pairs *`(i, j)`* such that *`i < j`*, and *`isPrefixAndSuffix(words[i], words[j])`* is *`true`*.*

 

**Example 1:**

```

Input: words = [&quot;a&quot;,&quot;aba&quot;,&quot;ababa&quot;,&quot;aa&quot;]
Output: 4
Explanation: In this example, the counted index pairs are:
i = 0 and j = 1 because isPrefixAndSuffix(&quot;a&quot;, &quot;aba&quot;) is true.
i = 0 and j = 2 because isPrefixAndSuffix(&quot;a&quot;, &quot;ababa&quot;) is true.
i = 0 and j = 3 because isPrefixAndSuffix(&quot;a&quot;, &quot;aa&quot;) is true.
i = 1 and j = 2 because isPrefixAndSuffix(&quot;aba&quot;, &quot;ababa&quot;) is true.
Therefore, the answer is 4.
```

**Example 2:**

```

Input: words = [&quot;pa&quot;,&quot;papa&quot;,&quot;ma&quot;,&quot;mama&quot;]
Output: 2
Explanation: In this example, the counted index pairs are:
i = 0 and j = 1 because isPrefixAndSuffix(&quot;pa&quot;, &quot;papa&quot;) is true.
i = 2 and j = 3 because isPrefixAndSuffix(&quot;ma&quot;, &quot;mama&quot;) is true.
Therefore, the answer is 2.  
```

**Example 3:**

```

Input: words = [&quot;abab&quot;,&quot;ab&quot;]
Output: 0
Explanation: In this example, the only valid index pair is i = 0 and j = 1, and isPrefixAndSuffix(&quot;abab&quot;, &quot;ab&quot;) is false.
Therefore, the answer is 0.
```

 

**Constraints:**

	- `1 <= words.length <= 50`

	- `1 <= words[i].length <= 10`

	- `words[i]` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/) | [Solutions](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/)

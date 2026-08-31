# [1170. Compare Strings by Frequency of the Smallest Character](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 749 | 980 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`

## Description

Let the function `f(s)` be the **frequency of the lexicographically smallest character** in a non-empty string `s`. For example, if `s = "dcce"` then `f(s) = 2` because the lexicographically smallest character is `'c'`, which has a frequency of 2.

You are given an array of strings `words` and another array of query strings `queries`. For each query `queries[i]`, count the **number of words** in `words` such that `f(queries[i])` < `f(W)` for each `W` in `words`.

Return *an integer array *`answer`*, where each *`answer[i]`* is the answer to the *`i^th`* query*.

 

**Example 1:**

```

Input: queries = [&quot;cbd&quot;], words = [&quot;zaaaz&quot;]
Output: [1]
Explanation: On the first query we have f(&quot;cbd&quot;) = 1, f(&quot;zaaaz&quot;) = 3 so f(&quot;cbd&quot;) &lt; f(&quot;zaaaz&quot;).

```

**Example 2:**

```

Input: queries = [&quot;bbb&quot;,&quot;cc&quot;], words = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;,&quot;aaaa&quot;]
Output: [1,2]
Explanation: On the first query only f(&quot;bbb&quot;) &lt; f(&quot;aaaa&quot;). On the second query both f(&quot;aaa&quot;) and f(&quot;aaaa&quot;) are both &gt; f(&quot;cc&quot;).

```

 

**Constraints:**

	- `1 <= queries.length <= 2000`

	- `1 <= words.length <= 2000`

	- `1 <= queries[i].length, words[i].length <= 10`

	- `queries[i][j]`, `words[i][j]` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/) | [Solutions](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/)

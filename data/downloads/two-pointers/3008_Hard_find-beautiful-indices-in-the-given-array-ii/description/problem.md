# [3008. Find Beautiful Indices in the Given Array II](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 205 | 15 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `palantir-technologies`

## Description

You are given a **0-indexed** string `s`, a string `a`, a string `b`, and an integer `k`.

An index `i` is **beautiful** if:

	- `0 `0 

Return *the array that contains beautiful indices in **sorted order from smallest to largest***.

 

**Example 1:**

```

Input: s = &quot;isawsquirrelnearmysquirrelhouseohmy&quot;, a = &quot;my&quot;, b = &quot;squirrel&quot;, k = 15
Output: [16,33]
Explanation: There are 2 beautiful indices: [16,33].
- The index 16 is beautiful as s[16..17] == &quot;my&quot; and there exists an index 4 with s[4..11] == &quot;squirrel&quot; and |16 - 4| &lt;= 15.
- The index 33 is beautiful as s[33..34] == &quot;my&quot; and there exists an index 18 with s[18..25] == &quot;squirrel&quot; and |33 - 18| &lt;= 15.
Thus we return [16,33] as the result.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;, a = &quot;a&quot;, b = &quot;a&quot;, k = 4
Output: [0]
Explanation: There is 1 beautiful index: [0].
- The index 0 is beautiful as s[0..0] == &quot;a&quot; and there exists an index 0 with s[0..0] == &quot;a&quot; and |0 - 0| &lt;= 4.
Thus we return [0] as the result.

```

 

**Constraints:**

	- `1 <= k <= s.length <= 5 * 10^5`

	- `1 <= a.length, b.length <= 5 * 10^5`

	- `s`, `a`, and `b` contain only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/) | [Solutions](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/)

# [1153. String Transforms Into Another String](https://leetcode.com/problems/string-transforms-into-another-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 887 | 339 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `google`

## Description

Given two strings `str1` and `str2` of the same length, determine whether you can transform `str1` into `str2` by doing **zero or more** *conversions*.

In one conversion you can convert **all** occurrences of one character in `str1` to **any** other lowercase English character.

Return `true` if and only if you can transform `str1` into `str2`.

 

**Example 1:**

```

Input: str1 = &quot;aabcc&quot;, str2 = &quot;ccdee&quot;
Output: true
Explanation: Convert &#39;c&#39; to &#39;e&#39; then &#39;b&#39; to &#39;d&#39; then &#39;a&#39; to &#39;c&#39;. Note that the order of conversions matter.

```

**Example 2:**

```

Input: str1 = &quot;leetcode&quot;, str2 = &quot;codeleet&quot;
Output: false
Explanation: There is no way to transform str1 to str2.

```

 

**Constraints:**

	- `1 <= str1.length == str2.length <= 10^4`

	- `str1` and `str2` contain only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/string-transforms-into-another-string/) | [Solutions](https://leetcode.com/problems/string-transforms-into-another-string/)

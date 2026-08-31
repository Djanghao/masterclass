# [3722. Lexicographically Smallest String After Reverse](https://leetcode.com/problems/lexicographically-smallest-string-after-reverse/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 33 | 5 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

You are given a string `s` of length `n` consisting of lowercase English letters.

You must perform **exactly** one operation by choosing any integer `k` such that `1 <= k <= n` and either:

	- reverse the **first** `k` characters of `s`, or

	- reverse the **last** `k` characters of `s`.

Return the **lexicographically smallest** string that can be obtained after **exactly** one such operation.

 

**Example 1:**

**Input:** s = "dcab"

**Output:** "acdb"

**Explanation:**

	- Choose `k = 3`, reverse the first 3 characters.

	- Reverse `"dca"` to `"acd"`, resulting string `s = "acdb"`, which is the lexicographically smallest string achievable.

**Example 2:**

**Input:** s = "abba"

**Output:** "aabb"

**Explanation:**

	- Choose `k = 3`, reverse the last 3 characters.

	- Reverse `"bba"` to `"abb"`, so the resulting string is `"aabb"`, which is the lexicographically smallest string achievable.

**Example 3:**

**Input:** s = "zxy"

**Output:** "xzy"

**Explanation:**

	- Choose `k = 2`, reverse the first 2 characters.

	- Reverse `"zx"` to `"xz"`, so the resulting string is `"xzy"`, which is the lexicographically smallest string achievable.

 

**Constraints:**

	- `1 <= n == s.length <= 1000`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/lexicographically-smallest-string-after-reverse/) | [Solutions](https://leetcode.com/problems/lexicographically-smallest-string-after-reverse/)

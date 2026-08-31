# [2399. Check Distances Between Same Letters](https://leetcode.com/problems/check-distances-between-same-letters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 514 | 70 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)


## Description

You are given a **0-indexed** string `s` consisting of only lowercase English letters, where each letter in `s` appears **exactly** **twice**. You are also given a **0-indexed** integer array `distance` of length `26`.

Each letter in the alphabet is numbered from `0` to `25` (i.e. `'a' -> 0`, `'b' -> 1`, `'c' -> 2`, ... , `'z' -> 25`).

In a **well-spaced** string, the number of letters between the two occurrences of the `i^th` letter is `distance[i]`. If the `i^th` letter does not appear in `s`, then `distance[i]` can be **ignored**.

Return `true`* if *`s`* is a **well-spaced** string, otherwise return *`false`.

 

**Example 1:**

```

Input: s = &quot;abaccb&quot;, distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: true
Explanation:
- &#39;a&#39; appears at indices 0 and 2 so it satisfies distance[0] = 1.
- &#39;b&#39; appears at indices 1 and 5 so it satisfies distance[1] = 3.
- &#39;c&#39; appears at indices 3 and 4 so it satisfies distance[2] = 0.
Note that distance[3] = 5, but since &#39;d&#39; does not appear in s, it can be ignored.
Return true because s is a well-spaced string.

```

**Example 2:**

```

Input: s = &quot;aa&quot;, distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: false
Explanation:
- &#39;a&#39; appears at indices 0 and 1 so there are zero letters between them.
Because distance[0] = 1, s is not a well-spaced string.

```

 

**Constraints:**

	- `2 <= s.length <= 52`

	- `s` consists only of lowercase English letters.

	- Each letter appears in `s` exactly twice.

	- `distance.length == 26`

	- `0 <= distance[i] <= 50`

---

**Links:** [Submissions](https://leetcode.com/problems/check-distances-between-same-letters/) | [Solutions](https://leetcode.com/problems/check-distances-between-same-letters/)

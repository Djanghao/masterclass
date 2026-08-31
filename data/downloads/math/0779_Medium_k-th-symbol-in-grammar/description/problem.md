# [779. K-th Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4097 | 424 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`recursion`](https://leetcode.com/tag/recursion)

**Companies:** `amazon`, `bloomberg`, `facebook`, `de-shaw`, `google`

## Description

We build a table of `n` rows (**1-indexed**). We start by writing `0` in the `1^st` row. Now in every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`, and each occurrence of `1` with `10`.

	- For example, for `n = 3`, the `1^st` row is `0`, the `2^nd` row is `01`, and the `3^rd` row is `0110`.

Given two integer `n` and `k`, return the `k^th` (**1-indexed**) symbol in the `n^th` row of a table of `n` rows.

 

**Example 1:**

```

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0

```

**Example 2:**

```

Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01

```

**Example 3:**

```

Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01

```

 

**Constraints:**

	- `1 <= n <= 30`

	- `1 <= k <= 2^n - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/k-th-symbol-in-grammar/) | [Solutions](https://leetcode.com/problems/k-th-symbol-in-grammar/)

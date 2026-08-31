# [1128. Number of Equivalent Domino Pairs](https://leetcode.com/problems/number-of-equivalent-domino-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1110 | 375 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`, `google`

## Description

Given a list of `dominoes`, `dominoes[i] = [a, b]` is **equivalent to** `dominoes[j] = [c, d]` if and only if either (`a == c` and `b == d`), or (`a == d` and `b == c`) - that is, one domino can be rotated to be equal to another domino.

Return *the number of pairs *`(i, j)`* for which *`0 <= i < j < dominoes.length`*, and *`dominoes[i]`* is **equivalent to** *`dominoes[j]`.

 

**Example 1:**

```

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1

```

**Example 2:**

```

Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3

```

 

**Constraints:**

	- `1 <= dominoes.length <= 4 * 10^4`

	- `dominoes[i].length == 2`

	- `1 <= dominoes[i][j] <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-equivalent-domino-pairs/) | [Solutions](https://leetcode.com/problems/number-of-equivalent-domino-pairs/)

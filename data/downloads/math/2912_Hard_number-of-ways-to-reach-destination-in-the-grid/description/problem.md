# [2912. Number of Ways to Reach Destination in the Grid](https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 18 | 5 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`combinatorics`](https://leetcode.com/tag/combinatorics)

**Companies:** `uber`

## Description

You are given two integers `n` and `m` which represent the size of a **1-indexed **grid. You are also given an integer `k`, a **1-indexed** integer array `source` and a **1-indexed** integer array `dest`, where `source` and `dest` are in the form `[x, y]` representing a cell on the given grid.

You can move through the grid in the following way:

	- You can go from cell `[x_1, y_1]` to cell `[x_2, y_2]` if either `x_1 == x_2` or `y_1 == y_2`.

	- Note that you **can't** move to the cell you are already in e.g. `x_1 == x_2` and `y_1 == y_2`.

Return *the number of ways you can reach* `dest` *from* `source` *by moving through the grid* **exactly** `k` *times.*

Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: n = 3, m = 2, k = 2, source = [1,1], dest = [2,2]
Output: 2
Explanation: There are 2 possible sequences of reaching [2,2] from [1,1]:
- [1,1] -&gt; [1,2] -&gt; [2,2]
- [1,1] -&gt; [2,1] -&gt; [2,2]

```

**Example 2:**

```

Input: n = 3, m = 4, k = 3, source = [1,2], dest = [2,3]
Output: 9
Explanation: There are 9 possible sequences of reaching [2,3] from [1,2]:
- [1,2] -&gt; [1,1] -&gt; [1,3] -&gt; [2,3]
- [1,2] -&gt; [1,1] -&gt; [2,1] -&gt; [2,3]
- [1,2] -&gt; [1,3] -&gt; [3,3] -&gt; [2,3]
- [1,2] -&gt; [1,4] -&gt; [1,3] -&gt; [2,3]
- [1,2] -&gt; [1,4] -&gt; [2,4] -&gt; [2,3]
- [1,2] -&gt; [2,2] -&gt; [2,1] -&gt; [2,3]
- [1,2] -&gt; [2,2] -&gt; [2,4] -&gt; [2,3]
- [1,2] -&gt; [3,2] -&gt; [2,2] -&gt; [2,3]
- [1,2] -&gt; [3,2] -&gt; [3,3] -&gt; [2,3]

```

 

**Constraints:**

	- `2 <= n, m <= 10^9`

	- `1 <= k <= 10^5`

	- `source.length == dest.length == 2`

	- `1 <= source[1], dest[1] <= n`

	- `1 <= source[2], dest[2] <= m`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/) | [Solutions](https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/)

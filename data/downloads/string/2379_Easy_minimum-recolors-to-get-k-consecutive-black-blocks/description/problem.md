# [2379. Minimum Recolors to Get K Consecutive Black Blocks](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1305 | 38 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `dailyhunt`

## Description

You are given a **0-indexed** string `blocks` of length `n`, where `blocks[i]` is either `'W'` or `'B'`, representing the color of the `i^th` block. The characters `'W'` and `'B'` denote the colors white and black, respectively.

You are also given an integer `k`, which is the desired number of **consecutive** black blocks.

In one operation, you can **recolor** a white block such that it becomes a black block.

Return* the **minimum** number of operations needed such that there is at least **one** occurrence of *`k`* consecutive black blocks.*

 

**Example 1:**

```

Input: blocks = &quot;WBBWWBBWBW&quot;, k = 7
Output: 3
Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = &quot;BBBBBBBWBW&quot;. 
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.

```

**Example 2:**

```

Input: blocks = &quot;WBWBBBW&quot;, k = 2
Output: 0
Explanation:
No changes need to be made, since 2 consecutive black blocks already exist.
Therefore, we return 0.

```

 

**Constraints:**

	- `n == blocks.length`

	- `1 <= n <= 100`

	- `blocks[i]` is either `'W'` or `'B'`.

	- `1 <= k <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/) | [Solutions](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

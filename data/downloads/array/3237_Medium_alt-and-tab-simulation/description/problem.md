# [3237. Alt and Tab Simulation](https://leetcode.com/problems/alt-and-tab-simulation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 15 | 6 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`simulation`](https://leetcode.com/tag/simulation)


## Description

There are `n` windows open numbered from `1` to `n`, we want to simulate using alt + tab to navigate between the windows.

You are given an array `windows` which contains the initial order of the windows (the first element is at the top and the last one is at the bottom).

You are also given an array `queries` where for each query, the window `queries[i]` is brought to the top.

Return the final state of the array `windows`.

 

**Example 1:**

**Input:** windows = [1,2,3], queries = [3,3,2]

**Output:** [2,3,1]

**Explanation:**

Here is the window array after each query:

	- Initial order: `[1,2,3]`

	- After the first query: `[3,1,2]`

	- After the second query: `[3,1,2]`

	- After the last query: `[2,3,1]`

**Example 2:**

**Input:** windows = [1,4,2,3], queries = [4,1,3]

**Output:** [3,1,4,2]

**Explanation:**

Here is the window array after each query:

	- Initial order: `[1,4,2,3]`

	- After the first query: `[4,1,2,3]`

	- After the second query: `[1,4,2,3]`

	- After the last query: `[3,1,4,2]`

 

**Constraints:**

	- `1 <= n == windows.length <= 10^5`

	- `windows` is a permutation of `[1, n]`.

	- `1 <= queries.length <= 10^5`

	- `1 <= queries[i] <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/alt-and-tab-simulation/) | [Solutions](https://leetcode.com/problems/alt-and-tab-simulation/)

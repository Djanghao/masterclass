# [2959. Number of Possible Sets of Closing Branches](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 194 | 16 |

**Tags:** [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`graph`](https://leetcode.com/tag/graph), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`enumeration`](https://leetcode.com/tag/enumeration), [`shortest-path`](https://leetcode.com/tag/shortest-path)

**Companies:** `atlassian`, `meesho`, `ta-digital`

## Description

There is a company with `n` branches across the country, some of which are connected by roads. Initially, all branches are reachable from each other by traveling some roads.

The company has realized that they are spending an excessive amount of time traveling between their branches. As a result, they have decided to close down some of these branches (**possibly none**). However, they want to ensure that the remaining branches have a distance of at most `maxDistance` from each other.

The **distance** between two branches is the **minimum** total traveled length needed to reach one branch from another.

You are given integers `n`, `maxDistance`, and a **0-indexed** 2D array `roads`, where `roads[i] = [u_i, v_i, w_i]` represents the **undirected** road between branches `u_i` and `v_i` with length `w_i`.

Return *the number of possible sets of closing branches, so that any branch has a distance of at most *`maxDistance`* from any other*.

**Note** that, after closing a branch, the company will no longer have access to any roads connected to it.

**Note** that, multiple roads are allowed.

 

**Example 1:**

![image](./images/0.png)
```

Input: n = 3, maxDistance = 5, roads = [[0,1,2],[1,2,10],[0,2,10]]
Output: 5
Explanation: The possible sets of closing branches are:
- The set [2], after closing, active branches are [0,1] and they are reachable to each other within distance 2.
- The set [0,1], after closing, the active branch is [2].
- The set [1,2], after closing, the active branch is [0].
- The set [0,2], after closing, the active branch is [1].
- The set [0,1,2], after closing, there are no active branches.
It can be proven, that there are only 5 possible sets of closing branches.

```

**Example 2:**

![image](./images/1.png)
```

Input: n = 3, maxDistance = 5, roads = [[0,1,20],[0,1,10],[1,2,2],[0,2,2]]
Output: 7
Explanation: The possible sets of closing branches are:
- The set [], after closing, active branches are [0,1,2] and they are reachable to each other within distance 4.
- The set [0], after closing, active branches are [1,2] and they are reachable to each other within distance 2.
- The set [1], after closing, active branches are [0,2] and they are reachable to each other within distance 2.
- The set [0,1], after closing, the active branch is [2].
- The set [1,2], after closing, the active branch is [0].
- The set [0,2], after closing, the active branch is [1].
- The set [0,1,2], after closing, there are no active branches.
It can be proven, that there are only 7 possible sets of closing branches.

```

**Example 3:**

```

Input: n = 1, maxDistance = 10, roads = []
Output: 2
Explanation: The possible sets of closing branches are:
- The set [], after closing, the active branch is [0].
- The set [0], after closing, there are no active branches.
It can be proven, that there are only 2 possible sets of closing branches.

```

 

**Constraints:**

	- `1 <= n <= 10`

	- `1 <= maxDistance <= 10^5`

	- `0 <= roads.length <= 1000`

	- `roads[i].length == 3`

	- `0 <= u_i, v_i <= n - 1`

	- `u_i != v_i`

	- `1 <= w_i <= 1000`

	- All branches are reachable from each other by traveling some roads.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/) | [Solutions](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/)

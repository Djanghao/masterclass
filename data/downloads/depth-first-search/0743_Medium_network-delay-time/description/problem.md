# [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8237 | 389 |

**Tags:** [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`graph`](https://leetcode.com/tag/graph), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`shortest-path`](https://leetcode.com/tag/shortest-path)

**Companies:** `microsoft`, `netflix`, `amazon`, `google`, `salesforce`, `tiktok`, `akuna-capital`

## Description

You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (u_i, v_i, w_i)`, where `u_i` is the source node, `v_i` is the target node, and `w_i` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node `k`. Return *the **minimum** time it takes for all the* `n` *nodes to receive the signal*. If it is impossible for all the `n` nodes to receive the signal, return `-1`.

 

**Example 1:**

![image](./images/0.png)
```

Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2

```

**Example 2:**

```

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1

```

**Example 3:**

```

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1

```

 

**Constraints:**

	- `1 <= k <= n <= 100`

	- `1 <= times.length <= 6000`

	- `times[i].length == 3`

	- `1 <= u_i, v_i <= n`

	- `u_i != v_i`

	- `0 <= w_i <= 100`

	- All the pairs `(u_i, v_i)` are **unique**. (i.e., no multiple edges.)

---

**Links:** [Submissions](https://leetcode.com/problems/network-delay-time/) | [Solutions](https://leetcode.com/problems/network-delay-time/)

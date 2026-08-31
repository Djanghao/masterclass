# [683. K Empty Slots](https://leetcode.com/problems/k-empty-slots/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 828 | 706 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`queue`](https://leetcode.com/tag/queue), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`ordered-set`](https://leetcode.com/tag/ordered-set), [`monotonic-queue`](https://leetcode.com/tag/monotonic-queue)

**Companies:** `google`

## Description

You have `n` bulbs in a row numbered from `1` to `n`. Initially, all the bulbs are turned off. We turn on **exactly one** bulb every day until all bulbs are on after `n` days.

You are given an array `bulbs` of length `n` where `bulbs[i] = x` means that on the `(i+1)^th` day, we will turn on the bulb at position `x` where `i` is **0-indexed** and `x` is **1-indexed.**

Given an integer `k`, return *the **minimum day number** such that there exists two **turned on** bulbs that have **exactly** `k` bulbs between them that are **all turned off**. If there isn't such day, return `-1`.*

 

**Example 1:**

```

Input: bulbs = [1,3,2], k = 1
Output: 2
Explanation:
On the first day: bulbs[0] = 1, first bulb is turned on: [1,0,0]
On the second day: bulbs[1] = 3, third bulb is turned on: [1,0,1]
On the third day: bulbs[2] = 2, second bulb is turned on: [1,1,1]
We return 2 because on the second day, there were two on bulbs with one off bulb between them.
```

**Example 2:**

```

Input: bulbs = [1,2,3], k = 1
Output: -1

```

 

**Constraints:**

	- `n == bulbs.length`

	- `1 <= n <= 2 * 10^4`

	- `1 <= bulbs[i] <= n`

	- `bulbs` is a permutation of numbers from `1` to `n`.

	- `0 <= k <= 2 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/k-empty-slots/) | [Solutions](https://leetcode.com/problems/k-empty-slots/)

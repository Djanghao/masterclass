# [2071. Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1079 | 57 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`greedy`](https://leetcode.com/tag/greedy), [`queue`](https://leetcode.com/tag/queue), [`sorting`](https://leetcode.com/tag/sorting), [`monotonic-queue`](https://leetcode.com/tag/monotonic-queue)

**Companies:** `amazon`, `facebook`, `google`, `walmart-labs`

## Description

You have `n` tasks and `m` workers. Each task has a strength requirement stored in a **0-indexed** integer array `tasks`, with the `i^th` task requiring `tasks[i]` strength to complete. The strength of each worker is stored in a **0-indexed** integer array `workers`, with the `j^th` worker having `workers[j]` strength. Each worker can only be assigned to a **single** task and must have a strength **greater than or equal** to the task's strength requirement (i.e., `workers[j] >= tasks[i]`).

Additionally, you have `pills` magical pills that will **increase a worker's strength** by `strength`. You can decide which workers receive the magical pills, however, you may only give each worker **at most one** magical pill.

Given the **0-indexed **integer arrays `tasks` and `workers` and the integers `pills` and `strength`, return *the **maximum** number of tasks that can be completed.*

 

**Example 1:**

```

Input: tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1
Output: 3
Explanation:
We can assign the magical pill and tasks as follows:
- Give the magical pill to worker 0.
- Assign worker 0 to task 2 (0 + 1 &gt;= 1)
- Assign worker 1 to task 1 (3 &gt;= 2)
- Assign worker 2 to task 0 (3 &gt;= 3)

```

**Example 2:**

```

Input: tasks = [5,4], workers = [0,0,0], pills = 1, strength = 5
Output: 1
Explanation:
We can assign the magical pill and tasks as follows:
- Give the magical pill to worker 0.
- Assign worker 0 to task 0 (0 + 5 &gt;= 5)

```

**Example 3:**

```

Input: tasks = [10,15,30], workers = [0,10,10,10,10], pills = 3, strength = 10
Output: 2
Explanation:
We can assign the magical pills and tasks as follows:
- Give the magical pill to worker 0 and worker 1.
- Assign worker 0 to task 0 (0 + 10 &gt;= 10)
- Assign worker 1 to task 1 (10 + 10 &gt;= 15)
The last pill is not given because it will not make any worker strong enough for the last task.

```

 

**Constraints:**

	- `n == tasks.length`

	- `m == workers.length`

	- `1 <= n, m <= 5 * 10^4`

	- `0 <= pills <= m`

	- `0 <= tasks[i], workers[j], strength <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/) | [Solutions](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

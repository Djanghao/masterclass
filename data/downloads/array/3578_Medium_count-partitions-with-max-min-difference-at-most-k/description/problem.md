# [3578. Count Partitions With Max-Min Difference at Most K](https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 497 | 123 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`queue`](https://leetcode.com/tag/queue), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`prefix-sum`](https://leetcode.com/tag/prefix-sum), [`monotonic-queue`](https://leetcode.com/tag/monotonic-queue)

**Companies:** `google`

## Description

You are given an integer array `nums` and an integer `k`. Your task is to partition `nums` into one or more **non-empty** contiguous segments such that in each segment, the difference between its **maximum** and **minimum** elements is **at most** `k`.

Return the total number of ways to partition `nums` under this condition.

Since the answer may be too large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

**Input:** nums = [9,4,1,3,7], k = 4

**Output:** 6

**Explanation:**

There are 6 valid partitions where the difference between the maximum and minimum elements in each segment is at most `k = 4`:

	- `[[9], [4], [1], [3], [7]]`

	- `[[9], [4], [1], [3, 7]]`

	- `[[9], [4], [1, 3], [7]]`

	- `[[9], [4, 1], [3], [7]]`

	- `[[9], [4, 1], [3, 7]]`

	- `[[9], [4, 1, 3], [7]]`

**Example 2:**

**Input:** nums = [3,3,4], k = 0

**Output:** 2

**Explanation:**

There are 2 valid partitions that satisfy the given conditions:

	- `[[3], [3], [4]]`

	- `[[3, 3], [4]]`

 

**Constraints:**

	- `2 <= nums.length <= 5 * 10^4`

	- `1 <= nums[i] <= 10^9`

	- `0 <= k <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/) | [Solutions](https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/)

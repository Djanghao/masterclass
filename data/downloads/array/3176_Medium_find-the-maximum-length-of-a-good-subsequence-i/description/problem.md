# [3176. Find the Maximum Length of a Good Subsequence I](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 162 | 94 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `snowflake`

## Description

You are given an integer array `nums` and a **non-negative** integer `k`. A sequence of integers `seq` is called **good** if there are **at most** `k` indices `i` in the range `[0, seq.length - 2]` such that `seq[i] != seq[i + 1]`.

Return the **maximum** possible length of a **good** subsequence of `nums`.

 

**Example 1:**

**Input:** nums = [1,2,1,1,3], k = 2

**Output:** 4

**Explanation:**

The maximum length subsequence is `[1,2,1,1,3]`.

**Example 2:**

**Input:** nums = [1,2,3,4,5,1], k = 0

**Output:** 2

**Explanation:**

The maximum length subsequence is `[1,2,3,4,5,1]`.

 

**Constraints:**

	- `1 <= nums.length <= 500`

	- `1 <= nums[i] <= 10^9`

	- `0 <= k <= min(nums.length, 25)`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/) | [Solutions](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/)

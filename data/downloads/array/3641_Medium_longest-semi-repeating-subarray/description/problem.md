# [3641. Longest Semi-Repeating Subarray](https://leetcode.com/problems/longest-semi-repeating-subarray/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5 | 1 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`sliding-window`](https://leetcode.com/tag/sliding-window)


## Description

You are given an integer array `nums` of length `n` and an integer `k`.

A **semi‑repeating** subarray is a contiguous subarray in which at most `k` elements repeat (i.e., appear more than once).

Return the length of the longest **semi‑repeating** subarray in `nums`.

 

**Example 1:**

**Input:** nums = [1,2,3,1,2,3,4], k = 2

**Output:** 6

**Explanation:**

The longest semi-repeating subarray is `[2, 3, 1, 2, 3, 4]`, which has two repeating elements (2 and 3).

**Example 2:**

**Input:** nums = [1,1,1,1,1], k = 4

**Output:** 5

**Explanation:**

The longest semi-repeating subarray is `[1, 1, 1, 1, 1]`, which has only one repeating element (1).

**Example 3:**

**Input:** nums = [1,1,1,1,1], k = 0

**Output:** 1

**Explanation:**

The longest semi-repeating subarray is `[1]`, which has no repeating elements.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^5`

	- `0 <= k <= nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-semi-repeating-subarray/) | [Solutions](https://leetcode.com/problems/longest-semi-repeating-subarray/)

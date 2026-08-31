# [3768. Minimum Inversion Count in Subarrays of Fixed Length](https://leetcode.com/problems/minimum-inversion-count-in-subarrays-of-fixed-length/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 39 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`sliding-window`](https://leetcode.com/tag/sliding-window)


## Description

You are given an integer array `nums` of length `n` and an integer `k`.

An **inversion** is a pair of indices `(i, j)` from `nums` such that `i  nums[j]`.

The **inversion count** of a **subarray** is the number of inversions within it.

Return the **minimum** inversion count among all **subarrays** of `nums` with length `k`.

 

**Example 1:**

**Input:** nums = [3,1,2,5,4], k = 3

**Output:** 0

**Explanation:**

We consider all subarrays of length `k = 3` (indices below are relative to each subarray):

	- `[3, 1, 2]` has 2 inversions: `(0, 1)` and `(0, 2)`.

	- `[1, 2, 5]` has 0 inversions.

	- `[2, 5, 4]` has 1 inversion: `(1, 2)`.

The minimum inversion count among all subarrays of length `3` is 0, achieved by subarray `[1, 2, 5]`.

**Example 2:**

**Input:** nums = [5,3,2,1], k = 4

**Output:** 6

**Explanation:**

There is only one subarray of length `k = 4`: `[5, 3, 2, 1]`.

Within this subarray, the inversions are: `(0, 1)`, `(0, 2)`, `(0, 3)`, `(1, 2)`, `(1, 3)`, and `(2, 3)`.

Total inversions is 6, so the minimum inversion count is 6.

**Example 3:**

**Input:** nums = [2,1], k = 1

**Output:** 0

**Explanation:**

All subarrays of length `k = 1` contain only one element, so no inversions are possible.

The minimum inversion count is therefore 0.

 

**Constraints:**

	- `1 <= n == nums.length <= 10^5`

	- `1 <= nums[i] <= 10^9`

	- `1 <= k <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-inversion-count-in-subarrays-of-fixed-length/) | [Solutions](https://leetcode.com/problems/minimum-inversion-count-in-subarrays-of-fixed-length/)

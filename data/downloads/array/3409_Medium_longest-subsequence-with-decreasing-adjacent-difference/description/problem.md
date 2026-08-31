# [3409. Longest Subsequence With Decreasing Adjacent Difference](https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 143 | 25 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

You are given an array of integers `nums`.

Your task is to find the length of the **longest** subsequence `seq` of `nums`, such that the **absolute differences** between* consecutive* elements form a **non-increasing sequence** of integers. In other words, for a subsequence `seq_0`, `seq_1`, `seq_2`, ..., `seq_m` of `nums`, `|seq_1 - seq_0| >= |seq_2 - seq_1| >= ... >= |seq_m - seq_m - 1|`.

Return the length of such a subsequence.

 

**Example 1:**

**Input:** nums = [16,6,3]

**Output:** 3

**Explanation:** 

The longest subsequence is `[16, 6, 3]` with the absolute adjacent differences `[10, 3]`.

**Example 2:**

**Input:** nums = [6,5,3,4,2,1]

**Output:** 4

**Explanation:**

The longest subsequence is `[6, 4, 2, 1]` with the absolute adjacent differences `[2, 2, 1]`.

**Example 3:**

**Input:** nums = [10,20,10,19,10,20]

**Output:** 5

**Explanation:** 

The longest subsequence is `[10, 20, 10, 19, 10]` with the absolute adjacent differences `[10, 10, 9, 9]`.

 

**Constraints:**

	- `2 <= nums.length <= 10^4`

	- `1 <= nums[i] <= 300`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/) | [Solutions](https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/)

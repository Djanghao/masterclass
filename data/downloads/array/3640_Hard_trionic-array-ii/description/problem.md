# [3640. Trionic Array II](https://leetcode.com/problems/trionic-array-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 43 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `infosys`

## Description

You are given an integer array nums of length n.

A **trionic subarray** is a contiguous subarray nums[l...r] (with 0 ) for which there exist indices `l nums[l...p] is **strictly** increasing,
	nums[p...q] is **strictly** decreasing,
	nums[q...r] is **strictly** increasing.

Return the **maximum** sum of any trionic subarray in nums.

 

**Example 1:**

**Input:** nums = [0,-2,-1,-3,0,2,-1]

**Output:** -4

**Explanation:**

Pick l = 1, p = 2, q = 3, r = 5:

	nums[l...p] = nums[1...2] = [-2, -1] is strictly increasing (-2 ).
	nums[p...q] = nums[2...3] = [-1, -3] is strictly decreasing (-1 > -3)
	nums[q...r] = nums[3...5] = [-3, 0, 2] is strictly increasing (-3 ).
	Sum = `(-2) + (-1) + (-3) + 0 + 2 = -4`.

**Example 2:**

**Input:** nums = [1,4,2,7]

**Output:** 14

**Explanation:**

Pick l = 0, p = 1, q = 2, r = 3:

	nums[l...p] = nums[0...1] = [1, 4] is strictly increasing (1 ).
	nums[p...q] = nums[1...2] = [4, 2] is strictly decreasing (4 > 2).
	nums[q...r] = nums[2...3] = [2, 7] is strictly increasing (2 ).
	Sum = `1 + 4 + 2 + 7 = 14`.

 

**Constraints:**

	4 5
	-109 9
	It is guaranteed that at least one trionic subarray exists.

---

**Links:** [Submissions](https://leetcode.com/problems/trionic-array-ii/) | [Solutions](https://leetcode.com/problems/trionic-array-ii/)

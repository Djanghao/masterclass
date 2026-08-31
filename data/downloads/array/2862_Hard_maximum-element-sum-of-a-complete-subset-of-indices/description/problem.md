# [2862. Maximum Element-Sum of a Complete Subset of Indices](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 231 | 58 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`number-theory`](https://leetcode.com/tag/number-theory)

**Companies:** `purplle`

## Description

You are given a **1****-indexed** array `nums`. Your task is to select a **complete subset** from `nums` where every pair of selected indices multiplied is a perfect square,. i. e. if you select `a_i` and `a_j`, `i * j` must be a perfect square.

Return the *sum* of the complete subset with the *maximum sum*.

 

**Example 1:**

**Input:** nums = [8,7,3,5,7,2,4,9]

**Output:** 16

**Explanation:**

We select elements at indices 2 and 8 and `2 * 8` is a perfect square.

**Example 2:**

**Input:** nums = [8,10,3,8,1,13,7,9,4]

**Output:** 20

**Explanation:**

We select elements at indices 1, 4, and 9. `1 * 4`, `1 * 9`, `4 * 9` are perfect squares.

 

**Constraints:**

	- `1 <= n == nums.length <= 10^4`

	- `1 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/) | [Solutions](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/)

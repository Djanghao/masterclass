# [3134. Find the Median of the Uniqueness Array](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 174 | 13 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `amazon`, `microsoft`

## Description

You are given an integer array `nums`. The **uniqueness array** of `nums` is the sorted array that contains the number of distinct elements of all the subarrays of `nums`. In other words, it is a sorted array consisting of `distinct(nums[i..j])`, for all `0 

 

**Example 1:**

**Input:** nums = [1,2,3]

**Output:** 1

**Explanation:**

The uniqueness array of `nums` is `[distinct(nums[0..0]), distinct(nums[1..1]), distinct(nums[2..2]), distinct(nums[0..1]), distinct(nums[1..2]), distinct(nums[0..2])]` which is equal to `[1, 1, 1, 2, 2, 3]`. The uniqueness array has a median of 1. Therefore, the answer is 1.

**Example 2:**

**Input:** nums = [3,4,3,4,5]

**Output:** 2

**Explanation:**

The uniqueness array of `nums` is `[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3]`. The uniqueness array has a median of 2. Therefore, the answer is 2.

**Example 3:**

**Input:** nums = [4,3,5,4]

**Output:** 2

**Explanation:**

The uniqueness array of `nums` is `[1, 1, 1, 1, 2, 2, 2, 3, 3, 3]`. The uniqueness array has a median of 2. Therefore, the answer is 2.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/) | [Solutions](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/)

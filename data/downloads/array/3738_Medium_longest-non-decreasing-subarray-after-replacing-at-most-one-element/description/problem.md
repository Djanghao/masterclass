# [3738. Longest Non-Decreasing Subarray After Replacing at Most One Element](https://leetcode.com/problems/longest-non-decreasing-subarray-after-replacing-at-most-one-element/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 74 | 7 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

You are given an integer array `nums`.

You are allowed to replace **at most** one element in the array with any other integer value of your choice.

Return the length of the **longest non-decreasing subarray** that can be obtained after performing at most one replacement.

An array is said to be **non-decreasing** if each element is greater than or equal to its previous one (if it exists).

 

**Example 1:**

**Input:** nums = [1,2,3,1,2]

**Output:** 4

**Explanation:**

Replacing `nums[3] = 1` with 3 gives the array [1, 2, 3, 3, 2].

The longest non-decreasing subarray is [1, 2, 3, 3], which has a length of 4.

**Example 2:**

**Input:** nums = [2,2,2,2,2]

**Output:** 5

**Explanation:**

All elements in `nums` are equal, so it is already non-decreasing and the entire `nums` forms a subarray of length 5.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `-10^9 <= nums[i] <= 10^9`​​​​​​​

---

**Links:** [Submissions](https://leetcode.com/problems/longest-non-decreasing-subarray-after-replacing-at-most-one-element/) | [Solutions](https://leetcode.com/problems/longest-non-decreasing-subarray-after-replacing-at-most-one-element/)

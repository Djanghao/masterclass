# [3201. Find the Maximum Length of Valid Subsequence I](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 635 | 56 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`, `amazon`, `facebook`, `microsoft`

## Description

You are given an integer array `nums`.

A subsequence `sub` of `nums` with length `x` is called **valid** if it satisfies:

	- `(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2.`

Return the length of the **longest** **valid** subsequence of `nums`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

**Example 1:**

**Input:** nums = [1,2,3,4]

**Output:** 4

**Explanation:**

The longest valid subsequence is `[1, 2, 3, 4]`.

**Example 2:**

**Input:** nums = [1,2,1,1,2,1,2]

**Output:** 6

**Explanation:**

The longest valid subsequence is `[1, 2, 1, 2, 1, 2]`.

**Example 3:**

**Input:** nums = [1,3]

**Output:** 2

**Explanation:**

The longest valid subsequence is `[1, 3]`.

 

**Constraints:**

	- `2 <= nums.length <= 2 * 10^5`

	- `1 <= nums[i] <= 10^7`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/) | [Solutions](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/)

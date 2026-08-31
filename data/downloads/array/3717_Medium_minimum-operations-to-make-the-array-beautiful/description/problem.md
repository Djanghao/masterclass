# [3717. Minimum Operations to Make the Array Beautiful](https://leetcode.com/problems/minimum-operations-to-make-the-array-beautiful/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 6 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

You are given an integer array `nums`.

An array is called **beautiful** if for every index `i > 0`, the value at `nums[i]` is **divisible** by `nums[i - 1]`.

In one operation, you may **increment** any element `nums[i]` (with `i > 0`) by `1`.

Return the **minimum number of operations** required to make the array beautiful.

 

**Example 1:**

**Input:** nums = [3,7,9]

**Output:** 2

**Explanation:**

Applying the operation twice on `nums[1]` makes the array beautiful: `[3,9,9]`

**Example 2:**

**Input:** nums = [1,1,1]

**Output:** 0

**Explanation:**

The given array is already beautiful.

**Example 3:**

**Input:** nums = [4]

**Output:** 0

**Explanation:**

The array has only one element, so it's already beautiful.

 

**Constraints:**

	- `1 <= nums.length <= 100`

	- `1 <= nums[i] <= 50​​​`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-operations-to-make-the-array-beautiful/) | [Solutions](https://leetcode.com/problems/minimum-operations-to-make-the-array-beautiful/)

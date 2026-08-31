# [3523. Make Array Non-decreasing](https://leetcode.com/problems/make-array-non-decreasing/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 84 | 9 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)

**Companies:** `google`

## Description

You are given an integer array `nums`. In one operation, you can select a subarray and replace it with a single element equal to its **maximum** value.

Return the **maximum possible size** of the array after performing zero or more operations such that the resulting array is **non-decreasing**.

 

**Example 1:**

**Input:** nums = [4,2,5,3,5]

**Output:** 3

**Explanation:**

One way to achieve the maximum size is:

	- Replace subarray `nums[1..2] = [2, 5]` with `5` &rarr; `[4, 5, 3, 5]`.

	- Replace subarray `nums[2..3] = [3, 5]` with `5` &rarr; `[4, 5, 5]`.

The final array `[4, 5, 5]` is non-decreasing with size 3.

**Example 2:**

**Input:** nums = [1,2,3]

**Output:** 3

**Explanation:**

No operation is needed as the array `[1,2,3]` is already non-decreasing.

 

**Constraints:**

	- `1 <= nums.length <= 2 * 10^5`

	- `1 <= nums[i] <= 2 * 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/make-array-non-decreasing/) | [Solutions](https://leetcode.com/problems/make-array-non-decreasing/)

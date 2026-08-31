# [3576. Transform Array to All Equal Elements](https://leetcode.com/problems/transform-array-to-all-equal-elements/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 91 | 7 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `microsoft`

## Description

You are given an integer array `nums` of size `n` containing only `1` and `-1`, and an integer `k`.

You can perform the following operation at most `k` times:

	- 
	
Choose an index `i` (`0 i more than once in **different** operations.

Return `true` if it is possible to make all elements of the array **equal** after at most `k` operations, and `false` otherwise.

 

**Example 1:**

**Input:** nums = [1,-1,1,-1,1], k = 3

**Output:** true

**Explanation:**

We can make all elements in the array equal in 2 operations as follows:

	- Choose index `i = 1`, and multiply both `nums[1]` and `nums[2]` by -1. Now `nums = [1,1,-1,-1,1]`.

	- Choose index `i = 2`, and multiply both `nums[2]` and `nums[3]` by -1. Now `nums = [1,1,1,1,1]`.

**Example 2:**

**Input:** nums = [-1,-1,-1,1,1,1], k = 5

**Output:** false

**Explanation:**

It is not possible to make all array elements equal in at most 5 operations.

 

**Constraints:**

	- `1 <= n == nums.length <= 10^5`

	- `nums[i]` is either -1 or 1.

	- `1 <= k <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/transform-array-to-all-equal-elements/) | [Solutions](https://leetcode.com/problems/transform-array-to-all-equal-elements/)

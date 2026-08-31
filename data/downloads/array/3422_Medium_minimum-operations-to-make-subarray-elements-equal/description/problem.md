# [3422. Minimum Operations to Make Subarray Elements Equal](https://leetcode.com/problems/minimum-operations-to-make-subarray-elements-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 9 | 4 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)


## Description

You are given an integer array `nums` and an integer `k`. You can perform the following operation any number of times:

	- Increase or decrease any element of `nums` by 1.

Return the **minimum** number of operations required to ensure that **at least** one subarray of size `k` in `nums` has all elements equal.

 

**Example 1:**

**Input:** nums = [4,-3,2,1,-4,6], k = 3

**Output:** 5

**Explanation:**

	- Use 4 operations to add 4 to `nums[1]`. The resulting array is `[4, 1, 2, 1, -4, 6]`.

	- Use 1 operation to subtract 1 from `nums[2]`. The resulting array is `[4, 1, 1, 1, -4, 6]`.

	- The array now contains a subarray `[1, 1, 1]` of size `k = 3` with all elements equal. Hence, the answer is 5.

**Example 2:**

**Input:** nums = [-2,-2,3,1,4], k = 2

**Output:** 0

**Explanation:**

	- 
	
The subarray `[-2, -2]` of size `k = 2` already contains all equal elements, so no operations are needed. Hence, the answer is 0.

	

 

**Constraints:**

	- `2 <= nums.length <= 10^5`

	- `-10^6 <= nums[i] <= 10^6`

	- `2 <= k <= nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-operations-to-make-subarray-elements-equal/) | [Solutions](https://leetcode.com/problems/minimum-operations-to-make-subarray-elements-equal/)

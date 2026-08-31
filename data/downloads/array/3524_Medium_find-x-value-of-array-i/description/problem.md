# [3524. Find X Value of Array I](https://leetcode.com/problems/find-x-value-of-array-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 84 | 29 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

You are given an array of **positive** integers `nums`, and a **positive** integer `k`.

You are allowed to perform an operation **once** on `nums`, where in each operation you can remove any **non-overlapping** prefix and suffix from `nums` such that `nums` remains **non-empty**.

You need to find the **x-value** of `nums`, which is the number of ways to perform this operation so that the **product** of the remaining elements leaves a *remainder* of `x` when divided by `k`.

Return an array `result` of size `k` where `result[x]` is the **x-value** of `nums` for `0 Remove the empty prefix and the suffix `[2, 3, 4, 5]`. `nums` becomes `[1]`.

		- Remove the prefix `[1, 2, 3]` and the suffix `[5]`. `nums` becomes `[4]`.

	
	
	- For `x = 2`, the possible operations are:
	
		Remove the empty prefix and the suffix `[3, 4, 5]`. `nums` becomes `[1, 2]`.

		- Remove the prefix `[1]` and the suffix `[3, 4, 5]`. `nums` becomes `[2]`.

		- Remove the prefix `[1, 2, 3]` and the empty suffix. `nums` becomes `[4, 5]`.

		- Remove the prefix `[1, 2, 3, 4]` and the empty suffix. `nums` becomes `[5]`.

	
	

**Example 2:**

**Input:** nums = [1,2,4,8,16,32], k = 4

**Output:** [18,1,2,0]

**Explanation:**

	- For `x = 0`, the only operations that **do not** result in `x = 0` are:

	
		Remove the empty prefix and the suffix `[4, 8, 16, 32]`. `nums` becomes `[1, 2]`.

		- Remove the empty prefix and the suffix `[2, 4, 8, 16, 32]`. `nums` becomes `[1]`.

		- Remove the prefix `[1]` and the suffix `[4, 8, 16, 32]`. `nums` becomes `[2]`.

	
	
	- For `x = 1`, the only possible operation is:
	
		Remove the empty prefix and the suffix `[2, 4, 8, 16, 32]`. `nums` becomes `[1]`.

	
	
	- For `x = 2`, the possible operations are:
	
		Remove the empty prefix and the suffix `[4, 8, 16, 32]`. `nums` becomes `[1, 2]`.

		- Remove the prefix `[1]` and the suffix `[4, 8, 16, 32]`. `nums` becomes `[2]`.

	
	
	- For `x = 3`, there is no possible way to perform the operation.

**Example 3:**

**Input:** nums = [1,1,2,1,1], k = 2

**Output:** [9,6]

 

**Constraints:**

	- `1 <= nums[i] <= 10^9`

	- `1 <= nums.length <= 10^5`

	- `1 <= k <= 5`

---

**Links:** [Submissions](https://leetcode.com/problems/find-x-value-of-array-i/) | [Solutions](https://leetcode.com/problems/find-x-value-of-array-i/)

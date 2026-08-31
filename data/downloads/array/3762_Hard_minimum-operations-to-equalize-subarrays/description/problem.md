# [3762. Minimum Operations to Equalize Subarrays](https://leetcode.com/problems/minimum-operations-to-equalize-subarrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 41 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`binary-search`](https://leetcode.com/tag/binary-search), [`segment-tree`](https://leetcode.com/tag/segment-tree)


## Description

You are given an integer array `nums` and an integer `k`.

In one operation, you can **increase or decrease **any element of `nums` by **exactly** `k`.

You are also given a 2D integer array `queries`, where each `queries[i] = [l_i, r_i]`.

For each query, find the **minimum** number of operations required to make **all** elements in the **subarray** `nums[l_i..r_i]` **equal**. If it is impossible, the answer for that query is `-1`.

Return an array `ans`, where `ans[i]` is the answer for the `i^th` query.

 

**Example 1:**

**Input:** nums = [1,4,7], k = 3, queries = [[0,1],[0,2]]

**Output:** [1,2]

**Explanation:**

One optimal set of operations:

	
		
			`i`
			`[l_i, r_i]`
			`nums[l_i..r_i]`
			Possibility
			Operations
			Final

			`nums[l_i..r_i]`
			`ans[i]`
		
	
	
		
			0
			[0, 1]
			[1, 4]
			Yes
			`nums[0] + k = 1 + 3 = 4 = nums[1]`
			[4, 4]
			1
		
		
			1
			[0, 2]
			[1, 4, 7]
			Yes
			`nums[0] + k = 1 + 3 = 4 = nums[1]
			nums[2] - k = 7 - 3 = 4 = nums[1]`
			[4, 4, 4]
			2
		
	

Thus, `ans = [1, 2]`.

**Example 2:**

**Input:** nums = [1,2,4], k = 2, queries = [[0,2],[0,0],[1,2]]

**Output:** [-1,0,1]

**Explanation:**

One optimal set of operations:

	
		
			`i`
			`[l_i, r_i]`
			`nums[l_i..r_i]`
			Possibility
			Operations
			Final

			`nums[l_i..r_i]`
			`ans[i]`
		
		
			0
			[0, 2]
			[1, 2, 4]
			No
			-
			[1, 2, 4]
			-1
		
		
			1
			[0, 0]
			[1]
			Yes
			Already equal
			[1]
			0
		
		
			2
			[1, 2]
			[2, 4]
			Yes
			`nums[1] + k = 2 + 2 = 4 = nums[2]`
			[4, 4]
			1
		
	

Thus, `ans = [-1, 0, 1]`.

 

**Constraints:**

	- `1 <= n == nums.length <= 4 × 10^4`

	- `1 <= nums[i] <= 10^9`​​​​​​​

	- `1 <= k <= 10^9`

	- `1 <= queries.length <= 4 × 10^4`

	- `^​​​​​​​queries[i] = [l_i, r_i]`

	- `0 <= l_i <= r_i <= n - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-operations-to-equalize-subarrays/) | [Solutions](https://leetcode.com/problems/minimum-operations-to-equalize-subarrays/)

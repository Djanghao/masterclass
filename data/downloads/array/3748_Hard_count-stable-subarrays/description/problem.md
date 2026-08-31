# [3748. Count Stable Subarrays](https://leetcode.com/problems/count-stable-subarrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 50 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)


## Description

You are given an integer array `nums`.

A **subarray** of `nums` is called **stable** if it contains **no inversions**, i.e., there is no pair of indices `i  nums[j]`.

You are also given a **2D integer array** `queries` of length `q`, where each `queries[i] = [l_i, r_i]` represents a query. For each query `[l_i, r_i]`, compute the number of **stable subarrays** that lie entirely within the segment `nums[l_i..r_i]`.

Return an integer array `ans` of length `q`, where `ans[i]` is the answer to the `i^th` query.​​​​​​​​​​​​​​

**Note**:

	- A single element subarray is considered stable.

 

**Example 1:**

**Input:** nums = [3,1,2], queries = [[0,1],[1,2],[0,2]]

**Output:** [2,3,4]

**Explanation:**​​​​​

	- For `queries[0] = [0, 1]`, the subarray is `[nums[0], nums[1]] = [3, 1]`.

	
		The stable subarrays are `[3]` and `[1]`. The total number of stable subarrays is 2.

	
	
	- For `queries[1] = [1, 2]`, the subarray is `[nums[1], nums[2]] = [1, 2]`.
	
		The stable subarrays are `[1]`, `[2]`, and `[1, 2]`. The total number of stable subarrays is 3.

	
	
	- For `queries[2] = [0, 2]`, the subarray is `[nums[0], nums[1], nums[2]] = [3, 1, 2]`.
	
		The stable subarrays are `[3]`, `[1]`, `[2]`, and `[1, 2]`. The total number of stable subarrays is 4.

	
	

Thus, `ans = [2, 3, 4]`.

**Example 2:**

**Input:** nums = [2,2], queries = [[0,1],[0,0]]

**Output:** [3,1]

**Explanation:**

	- For `queries[0] = [0, 1]`, the subarray is `[nums[0], nums[1]] = [2, 2]`.

	
		The stable subarrays are `[2]`, `[2]`, and `[2, 2]`. The total number of stable subarrays is 3.

	
	
	- For `queries[1] = [0, 0]`, the subarray is `[nums[0]] = [2]`.
	
		The stable subarray is `[2]`. The total number of stable subarrays is 1.

	
	

Thus, `ans = [3, 1]`.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^5`

	- `1 <= queries.length <= 10^5`

	- `queries[i] = [l_i, r_i]`

	- `0 <= l_i <= r_i <= nums.length - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/count-stable-subarrays/) | [Solutions](https://leetcode.com/problems/count-stable-subarrays/)

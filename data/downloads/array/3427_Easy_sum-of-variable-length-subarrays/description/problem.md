# [3427. Sum of Variable Length Subarrays](https://leetcode.com/problems/sum-of-variable-length-subarrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 98 | 29 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)


## Description

You are given an integer array `nums` of size `n`. For **each** index `i` where `0 
	
		
			i
			Subarray
			Sum
		
		
			0
			`nums[0] = [2]`
			2
		
		
			1
			`nums[0 ... 1] = [2, 3]`
			5
		
		
			2
			`nums[1 ... 2] = [3, 1]`
			4
		
		
			**Total Sum**
			 
			11
		
	

The total sum is 11. Hence, 11 is the output.

**Example 2:**

**Input:** nums = [3,1,1,2]

**Output:** 13

**Explanation:**

	
		
			i
			Subarray
			Sum
		
		
			0
			`nums[0] = [3]`
			3
		
		
			1
			`nums[0 ... 1] = [3, 1]`
			4
		
		
			2
			`nums[1 ... 2] = [1, 1]`
			2
		
		
			3
			`nums[1 ... 3] = [1, 1, 2]`
			4
		
		
			**Total Sum**
			 
			13
		
	

The total sum is 13. Hence, 13 is the output.

 

**Constraints:**

	- `1 <= n == nums.length <= 100`

	- `1 <= nums[i] <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/sum-of-variable-length-subarrays/) | [Solutions](https://leetcode.com/problems/sum-of-variable-length-subarrays/)

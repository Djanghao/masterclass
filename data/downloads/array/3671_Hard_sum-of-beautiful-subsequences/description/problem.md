# [3671. Sum of Beautiful Subsequences](https://leetcode.com/problems/sum-of-beautiful-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 32 | 3 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`tree`](https://leetcode.com/tag/tree), [`number-theory`](https://leetcode.com/tag/number-theory)

**Companies:** `google`, `infosys`

## Description

You are given an integer array `nums` of length `n`.

For every **positive** integer `g`, we define the **beauty** of `g` as the **product** of `g` and the number of **strictly increasing** **subsequences** of `nums` whose greatest common divisor (GCD) is exactly `g`.

Return the **sum** of **beauty** values for all positive integers `g`.

Since the answer could be very large, return it modulo `10^9 + 7`.

 

**Example 1:**

**Input:** nums = [1,2,3]

**Output:** 10

**Explanation:**

All strictly increasing subsequences and their GCDs are:

	
		
			Subsequence
			GCD
		
	
	
		
			[1]
			1
		
		
			[2]
			2
		
		
			[3]
			3
		
		
			[1,2]
			1
		
		
			[1,3]
			1
		
		
			[2,3]
			1
		
		
			[1,2,3]
			1
		
	

Calculating beauty for each GCD:

	
		
			GCD
			Count of subsequences
			Beauty (GCD × Count)
		
	
	
		
			1
			5
			1 × 5 = 5
		
		
			2
			1
			2 × 1 = 2
		
		
			3
			1
			3 × 1 = 3
		
	

Total beauty is `5 + 2 + 3 = 10`.

**Example 2:**

**Input:** nums = [4,6]

**Output:** 12

**Explanation:**

All strictly increasing subsequences and their GCDs are:

	
		
			Subsequence
			GCD
		
	
	
		
			[4]
			4
		
		
			[6]
			6
		
		
			[4,6]
			2
		
	

Calculating beauty for each GCD:

	
		
			GCD
			Count of subsequences
			Beauty (GCD × Count)
		
	
	
		
			2
			1
			2 × 1 = 2
		
		
			4
			1
			4 × 1 = 4
		
		
			6
			1
			6 × 1 = 6
		
	

Total beauty is `2 + 4 + 6 = 12`.

 

**Constraints:**

	- `1 <= n == nums.length <= 10^4`

	- `1 <= nums[i] <= 7 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/sum-of-beautiful-subsequences/) | [Solutions](https://leetcode.com/problems/sum-of-beautiful-subsequences/)

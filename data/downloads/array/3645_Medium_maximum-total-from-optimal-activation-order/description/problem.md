# [3645. Maximum Total from Optimal Activation Order](https://leetcode.com/problems/maximum-total-from-optimal-activation-order/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 73 | 48 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `amazon`

## Description

You are given two integer arrays `value` and `limit`, both of length `n`.

Initially, all elements are **inactive**. You may activate them in any order.

	- To activate an inactive element at index `i`, the number of **currently** active elements must be **strictly less** than `limit[i]`.

	- When you activate the element at index `i`, it adds `value[i]` to the **total** activation value (i.e., the sum of `value[i]` for all elements that have undergone activation operations).

	- After each activation, if the number of **currently** active elements becomes `x`, then **all** elements `j` with `limit[j] 
	
		
			Step
			Activated `i`
			`value[i]`
			Active Before `i`
			Active After `i`
			Becomes Inactive `j`
			Inactive Elements
			Total
		
	
	
		
			1
			1
			5
			0
			1
			`j = 1` as `limit[1] = 1`
			[1]
			5
		
		
			2
			0
			3
			0
			1
			-
			[1]
			8
		
		
			3
			2
			8
			1
			2
			`j = 0` as `limit[0] = 2`
			[0, 1]
			16
		
	

Thus, the maximum possible total is 16.

**Example 2:**

**Input:** value = [4,2,6], limit = [1,1,1]

**Output:** 6

**Explanation:**

One optimal activation order is:

	
		
			Step
			Activated `i`
			`value[i]`
			Active Before `i`
			Active After `i`
			Becomes Inactive `j`
			Inactive Elements
			Total
		
	
	
		
			1
			2
			6
			0
			1
			`j = 0, 1, 2` as `limit[j] = 1`
			[0, 1, 2]
			6
		
	

Thus, the maximum possible total is 6.

**Example 3:**

**Input:** value = [4,1,5,2], limit = [3,3,2,3]

**Output:** 12

**Explanation:**

One optimal activation order is:​​​​​​​**​​​​​​​**

	
		
			Step
			Activated `i`
			`value[i]`
			Active Before `i`
			Active After `i`
			Becomes Inactive `j`
			Inactive Elements
			Total
		
	
	
		
			1
			2
			5
			0
			1
			-
			[ ]
			5
		
		
			2
			0
			4
			1
			2
			`j = 2` as `limit[2] = 2`
			[2]
			9
		
		
			3
			1
			1
			1
			2
			-
			[2]
			10
		
		
			4
			3
			2
			2
			3
			`j = 0, 1, 3` as `limit[j] = 3`
			[0, 1, 2, 3]
			12
		
	

Thus, the maximum possible total is 12.

 

**Constraints:**

	- `1 <= n == value.length == limit.length <= 10^5`

	- `1 <= value[i] <= 10^5`​​​​​​​

	- `1 <= limit[i] <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-total-from-optimal-activation-order/) | [Solutions](https://leetcode.com/problems/maximum-total-from-optimal-activation-order/)

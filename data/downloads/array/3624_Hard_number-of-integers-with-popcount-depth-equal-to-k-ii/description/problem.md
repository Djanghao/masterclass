# [3624. Number of Integers With Popcount-Depth Equal to K II](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 33 | 9 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree)


## Description

You are given an integer array `nums`.

For any positive integer `x`, define the following sequence:

	- `p_0 = x`

	- `p_i+1 = popcount(p_i)` for all `i >= 0`, where `popcount(y)` is the number of set bits (1's) in the binary representation of `y`.

This sequence will eventually reach the value 1.

The **popcount-depth** of `x` is defined as the **smallest** integer `d >= 0` such that `p_d = 1`.

For example, if `x = 7` (binary representation `"111"`). Then, the sequence is: `7 &rarr; 3 &rarr; 2 &rarr; 1`, so the popcount-depth of 7 is 3.

You are also given a 2D integer array `queries`, where each `queries[i]` is either:

	- `[1, l, r, k]` - **Determine** the number of indices `j` such that `l 
	
		
			`i`
			`queries[i]`
			`nums`
			binary(`nums`)
			popcount-

			depth
			`[l, r]`
			`k`
			Valid

			`nums[j]`
			updated

			`nums`
			Answer
		
	
	
		
			0
			[1,0,1,1]
			[2,4]
			[10, 100]
			[1, 1]
			[0, 1]
			1
			[0, 1]
			&mdash;
			2
		
		
			1
			[2,1,1]
			[2,4]
			[10, 100]
			[1, 1]
			&mdash;
			&mdash;
			&mdash;
			[2,1]
			&mdash;
		
		
			2
			[1,0,1,0]
			[2,1]
			[10, 1]
			[1, 0]
			[0, 1]
			0
			[1]
			&mdash;
			1
		
	

Thus, the final `answer` is `[2, 1]`.

**Example 2:**

**Input:** nums = [3,5,6], queries = [[1,0,2,2],[2,1,4],[1,1,2,1],[1,0,1,0]]

**Output:** [3,1,0]

**Explanation:**

	
		
			`i`
			`queries[i]`
			`nums`
			binary(`nums`)
			popcount-

			depth
			`[l, r]`
			`k`
			Valid

			`nums[j]`
			updated

			`nums`
			Answer
		
	
	
		
			0
			[1,0,2,2]
			[3, 5, 6]
			[11, 101, 110]
			[2, 2, 2]
			[0, 2]
			2
			[0, 1, 2]
			&mdash;
			3
		
		
			1
			[2,1,4]
			[3, 5, 6]
			[11, 101, 110]
			[2, 2, 2]
			&mdash;
			&mdash;
			&mdash;
			[3, 4, 6]
			&mdash;
		
		
			2
			[1,1,2,1]
			[3, 4, 6]
			[11, 100, 110]
			[2, 1, 2]
			[1, 2]
			1
			[1]
			&mdash;
			1
		
		
			3
			[1,0,1,0]
			[3, 4, 6]
			[11, 100, 110]
			[2, 1, 2]
			[0, 1]
			0
			[]
			&mdash;
			0
		
	

Thus, the final `answer` is `[3, 1, 0]`.

**Example 3:**

**Input:** nums = [1,2], queries = [[1,0,1,1],[2,0,3],[1,0,0,1],[1,0,0,2]]

**Output:** [1,0,1]

**Explanation:**

	
		
			`i`
			`queries[i]`
			`nums`
			binary(`nums`)
			popcount-

			depth
			`[l, r]`
			`k`
			Valid

			`nums[j]`
			updated

			`nums`
			Answer
		
	
	
		
			0
			[1,0,1,1]
			[1, 2]
			[1, 10]
			[0, 1]
			[0, 1]
			1
			[1]
			&mdash;
			1
		
		
			1
			[2,0,3]
			[1, 2]
			[1, 10]
			[0, 1]
			&mdash;
			&mdash;
			&mdash;
			[3, 2]
			 
		
		
			2
			[1,0,0,1]
			[3, 2]
			[11, 10]
			[2, 1]
			[0, 0]
			1
			[]
			&mdash;
			0
		
		
			3
			[1,0,0,2]
			[3, 2]
			[11, 10]
			[2, 1]
			[0, 0]
			2
			[0]
			&mdash;
			1
		
	

Thus, the final `answer` is `[1, 0, 1]`.

 

**Constraints:**

	- `1 `queries[i] == [1, l, r, k]` or,

		- `queries[i] == [2, idx, val]`

		- `0

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-ii/) | [Solutions](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-ii/)

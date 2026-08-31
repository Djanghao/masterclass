# [3636. Threshold Majority Queries](https://leetcode.com/problems/threshold-majority-queries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 33 | 10 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`counting`](https://leetcode.com/tag/counting), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `facebook`, `google`, `amazon`, `adobe`

## Description

You are given an integer array `nums` of length `n` and an array `queries`, where `queries[i] = [l_i, r_i, threshold_i]`.

Return an array of integers ans where ans[i] is equal to the element in the subarray nums[li...ri] that appears **at least** thresholdi times, selecting the element with the **highest** frequency (choosing the **smallest** in case of a tie), or -1 if no such element *exists*.

 

**Example 1:**

**Input:** nums = [1,1,2,2,1,1], queries = [[0,5,4],[0,3,3],[2,3,2]]

**Output:** [1,-1,2]

**Explanation:**

	
		
			Query
			Sub-array
			Threshold
			Frequency table
			Answer
		
	
	
		
			[0, 5, 4]
			[1, 1, 2, 2, 1, 1]
			4
			1 &rarr; 4, 2 &rarr; 2
			1
		
		
			[0, 3, 3]
			[1, 1, 2, 2]
			3
			1 &rarr; 2, 2 &rarr; 2
			-1
		
		
			[2, 3, 2]
			[2, 2]
			2
			2 &rarr; 2
			2
		
	

**Example 2:**

**Input:** nums = [3,2,3,2,3,2,3], queries = [[0,6,4],[1,5,2],[2,4,1],[3,3,1]]

**Output:** [3,2,3,2]

**Explanation:**

	
		
			Query
			Sub-array
			Threshold
			Frequency table
			Answer
		
	
	
		
			[0, 6, 4]
			[3, 2, 3, 2, 3, 2, 3]
			4
			3 &rarr; 4, 2 &rarr; 3
			3
		
		
			[1, 5, 2]
			[2, 3, 2, 3, 2]
			2
			2 &rarr; 3, 3 &rarr; 2
			2
		
		
			[2, 4, 1]
			[3, 2, 3]
			1
			3 &rarr; 2, 2 &rarr; 1
			3
		
		
			[3, 3, 1]
			[2]
			1
			2 &rarr; 1
			2
		
	

 

**Constraints:**

	1 4
	1 9
	1 4
	queries[i] = [li, ri, thresholdi]
	0 i i 
	1 i i - li + 1

---

**Links:** [Submissions](https://leetcode.com/problems/threshold-majority-queries/) | [Solutions](https://leetcode.com/problems/threshold-majority-queries/)

# [3725. Count Ways to Choose Coprime Integers from Rows](https://leetcode.com/problems/count-ways-to-choose-coprime-integers-from-rows/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 58 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`matrix`](https://leetcode.com/tag/matrix), [`combinatorics`](https://leetcode.com/tag/combinatorics), [`number-theory`](https://leetcode.com/tag/number-theory)


## Description

You are given a `m x n` matrix `mat` of positive integers.

Return an integer denoting the number of ways to choose **exactly one** integer from each row of `mat` such that the **greatest common divisor** of all chosen integers is 1.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

**Input:** mat = [[1,2],[3,4]]

**Output:** 3

**Explanation:**

	
		
			Chosen integer in the first row
			Chosen integer in the second row
			Greatest common divisor of chosen integers
		
		
			1
			3
			1
		
		
			1
			4
			1
		
		
			2
			3
			1
		
		
			2
			4
			2
		
	

3 of these combinations have a greatest common divisor of 1. Therefore, the answer is 3.

**Example 2:**

**Input:** mat = [[2,2],[2,2]]

**Output:** 0

**Explanation:**

Every combination has a greatest common divisor of 2. Therefore, the answer is 0.

 

**Constraints:**

	- `1 <= m == mat.length <= 150`

	- `1 <= n == mat[i].length <= 150`

	- `1 <= mat[i][j] <= 150`

---

**Links:** [Submissions](https://leetcode.com/problems/count-ways-to-choose-coprime-integers-from-rows/) | [Solutions](https://leetcode.com/problems/count-ways-to-choose-coprime-integers-from-rows/)

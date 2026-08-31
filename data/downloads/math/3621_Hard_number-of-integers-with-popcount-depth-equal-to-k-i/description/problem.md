# [3621. Number of Integers With Popcount-Depth Equal to K I](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 48 | 4 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`combinatorics`](https://leetcode.com/tag/combinatorics)


## Description

You are given two integers `n` and `k`.

For any positive integer `x`, define the following sequence:

	- `p_0 = x`

	- `p_i+1 = popcount(p_i)` for all `i >= 0`, where `popcount(y)` is the number of set bits (1's) in the binary representation of `y`.

This sequence will eventually reach the value 1.

The **popcount-depth** of `x` is defined as the **smallest** integer `d >= 0` such that `p_d = 1`.

For example, if `x = 7` (binary representation `"111"`). Then, the sequence is: `7 &rarr; 3 &rarr; 2 &rarr; 1`, so the popcount-depth of 7 is 3.

Your task is to determine the number of integers in the range `[1, n]` whose popcount-depth is **exactly** equal to `k`.

Return the number of such integers.

 

**Example 1:**

**Input:** n = 4, k = 1

**Output:** 2

**Explanation:**

The following integers in the range `[1, 4]` have popcount-depth exactly equal to 1:

	
		
			x
			Binary
			Sequence
		
	
	
		
			2
			`"10"`
			`2 &rarr; 1`
		
		
			4
			`"100"`
			`4 &rarr; 1`
		
	

Thus, the answer is 2.

**Example 2:**

**Input:** n = 7, k = 2

**Output:** 3

**Explanation:**

The following integers in the range `[1, 7]` have popcount-depth exactly equal to 2:

	
		
			x
			Binary
			Sequence
		
	
	
		
			3
			`"11"`
			`3 &rarr; 2 &rarr; 1`
		
		
			5
			`"101"`
			`5 &rarr; 2 &rarr; 1`
		
		
			6
			`"110"`
			`6 &rarr; 2 &rarr; 1`
		
	

Thus, the answer is 3.

 

**Constraints:**

	- `1 <= n <= 10^15`

	- `0 <= k <= 5`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-i/) | [Solutions](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-i/)

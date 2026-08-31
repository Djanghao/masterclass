# [3449. Maximize the Minimum Game Score](https://leetcode.com/problems/maximize-the-minimum-game-score/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 50 | 6 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`greedy`](https://leetcode.com/tag/greedy)


## Description

You are given an array `points` of size `n` and an integer `m`. There is another array `gameScore` of size `n`, where `gameScore[i]` represents the score achieved at the `i^th` game. Initially, `gameScore[i] == 0` for all `i`.

You start at index -1, which is outside the array (before the first position at index 0). You can make **at most** `m` moves. In each move, you can either:

	- Increase the index by 1 and add `points[i]` to `gameScore[i]`.

	- Decrease the index by 1 and add `points[i]` to `gameScore[i]`.

**Note** that the index must always remain within the bounds of the array after the first move.

Return the **maximum possible minimum** value in `gameScore` after **at most** `m` moves.

 

**Example 1:**

**Input:** points = [2,4], m = 3

**Output:** 4

**Explanation:**

Initially, index `i = -1` and `gameScore = [0, 0]`.

	
		
			Move
			Index
			gameScore
		
	
	
		
			Increase `i`
			0
			`[2, 0]`
		
		
			Increase `i`
			1
			`[2, 4]`
		
		
			Decrease `i`
			0
			`[4, 4]`
		
	

The minimum value in `gameScore` is 4, and this is the maximum possible minimum among all configurations. Hence, 4 is the output.

**Example 2:**

**Input:** points = [1,2,3], m = 5

**Output:** 2

**Explanation:**

Initially, index `i = -1` and `gameScore = [0, 0, 0]`.

	
		
			Move
			Index
			gameScore
		
	
	
		
			Increase `i`
			0
			`[1, 0, 0]`
		
		
			Increase `i`
			1
			`[1, 2, 0]`
		
		
			Decrease `i`
			0
			`[2, 2, 0]`
		
		
			Increase `i`
			1
			`[2, 4, 0]`
		
		
			Increase `i`
			2
			`[2, 4, 3]`
		
	

The minimum value in `gameScore` is 2, and this is the maximum possible minimum among all configurations. Hence, 2 is the output.

 

**Constraints:**

	- `2 <= n == points.length <= 5 * 10^4`

	- `1 <= points[i] <= 10^6`

	- `1 <= m <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-the-minimum-game-score/) | [Solutions](https://leetcode.com/problems/maximize-the-minimum-game-score/)

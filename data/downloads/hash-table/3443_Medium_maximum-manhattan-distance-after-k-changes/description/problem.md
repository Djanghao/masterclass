# [3443. Maximum Manhattan Distance After K Changes](https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 597 | 69 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `microsoft`, `facebook`, `uber`

## Description

You are given a string `s` consisting of the characters `'N'`, `'S'`, `'E'`, and `'W'`, where `s[i]` indicates movements in an infinite grid:

	- `'N'` : Move north by 1 unit.

	- `'S'` : Move south by 1 unit.

	- `'E'` : Move east by 1 unit.

	- `'W'` : Move west by 1 unit.

Initially, you are at the origin `(0, 0)`. You can change **at most** `k` characters to any of the four directions.

Find the **maximum** **Manhattan distance** from the origin that can be achieved **at any time** while performing the movements **in order**.

The **Manhattan Distance** between two cells `(x_i, y_i)` and `(x_j, y_j)` is `|x_i - x_j| + |y_i - y_j|`.

 

**Example 1:**

**Input:** s = "NWSE", k = 1

**Output:** 3

**Explanation:**

Change `s[2]` from `'S'` to `'N'`. The string `s` becomes `"NWNE"`.

	
		
			Movement
			Position (x, y)
			Manhattan Distance
			Maximum
		
	
	
		
			s[0] == 'N'
			(0, 1)
			0 + 1 = 1
			1
		
		
			s[1] == 'W'
			(-1, 1)
			1 + 1 = 2
			2
		
		
			s[2] == 'N'
			(-1, 2)
			1 + 2 = 3
			3
		
		
			s[3] == 'E'
			(0, 2)
			0 + 2 = 2
			3
		
	

The maximum Manhattan distance from the origin that can be achieved is 3. Hence, 3 is the output.

**Example 2:**

**Input:** s = "NSWWEW", k = 3

**Output:** 6

**Explanation:**

Change `s[1]` from `'S'` to `'N'`, and `s[4]` from `'E'` to `'W'`. The string `s` becomes `"NNWWWW"`.

The maximum Manhattan distance from the origin that can be achieved is 6. Hence, 6 is the output.

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `0 <= k <= s.length`

	- `s` consists of only `'N'`, `'S'`, `'E'`, and `'W'`.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/) | [Solutions](https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/)

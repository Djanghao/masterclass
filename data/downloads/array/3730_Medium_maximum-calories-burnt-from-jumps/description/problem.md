# [3730. Maximum Calories Burnt from Jumps](https://leetcode.com/problems/maximum-calories-burnt-from-jumps/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5 | 1 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`

## Description

You are given an integer array `heights` of size `n`, where `heights[i]` represents the height of the `i^th` block in an exercise routine.

You start on the ground (height 0) and **must** jump onto each block **exactly once** in any order.

	- The **calories burned** for a jump from a block of height `a` to a block of height `b` is `(a - b)^2`.

	- The **calories burned** for the first jump from the ground to the chosen first block `heights[i]` is `(0 - heights[i])^2`.

Return the **maximum** total calories you can burn by selecting an optimal jumping sequence.

**Note:** Once you jump onto the first block, you cannot return to the ground.

 

**Example 1:**

**Input:** heights = [1,7,9]

**Output:** 181

**Explanation:**​​​​​​​

The optimal sequence is `[9, 1, 7]`.

	- Initial jump from the ground to `heights[2] = 9`: `(0 - 9)^2 = 81`.

	- Next jump to `heights[0] = 1`: `(9 - 1)^2 = 64`.

	- Final jump to `heights[1] = 7`: `(1 - 7)^2 = 36`.

Total calories burned = `81 + 64 + 36 = 181`.

**Example 2:**

**Input:** heights = [5,2,4]

**Output:** 38

**Explanation:**

The optimal sequence is `[5, 2, 4]`.

	- Initial jump from the ground to `heights[0] = 5`: `(0 - 5)^2 = 25`.

	- Next jump to `heights[1] = 2`: `(5 - 2)^2 = 9`.

	- Final jump to `heights[2] = 4`: `(2 - 4)^2 = 4`.

Total calories burned = `25 + 9 + 4 = 38`.

**Example 3:**

**Input:** heights = [3,3]

**Output:** 9

**Explanation:**

The optimal sequence is `[3, 3]`.

	- Initial jump from the ground to `heights[0] = 3`: `(0 - 3)^2 = 9`.

	- Next jump to `heights[1] = 3`: `(3 - 3)^2 = 0`.

Total calories burned = `9 + 0 = 9`.

 

**Constraints:**

	- `1 <= n == heights.length <= 10^5`

	- `1 <= heights[i] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-calories-burnt-from-jumps/) | [Solutions](https://leetcode.com/problems/maximum-calories-burnt-from-jumps/)

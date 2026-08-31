# [3454. Separate Squares II](https://leetcode.com/problems/separate-squares-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 23 | 6 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`line-sweep`](https://leetcode.com/tag/line-sweep)

**Companies:** `google`

## Description

You are given a 2D integer array `squares`. Each `squares[i] = [x_i, y_i, l_i]` represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

Find the **minimum** y-coordinate value of a horizontal line such that the total area covered by squares above the line *equals* the total area covered by squares below the line.

Answers within `10^-5` of the actual answer will be accepted.

**Note**: Squares **may** overlap. Overlapping areas should be counted **only once** in this version.

 

**Example 1:**

**Input:** squares = [[0,0,1],[2,2,1]]

**Output:** 1.00000

**Explanation:**

![image](./images/0.png)

Any horizontal line between `y = 1` and `y = 2` results in an equal split, with 1 square unit above and 1 square unit below. The minimum y-value is 1.

**Example 2:**

**Input:** squares = [[0,0,2],[1,1,1]]

**Output:** 1.00000

**Explanation:**

![image](./images/1.png)

Since the blue square overlaps with the red square, it will not be counted again. Thus, the line `y = 1` splits the squares into two equal parts.

 

**Constraints:**

	- `1 <= squares.length <= 5 * 10^4`

	- `squares[i] = [x_i, y_i, l_i]`

	- `squares[i].length == 3`

	- `0 <= x_i, y_i <= 10^9`

	- `1 <= l_i <= 10^9`

	- The total area of all the squares will not exceed `10^15`.

---

**Links:** [Submissions](https://leetcode.com/problems/separate-squares-ii/) | [Solutions](https://leetcode.com/problems/separate-squares-ii/)

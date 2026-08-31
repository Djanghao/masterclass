# [1779. Find Nearest Point That Has the Same X or Y Coordinate](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 876 | 190 |

**Tags:** [`array`](https://leetcode.com/tag/array)

**Companies:** `doordash`, `amazon`

## Description

You are given two integers, `x` and `y`, which represent your current location on a Cartesian grid: `(x, y)`. You are also given an array `points` where each `points[i] = [a_i, b_i]` represents that a point exists at `(a_i, b_i)`. A point is **valid** if it shares the same x-coordinate or the same y-coordinate as your location.

Return *the index **(0-indexed)** of the **valid** point with the smallest **Manhattan distance** from your current location*. If there are multiple, return *the valid point with the **smallest** index*. If there are no valid points, return `-1`.

The **Manhattan distance** between two points `(x_1, y_1)` and `(x_2, y_2)` is `abs(x_1 - x_2) + abs(y_1 - y_2)`.

 

**Example 1:**

```

Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
Output: 2
Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
```

**Example 2:**

```

Input: x = 3, y = 4, points = [[3,4]]
Output: 0
Explanation: The answer is allowed to be on the same location as your current location.
```

**Example 3:**

```

Input: x = 3, y = 4, points = [[2,3]]
Output: -1
Explanation: There are no valid points.
```

 

**Constraints:**

	- `1 <= points.length <= 10^4`

	- `points[i].length == 2`

	- `1 <= x, y, a_i, b_i <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/) | [Solutions](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

# [1036. Escape a Large Maze](https://leetcode.com/problems/escape-a-large-maze/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 705 | 173 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `google`, `amazon`, `uipath`

## Description

There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are `(x, y)`.

We start at the `source = [s_x, s_y]` square and want to reach the `target = [t_x, t_y]` square. There is also an array of `blocked` squares, where each `blocked[i] = [x_i, y_i]` represents a blocked square with coordinates `(x_i, y_i)`.

Each move, we can walk one square north, east, south, or west if the square is **not** in the array of `blocked` squares. We are also not allowed to walk outside of the grid.

Return `true`* if and only if it is possible to reach the *`target`* square from the *`source`* square through a sequence of valid moves*.

 

**Example 1:**

```

Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
Output: false
Explanation: The target square is inaccessible starting from the source square because we cannot move.
We cannot move north or east because those squares are blocked.
We cannot move south or west because we cannot go outside of the grid.

```

**Example 2:**

```

Input: blocked = [], source = [0,0], target = [999999,999999]
Output: true
Explanation: Because there are no blocked cells, it is possible to reach the target square.

```

 

**Constraints:**

	- `0 <= blocked.length <= 200`

	- `blocked[i].length == 2`

	- `0 <= x_i, y_i < 10^6`

	- `source.length == target.length == 2`

	- `0 <= s_x, s_y, t_x, t_y < 10^6`

	- `source != target`

	- It is guaranteed that `source` and `target` are not blocked.

---

**Links:** [Submissions](https://leetcode.com/problems/escape-a-large-maze/) | [Solutions](https://leetcode.com/problems/escape-a-large-maze/)

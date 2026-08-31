# [1730. Shortest Path to Get Food](https://leetcode.com/problems/shortest-path-to-get-food/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 719 | 41 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `doordash`, `google`, `bloomberg`

## Description

You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.

You are given an `m x n` character matrix, `grid`, of these different types of cells:

	- `'*'` is your location. There is **exactly one **`'*'` cell.

	- `'#'` is a food cell. There may be **multiple** food cells.

	- `'O'` is free space, and you can travel through these cells.

	- `'X'` is an obstacle, and you cannot travel through these cells.

You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

Return *the **length** of the shortest path for you to reach **any** food cell*. If there is no path for you to reach food, return `-1`.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;]]
Output: 3
Explanation: It takes 3 steps to reach the food.

```

**Example 2:**

![image](./images/1.jpg)
```

Input: grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;X&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;#&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;]]
Output: -1
Explanation: It is not possible to reach the food.

```

**Example 3:**

![image](./images/2.jpg)
```

Input: grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;]]
Output: 6
Explanation: There can be multiple food cells. It only takes 6 steps to reach the bottom food.
```

**Example 4:**

```

Input: grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;]]
Output: 5
```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m, n <= 200`

	- `grid[row][col]` is `'*'`, `'X'`, `'O'`, or `'#'`.

	- The `grid` contains **exactly one** `'*'`.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-path-to-get-food/) | [Solutions](https://leetcode.com/problems/shortest-path-to-get-food/)

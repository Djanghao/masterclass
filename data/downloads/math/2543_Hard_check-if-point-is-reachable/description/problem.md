# [2543. Check if Point Is Reachable](https://leetcode.com/problems/check-if-point-is-reachable/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 261 | 52 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`number-theory`](https://leetcode.com/tag/number-theory)

**Companies:** `phonepe`

## Description

There exists an infinitely large grid. You are currently at point `(1, 1)`, and you need to reach the point `(targetX, targetY)` using a finite number of steps.

In one **step**, you can move from point `(x, y)` to any one of the following points:

	- `(x, y - x)`

	- `(x - y, y)`

	- `(2 * x, y)`

	- `(x, 2 * y)`

Given two integers `targetX` and `targetY` representing the X-coordinate and Y-coordinate of your final position, return `true` *if you can reach the point from* `(1, 1)` *using some number of steps, and *`false`* otherwise*.

 

**Example 1:**

```

Input: targetX = 6, targetY = 9
Output: false
Explanation: It is impossible to reach (6,9) from (1,1) using any sequence of moves, so false is returned.

```

**Example 2:**

```

Input: targetX = 4, targetY = 7
Output: true
Explanation: You can follow the path (1,1) -&gt; (1,2) -&gt; (1,4) -&gt; (1,8) -&gt; (1,7) -&gt; (2,7) -&gt; (4,7).

```

 

**Constraints:**

	- `1 <= targetX, targetY <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-point-is-reachable/) | [Solutions](https://leetcode.com/problems/check-if-point-is-reachable/)

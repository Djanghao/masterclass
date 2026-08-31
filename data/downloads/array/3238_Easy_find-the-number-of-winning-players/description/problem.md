# [3238. Find the Number of Winning Players](https://leetcode.com/problems/find-the-number-of-winning-players/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 96 | 26 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`

## Description

You are given an integer `n` representing the number of players in a game and a 2D array `pick` where `pick[i] = [x_i, y_i]` represents that the player `x_i` picked a ball of color `y_i`.

Player `i` **wins** the game if they pick **strictly more** than `i` balls of the **same** color. In other words,

	- Player 0 wins if they pick any ball.

	- Player 1 wins if they pick at least two balls of the *same* color.

	- ...

	- Player `i` wins if they pick at least `i + 1` balls of the *same* color.

Return the number of players who **win** the game.

**Note** that *multiple* players can win the game.

 

**Example 1:**

**Input:** n = 4, pick = [[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]]

**Output:** 2

**Explanation:**

Player 0 and player 1 win the game, while players 2 and 3 do not win.

**Example 2:**

**Input:** n = 5, pick = [[1,1],[1,2],[1,3],[1,4]]

**Output:** 0

**Explanation:**

No player wins the game.

**Example 3:**

**Input:** n = 5, pick = [[1,1],[2,4],[2,4],[2,4]]

**Output:** 1

**Explanation:**

Player 2 wins the game by picking 3 balls with color 4.

 

**Constraints:**

	- `2 <= n <= 10`

	- `1 <= pick.length <= 100`

	- `pick[i].length == 2`

	- `0 <= x_i <= n - 1 `

	- `0 <= y_i <= 10`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-number-of-winning-players/) | [Solutions](https://leetcode.com/problems/find-the-number-of-winning-players/)

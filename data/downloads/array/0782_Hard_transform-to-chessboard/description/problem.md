# [782. Transform to Chessboard](https://leetcode.com/problems/transform-to-chessboard/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 372 | 312 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `google`

## Description

You are given an `n x n` binary grid `board`. In each move, you can swap any two rows with each other, or any two columns with each other.

Return *the minimum number of moves to transform the board into a **chessboard board***. If the task is impossible, return `-1`.

A **chessboard board** is a board where no `0`'s and no `1`'s are 4-directionally adjacent.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
Explanation: One potential sequence of moves is shown.
The first move swaps the first and second column.
The second move swaps the second and third row.

```

**Example 2:**

![image](./images/1.jpg)
```

Input: board = [[0,1],[1,0]]
Output: 0
Explanation: Also note that the board with 0 in the top left corner, is also a valid chessboard.

```

**Example 3:**

![image](./images/2.jpg)
```

Input: board = [[1,0],[1,0]]
Output: -1
Explanation: No matter what sequence of moves you make, you cannot end with a valid chessboard.

```

 

**Constraints:**

	- `n == board.length`

	- `n == board[i].length`

	- `2 <= n <= 30`

	- `board[i][j]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/transform-to-chessboard/) | [Solutions](https://leetcode.com/problems/transform-to-chessboard/)

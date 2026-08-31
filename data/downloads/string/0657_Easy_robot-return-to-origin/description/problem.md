# [657. Robot Return to Origin](https://leetcode.com/problems/robot-return-to-origin/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 2559 | 751 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `goldman-sachs`, `google`

## Description

There is a robot starting at the position `(0, 0)`, the origin, on a 2D plane. Given a sequence of its moves, judge if this robot **ends up at **`(0, 0)` after it completes its moves.

You are given a string `moves` that represents the move sequence of the robot where `moves[i]` represents its `i^th` move. Valid moves are `'R'` (right), `'L'` (left), `'U'` (up), and `'D'` (down).

Return `true`* if the robot returns to the origin after it finishes all of its moves, or *`false`* otherwise*.

**Note**: The way that the robot is "facing" is irrelevant. `'R'` will always make the robot move to the right once, `'L'` will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 

**Example 1:**

```

Input: moves = &quot;UD&quot;
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

```

**Example 2:**

```

Input: moves = &quot;LL&quot;
Output: false
Explanation: The robot moves left twice. It ends up two &quot;moves&quot; to the left of the origin. We return false because it is not at the origin at the end of its moves.

```

 

**Constraints:**

	- `1 <= moves.length <= 2 * 10^4`

	- `moves` only contains the characters `'U'`, `'D'`, `'L'` and `'R'`.

---

**Links:** [Submissions](https://leetcode.com/problems/robot-return-to-origin/) | [Solutions](https://leetcode.com/problems/robot-return-to-origin/)

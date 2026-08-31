# [294. Flip Game II](https://leetcode.com/problems/flip-game-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 628 | 67 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking), [`memoization`](https://leetcode.com/tag/memoization), [`game-theory`](https://leetcode.com/tag/game-theory)

**Companies:** `google`

## Description

You are playing a Flip Game with your friend.

You are given a string `currentState` that contains only `'+'` and `'-'`. You and your friend take turns to flip **two consecutive** `"++"` into `"--"`. The game ends when a person can no longer make a move, and therefore the other person will be the winner.

Return `true` *if the starting player can **guarantee a win***, and `false` otherwise.

 

**Example 1:**

```

Input: currentState = &quot;++++&quot;
Output: true
Explanation: The starting player can guarantee a win by flipping the middle &quot;++&quot; to become &quot;+--+&quot;.

```

**Example 2:**

```

Input: currentState = &quot;+&quot;
Output: false

```

 

**Constraints:**

	- `1 <= currentState.length <= 60`

	- `currentState[i]` is either `'+'` or `'-'`.

	- There cannot be more than 20 consecutive `'+'`.

 

**Follow up:** Derive your algorithm's runtime complexity.

---

**Links:** [Submissions](https://leetcode.com/problems/flip-game-ii/) | [Solutions](https://leetcode.com/problems/flip-game-ii/)

# [2833. Furthest Point From Origin](https://leetcode.com/problems/furthest-point-from-origin/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 275 | 52 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `barclays`

## Description

You are given a string `moves` of length `n` consisting only of characters `'L'`, `'R'`, and `'_'`. The string represents your movement on a number line starting from the origin `0`.

In the `i^th` move, you can choose one of the following directions:

	- move to the left if `moves[i] = 'L'` or `moves[i] = '_'`

	- move to the right if `moves[i] = 'R'` or `moves[i] = '_'`

Return *the **distance from the origin** of the **furthest** point you can get to after *`n`* moves*.

 

**Example 1:**

```

Input: moves = &quot;L_RL__R&quot;
Output: 3
Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves &quot;LLRLLLR&quot;.

```

**Example 2:**

```

Input: moves = &quot;_R__LL_&quot;
Output: 5
Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves &quot;LRLLLLL&quot;.

```

**Example 3:**

```

Input: moves = &quot;_______&quot;
Output: 7
Explanation: The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves &quot;RRRRRRR&quot;.

```

 

**Constraints:**

	- `1 <= moves.length == n <= 50`

	- `moves` consists only of characters `'L'`, `'R'` and `'_'`.

---

**Links:** [Submissions](https://leetcode.com/problems/furthest-point-from-origin/) | [Solutions](https://leetcode.com/problems/furthest-point-from-origin/)

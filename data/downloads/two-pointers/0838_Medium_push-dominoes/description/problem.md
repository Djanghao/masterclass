# [838. Push Dominoes](https://leetcode.com/problems/push-dominoes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3940 | 277 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `anduril`, `google`, `amazon`, `facebook`

## Description

There are `n` dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string `dominoes` representing the initial state where:

	- `dominoes[i] = 'L'`, if the `i^th` domino has been pushed to the left,

	- `dominoes[i] = 'R'`, if the `i^th` domino has been pushed to the right, and

	- `dominoes[i] = '.'`, if the `i^th` domino has not been pushed.

Return *a string representing the final state*.

 

**Example 1:**

```

Input: dominoes = &quot;RR.L&quot;
Output: &quot;RR.L&quot;
Explanation: The first domino expends no additional force on the second domino.

```

**Example 2:**

![image](./images/0.png)
```

Input: dominoes = &quot;.L.R...LR..L..&quot;
Output: &quot;LL.RR.LLRRLL..&quot;

```

 

**Constraints:**

	- `n == dominoes.length`

	- `1 <= n <= 10^5`

	- `dominoes[i]` is either `'L'`, `'R'`, or `'.'`.

---

**Links:** [Submissions](https://leetcode.com/problems/push-dominoes/) | [Solutions](https://leetcode.com/problems/push-dominoes/)

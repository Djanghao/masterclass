# [842. Split Array into Fibonacci Sequence](https://leetcode.com/problems/split-array-into-fibonacci-sequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1175 | 308 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking)

**Companies:** `amazon`

## Description

You are given a string of digits `num`, such as `"123456579"`. We can split it into a Fibonacci-like sequence `[123, 456, 579]`.

Formally, a **Fibonacci-like** sequence is a list `f` of non-negative integers such that:

	- `0 = 3`, and

	- `f[i] + f[i + 1] == f[i + 2]` for all `0 <= i < f.length - 2`.

Note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number `0` itself.

Return any Fibonacci-like sequence split from `num`, or return `[]` if it cannot be done.

 

**Example 1:**

```

Input: num = &quot;1101111&quot;
Output: [11,0,11,11]
Explanation: The output [110, 1, 111] would also be accepted.

```

**Example 2:**

```

Input: num = &quot;112358130&quot;
Output: []
Explanation: The task is impossible.

```

**Example 3:**

```

Input: num = &quot;0123&quot;
Output: []
Explanation: Leading zeroes are not allowed, so &quot;01&quot;, &quot;2&quot;, &quot;3&quot; is not valid.

```

 

**Constraints:**

	- `1 <= num.length <= 200`

	- `num` contains only digits.

---

**Links:** [Submissions](https://leetcode.com/problems/split-array-into-fibonacci-sequence/) | [Solutions](https://leetcode.com/problems/split-array-into-fibonacci-sequence/)

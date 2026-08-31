# [990. Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3980 | 67 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `google`, `uipath`, `microsoft`, `sumologic`

## Description

You are given an array of strings `equations` that represent relationships between variables where each string `equations[i]` is of length `4` and takes one of two different forms: `"x_i==y_i"` or `"x_i!=y_i"`.Here, `x_i` and `y_i` are lowercase letters (not necessarily different) that represent one-letter variable names.

Return `true`* if it is possible to assign integers to variable names so as to satisfy all the given equations, or *`false`* otherwise*.

 

**Example 1:**

```

Input: equations = [&quot;a==b&quot;,&quot;b!=a&quot;]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.

```

**Example 2:**

```

Input: equations = [&quot;b==a&quot;,&quot;a==b&quot;]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.

```

 

**Constraints:**

	- `1 <= equations.length <= 500`

	- `equations[i].length == 4`

	- `equations[i][0]` is a lowercase letter.

	- `equations[i][1]` is either `'='` or `'!'`.

	- `equations[i][2]` is `'='`.

	- `equations[i][3]` is a lowercase letter.

---

**Links:** [Submissions](https://leetcode.com/problems/satisfiability-of-equality-equations/) | [Solutions](https://leetcode.com/problems/satisfiability-of-equality-equations/)

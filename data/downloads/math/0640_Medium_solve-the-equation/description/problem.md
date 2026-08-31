# [640. Solve the Equation](https://leetcode.com/problems/solve-the-equation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 541 | 850 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `amazon`

## Description

Solve a given equation and return the value of `'x'` in the form of a string `"x=#value"`. The equation contains only `'+'`, `'-'` operation, the variable `'x'` and its coefficient. You should return `"No solution"` if there is no solution for the equation, or `"Infinite solutions"` if there are infinite solutions for the equation.

If there is exactly one solution for the equation, we ensure that the value of `'x'` is an integer.

 

**Example 1:**

```

Input: equation = &quot;x+5-3+x=6+x-2&quot;
Output: &quot;x=2&quot;

```

**Example 2:**

```

Input: equation = &quot;x=x&quot;
Output: &quot;Infinite solutions&quot;

```

**Example 3:**

```

Input: equation = &quot;2x=x&quot;
Output: &quot;x=0&quot;

```

 

**Constraints:**

	- `3 <= equation.length <= 1000`

	- `equation` has exactly one `'='`.

	- `equation` consists of integers with an absolute value in the range `[0, 100]` without any leading zeros, and the variable `'x'`.

	- The input is generated that if there is a single solution, it will be an integer.

---

**Links:** [Submissions](https://leetcode.com/problems/solve-the-equation/) | [Solutions](https://leetcode.com/problems/solve-the-equation/)

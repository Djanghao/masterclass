# [1896. Minimum Cost to Change the Final Value of Expression](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 247 | 42 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `google`

## Description

You are given a **valid** boolean expression as a string `expression` consisting of the characters `'1'`,`'0'`,`'&'` (bitwise **AND** operator),`'|'` (bitwise **OR** operator),`'('`, and `')'`.

	- For example, `"()1|1"` and `"(1)&()"` are **not valid** while `"1"`, `"(((1))|(0))"`, and `"1|(0&(1))"` are **valid** expressions.

Return* the **minimum cost** to change the final value of the expression*.

	- For example, if `expression = "1|1|(0&0)&1"`, its **value** is `1|1|(0&0)&1 = 1|1|0&1 = 1|0&1 = 1&1 = 1`. We want to apply operations so that the** new** expression evaluates to `0`.

The **cost** of changing the final value of an expression is the **number of operations** performed on the expression. The types of **operations** are described as follows:

	- Turn a `'1'` into a `'0'`.

	- Turn a `'0'` into a `'1'`.

	- Turn a `'&'` into a `'|'`.

	- Turn a `'|'` into a `'&'`.

**Note:** `'&'` does **not** take precedence over `'|'` in the **order of calculation**. Evaluate parentheses **first**, then in **left-to-right** order.

 

**Example 1:**

```

Input: expression = &quot;1&amp;(0|1)&quot;
Output: 1
Explanation: We can turn &quot;1&amp;(0|1)&quot; into &quot;1&amp;(0&amp;1)&quot; by changing the &#39;|&#39; to a &#39;&amp;&#39; using 1 operation.
The new expression evaluates to 0. 

```

**Example 2:**

```

Input: expression = &quot;(0&amp;0)&amp;(0&amp;0&amp;0)&quot;
Output: 3
Explanation: We can turn &quot;(0&amp;0)&amp;(0&amp;0&amp;0)&quot; into &quot;(0|1)|(0&amp;0&amp;0)&quot; using 3 operations.
The new expression evaluates to 1.

```

**Example 3:**

```

Input: expression = &quot;(0|(1|0&amp;1))&quot;
Output: 1
Explanation: We can turn &quot;(0|(1|0&amp;1))&quot; into &quot;(0|(0|0&amp;1))&quot; using 1 operation.
The new expression evaluates to 0.
```

 

**Constraints:**

	- `1 <= expression.length <= 10^5`

	- `expression` only contains `'1'`,`'0'`,`'&'`,`'|'`,`'('`, and `')'`

	- All parentheses are properly matched.

	- There will be no empty parentheses (i.e: `"()"` is not a substring of `expression`).

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/) | [Solutions](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/)

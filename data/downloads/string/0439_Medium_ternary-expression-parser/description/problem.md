# [439. Ternary Expression Parser](https://leetcode.com/problems/ternary-expression-parser/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 512 | 74 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`recursion`](https://leetcode.com/tag/recursion)

**Companies:** `snapchat`

## Description

Given a string `expression` representing arbitrarily nested ternary expressions, evaluate the expression, and return *the result of it*.

You can always assume that the given expression is valid and only contains digits, `'?'`, `':'`, `'T'`, and `'F'` where `'T'` is true and `'F'` is false. All the numbers in the expression are **one-digit** numbers (i.e., in the range `[0, 9]`).

The conditional expressions group right-to-left (as usual in most languages), and the result of the expression will always evaluate to either a digit, `'T'` or `'F'`.

 

**Example 1:**

```

Input: expression = &quot;T?2:3&quot;
Output: &quot;2&quot;
Explanation: If true, then result is 2; otherwise result is 3.

```

**Example 2:**

```

Input: expression = &quot;F?1:T?4:5&quot;
Output: &quot;4&quot;
Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:
&quot;(F ? 1 : (T ? 4 : 5))&quot; --&gt; &quot;(F ? 1 : 4)&quot; --&gt; &quot;4&quot;
or &quot;(F ? 1 : (T ? 4 : 5))&quot; --&gt; &quot;(T ? 4 : 5)&quot; --&gt; &quot;4&quot;

```

**Example 3:**

```

Input: expression = &quot;T?T?F:5:3&quot;
Output: &quot;F&quot;
Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:
&quot;(T ? (T ? F : 5) : 3)&quot; --&gt; &quot;(T ? F : 3)&quot; --&gt; &quot;F&quot;
&quot;(T ? (T ? F : 5) : 3)&quot; --&gt; &quot;(T ? F : 5)&quot; --&gt; &quot;F&quot;

```

 

**Constraints:**

	- `5 <= expression.length <= 10^4`

	- `expression` consists of digits, `'T'`, `'F'`, `'?'`, and `':'`.

	- It is **guaranteed** that `expression` is a valid ternary expression and that each number is a **one-digit number**.

---

**Links:** [Submissions](https://leetcode.com/problems/ternary-expression-parser/) | [Solutions](https://leetcode.com/problems/ternary-expression-parser/)

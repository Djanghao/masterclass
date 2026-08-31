# [1106. Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1901 | 84 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`recursion`](https://leetcode.com/tag/recursion)

**Companies:** `google`, `amazon`, `microsoft`, `facebook`, `hilabs`, `affinity`

## Description

A **boolean expression** is an expression that evaluates to either `true` or `false`. It can be in one of the following shapes:

	- `'t'` that evaluates to `true`.

	- `'f'` that evaluates to `false`.

	- `'!(subExpr)'` that evaluates to **the logical NOT** of the inner expression `subExpr`.

	- `'&(subExpr_1, subExpr_2, ..., subExpr_n)'` that evaluates to **the logical AND** of the inner expressions `subExpr_1, subExpr_2, ..., subExpr_n` where `n >= 1`.

	- `'|(subExpr_1, subExpr_2, ..., subExpr_n)'` that evaluates to **the logical OR** of the inner expressions `subExpr_1, subExpr_2, ..., subExpr_n` where `n >= 1`.

Given a string `expression` that represents a **boolean expression**, return *the evaluation of that expression*.

It is **guaranteed** that the given expression is valid and follows the given rules.

 

**Example 1:**

```

Input: expression = &quot;&amp;(|(f))&quot;
Output: false
Explanation: 
First, evaluate |(f) --&gt; f. The expression is now &quot;&amp;(f)&quot;.
Then, evaluate &amp;(f) --&gt; f. The expression is now &quot;f&quot;.
Finally, return false.

```

**Example 2:**

```

Input: expression = &quot;|(f,f,f,t)&quot;
Output: true
Explanation: The evaluation of (false OR false OR false OR true) is true.

```

**Example 3:**

```

Input: expression = &quot;!(&amp;(f,t))&quot;
Output: true
Explanation: 
First, evaluate &amp;(f,t) --&gt; (false AND true) --&gt; false --&gt; f. The expression is now &quot;!(f)&quot;.
Then, evaluate !(f) --&gt; NOT false --&gt; true. We return true.

```

 

**Constraints:**

	- `1 <= expression.length <= 2 * 10^4`

	- expression[i] is one following characters: `'('`, `')'`, `'&'`, `'|'`, `'!'`, `'t'`, `'f'`, and `','`.

---

**Links:** [Submissions](https://leetcode.com/problems/parsing-a-boolean-expression/) | [Solutions](https://leetcode.com/problems/parsing-a-boolean-expression/)

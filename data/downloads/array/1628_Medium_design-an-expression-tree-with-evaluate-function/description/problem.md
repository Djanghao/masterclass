# [1628. Design an Expression Tree With Evaluate Function](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 547 | 74 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`stack`](https://leetcode.com/tag/stack), [`tree`](https://leetcode.com/tag/tree), [`design`](https://leetcode.com/tag/design), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `amazon`

## Description

Given the `postfix` tokens of an arithmetic expression, build and return *the binary expression tree that represents this expression.*

Postfix notation is a notation for writing arithmetic expressions in which the operands (numbers) appear before their operators. For example, the postfix tokens of the expression `4*(5-(7+2))` are represented in the array `postfix = ["4","5","7","2","+","-","*"]`.

The class `Node` is an interface you should use to implement the binary expression tree. The returned tree will be tested using the `evaluate` function, which is supposed to evaluate the tree's value. You should not remove the `Node` class; however, you can modify it as you wish, and you can define other classes to implement it if needed.

A **binary expression tree** is a kind of binary tree used to represent arithmetic expressions. Each node of a binary expression tree has either zero or two children. Leaf nodes (nodes with 0 children) correspond to operands (numbers), and internal nodes (nodes with two children) correspond to the operators `'+'` (addition), `'-'` (subtraction), `'*'` (multiplication), and `'/'` (division).

It's guaranteed that no subtree will yield a value that exceeds `10^9` in absolute value, and all the operations are valid (i.e., no division by zero).

**Follow up:** Could you design the expression tree such that it is more modular? For example, is your design able to support additional operators without making changes to your existing `evaluate` implementation?

 

**Example 1:**

![image](./images/0.png)
```

Input: s = [&quot;3&quot;,&quot;4&quot;,&quot;+&quot;,&quot;2&quot;,&quot;*&quot;,&quot;7&quot;,&quot;/&quot;]
Output: 2
Explanation: this expression evaluates to the above binary tree with expression ((3+4)*2)/7) = 14/7 = 2.

```

**Example 2:**

![image](./images/1.png)
```

Input: s = [&quot;4&quot;,&quot;5&quot;,&quot;2&quot;,&quot;7&quot;,&quot;+&quot;,&quot;-&quot;,&quot;*&quot;]
Output: -16
Explanation: this expression evaluates to the above binary tree with expression 4*(5-(2+7)) = 4*(-4) = -16.

```

 

**Constraints:**

	- `1 <= s.length < 100`

	- `s.length` is odd.

	- `s` consists of numbers and the characters `'+'`, `'-'`, `'*'`, and `'/'`.

	- If `s[i]` is a number, its integer representation is no more than `10^5`.

	- It is guaranteed that `s` is a valid expression.

	- The absolute value of the result and intermediate values will not exceed `10^9`.

	- It is guaranteed that no expression will include division by zero.

---

**Links:** [Submissions](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/) | [Solutions](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/)

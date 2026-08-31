# [1440. Evaluate Boolean Expression](https://leetcode.com/problems/evaluate-boolean-expression/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 227 | 40 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `point72`

## Description

Table `Variables`:

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| name          | varchar |
| value         | int     |
+---------------+---------+
In SQL, name is the primary key for this table.
This table contains the stored variables and their values.

```

 

Table `Expressions`:

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| left_operand  | varchar |
| operator      | enum    |
| right_operand | varchar |
+---------------+---------+
In SQL, (left_operand, operator, right_operand) is the primary key for this table.
This table contains a boolean expression that should be evaluated.
operator is an enum that takes one of the values (&#39;&lt;&#39;, &#39;&gt;&#39;, &#39;=&#39;)
The values of left_operand and right_operand are guaranteed to be in the Variables table.

```

 

Evaluate the boolean expressions in `Expressions` table.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Variables table:
+------+-------+
| name | value |
+------+-------+
| x    | 66    |
| y    | 77    |
+------+-------+
Expressions table:
+--------------+----------+---------------+
| left_operand | operator | right_operand |
+--------------+----------+---------------+
| x            | &gt;        | y             |
| x            | &lt;        | y             |
| x            | =        | y             |
| y            | &gt;        | x             |
| y            | &lt;        | x             |
| x            | =        | x             |
+--------------+----------+---------------+
Output: 
+--------------+----------+---------------+-------+
| left_operand | operator | right_operand | value |
+--------------+----------+---------------+-------+
| x            | &gt;        | y             | false |
| x            | &lt;        | y             | true  |
| x            | =        | y             | false |
| y            | &gt;        | x             | true  |
| y            | &lt;        | x             | false |
| x            | =        | x             | true  |
+--------------+----------+---------------+-------+
Explanation: 
As shown, you need to find the value of each boolean expression in the table using the variables table.

```

---

**Links:** [Submissions](https://leetcode.com/problems/evaluate-boolean-expression/) | [Solutions](https://leetcode.com/problems/evaluate-boolean-expression/)

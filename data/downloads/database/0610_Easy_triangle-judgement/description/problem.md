# [610. Triangle Judgement](https://leetcode.com/problems/triangle-judgement/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 799 | 228 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `google`, `amazon`, `facebook`, `bloomberg`, `microsoft`

## Description

Table: `Triangle`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| x           | int  |
| y           | int  |
| z           | int  |
+-------------+------+
In SQL, (x, y, z) is the primary key column for this table.
Each row of this table contains the lengths of three line segments.

```

 

Report for every three line segments whether they can form a triangle.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Triangle table:
+----+----+----+
| x  | y  | z  |
+----+----+----+
| 13 | 15 | 30 |
| 10 | 20 | 15 |
+----+----+----+
Output: 
+----+----+----+----------+
| x  | y  | z  | triangle |
+----+----+----+----------+
| 13 | 15 | 30 | No       |
| 10 | 20 | 15 | Yes      |
+----+----+----+----------+

```

---

**Links:** [Submissions](https://leetcode.com/problems/triangle-judgement/) | [Solutions](https://leetcode.com/problems/triangle-judgement/)

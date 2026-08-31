# [612. Shortest Distance in a Plane](https://leetcode.com/problems/shortest-distance-in-a-plane/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 225 | 72 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Point2D`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| x           | int  |
| y           | int  |
+-------------+------+
(x, y) is the primary key column (combination of columns with unique values) for this table.
Each row of this table indicates the position of a point on the X-Y plane.

```

 

The distance between two points `p_1(x_1, y_1)` and `p_2(x_2, y_2)` is `sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)`.

Write a solution to report the shortest distance between any two points from the `Point2D` table. Round the distance to **two decimal points**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Point2D table:
+----+----+
| x  | y  |
+----+----+
| -1 | -1 |
| 0  | 0  |
| -1 | -2 |
+----+----+
Output: 
+----------+
| shortest |
+----------+
| 1.00     |
+----------+
Explanation: The shortest distance is 1.00 from point (-1, -1) to (-1, 2).

```

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-distance-in-a-plane/) | [Solutions](https://leetcode.com/problems/shortest-distance-in-a-plane/)

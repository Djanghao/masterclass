# MS SQL

**Author:** siyu14
**Votes:** 4
**Link:** [https://leetcode.com/problems/rectangles-area/solutions/769996/](https://leetcode.com/problems/rectangles-area/solutions/769996/)

---

#### Question
```
1459. Rectangles Area
Medium

46

72

Add to List

Share
SQL Schema
Table: Points

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| x_value       | int     |
| y_value       | int     |
+---------------+---------+
id is the primary key for this table.
Each point is represented as a 2D coordinate (x_value, y_value).
 

Write an SQL query to report all possible axis-aligned rectangles with non-zero area that can be formed by any two points in the Points table.

Each row in the result should contain three columns (p1, p2, area) where:

p1 and p2 are the id's of the two points that determine the opposite corners of a rectangle.
area is the area of the rectangle and must be non-zero.
Report the query in descending order by area first, then in ascending order by p1's id if there is a tie, then in ascending order by p2's id if there is another tie.

The query result format is in the following table:

 

Points table:
+----------+-------------+-------------+
| id       | x_value     | y_value     |
+----------+-------------+-------------+
| 1        | 2           | 7           |
| 2        | 4           | 8           |
| 3        | 2           | 10          |
+----------+-------------+-------------+

Result table:
+----------+-------------+-------------+
| p1       | p2          | area        |
+----------+-------------+-------------+
| 2        | 3           | 4           |
| 1        | 2           | 2           |
+----------+-------------+-------------+


The rectangle formed by p1 = 2 and p2 = 3 has an area equal to |4-2| * |8-10| = 4.
The rectangle formed by p1 = 1 and p2 = 2 has an area equal to |2-4| * |7-8| = 2.
Note that the rectangle formed by p1 = 1 and p2 = 3 is invalid because the area is 0.
```

#### Answer
##### Approach1
```SQL

/* Write your T-SQL query statement below */
select p1.id P1, p2.id P2, abs(p1.x_value - p2.x_value) * abs(p1.y_value - p2.y_value) AREA
            from points as p1
            join points as p2 on p1.id < p2.id
            where abs(p1.x_value - p2.x_value) * abs(p1.y_value - p2.y_value)!= 0
            order by 3 desc, 1, 2
```
##### Approach2
```SQL
select distinct p1.id P1, p2.id P2, abs(p1.x_value - p2.x_value) * abs(p1.y_value - p2.y_value) AREA from Points p1 join Points p2
on p1.x_value != p2.x_value and p1.y_value != p2.y_value and p1.id < p2.id
order by 3 desc, 1,2
```
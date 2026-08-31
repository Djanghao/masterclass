# Solution : Oracle - Inner Join

**Author:** anand-prakash
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangles-area/solutions/1706374/](https://leetcode.com/problems/rectangles-area/solutions/1706374/)

---

```
/* Write your PL/SQL query statement below */
SELECT p1.id as p1, 
       p2.id as p2, 
       abs((p1.x_value - p2.x_value) * (p1.y_value - p2.y_value)) as area
FROM points p1 INNER JOIN points p2 
ON p1.id < p2.id 
AND (p1.x_value != p2.x_value AND p1.y_value != p2.y_value)
ORDER BY 3 desc, 1,2

```

Step wise execution for understanding - 
```
select * from points p1 inner join points p2 on p1.id < p2.id;
+----+---------+---------+----+---------+---------+
| id | x_value | y_value | id | x_value | y_value |
+----+---------+---------+----+---------+---------+
|  1 |       2 |       7 |  2 |       4 |       8 |
|  1 |       2 |       7 |  3 |       2 |      10 |
|  2 |       4 |       8 |  3 |       2 |      10 |
+----+---------+---------+----+---------+---------+
(3 rows)

SELECT p1.id, p2.id, abs((p1.x_value - p2.x_value) * (p1.y_value - p2.y_value)) FROM points p1 inner join points p2 on p1.id < p2.id;
+----+----+-----+
| id | id | abs |
+----+----+-----+
|  1 |  2 |   2 |
|  1 |  3 |   0 |
|  2 |  3 |   4 |
+----+----+-----+
(3 rows)

SELECT p1.id, p2.id, abs((p1.x_value - p2.x_value) * (p1.y_value - p2.y_value)) FROM points p1 inner join points p2 on p1.id < p2.id and (p1.x_value != p2.x_value and p1.y_value != p2.y_value);
+----+----+-----+
| id | id | abs |
+----+----+-----+
|  1 |  2 |   2 |
|  2 |  3 |   4 |
+----+----+-----+
(2 rows)
```
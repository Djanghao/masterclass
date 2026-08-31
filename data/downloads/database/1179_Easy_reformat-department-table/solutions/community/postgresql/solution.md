# 🌟 PostgreSQL solution with FILTER 🚀 Explain performance issue

**Author:** MathieuSoysal
**Votes:** 6
**Link:** [https://leetcode.com/problems/reformat-department-table/solutions/5024317/](https://leetcode.com/problems/reformat-department-table/solutions/5024317/)

---


# Approachs

We have two approachs for this problem, the first the more used is :

## `CASE WHEN` solution

The more used solution is :

```PostgreSQL
SELECT 
    id, 
    MAX(CASE WHEN month = 'Jan' THEN revenue ELSE null END) AS Jan_Revenue,
    MAX(CASE WHEN month = 'Feb' THEN revenue ELSE null END) AS Feb_Revenue,
    MAX(CASE WHEN month = 'Mar' THEN revenue ELSE null END) AS Mar_Revenue,
    MAX(CASE WHEN month = 'Apr' THEN revenue ELSE null END) AS Apr_Revenue,
    MAX(CASE WHEN month = 'May' THEN revenue ELSE null END) AS May_Revenue,
    MAX(CASE WHEN month = 'Jun' THEN revenue ELSE null END) AS Jun_Revenue,
    MAX(CASE WHEN month = 'Jul' THEN revenue ELSE null END) AS Jul_Revenue,
    MAX(CASE WHEN month = 'Aug' THEN revenue ELSE null END) AS Aug_Revenue,
    MAX(CASE WHEN month = 'Sep' THEN revenue ELSE null END) AS Sep_Revenue,
    MAX(CASE WHEN month = 'Oct' THEN revenue ELSE null END) AS Oct_Revenue,
    MAX(CASE WHEN month = 'Nov' THEN revenue ELSE null END) AS Nov_Revenue,
    MAX(CASE WHEN month = 'Dec' THEN revenue ELSE null END) AS Dec_Revenue
FROM Department
GROUP BY id
```

____

But on PostgrSQL we have a clause designed to apply conditions to aggregate functions, `FILTER` clause. This clause make the query more concise and more efficient than CASE :

## `FILTER` solution
```
SELECT
  id,
  MAX(revenue) FILTER (WHERE month = 'Jan') AS Jan_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Feb') AS Feb_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Mar') AS Mar_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Apr') AS Apr_Revenue,
  MAX(revenue) FILTER (WHERE month = 'May') AS May_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Jun') AS Jun_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Jul') AS Jul_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Aug') AS Aug_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Sep') AS Sep_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Oct') AS Oct_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Nov') AS Nov_Revenue,
  MAX(revenue) FILTER (WHERE month = 'Dec') AS Dec_Revenue
FROM
  Department
GROUP BY
  id;
```

____

> Remember that the most readable and maintainable query is also an important factor to consider, especially in a team environment or when queries will be modified in the future.

___

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)
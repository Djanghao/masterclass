# Official Solution

**Link:** [https://leetcode.com/problems/top-travellers/solution/](https://leetcode.com/problems/top-travellers/solution/)

---

[TOC]

## Solution

--- 

### Overview

This is the type of question that you might want to slow down and pay attention to the details before writing: 

1. Since the question is asking for the distance travelled by each user and there may be users who have not travelled any distance, `LEFT JOIN` is needed so each user from the `Users` table will be included.

2. For those users who have not travelled, functions such as `IFNULL()` or `COALESCE()` are needed to return 0 instead of null for their total distance. The two functions are a little bit different, but for this question, they can be used interchangeably.

[IFNULL()](https://dev.mysql.com/doc/refman/5.7/en/flow-control-functions.html#function_ifnull): takes two arguments and returns the first one if it's not NULL or the second if the first one is NULL.

[COALESCE()](https://dev.mysql.com/doc/refman/5.7/en/comparison-operators.html#function_coalesce): takes two or more parameters and returns the first non-NULL parameter, or NULL if all parameters are NULL.

3. Since users might have the same name and `id` is the primary key for this table (which means the values in this column will be unique). We need to use `id` for `GROUP BY` to get the aggregated distance for each user. 

4. Don't forget to check the order required for the final output! This question requires two different types of order. 

### Approach: LEFT JOIN

#### Algorithm

1. Select the columns needed for the final output: `name` of the user, and the total `distance`; for users who do not have any rides, use `IFNULL()` or `COALESCE()` to return 0 for their distance
2. `JOIN` the two tables by user `id`
3. `GROUP` the result by `id` so each user has only one aggregated total distance. It's important to use `id` instead of `name` so the users with the same names will not be merged
4. `ORDER` the result by the 2nd column in descending order and the 1st column in ascending order per requested

#### Implementation

##### MySQL

```sql
SELECT 
    u.name, 
    IFNULL(SUM(distance),0) AS travelled_distance
FROM 
    Users u
LEFT JOIN 
    Rides r
ON 
    u.id = r.user_id
GROUP BY 
    u.id
ORDER BY 2 DESC, 1 ASC
```

-----
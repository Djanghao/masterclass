# Official Solution

**Link:** [https://leetcode.com/problems/apples-oranges/solution/](https://leetcode.com/problems/apples-oranges/solution/)

---

## Solution

--- 

### Overview

To do calculation within one column in a table, the most straightforward way is to select the same table twice by creating aliases or using self JOIN. 

Similarly, we can turn the original table into two separate tables with the same column, and then do calculations using these two columns.

Since this question has only two categories and the only calculation needed is to find the difference between two values, an easier way to solve this question is to get the sum of these two values. Before doing this, we need to keep one value positive as the original value and the other value negative (original value * -1), so the sum of these two values is the difference.

---

### Approach 1: Aliases or SELF JOIN

#### Algorithm

1. Select the columns needed for the final output: `sale_date` and `diff`, the difference between the two `sold_num` columns 
2. Use the same table twice by creating aliases or self join the original table
3. Make sure the two tables have the same `sale_date` but different categories
4. Group the result by each `sale_date` to get the unique difference by each `sale_date`, and order the final result by `sale_date`

#### Implementation

##### MySQL

##### Creating aliases

```sql
SELECT 
    a.sale_date, a.sold_num-b.sold_num AS diff
FROM
    Sales a, Sales b
WHERE 
    a.fruit IN ('apples') AND b.fruit IN ('oranges')
    AND a.sale_date = b.sale_date
GROUP BY 1
ORDER BY 1 
```

##### Using SELF JOIN 

```sql
SELECT 
    a.sale_date, a.sold_num-b.sold_num AS diff
FROM
    Sales a
JOIN
    Sales b
ON 
    a.sale_date = b.sale_date
AND 
    a.fruit IN ('apples') AND b.fruit IN ('oranges')
GROUP BY 1
ORDER BY 1 
```
---

### Approach 2: Create Two Separate Tables and Columns First

#### Algorithm

1. Select the columns needed for the final output: `sale_date` and `diff`, the difference between the two `sold_num` columns 
2. Create two tables separately by each category with subqueries or CTEs
3. Join the two separate tables by `sale_date`
4. Group the result by each `sale_date` to get the unique difference by each `sale_date`, and order the final result by `sale_date`

#### Implementation

##### MySQL

```sql
SELECT 
    a.sale_date, a.sold_num-b.sold_num AS diff
FROM 
    (SELECT sale_date, sold_num FROM Sales WHERE fruit IN ('apples'))a
JOIN
    (SELECT sale_date, sold_num FROM Sales WHERE fruit IN ('oranges'))b
ON 
    a.sale_date = b.sale_date
GROUP BY 1
ORDER BY 1
```

### Approach 3: Calculate With SUM(CASE WHEN)

#### Algorithm

1. `CASE WHEN` is used to filter the column `fruit` by categories
2. To get the `SUM` for each `sale_date`, we keep the `sold_num` from one category as its original value and turn the `sold_num` from the other category to negative by multiplying `-1`
3. Group the result by each `sale_date` to get the unique difference by each `sale_date`, and order the final result by `sale_date`

#### Implementation

##### MySQL

```sql
SELECT 
    sale_date,
    SUM(CASE WHEN fruit IN ('apples') THEN sold_num 
             WHEN fruit IN ('oranges') THEN (sold_num)*-1 
        END) AS diff
FROM 
    Sales
GROUP BY 1
ORDER BY 1
```
### Conclusion

In an interview (or with time constraints), the most straightforward way to do calculations within the same column is to create aliases or use self join, so the same column can be used more than once (approach 1). However, if the calculation is more complicated or more categories/filters are required, it might be easier to create separate tables first and apply the conditions before doing the final calculation (approach 2). 

----
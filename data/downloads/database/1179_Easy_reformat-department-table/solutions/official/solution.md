# Official Solution

**Link:** [https://leetcode.com/problems/reformat-department-table/solution/](https://leetcode.com/problems/reformat-department-table/solution/)

---

[TOC]

## Solution

---

### Overview

> **Problem reference:** Reformat the table by creating all month columns to represent `revenue` of each month for each `id`. If the `revenue` for the specific month is `null`, the value also would be `null`. Return the result table in any order.

From the output table, we need to create columns representing January to December. Then, group by the `id` to represent each month's `revenue`. We call this result a **pivot table**. **Pivot** is a technique to rotate the data as columns and to show the aggregated data grouped by these reformatted columns.

---

### Approach 1: `GROUP BY` with a conditional statement in the aggregate function

#### Intuition

We need to group the table with the `id` field because we want to know each month's `revenue` for each `id`. Also, we should use the aggregate function after grouping the table to choose the value to display. For instance, if the table looks like the one below, and if we use `GROUP BY` to group the table by `id` field, it raises an error because the database management system (DBMS) does not know which `revenue` data would be displayed because there are two `revenue` data `8000` and `6000`.

```
+------+---------+
| id   | revenue |
+------+---------+
| 1    | 8000    |
| 1    | 6000    |
+------+---------+
```

In this problem, we can separate each month using the conditional function in the aggregate function. For instance, if the `month` field is `"Jan"`, we could return the `revenue` field for January's revenue, and if not, we could return `null`. In this process, there could be more than one `null` data for each month.

For example, if we separate the month of example table with using conditional function, the result looks like the below.

```
+------+-------------+-------------+-------------+------+-------------+
| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ...  | Dec_Revenue |
+------+-------------+-------------+-------------+------+-------------+
| 1    | 8000        | null        | null        | ...  | null        |
| 1    | null        | 7000        | null        | ...  | null        |
| 1    | null        | null        | 6000        | ...  | null        |
| 2    | 9000        | null        | 6000        | ...  | null        |
| 3    | null        | 10000       | 6000        | ...  | null        |
+------+-------------+-------------+-------------+------+-------------+
```

As we can see, there are a lot of rows with `id = 1`. But we only need **not** `null` value for each month. An aggregate function can help us reduce them to only one row for each id.

As the table description, the group of (`id`, `month`) is the primary key. Hence, we know there could not be more than two valid `revenue` values for each month of each `id`, and we could get a `revenue` for each month by using aggregate function such as `SUM`, `MAX` or `MIN` because these functions ignore the `null` values.

#### Algorithm

1. Use `GROUP BY` to group the table by `id`.
2. Create each month with the aggregate function and inner conditional function.

#### Implementation

##### MySQL

```sql
SELECT
  id,
  SUM(IF (month = "Jan", revenue, null)) AS Jan_Revenue,
  SUM(IF (month = "Feb", revenue, null)) AS Feb_Revenue,
  SUM(IF (month = "Mar", revenue, null)) AS Mar_Revenue,
  SUM(IF (month = "Apr", revenue, null)) AS Apr_Revenue,
  SUM(IF (month = "May", revenue, null)) AS May_Revenue,
  SUM(IF (month = "Jun", revenue, null)) AS Jun_Revenue,
  SUM(IF (month = "Jul", revenue, null)) AS Jul_Revenue,
  SUM(IF (month = "Aug", revenue, null)) AS Aug_Revenue,
  SUM(IF (month = "Sep", revenue, null)) AS Sep_Revenue,
  SUM(IF (month = "Oct", revenue, null)) AS Oct_Revenue,
  SUM(IF (month = "Nov", revenue, null)) AS Nov_Revenue,
  SUM(IF (month = "Dec", revenue, null)) AS Dec_Revenue
FROM
  Department
GROUP BY
  id;
```

**Note:** We can use other aggregate functions to choose the `revenue` as we said the above. Also, we can use `CASE` or `IFNULL` function for the inner conditional function instead of `IF`, like one the below.

```sql
SELECT
  id,
  MIN(
    CASE
      WHEN month = "Jan" THEN revenue
    END
  ) AS Jan_Revenue,
  ...
FROM
  Department
GROUP BY
  id;
```

### Approach 2: `LEFT JOIN`

#### Intuition

This approach is inspired by [MSSQL Multiple joins, GroupBy and Pivot table solutions](https://leetcode.com/problems/reformat-department-table/discuss/382960/MSSQL-Multiple-joins-GroupBy-and-Pivot-table-solutions) authored by pogodin.

We can also join each month to the distinct `id` table. There could not be more than two joined columns because the group of (`id`, `month`) is the primary key. Thus, we do not need to group the table after using join. However, we need to use `LEFT OUTER JOIN`, not `INNER JOIN`, to display the `null` value, which means there is no revenue for that month. We can separate each month with `LEFT JOIN` and an `AS` keyword, which renames the table.

#### Algorithm

1. Create a temporary distinct `id` table with a subquery.
2. Use `LEFT JOIN` to join each month to the distinct `id` table from January to December.

#### Implementation

##### MySQL

```sql
SELECT
  Ids.id,
  January.revenue AS Jan_Revenue,
  Feburary.revenue AS Feb_Revenue,
  March.revenue AS Mar_Revenue,
  April.revenue AS Apr_Revenue,
  May.revenue AS May_Revenue,
  June.revenue AS Jun_Revenue,
  July.revenue AS Jul_Revenue,
  August.revenue AS Aug_Revenue,
  September.revenue AS Sep_Revenue,
  October.revenue AS Oct_Revenue,
  November.revenue AS Nov_Revenue,
  December.revenue AS Dec_Revenue
FROM
  (
    SELECT DISTINCT
      id
    FROM
      Department
  ) AS Ids
  LEFT JOIN Department AS January ON (
    Ids.id = January.id
    AND January.month = "Jan"
  )
  LEFT JOIN Department AS Feburary ON (
    Ids.id = Feburary.id
    AND Feburary.month = "Feb"
  )
  LEFT JOIN Department AS March ON (
    Ids.id = March.id
    AND March.month = "Mar"
  )
  LEFT JOIN Department AS April ON (
    Ids.id = April.id
    AND April.month = "Apr"
  )
  LEFT JOIN Department AS May ON (
    Ids.id = May.id
    AND May.month = "May"
  )
  LEFT JOIN Department AS June ON (
    Ids.id = June.id
    AND June.month = "Jun"
  )
  LEFT JOIN Department AS July ON (
    Ids.id = July.id
    AND July.month = "Jul"
  )
  LEFT JOIN Department AS August ON (
    Ids.id = August.id
    AND August.month = "Aug"
  )
  LEFT JOIN Department AS September ON (
    Ids.id = September.id
    AND September.month = "Sep"
  )
  LEFT JOIN Department AS October ON (
    Ids.id = October.id
    AND October.month = "Oct"
  )
  LEFT JOIN Department AS November ON (
    Ids.id = November.id
    AND November.month = "Nov"
  )
  LEFT JOIN Department AS December ON (
    Ids.id = December.id
    AND December.month = "Dec"
  );
```

---

### Conclusion

We recommend [Approach 1](#approach-1-group-by-with-a-conditional-statement-in-the-aggregate-function) due to its simplicity and performance.

If you use `JOIN` multiple times, like [Approach 2](#approach-2-left-join), the DBMS should check the tables as much as you use `JOIN`. However, if you use `GROUP BY`, it just check the table and group it once.

If you use the `EXPLAIN` keyword in front of each query to check how the DBMS works, you can compare how many rows as it needs to check to make a result. [Approach 1](#approach-1-group-by-with-a-conditional-statement-in-the-aggregate-function) takes 5 rows to make a result table with the example table. However, [Approach 2](#approach-2-left-join) takes 5 rows with every `JOIN` clause, which means it takes more than 60 rows to check because we use `JOIN` for every month, 12 times.
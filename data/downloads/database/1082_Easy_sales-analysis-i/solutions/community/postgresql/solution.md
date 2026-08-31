# 🌟Simplified, explained and perfomed PostgreSQL statement 🚀

**Author:** MathieuSoysal
**Votes:** 2
**Link:** [https://leetcode.com/problems/sales-analysis-i/solutions/4984688/](https://leetcode.com/problems/sales-analysis-i/solutions/4984688/)

---

# Approach
The SQL statement uses a *Common Table Expression (CTE)* to create a temporary result set named `total_sales`. Let's break down the statement into its components:

- **CTE Definition (WITH clause)**:

```sql
WITH total_sales AS (
    SELECT seller_id, SUM(price) AS total_sell
    FROM Sales
    GROUP BY seller_id
)
```
This part of the statement defines a *CTE* named `total_sales`. It selects two columns: `seller_id` and the sum of price (aliased as `total_sell`) from the `Sales` table. The results are grouped by `seller_id`, meaning the sum of price is calculated for each unique `seller_id`.

- **Main Query**:

```sql
SELECT seller_id FROM total_sales WHERE total_sell = (
    SELECT MAX(total_sell) FROM total_sales
);
```

After the CTE is defined, the main query selects the `seller_id` from the `total_sales` CTE where the `total_sell` value is equal to the  highest total sales.

# Complexity
- Time complexity:

If the `seller_id` is the index the time complexity is:
$$O(n)$$

Otherwise:

$$O(nlog(n))$$


# Code
```sql
WITH total_sales AS (
        SELECT seller_id, sum(price) AS total_sell
        FROM Sales
        GROUP BY seller_id
)

SELECT seller_id
FROM total_sales
WHERE total_sell = (SELECT MAX(total_sell) FROM total_sales);
```

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)
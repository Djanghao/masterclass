# 🌟 PostgreSQL solution 🚀 beats 85% with FILTER clause 🌠

**Author:** MathieuSoysal
**Votes:** 21
**Link:** [https://leetcode.com/problems/monthly-transactions-i/solutions/5034344/](https://leetcode.com/problems/monthly-transactions-i/solutions/5034344/)

---

# Explanation

The SQL query is doing several things:
- **Date Formatting**: `TO_CHAR(trans_date, 'YYYY-MM') AS month`
        It formats the trans_date column to a string that only includes the year and month (e.g., '2021-03'). This formatted date is then labeled as month.

 - **Grouping**: `GROUP BY month, country`
        The query groups the results by the formatted month and the country column. This means the output will contain one row for each unique combination of year-month and country.

-   **Counting Transactions**: `COUNT(*) AS trans_count`
        It counts the total number of transactions for each group (each unique year-month and country combination) and labels this count as trans_count.

- **Counting Approved Transactions**: `COUNT(state) FILTER (WHERE state = 'approved') AS approved_count`
        It counts the number of transactions where the state column is 'approved' for each group. This count is labeled as approved_count.

- **Summing Transaction Amounts**: `SUM(amount) AS trans_total_amount`
        It calculates the sum of the amount column for all transactions in each group, giving the total transaction amount as trans_total_amount.

- **Summing Approved Transaction Amounts**: `COALESCE(SUM(amount) FILTER (WHERE state = 'approved'), 0) AS approved_total_amount`
    - This part of the query sums the amounts only for transactions where the state is 'approved', within each group. The FILTER clause is used to apply the condition to the SUM function. 
    - The COALESCE function is used to ensure that if there are no approved transactions (and thus the sum would be NULL), it will instead return 0. This means approved_total_amount will always have a numeric value, avoiding NULL values in the result set.


# Code
```
SELECT TO_CHAR(trans_date, 'YYYY-MM') AS month,
            country,
            COUNT(*) AS trans_count, 
            COUNT(state) FILTER (WHERE state = 'approved') AS approved_count, 
            SUM(amount) AS trans_total_amount,
            COALESCE(SUM(amount) FILTER (WHERE state = 'approved'), 0) AS approved_total_amount
FROM Transactions
GROUP BY "month", country;
```

____

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in your favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)
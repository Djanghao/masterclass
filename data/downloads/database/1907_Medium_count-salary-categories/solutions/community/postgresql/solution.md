# Using UNNEST(). Beats 97.68% of users with PostgreSQL.

**Author:** user0990aY
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-salary-categories/solutions/4982357/](https://leetcode.com/problems/count-salary-categories/solutions/4982357/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Unnest will put the given values in array as rows. So, first unnest will create string column "category" with 3 rows i.e "Low Salary", "Average Salary", and "High Salary". and second unnest will put the 3 sums next to the first column "category" rows.

Here SUM functions are self-explanatory I hope.

# Code
```
-- Write your PostgreSQL query statement below
SELECT 
    unnest(array['Low Salary', 'Average Salary', 'High Salary']) AS "category",
    unnest(array[
        SUM (CASE WHEN income < 20000 THEN 1 ELSE 0 END),
        SUM (CASE WHEN income BETWEEN 20000 AND 50000 THEN 1 ELSE 0 END), 
        SUM (CASE WHEN income > 50000 THEN 1 ELSE 0 END)
    ]) AS "accounts_count"
FROM Accounts
```
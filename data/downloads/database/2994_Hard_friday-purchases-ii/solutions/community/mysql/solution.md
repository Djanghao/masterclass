# RECURSIVE SQL

**Author:** UgoTan
**Votes:** 2
**Link:** [https://leetcode.com/problems/friday-purchases-ii/solutions/4509746/](https://leetcode.com/problems/friday-purchases-ii/solutions/4509746/)

---

# Code

```sql
WITH
  RECURSIVE Fridays AS (
     -- the first Friday of November 2023
    SELECT '2023-11-03' AS friday
    UNION ALL
    SELECT DATE_ADD(friday, INTERVAL 7 DAY)
    FROM Fridays
    -- the last day of November 2023 - 7 days
    WHERE friday < '2023-11-23'
  )
SELECT
  WEEK(Fridays.friday, 1) - WEEK('2023-11-01', 1) + 1 AS week_of_month,
  Fridays.friday AS purchase_date,
  IFNULL(SUM(Purchases.amount_spend), 0) AS total_amount
FROM Fridays
LEFT JOIN Purchases
  ON (Fridays.friday = Purchases.purchase_date)
GROUP BY Fridays.friday
ORDER BY week_of_month;
```
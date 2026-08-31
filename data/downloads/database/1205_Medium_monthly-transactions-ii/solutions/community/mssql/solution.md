# Runtime: 651 ms, faster than 94.94% - FULL OUTER JOIN - A bit messy though

**Author:** rohitamale18
**Votes:** 3
**Link:** [https://leetcode.com/problems/monthly-transactions-ii/solutions/552543/](https://leetcode.com/problems/monthly-transactions-ii/solutions/552543/)

---

```
SELECT ISNULL(T1.month, T2.month) AS month, 
ISNULL(T2.country, T1.country) AS country, 
ISNULL(approved_count, 0) AS approved_count, 
ISNULL(approved_amount, 0) AS approved_amount, 
ISNULL(chargeback_count, 0) AS chargeback_count,
ISNULL(chargeback_amount, 0) AS chargeback_amount FROM (
SELECT LEFT(trans_date, 7) AS month, country, COUNT(*) AS approved_count, SUM(amount) AS approved_amount FROM transactions 
WHERE state='approved'
GROUP BY LEFT(trans_date, 7), country
) T1 FULL OUTER JOIN 
(
SELECT LEFT(c.trans_date, 7) AS month, country, COUNT(*) AS chargeback_count, SUM(amount) AS chargeback_amount
FROM transactions t JOIN chargebacks c ON t.id = c.trans_id
GROUP BY LEFT(c.trans_date, 7), country
) T2
ON T1.month = T2.month AND T1.country = T2.country
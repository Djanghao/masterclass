# JOINs & Values

**Author:** Romina_Boltaks
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchase-iii/solutions/5847776/](https://leetcode.com/problems/friday-purchase-iii/solutions/5847776/)

---


# Code
```mssql []
/* Write your T-SQL query statement below */


SELECT t.d AS week_of_month, t.member AS membership, ISNULL(SUM(P.amount_spend),0) AS total_amount
FROM (VALUES (1,'Premium'), (1,'VIP'), (2,'Premium'), (2,'VIP'), (3,'Premium'), (3,'VIP'), (4,'Premium'), (4,'VIP')) AS t(d, member)
LEFT JOIN Users U ON t.member = U.membership
LEFT JOIN Purchases P ON P.user_id = U.user_id AND t.d = ((DATEPART(day,P.purchase_date) - 1)/7) + 1 AND DATEPART(dw, P.purchase_date) = 6 AND P.purchase_date BETWEEN '2023-11-01' AND '2023-11-30' 
GROUP BY t.d, t.member
ORDER BY t.d, t.member

```
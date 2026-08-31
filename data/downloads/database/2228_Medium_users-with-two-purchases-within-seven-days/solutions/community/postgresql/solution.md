# 5 Lines of Code

**Author:** andy3545
**Votes:** 0
**Link:** [https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/6086548/](https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/6086548/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below

-- user who made 2 purchase within 7 days

SELECT A.user_id AS user_id
FROM Purchases A
JOIN Purchases B
ON A.user_id = B.user_id AND A.purchase_id <> B.purchase_id 
AND ABS(A.purchase_date - B.purchase_date) <= 7
GROUP BY 1

```
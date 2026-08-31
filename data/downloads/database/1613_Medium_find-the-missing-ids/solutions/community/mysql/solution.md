# [MySQL] CTE recursive

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-missing-ids/solutions/1070673/](https://leetcode.com/problems/find-the-missing-ids/solutions/1070673/)

---



```
WITH RECURSIVE seq (n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM seq WHERE n + 1 <= (SELECT MAX(Customer_id) FROM Customers)
)
SELECT n AS ids
FROM seq
WHERE n NOT IN (SELECT DISTINCT customer_id FROM Customers)
```
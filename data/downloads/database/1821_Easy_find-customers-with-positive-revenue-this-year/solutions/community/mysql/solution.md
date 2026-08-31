# [MySQL] WHERE clause

**Author:** ye15
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/1407734/](https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/1407734/)

---


```
SELECT 
    customer_id 
FROM Customers
WHERE year = 2021 AND revenue > 0 
```
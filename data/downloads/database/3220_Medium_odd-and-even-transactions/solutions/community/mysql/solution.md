# Easy Solution Using CASE Statement

**Author:** alan_alias
**Votes:** 10
**Link:** [https://leetcode.com/problems/odd-and-even-transactions/solutions/5494550/](https://leetcode.com/problems/odd-and-even-transactions/solutions/5494550/)

---

# Code
```
# Write your MySQL query statement below
SELECT transaction_date, 
SUM(CASE WHEN amount%2 != 0 THEN amount ELSE 0 END) AS odd_sum,
SUM(CASE WHEN amount%2 = 0 THEN amount ELSE 0 END) AS even_sum
FROM transactions
GROUP BY transaction_date
ORDER BY transaction_date;
```
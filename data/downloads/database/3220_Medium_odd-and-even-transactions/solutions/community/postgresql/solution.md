# Simple solution using modulus operator and CASE WHEN

**Author:** Daniel_Charles_J
**Votes:** 4
**Link:** [https://leetcode.com/problems/odd-and-even-transactions/solutions/5761142/](https://leetcode.com/problems/odd-and-even-transactions/solutions/5761142/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Just used modulus operator to find the odd or even, then used CASE WHEN, If odd then sum the particular odd values, Similaly Even values as well.


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT transaction_date,
SUM(CASE WHEN amount %2 != 0 THEN amount ELSE 0 END) AS odd_sum,
SUM(CASE WHEN amount %2 = 0 THEN amount ELSE 0 END) AS even_sum 
FROM transactions GROUP BY transaction_date
ORDER BY transaction_date
```
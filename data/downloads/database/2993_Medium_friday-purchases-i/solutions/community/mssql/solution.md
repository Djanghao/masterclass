# Modulus operator (97th percentile)

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchases-i/solutions/5832582/](https://leetcode.com/problems/friday-purchases-i/solutions/5832582/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT (datepart(wk, purchase_Date) % 11) + 1 week_of_month
      ,purchase_date 
      ,sum(amount_spend) total_amount
FROM purchases 
where datepart(dw, purchase_Date) % 6 = 0
group by purchase_date
having sum(amount_spend) > 0
```
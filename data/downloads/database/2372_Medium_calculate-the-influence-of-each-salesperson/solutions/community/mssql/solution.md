# Left join, group by.

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/5833956/](https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/5833956/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT sp.salesperson_id
      ,sp.name
      ,coalesce(sum(s.price),0) total
FROM Salesperson sp
left join customer c
  on sp.salesperson_id = c.salesperson_id
left join sales s
  on s.customer_id = c.customer_id
group by sp.salesperson_id, sp.name
```
# mysql simple solution

**Author:** Hailey_lai
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/2585385/](https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/2585385/)

---

# Write your MySQL query statement below
select s.salesperson_id, name,  ifnull(sum(price),0) total
from salesperson s left join customer c 
on s.salesperson_id = c.salesperson_id
left join sales 
on c.customer_id = sales.customer_Id
group by salesperson_Id

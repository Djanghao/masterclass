# MS SQL Server, Runtime Beats 93.75%of users, Beats 100.00%of users

**Author:** tayfunusta20
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-the-invoice/solutions/4279838/](https://leetcode.com/problems/generate-the-invoice/solutions/4279838/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your T-SQL query statement below */

with TotalMax as (
select top 1
PC.invoice_id,
Total= SUM(PC.quantity*PR.price)
from Purchases PC inner join Products PR on PC.product_id=PR.product_id
group by PC.invoice_id
order by Total desc , invoice_id asc
)
select PR.product_id, PC.quantity , price=PR.price*PC.quantity
from Purchases PC inner join TotalMax TM on PC.invoice_id=TM.invoice_id
inner join Products PR on PC.product_id=PR.product_id



```
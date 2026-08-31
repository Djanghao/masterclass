# self join dateadd

**Author:** HeyJulie
**Votes:** 0
**Link:** [https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/5928067/](https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/5928067/)

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
```mssql []
/* Write your T-SQL query statement below */
/* Write your T-SQL query statement below */
select distinct p1.user_id
from Purchases p1
join Purchases p2
on p2.purchase_date between p1.purchase_date  and dateadd(dd, 7, p1.purchase_date)
and p1.user_id = p2.user_id
group by p1.user_id, p1.purchase_date
having count(p2.purchase_id)>1
order by p1.user_id asc
```
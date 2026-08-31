# with cte and NVL function PLSQL

**Author:** paul198247
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/3203499/](https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/3203499/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
/* Write your PL/SQL query statement below */\r
with cte as (select c.visit_id, c.member_id, \r
NVL(round(100*COUNT(p.visit_id)over(partition by c.member_id)/(count(c.visit_id)over(partition by c.member_id))),0) as total_m\r
from Visits c left join Purchases p on c.visit_id=p.visit_id),\r
CTE2 AS (select distinct m.member_id, m.name, total_m as total_m\r
from Members m left join cte c \r
on m.member_id = c.member_id)\r
SELECT\r
member_id, name, \r
case when total_m >= 80 then 'Diamond'\r
when  total_m >= 50 and total_m <80 then 'Gold'\r
when  total_m >= 0 and total_m < 50 then 'Silver'\r
Else 'Bronze' end as category \r
FROM CTE2\r
order by member_id asc\r
\r
```
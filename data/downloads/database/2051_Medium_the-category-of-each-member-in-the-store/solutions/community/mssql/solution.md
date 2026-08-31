# ms SQL CTE left join

**Author:** HeyJulie
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/5743679/](https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/5743679/)

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
with CTE as(
select m.member_id,m.name, count(visit_date)'visit_count', count(charged_amount)'purchase_count'
from Members m 
left join Visits v 
on m.member_id = v.member_id
left join Purchases p
on v.visit_id = p.visit_id
group by m.member_id,m.name)
select member_id,name, case when visit_count = 0 then 'Bronze'
when (100*purchase_count)/visit_count >= 80 then 'Diamond'
when (100*purchase_count)/visit_count < 80 and (100*purchase_count)/visit_count >= 50 then 'Gold'
else 'Silver' end'category'
from CTE
```
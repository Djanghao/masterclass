# Left join and group by

**Author:** michaelniki
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/3776589/](https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/3776589/)

---



# Code
```
# Write your MySQL query statement below

select 
    member_id
    , name
    , case
        when count(v.visit_id) = 0 then "Bronze"
        when 100 * count(p.visit_id) / count(v.visit_id) >= 80 then "Diamond"
        when 100 * count(p.visit_id) / count(v.visit_id) >= 50 then "Gold"
        else "Silver"
    end as category
from Members m
left join Visits v using(member_id)
left join Purchases p using(visit_id)
group by member_id
```
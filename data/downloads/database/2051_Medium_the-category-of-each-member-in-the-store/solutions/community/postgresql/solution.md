# cte + case statements

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/5892555/](https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/5892555/)

---

![image.png](./images/0.png)


# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as (
    select
        members.member_id,
        members.name,
        case
            when count(visits.visit_id) = 0 then null
            else count(visits.visit_id)
        end as num_visits,
        coalesce(count(purchases.visit_id), 0) as num_conversions
    from members 
    left join visits on members.member_id = visits.member_id
    left join purchases on visits.visit_id = purchases.visit_id
    group by members.member_id, members.name
)

select
    distinct member_id,
    name,
    case
        when (100 * num_conversions)::decimal / num_visits >= 80 then 'Diamond'
        when (100 * num_conversions)::decimal / num_visits >= 50 and (100 * num_conversions)::decimal / num_visits < 80 then 'Gold'
        when (100 * num_conversions)::decimal / num_visits < 50 then 'Silver'
        when num_visits is null then 'Bronze'
    end as category
from cte
```
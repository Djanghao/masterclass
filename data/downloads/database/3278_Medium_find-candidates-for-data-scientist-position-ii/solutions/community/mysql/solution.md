# Easy Understanding Solution

**Author:** Davidcatmoon
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/5842353/](https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/5842353/)

---

# Code
```mysql []

with cte as(
    select p.project_id, candidate_id, 
        sum(case when proficiency > importance then 10
                 when proficiency = importance then 0
                 else -5
            end) + 100 as score,
        count(*) as cnt_skill
    from Projects p
    left join Candidates c
    on p.skill = c.skill
    group by 1, 2
),

-- criteria 1 (where clause) + 2 (row_number() window funtion):
tmp as(
    select project_id, candidate_id, score,
        row_number()over(partition by project_id order by score desc, candidate_id asc) as rn
    from cte
    where (project_id, cnt_skill) in (
        select project_id, count(*)
        from Projects
        group by 1
    )
)

select project_id, candidate_id, score
from tmp
where rn = 1
order by 1

```
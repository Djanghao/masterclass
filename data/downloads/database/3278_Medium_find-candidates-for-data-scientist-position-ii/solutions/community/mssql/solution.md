# Simple solution

**Author:** YuB85
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/5728072/](https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/5728072/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
with tmp1 as 
(
    select   p.project_id
            ,c.candidate_id
            ,c.skill
            ,p.importance
            ,c.proficiency
            ,100 + sum(case when c.proficiency > p.importance then 10
                            when c.proficiency < p.importance then -5
                            else 0 end) over(partition by p.project_id, c.candidate_id) as score
            ,(select count(*) from projects pp where pp.project_id = p.project_id) as project_skills_count
            ,count(c.skill) over(partition by p.project_id, c.candidate_id) as cand_skills_for_project_count
    from projects p
        left join candidates c on p.skill = c.skill
),tmp2 as
(
    select   distinct
             project_id
            ,candidate_id
            ,score
            ,row_number() over(partition by project_id order by score desc, candidate_id asc) as rnk
    from tmp1 
    where project_skills_count = cand_skills_for_project_count
)
select   project_id
        ,candidate_id
        ,score
from tmp2
where rnk = 1
order by project_id asc
```
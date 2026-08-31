# Not too long clear oracle solution using Window functions, CTE and join

**Author:** roadytom
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/5922745/](https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/5922745/)

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
```oraclesql []
with candidate_scores as (
    select
        p.project_id,
        c.candidate_id,
        sum(
            case 
                when c.proficiency>p.importance then 10
                when c.proficiency<p.importance then -5
                else 0
            end
        )+100 as score
    from
    candidates c join projects p on c.skill=p.skill
    group by p.project_id, c.candidate_id
    having count(c.skill)=(select count(skill) from projects p2 where p2.project_id=p.project_id)
),
max_scores as (
    select
        cs.*,
        rank() over (partition by project_id order by score desc, candidate_id asc) as rnk
    from candidate_scores cs
)
select
    project_id,
    candidate_id,
    score
from max_scores
where rnk=1
order by project_id
```
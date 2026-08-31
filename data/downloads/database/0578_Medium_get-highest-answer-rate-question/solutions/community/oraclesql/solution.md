# Oracle | CTE | Case | Rank

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-highest-answer-rate-question/solutions/5373802/](https://leetcode.com/problems/get-highest-answer-rate-question/solutions/5373802/)

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
/* Write your PL/SQL query statement below */
with cte as 
    (select
        question_id,
        sum(case when action = 'answer' then 1 else 0 end)/sum(case when action = 'show' then 1 else 0 end) as answer_rate
    from
        surveylog 
    group by
        question_id)
select
    question_id as survey_log
from
    (select
        question_id,
        rank() over (order by answer_rate desc,question_id asc) as rnk
    from
        cte)
where
    rnk = 1
order by 1
```
# Using aggregate FILTER

**Author:** vm2020
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-highest-answer-rate-question/solutions/5154444/](https://leetcode.com/problems/get-highest-answer-rate-question/solutions/5154444/)

---


# Code
```
-- Write your PostgreSQL query statement below

with cte as(
    select question_id, count(*) FILTER (WHERE action = 'answer') as answer_cnt,  count(*) FILTER (WHERE action = 'show') as show_cnt
    from SurveyLog 
    group by 1 
    ),
cte2 as 
(select question_id,row_number() over (order by (answer_cnt*100/show_cnt) desc,question_id) as rn 
from cte
where answer_cnt > 0)

select question_id as survey_log from cte2  
where rn = 1;

```
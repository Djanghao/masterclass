# ⚡️ Simple & short solution beating 96.62%

**Author:** Caro996
**Votes:** 19
**Link:** [https://leetcode.com/problems/get-highest-answer-rate-question/solutions/2480587/](https://leetcode.com/problems/get-highest-answer-rate-question/solutions/2480587/)

---

```
SELECT  question_id as survey_log
FROM SurveyLog
GROUP BY 1
ORDER BY (count(answer_id) / count(case when action = 'show' then question_id ELSE null end )) desc, 1 asc
LIMIT 1
```
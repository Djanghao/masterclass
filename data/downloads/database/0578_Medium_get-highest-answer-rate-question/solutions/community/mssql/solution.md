# simple solution, CTE

**Author:** PeterHontaru
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-highest-answer-rate-question/solutions/1380535/](https://leetcode.com/problems/get-highest-answer-rate-question/solutions/1380535/)

---

```
WITH data AS(
SELECT question_id, COUNT(*) AS total, SUM(CASE WHEN action = 'answer' THEN 1.00 else 0.00 END) AS answer
FROM survey_log
GROUP BY question_id)

SELECT TOP 1 question_id AS survey_log
FROM data
ORDER BY answer/total DESC
```
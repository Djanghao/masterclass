# MS SQL, simple LEFT JOIN with COALESCE

**Author:** pdesgrange
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/2031625/](https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/2031625/)

---

```
SELECT s.school_id
	,COALESCE(MIN(score), - 1) AS 'score'
FROM Schools s
LEFT JOIN Exam e ON s.capacity >= e.student_count
GROUP BY s.school_id

# MySQL: CTE and CASE WHEN

**Author:** farlowdw
**Votes:** 15
**Link:** [https://leetcode.com/problems/the-winner-university/solutions/1576794/](https://leetcode.com/problems/the-winner-university/solutions/1576794/)

---

**Solution 1:**

```SQL
WITH excellent_student_counts AS (
  SELECT
    (SELECT COUNT(*) FROM NewYork WHERE score >= 90) AS ny,
    (SELECT COUNT(*) FROM California WHERE score >= 90) AS ca
)
SELECT
  (CASE
    WHEN E.ny > E.ca THEN 'New York University'
    WHEN E.ny < E.ca THEN 'California University'
    ELSE 'No Winner'
  END) AS winner
FROM
  excellent_student_counts E;
```

**Solution 2:**

```SQL
WITH nyu_excellent AS (
  SELECT COUNT(*) AS student_count FROM NewYork WHERE score >= 90
), cu_excellent AS (
  SELECT COUNT(*) AS student_count FROM California WHERE score >= 90
)
SELECT
  (CASE
    WHEN N.student_count > C.student_count THEN 'New York University'
    WHEN N.student_count < C.student_count THEN 'California University'
    ELSE 'No Winner'
  END) AS winner
FROM
  nyu_excellent N, cu_excellent C;
```
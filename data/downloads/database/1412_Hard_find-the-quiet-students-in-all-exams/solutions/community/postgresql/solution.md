# Using DENSE_RANK in a CTE then filtering in the main query

**Author:** marwin-ko
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/4978972/](https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/4978972/)

---

# Intuition
We want to rank continuously using DENSE_RANK() with respect to exam_id.
We will rank twice, once to find best student and again to find worst sutdent. Then we filter out all best and worst students, leaving us with the quiet students.

# Approach
__First__, we will create a CTE. 

In the select clause of the CTE, we use the window function `DENSE_RANK() OVER(PARTITION BY exam_id ORDER BY score DESC)` to rank from highest to lowest score with respect to exam_id, where rank=1 is best score. 

Do this again, but ordering by score in ascending order, like this `DENSE_RANK() OVER(PARTITION BY exam_id ORDER BY score ASC)`, to rank from lowest to higest score with respect to exam_id, where rank=1 is the worst score.

__Second__, in our main query, we start off by performing a LEFT JOIN from exam to student. We perform the join this way to avoid students that did not take any exams in our result set.

__Third__, continuing in our main query, in the WHERE clause, we will use the CTE to pull best student ids using `(SELECT student_id FROM CTE WHERE best_rank=1)` and worst student ids using `student_id NOT IN (SELECT student_id FROM CTE WHERE worst_rank=1)'. Finally, we compound them into a WHERE condition to find student id that are NOT IN the best student ids AND NOT IN the worst student ids. See below for implementation.

Finally, don't forget to include a `DISTINCT` in the SELECT clause of the main query since a student can be quiet in multiple exams.


# Code
```
WITH CTE AS
    (SELECT
        exam_id,
        student_id,
        score,
        DENSE_RANK() OVER(PARTITION BY exam_id ORDER BY score DESC) AS best_rank,
        DENSE_RANK() OVER(PARTITION BY exam_id ORDER BY score ASC) AS worst_rank
    FROM exam)

-- Main Query
SELECT
    DISTINCT
    e.student_id,
    s.student_name
FROM exam e
    LEFT JOIN student s
        USING(student_id)
WHERE
    student_id NOT IN (SELECT student_id FROM CTE WHERE best_rank=1)
    AND
    student_id NOT IN (SELECT student_id FROM CTE WHERE worst_rank=1)
ORDER BY student_id
```
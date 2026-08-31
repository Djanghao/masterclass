# (^_^) MySQL Solutions: Sub-Query / CTE + Explanation

**Author:** 120668385
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/659221/](https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/659221/)

---

(Similar Question 1398. Customers Who Bought Products A and B but Not C)

**Choice 1:**
```
SELECT student_id, student_name 
FROM Student
WHERE student_id IN 
    (SELECT DISTINCT student_id FROM Exam)
  AND student_id NOT IN 
      (
        SELECT student_id
        FROM Exam e1
        WHERE score = (SELECT max(score) FROM Exam e2 WHERE e1.exam_id = e2.exam_id)
          OR score = (SELECT min(score) FROM Exam e2 WHERE e1.exam_id = e2.exam_id)
      )
```
  
**Choice 2:**

```
WITH cte AS(
    SELECT exam_id
    , student_id
    , RANK() OVER(PARTITION BY exam_id ORDER BY score) rk_from_top
    , RANK() OVER(PARTITION BY exam_id ORDER BY score DESC) rk_from_bottom
    FROM exam 
)

SELECT DISTINCT c.student_id, s.student_name 
FROM cte c 
LEFT JOIN Student s ON s.student_id = c.student_id
WHERE c.student_id NOT IN 
    (SELECT DISTINCT student_id FROM cte WHERE rk_from_top = 1 OR rk_from_bottom = 1)
ORDER BY c.student_id
```
_____________________________

**Explanations for CTE Solution:**

This is the Exam Table:
Exam table:
+------------+--------------+-----------+
| exam_id    | student_id   | score     |
+------------+--------------+-----------+
| 10         |     1        |    70     |
| 10         |     2        |    80     |
| 10         |     3        |    90     |
| 20         |     1        |    80     |
| 30         |     1        |    70     |
| 30         |     3        |    80     |
| 30         |     4        |    90     |
| 40         |     1        |    60     |
| 40         |     2        |    70     |
| 40         |     4        |    80     |
+------------+--------------+-----------+

You can see each student\u2019s ranks for each exam from the CTE result

```
WITH cte AS(
    SELECT exam_id
    , student_id
    , RANK() OVER(PARTITION BY exam_id ORDER BY score) rk_from_top
    , RANK() OVER(PARTITION BY exam_id ORDER BY score DESC) rk_from_bottom
    FROM exam 
)
SELECT * FROM cte
```
RESULT:
{"headers": 
["exam_id", "student_id", "rk_from_top", "rk_from_bottom"], "values": [
[10, 1, 1, 3], 
[10, 2, 2, 2], 
[10, 3, 3, 1], 
[20, 1, 1, 1], 
[30, 1, 1, 3], 
[30, 3, 2, 2], 
[30, 4, 3, 1], 
[40, 1, 1, 3], 
[40, 2, 2, 2], 
[40, 4, 3, 1]]}

Then you will get all the student\u2019s rank of each exam, and it is easy to find that only student_id = 2 neither got the highest or lowest score. 

**Student_id = 1**
{"headers": 
["exam_id", "student_id", "rk_from_top", "rk_from_bottom"], "values": [
[10, **1**, 1, 3], 
[20, **1**, 1, 1], 
[30, **1**, 1, 3], 
[40, **1**, 1, 3], 

**Student_id = 2**
{"headers": 
["exam_id", "student_id", "rk_from_top", "rk_from_bottom"], "values": [
[10, **2**, 2, 2], 
[40, **2**, 2, 2], 

**Student_id = 3**
{"headers": 
["exam_id", "student_id", "rk_from_top", "rk_from_bottom"], "values": [
[10, **3**, 3, 1], 
[30, **3**, 2, 2], 

**Student_id = 4**
{"headers": 
["exam_id", "student_id", "rk_from_top", "rk_from_bottom"], "values": [
[30, **4**, 3, 1], 
[40, **4**, 3, 1],

After we finish our CTE, we need to firstly find the student_id that was used to get a highest score or lowest score.

```
SELECT DISTINCT student_id FROM cte WHERE rk_from_top = 1 OR rk_from_bottom = 1
```

RESULT:
{"headers": ["student_id"], "values": [**[3], [1], [4]**]}

Finally, using LEFT JOIN and NOT IN to get the final result. Don't forget the first DISTINCT. 

```
SELECT DISTINCT c.student_id, s.student_name
FROM cte c
LEFT JOIN Student s ON s.student_id = c.student_id
WHERE c.student_id NOT IN
   (SELECT DISTINCT student_id FROM cte WHERE rk_from_top = 1 OR rk_from_bottom = 1)
ORDER BY c.student_id
```

RESULT:
{"headers": ["STUDENT_ID", "STUDENT_NAME"], "values": [**[2, "Jade"]**]}

# MySQL Properly Styled, LEFT JOIN, GROUP, RT: 467 ms, FT: 98.23%

**Author:** harrystaley
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/2220155/](https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/2220155/)

---

The capacity of each school is critical here.


```
SELECT
     school_id,
	 # Get the min score if two or more scores exist.
     MIN(IF(ISNULL(score),-1, score)) AS score 
FROM Schools
LEFT JOIN Exam
	# Student count up to and including capacity.
    ON student_count <= capacity
GROUP BY school_id;
```
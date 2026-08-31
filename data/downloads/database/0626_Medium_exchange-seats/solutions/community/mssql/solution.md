# Simple solution without union and subquery

**Author:** eric_liu249
**Votes:** 24
**Link:** [https://leetcode.com/problems/exchange-seats/solutions/644364/](https://leetcode.com/problems/exchange-seats/solutions/644364/)

---

#MySQL
```
SELECT id, IFNULL(
					CASE WHEN MOD(id, 2) = 1 THEN LEAD(student,1) OVER() 
                    ELSE LAG(student,1) OVER() END, 
                    student
                  ) student
FROM seat;
```
#Sql Server
```
SELECT id, ISNULL(
					CASE WHEN id % 2 = 1 THEN LEAD(student,1) OVER(ORDER BY id) 
				    ELSE LAG(student,1) OVER(ORDER BY id) END, 
					student
				  ) student
FROM seat;
```
#Oracle
```
SELECT id, NVL(
				CASE WHEN MOD(id, 2) = 1 THEN LEAD(student,1) OVER(ORDER BY id) 
			    ELSE LAG(student,1) OVER(ORDER BY id) END, 
				student
			  ) student
FROM seat;
```
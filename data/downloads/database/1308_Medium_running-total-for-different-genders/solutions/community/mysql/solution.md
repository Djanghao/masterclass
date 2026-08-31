# [MySQL] Cumulative sum using variable

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/running-total-for-different-genders/solutions/506283/](https://leetcode.com/problems/running-total-for-different-genders/solutions/506283/)

---

Define `@g` for gender and `@s` for score. When gender changes, score is reset. 

Implementation (506ms, 99.87%): 
```
SELECT 
    gender, 
    day, 
    CASE WHEN @g <> @g:=gender THEN @s:=score
    ELSE @s:=@s+score END AS total 
FROM (SELECT gender, day, score_points AS score 
      FROM Scores 
      ORDER BY gender, day) a, (SELECT @s:=0, @g:="F") init; 
```

A less efficient but more straightforward solution is to use self-join 

(1075ms, 88.12%): 
```
SELECT 
    a.gender, 
    a.day, 
    SUM(b.score_points) AS total 
FROM 
    Scores a 
    JOIN Scores b ON a.gender = b.gender AND a.day >= b.day
GROUP BY 1, 2
ORDER BY 1, 2; 
```
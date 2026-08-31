# EASIEST SQL SOLUTION POSSIBLE

**Author:** CodeWithSatyaPrakash
**Votes:** 0
**Link:** [https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/6097309/](https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/6097309/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT actor_id,director_id
FROM ActorDirector 
GROUP BY actor_id,director_id
HAVING COUNT(timestamp)>=3;
```
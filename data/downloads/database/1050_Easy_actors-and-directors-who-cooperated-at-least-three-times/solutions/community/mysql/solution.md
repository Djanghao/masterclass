# MY SQL || SOLUTION

**Author:** _himanshu_12
**Votes:** 253
**Link:** [https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/2645533/](https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/2645533/)

---

***GROUP BY:***
```
select actor_id, director_id 
from(
select actor_id,director_id, 
count(timestamp) as cooperated 
from ActorDirector 
group by actor_id,director_id) 
table1
where cooperated>=3;
```

***GROUP WITH HAVING CLAUSE:***
```
select actor_id,director_id
from ActorDirector 
group by actor_id,director_id
Having count(timestamp)>=3;
```

**EXPLANATION:**
```
+-------------+-------------+-------------+
| actor_id    | director_id | timestamp   |
+-------------+-------------+-------------+
| 1           | 1           | 0           |
| 1           | 1           | 1           |
| 1           | 1           | 2           |
| 1           | 2           | 3           |
| 1           | 2           | 4           |
| 2           | 1           | 5           |
| 2           | 1           | 6           |
+-------------+-------------+-------------+

Group by actor_id, director_id:
+-------------+-------------+-------------+
| actor_id    | director_id | timestamp   |
+-------------+-------------+-------------+
| 1           | 1           | 0, 1, 2    |
| 1           | 2           | 3, 4        |
| 2           | 1           | 5. 6        |
+-------------+-------------+-------------+

Group by actor_id, director_id
Having count(timestamp)>=3

| actor_id    | director_id | count(timestamp)  |
+-------------+-------------+-------------+
| 1           | 1           |                3                         |
| 1           | 2           |                2                         |
| 2           | 1           |                2                         |
+-------------+-------------+-------------+

select actor_id, director_id from:

| actor_id    | director_id  
+-------------+---------+
| 1           | 1                    |
+-------------+---------+

```

***PLEASE UPVOTE IF YOU FIND IT A LITTLE BIT HELPFUL, MEANS A LOT ;)***
# 📌📌 easy solution  :D ||  MySql ⚡

**Author:** maary_
**Votes:** 5
**Link:** [https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/3257769/](https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/3257769/)

---

```
SELECT actor_id, director_id 
FROM
    (SELECT actor_id, director_id, COUNT(*) AS cnt
     FROM ActorDirector
     GROUP BY actor_id, director_id
    ) AS t
WHERE cnt >= 3;
```
# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 41
**Link:** [https://leetcode.com/problems/game-play-analysis-iv/solutions/3857392/](https://leetcode.com/problems/game-play-analysis-iv/solutions/3857392/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
/* Write your PL/SQL query statement below */ 
SELECT ROUND(COUNT(A2.player_id) / COUNT(A1.player_id), 2) 

As fraction FROM Activity A1 LEFT OUTER JOIN Activity A2 ON 

A2.player_id = A1.player_id AND A2.event_date = A1.event_date + 1 

WHERE (A1.player_id, A1.event_date) IN (SELECT player_id, 

MIN(event_date) FROM Activity GROUP BY player_id )
```
![5kej8w.jpg](./images/0.jpeg)

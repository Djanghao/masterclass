# One for all easy solution. Beats 98.39%

**Author:** SourabhShelke
**Votes:** 3
**Link:** [https://leetcode.com/problems/game-play-analysis-ii/solutions/3349553/](https://leetcode.com/problems/game-play-analysis-ii/solutions/3349553/)

---


# Approach
Using DENSE_RANK function to get device_id of players for the earliest event_date.


# Code
```
/* Write your PL/SQL query statement below */
SELECT player_id, device_id
FROM (SELECT player_id, device_id, event_date,
    ROW_NUMBER() OVER(PARTITION BY player_id
                      ORDER BY event_date) as e_row
     FROM Activity) t
WHERE t.e_row = 1;
```
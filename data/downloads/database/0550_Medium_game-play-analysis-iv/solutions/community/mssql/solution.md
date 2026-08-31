# Easy Solution with steps in details and optimum runtime

**Author:** EsraaM7
**Votes:** 40
**Link:** [https://leetcode.com/problems/game-play-analysis-iv/solutions/4583801/](https://leetcode.com/problems/game-play-analysis-iv/solutions/4583801/)

---

### ***Please Upvote my solution, if you find it helpful :)***
# Problem
you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.

# Approach
In this problem we can break it down into 3 parts
1. Get first logged in day
2. Return #of users that logged in two consecutive days
3. Get the total count of users

# Complexity
- Time complexity:
**2984 ms**

# Code
Full solution below here is the steps
1. Get first logged in day
```
SELECT player_id ,MIN(event_date ) as event_date -- Return first logged in day
FROM Activity
GROUP BY  player_id
```
2. Return #of users that logged in the next day after first log
```
SELECT COUNT( DISTINCT a1.player_id)
FROM (
    SELECT player_id ,MIN(event_date ) as event_date -- Return first logged in day
    FROM Activity
    GROUP BY  player_id
) a1
INNER JOIN Activity a2 ON a1.player_id = a2.player_id 
WHERE DATEDIFF(day,a1.event_date,a2.event_date) =1-- and a2.event_date
```
3. Get the total count of users
```
SELECT COUNT(DISTINCT player_id )  -- get the total players count
FROM Activity 
```

# Full Solution
```
SELECT ROUND((COUNT( DISTINCT a1.player_id)*1.0)/(
    SELECT COUNT(DISTINCT player_id )  -- get the total players count
    FROM Activity 
),2) as fraction
FROM (
    SELECT player_id ,MIN(event_date ) as event_date -- Return first logged in day
    FROM Activity
    GROUP BY  player_id
) a1
INNER JOIN Activity a2 ON a1.player_id = a2.player_id 
WHERE DATEDIFF(day,a1.event_date,a2.event_date) =1-- and a2.event_date

```
### ***Please Upvote my solution, if you find it helpful :)***

![image.png](./images/0.png)

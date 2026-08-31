# Best Optimum Solution with Explanation!

**Author:** deepankyadav
**Votes:** 688
**Link:** [https://leetcode.com/problems/game-play-analysis-iv/solutions/3673167/](https://leetcode.com/problems/game-play-analysis-iv/solutions/3673167/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
To calculate the fraction of players who logged in again on the day after their first login, you need to count the number of players who have their first login date followed by a consecutive login on the next day. Then, you divide this count by the total number of distinct players.

# Approach
1. We want to calculate the fraction of players who logged in again on the day after their first login. To do this, we need to count two things: the number of players who logged in on consecutive days and the total number of players.

1. To count the number of players who logged in on consecutive days, we need to find the first login date for each player and check if there is a login on the day after their first login.

1. We use a subquery to calculate the total number of distinct players in the Activity table. This gives us the denominator for calculating the fraction.

1. In the main query, we filter the rows where the player's ID and the date of the event (after subtracting 1 day) match the player's first login date. This ensures that we only consider players who logged in on consecutive days.

1. We then count the distinct player IDs in the filtered rows to get the numerator for calculating the fraction.

1. Finally, we divide the numerator by the denominator and round the result to 2 decimal places using the ROUND function.


# Complexity
- Time complexity:
The subquery (SELECT player_id, MIN(event_date) as first_login FROM Activity GROUP BY player_id) has a time complexity of $$O(n)$$, where n is the number of records in the Activity table.
The main query involves a nested subquery with a comparison (player_id, DATE_SUB(event_date, INTERVAL 1 DAY)) IN (...). This comparison has a time complexity of $$O(n)$$, resulting in an overall time complexity of $$O(n^2)$$.

- Space complexity:
The subquery (SELECT player_id, MIN(event_date) as first_login FROM Activity GROUP BY player_id) creates a temporary table that stores player_id and their respective minimum event_date for each player. The space complexity is $$O(n)$$ as it depends on the number of distinct players in the Activity table.
# Code
```
# Write your MySQL query statement below
'SELECT
  ROUND(COUNT(DISTINCT player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity), 2) AS fraction
FROM
  Activity
WHERE
  (player_id, DATE_SUB(event_date, INTERVAL 1 DAY))
  IN (
    SELECT player_id, MIN(event_date) AS first_login FROM Activity GROUP BY player_id
  )'

```
***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)

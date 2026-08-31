# Simple solution using one CTE and UNION

**Author:** chand_karishma
**Votes:** 1
**Link:** [https://leetcode.com/problems/popularity-percentage/solutions/4279873/](https://leetcode.com/problems/popularity-percentage/solutions/4279873/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

1. Generate a temporary table CTE1 such that both (a, b) and (b, a) are there. Note that UNION ensures only one pair of (a, b) and (b, a) will be present in CTE1.
2. Group/order by USER1 to count the total number of friends of each user.
3. Then, divide total friend count by total number distinct users (get the total distinct user count using the column USER2).



# Code
```
/* Write your PL/SQL query statement below */
WITH CTE1 AS --Generate a new table such that both (a, b) and (b, a) are there.
(SELECT USER1 AS USER1, USER2 AS USER2 FROM FRIENDS
UNION
SELECT USER2 AS USER1, USER1 AS USER2 FROM FRIENDS)
-- Group by USER1 to count the total number of friends and then divide by total number of distinct USER2
SELECT USER1,
ROUND((COUNT(*)/(SELECT COUNT(DISTINCT USER2) FROM CTE1)) * 100, 2) AS PERCENTAGE_POPULARITY
FROM CTE1
GROUP BY USER1
ORDER BY USER1;

```
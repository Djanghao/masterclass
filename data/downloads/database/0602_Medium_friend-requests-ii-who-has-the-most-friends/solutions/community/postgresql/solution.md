# ✅ Simple solution using CTE & UNION ALL ✅

**Author:** Daniel_Charles_J
**Votes:** 7
**Link:** [https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/5837157/](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/5837157/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Initally taken the requester_id and accepter_id using different queries then using UNION ALL made it as a single column and created as a temporary table.

Then by using the GROUP BY and COUNT got the desired output.



# Code
```postgresql []
-- Write your PostgreSQL query statement below
WITH temp as 
(SELECT requester_id as id FROM RequestAccepted
UNION ALL
SELECT accepter_id as id FROM RequestAccepted)

SELECT id,COUNT(id) as num FROM temp GROUP BY id 
ORDER BY num DESC LIMIT 1
```
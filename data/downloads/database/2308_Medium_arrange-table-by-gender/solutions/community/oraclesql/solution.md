# Oracle SQL: Easy Solution

**Author:** TarunGrover6995
**Votes:** 1
**Link:** [https://leetcode.com/problems/arrange-table-by-gender/solutions/3102656/](https://leetcode.com/problems/arrange-table-by-gender/solutions/3102656/)

---


# Code
```
/* Write your PL/SQL query statement below */
WITH cte AS
(SELECT user_id, gender, 
DECODE(gender, 'male', 3, 'other',2, 'female',1) rank_1, 
ROW_NUMBER() OVER (PARTITION BY gender ORDER BY user_id) rank_2 
FROM Genders)

SELECT user_id, gender
FROM cte
ORDER BY rank_2, rank_1
```
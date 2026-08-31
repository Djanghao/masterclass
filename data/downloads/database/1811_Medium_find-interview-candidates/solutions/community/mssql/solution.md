# Beats 98.15%

**Author:** harsha54443
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-interview-candidates/solutions/5627685/](https://leetcode.com/problems/find-interview-candidates/solutions/5627685/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your T-SQL query statement below */


/* Write your T-SQL query statement below */




WITH CTE AS(
SELECT contest_id , gold_medal AS medals
FROM Contests
UNION ALL
SELECT contest_id , silver_medal
FROM Contests
UNION ALL
SELECT contest_id , bronze_medal
FROM Contests
)

, CTE2 AS(
SELECT contest_id, medals,mail,name,
contest_id - ROW_NUMBER() OVER(PARTITION BY medals ORDER BY medals,contest_id) AS RN
FROM CTE C
LEFT JOIN Users U ON C.medals = U.user_id
)

SELECT name, mail
FROM CTE2
GROUP BY mail, name, RN
HAVING COUNT(*) >= 3
UNION 
SELECT name, mail
FROM Contests C
LEFT JOIN Users U ON
C.gold_medal = U.user_id
GROUP BY name, mail
HAVING COUNT(gold_medal) >= 3

```
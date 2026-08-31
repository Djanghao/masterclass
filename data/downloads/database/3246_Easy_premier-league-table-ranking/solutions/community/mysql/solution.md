# Simple SQL

**Author:** rnotappl
**Votes:** 3
**Link:** [https://leetcode.com/problems/premier-league-table-ranking/solutions/5591797/](https://leetcode.com/problems/premier-league-table-ranking/solutions/5591797/)

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
WITH CTE AS (
SELECT team_id, team_name, 3*wins+1*draws as points FROM TeamStats
Order by points desc, team_name asc
),

CTE1 AS (
SELECT team_id, team_name, points, RANK() OVER (ORDER BY points DESC) as position
FROM CTE
)

SELECT * FROM CTE1
```
# rank(), with no CTE or subquery needed

**Author:** Alfreds_Futterkiste
**Votes:** 1
**Link:** [https://leetcode.com/problems/premier-league-table-ranking/solutions/5599162/](https://leetcode.com/problems/premier-league-table-ranking/solutions/5599162/)

---

# Intuition
The solution requires ranking on points. Points are simple to calculate so you can just use the calculation twice instead of using a CTE. 
# Approach
Calculate points, and order the ranking by the same calculation. 
# Code
```
SELECT team_id
    , team_name
    , sum(wins * 3 + draws) AS points
    , rank() OVER
         (ORDER BY sum(wins * 3 + draws) DESC) AS position
FROM TeamStats
GROUP BY team_id, team_name
ORDER BY points DESC, team_name





```
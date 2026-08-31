# cte solution

**Author:** iliyas1903
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-three-wineries/solutions/6122550/](https://leetcode.com/problems/top-three-wineries/solutions/6122550/)

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
```oraclesql []
WITH cte AS (
    SELECT w.country,
           w.winery,
           SUM(w.points) AS points
    FROM Wineries w
    GROUP BY w.country, w.winery
),
cte2 AS (
    SELECT cte.*,
           ROW_NUMBER() OVER(PARTITION BY cte.country ORDER BY cte.points DESC, cte.winery) AS rn
    FROM cte
),
cte3 AS (
    SELECT
        cte2.country AS country, 
        CASE WHEN cte2.rn = 1 THEN cte2.winery || ' (' || cte2.points || ')' ELSE NULL END AS top_winery,
        CASE WHEN cte2.rn = 2 THEN cte2.winery || ' (' || cte2.points || ')' ELSE NULL END AS second_winery,
        CASE WHEN cte2.rn = 3 THEN cte2.winery || ' (' || cte2.points || ')' ELSE NULL END AS third_winery
    FROM cte2
    WHERE rn <= 3 -- \u0423\u0431\u0438\u0440\u0430\u0435\u043C \u043B\u0438\u0448\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u043A\u0438
)
SELECT
    cte3.country AS country,
    CASE WHEN MAX(cte3.top_winery) IS NOT NULL 
         THEN MAX(cte3.top_winery) ELSE 'No top winery' END AS top_winery,
    CASE WHEN MAX(cte3.second_winery) IS NOT NULL 
         THEN MAX(cte3.second_winery) ELSE 'No second winery' END AS second_winery,
    CASE WHEN MAX(cte3.third_winery) IS NOT NULL 
         THEN MAX(cte3.third_winery) ELSE 'No third winery' END AS third_winery
FROM cte3 
GROUP BY cte3.country
ORDER BY cte3.country;

```
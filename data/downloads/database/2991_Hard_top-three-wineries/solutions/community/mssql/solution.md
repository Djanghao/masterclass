# Simple solution with case condition. Beats 100.00% of users with MS SQL Server

**Author:** jerryjames
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-three-wineries/solutions/4680857/](https://leetcode.com/problems/top-three-wineries/solutions/4680857/)

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
;WITH rnk 
AS
(
SELECT country,SUM(points) AS points,winery,ROW_NUMBER() OVER(PARTITION BY country ORDER BY SUM(points) desc,winery ASC)R
FROM Wineries
GROUP BY country,winery
)
SELECT country,MAX(CASE WHEN R=1 THEN winery+' ('+cast(points as varchar(3))+')' END) AS top_winery
			  ,COALESCE(MAX(CASE WHEN R=2 THEN winery+' ('+cast(points as varchar(3))+')' END),'No second winery') AS second_winery
			  ,COALESCE(MAX(CASE WHEN R=3 THEN winery+' ('+cast(points as varchar(3))+')' END),'No third winery') AS third_winery
FROM rnk
GROUP BY country
```
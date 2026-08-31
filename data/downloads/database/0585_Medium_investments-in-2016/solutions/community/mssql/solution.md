# SOLUTION WITH COUNT() OVER() ( SQL SERVER ) BEATS 100%

**Author:** cooking_Guy_9ice
**Votes:** 21
**Link:** [https://leetcode.com/problems/investments-in-2016/solutions/3441396/](https://leetcode.com/problems/investments-in-2016/solutions/3441396/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
/* Write your T-SQL query statement below */\r
\r
\r
\r
WITH CTE AS (\r
		SELECT\r
			*,\r
			COUNT(lat) OVER(PARTITION BY lat,lon) CountLatLon,\r
			COUNT(tiv_2015) OVER(PARTITION BY tiv_2015) CountT_2015\r
		FROM\r
			Insurance T1\r
)\r
SELECT\r
	ROUND(SUM(tiv_2016),2) tiv_2016 \r
FROM\r
	CTE\r
WHERE\r
	CountLatLon = 1\r
AND\r
	CountT_2015 > 1\r
\r
```
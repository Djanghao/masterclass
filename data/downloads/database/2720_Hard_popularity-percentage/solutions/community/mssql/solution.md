# UNION (it also acts as distinct)

**Author:** taslitsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/popularity-percentage/solutions/5977328/](https://leetcode.com/problems/popularity-percentage/solutions/5977328/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
For counting ALL friends there was a need to verticaly attach segments of a table this way:  2 to 1, 1 to 2. But, it leading in some cases to unwanted duplicates. simple UNION  eliminate this problem. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH CTE AS
(SELECT COUNT (DISTINCT USER1)   AS TN 
FROM
(SELECT USER1 FROM FRIENDS 
UNION ALL
SELECT USER2 FROM FRIENDS ) Q1)  

SELECT  USER1, ROUND (COUNT (USER1)  /( ((SELECT TN FROM CTE )* 1.00)  / 100 ), 2) AS
PERCENTAGE_POPULARITY FROM
(SELECT USER1 , USER2 FROM FRIENDS 
UNION  
SELECT USER2, USER1 FROM FRIENDS
) Q1
GROUP BY USER1
ORDER BY USER1







```
# EASY MySQL solution using GROUP BY ,HAVING

**Author:** sahithisabbu999
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-expensive-cities/solutions/4484376/](https://leetcode.com/problems/find-expensive-cities/solutions/4484376/)

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
# Write your MySQL query statement below
SELECT city 
FROM Listings
GROUP BY city 
HAVING AVG(Price)> (SELECT  avg(price) FROM Listings)
ORDER BY city
```
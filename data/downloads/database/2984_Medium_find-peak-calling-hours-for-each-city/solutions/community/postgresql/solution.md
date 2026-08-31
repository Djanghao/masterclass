# POSTGRESQL| WINDOW FUNCTION

**Author:** tanujgym
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/5385085/](https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/5385085/)

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
SELECT CITY,EXTRACT(HOUR FROM CALL_TIME) AS CALLING_HOUR,COUNT(*), DENSE_RANK()
OVER(PARTITION BY CITY ORDER BY COUNT(*) DESC) AS RNK
FROM CALLS
GROUP BY CITY, CALLING_HOUR
)

SELECT CITY, CALLING_HOUR AS PEAK_CALLING_HOUR, COUNT AS NUMBER_OF_CALLS
FROM CTE
WHERE RNK=1
ORDER BY PEAK_CALLING_HOUR DESC, CITY DESC
```
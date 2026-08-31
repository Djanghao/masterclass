# MySQL window function, beats 96%

**Author:** zjian3
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/2005731/](https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/2005731/)

---

```
SELECT 
	ROUND(AVG(num*1.0),2) AS median
FROM (
    SELECT
        *,
        SUM(frequency) OVER (ORDER BY num ASC) AS accumulated_sum,
        SUM(frequency) OVER () / 2 as medium_num
    FROM 
        Numbers
) AS TEMP
WHERE 
	accumulated_sum - frequency <= medium_num AND accumulated_sum >= medium_num
	# The accumulated frequency of the previous num should be smaller or equal to medium_num
```
# Gaps and Islands Pattern

**Author:** kane_norman
**Votes:** 7
**Link:** [https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5121242/](https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5121242/)

---

# Intuition
This is a common pattern in SQL called the "gaps and islands" problem.

The gaps and islands problem is about spotting continuous data groups ("islands") and places where data is missing ("gaps") in a sequence.


# Approach
Read this [article](https://mattboegner.com/improve-your-sql-skills-master-the-gaps-islands-problem/) by Matt Boegner. It explores various methods to tackle this type of problem, often using window functions or ranking techniques.

This problem in particular is a "islands" problem, since we are trying to identify continuious groups of data.

# Similar Problems
[603. Consecutive Available Seats](https://leetcode.com/problems/consecutive-available-seats/?envType=study-plan-v2&id=premium-sql-50)
[1285. Find the Start and End Number of Continuous Ranges](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/description/)
[1225. Report Contiguous Dates](https://leetcode.com/problems/report-contiguous-dates/description/?envType=study-plan-v2&envId=premium-sql-50)

# Code
```
WITH consecutives AS(
  SELECT 
    C.seat_id, 
    C.free, 
    SUM(C.free) OVER(ORDER BY C.seat_id)  AS cumulative_sum, 
    ROW_NUMBER() OVER(ORDER BY C.seat_id) AS row_num 
  FROM 
    Cinema AS C
), 
groupings AS(
  SELECT 
    MIN(C.seat_id)                      AS first_seat_id, 
    MAX(C.seat_id)                      AS last_seat_id, 
    MAX(C.seat_id) - MIN(C.seat_id) + 1 AS consecutive_seats_len 
  FROM 
    consecutives AS C
  WHERE 
    C.free = 1 
  GROUP BY 
    C.row_num - C.cumulative_sum
) 
SELECT 
  G.first_seat_id, 
  G.last_seat_id, 
  G.consecutive_seats_len 
FROM 
  groupings AS G
WHERE 
  G.consecutive_seats_len = (
    SELECT 
      MAX(consecutive_seats_len) 
    FROM 
      groupings
  ) 
ORDER BY 
  G.first_seat_id

```
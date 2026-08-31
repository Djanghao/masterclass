# Simple Solution Using CASE WHEN

**Author:** Daniel_Charles_J
**Votes:** 15
**Link:** [https://leetcode.com/problems/exchange-seats/solutions/5755287/](https://leetcode.com/problems/exchange-seats/solutions/5755287/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Instead of changing the names simply we can swap the id using the CASE WHEN, In first condition ensured is it a last row, Then checked if it is a ODD id (1,3,5...) converted into Even id (2,4,6...),same conversion done for Even numbers as well, That's it finally Order by.


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT(
  CASE WHEN id % 2 = 1 and  id = (select max(id) from Seat) THEN id
  WHEN id % 2 = 1 THEN id + 1
  WHEN id % 2 = 0 THEN id - 1
  END ) AS id, student 
FROM Seat
ORDER BY id
```
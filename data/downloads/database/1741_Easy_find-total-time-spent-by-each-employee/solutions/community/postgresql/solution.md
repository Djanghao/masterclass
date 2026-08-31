# ✅ Simple solution using only GROUP BY ✅

**Author:** Daniel_Charles_J
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/5869691/](https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/5869691/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Simple solution just we need to use the GROUP BY, it will group each  employees on same day, hence we can sum of their in_time and out_time.

Used 1,2 in GROUP BY it means used first and scond column in the select query.

# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT event_day as day, emp_id, SUM(out_time) - SUM(in_time) as total_time 
FROM Employees
GROUP BY 1,2
```
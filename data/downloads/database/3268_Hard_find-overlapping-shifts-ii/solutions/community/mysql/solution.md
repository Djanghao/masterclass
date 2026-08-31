# 100% MySQL CTEs for Shift Overlap Analysis

**Author:** d_sushkov
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-overlapping-shifts-ii/solutions/5699754/](https://leetcode.com/problems/find-overlapping-shifts-ii/solutions/5699754/)

---

# Intuition
The problem requires us to calculate the maximum number of overlapping shifts and the total duration of overlaps for each employee. We can approach this by treating shift start and end times as separate events, then using these events to calculate concurrent shifts and overlap durations.

# Approach
1. Create a shift changes table that combines start and end times, marking starts with +1 and ends with -1.
2. Use a cumulative sum over these changes to calculate concurrent shifts at any given time.
3. Find the maximum number of concurrent shifts for each employee.
4. Calculate overlap durations by comparing each shift with all other shifts of the same employee.
5. Combine the results using LEFT JOINs to include all employees, even those without overlaps.

# Complexity
- Time complexity:$$O(n^2)$$

The main bottleneck is the overlap duration calculation, which compares each shift with every other shift for the same employee. In the worst case, this is quadratic.
The other operations (creating shift changes, calculating concurrent shifts, finding max overlaps) are all $$O(n \\log n)$$ due to sorting operations.

- Space complexity: $$O(n)$$

We create several intermediate tables (CTEs in the final query) that are proportional to the size of the input.
The shift_changes CTE doubles the input size.
The concurrent_shifts CTE is the same size as shift_changes.
The max_overlaps and overlap_durations CTEs are at most the size of the number of unique employees.

# Code
```mysql []
# Write your MySQL query statement below
WITH shift_changes AS (
    SELECT employee_id, DATE(start_time) AS shift_date, start_time AS change_time, 1 AS shift_change
    FROM EmployeeShifts
    UNION ALL
    SELECT employee_id, DATE(end_time) AS shift_date, end_time AS change_time, -1 AS shift_change
    FROM EmployeeShifts
),
concurrent_shifts AS (
    SELECT 
        employee_id, 
        shift_date, 
        change_time, 
        SUM(shift_change) OVER (PARTITION BY employee_id, shift_date ORDER BY change_time) AS concurrent_count
    FROM shift_changes
),
max_overlaps AS (
    SELECT 
        employee_id, 
        MAX(concurrent_count) AS max_overlapping_shifts
    FROM concurrent_shifts
    GROUP BY employee_id
),
overlap_durations AS (
    SELECT 
        e1.employee_id,
        SUM(
            GREATEST(
                TIMESTAMPDIFF(MINUTE, 
                    GREATEST(e1.start_time, e2.start_time),
                    LEAST(e1.end_time, e2.end_time)
                ),
                0
            )
        ) AS total_overlap_duration
    FROM EmployeeShifts e1
    JOIN EmployeeShifts e2 ON e1.employee_id = e2.employee_id AND e1.start_time < e2.start_time
    WHERE e1.end_time > e2.start_time
    GROUP BY e1.employee_id
)
SELECT 
    DISTINCT e.employee_id,
    COALESCE(m.max_overlapping_shifts, 1) AS max_overlapping_shifts,
    COALESCE(o.total_overlap_duration, 0) AS total_overlap_duration
FROM 
    EmployeeShifts e
LEFT JOIN 
    max_overlaps m ON e.employee_id = m.employee_id
LEFT JOIN 
    overlap_durations o ON e.employee_id = o.employee_id
ORDER BY 
    e.employee_id;
```
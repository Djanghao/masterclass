# PostgreSQL solution

**Author:** AaruKrish
**Votes:** 1
**Link:** [https://leetcode.com/problems/employees-with-deductions/solutions/5104038/](https://leetcode.com/problems/employees-with-deductions/solutions/5104038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Key is to understand how to find difference between two timestamp in PostgreSQL.
Here we need to get epoch from both timestamp in_time and out_time as we need to peform round up of seconds to minute.
For example, if the employee worked for 51 minutes and 2 seconds in a session, we consider it 52 minutes.
Let's understand below statement step by step,
SUM(CEILING(((EXTRACT(epoch FROM out_time)) - (EXTRACT(epoch FROM in_time)))/60))


1. get epoch from (seconds) from both timestamp -->EXTRACT(epoch FROM out_time),EXTRACT(epoch FROM in_time)
2. calculate its difference which we will give you difference in seconds
    i.e. ((EXTRACT(epoch FROM out_time)) - (EXTRACT(epoch FROM in_time))
3. Convert the seconds into minutes.
4   i.e.(((EXTRACT(epoch FROM out_time)) - (EXTRACT(epoch FROM in_time)))/60
4. Use CEILING function to round up seconds(digits after decimal point in the calculation performed in step 3) into minutes.
    i.e. CEILING(((EXTRACT(epoch FROM out_time)) - (EXTRACT(epoch FROM in_time)))/60)
5. Finally, perform aggregation to calculate number of minutes worked by an employee.
i.e. SUM(CEILING(((EXTRACT(epoch FROM out_time)) - (EXTRACT(epoch FROM in_time)))/60))

# Code
```
-- Write your PostgreSQL query statement below

WITH worked_hour AS(
    SELECT
        employee_id,
        SUM(CEILING(((EXTRACT(epoch FROM out_time)) - (EXTRACT(epoch FROM in_time)))/60)) AS total_worked_minutes
    FROM
        Logs
    GROUP BY employee_id
)

SELECT
    e.employee_id
FROM
    Employees e
LEFT JOIN
    worked_hour w
ON e.employee_id = w.employee_id
WHERE e.needed_hours > COALESCE(w.total_worked_minutes/60,0)

```
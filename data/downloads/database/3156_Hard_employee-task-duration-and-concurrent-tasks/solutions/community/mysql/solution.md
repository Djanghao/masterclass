# MySQL solution

**Author:** yukikitayama
**Votes:** 3
**Link:** [https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/5208482/](https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/5208482/)

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
/*
Input
| task_id | employee_id | start_time          | end_time            |
| ------- | ----------- | ------------------- | ------------------- |
| 1       | 7001        | 2023-11-01 08:00:00 | 2023-11-01 10:00:00 |
| 2       | 7001        | 2023-11-01 09:30:00 | 2023-11-01 11:30:00 |
| 3       | 7001        | 2023-11-01 11:00:00 | 2023-11-01 13:00:00 |
| 4       | 7001        | 2023-11-01 12:30:00 | 2023-11-01 14:30:00 |
| 5       | 7001        | 2023-11-01 14:00:00 | 2023-11-01 16:00:00 |
| 6       | 7002        | 2023-11-01 08:00:00 | 2023-11-01 10:00:00 |
| 7       | 7002        | 2023-11-01 10:00:00 | 2023-11-01 12:00:00 |
| 8       | 7002        | 2023-11-01 12:00:00 | 2023-11-01 14:00:00 |
| 9       | 7002        | 2023-11-01 14:00:00 | 2023-11-01 16:00:00 |
| 10      | 7003        | 2023-11-01 09:00:00 | 2023-11-01 12:00:00 |
| 11      | 7003        | 2023-11-01 11:00:00 | 2023-11-01 13:00:00 |
| 12      | 7003        | 2023-11-01 13:00:00 | 2023-11-01 15:00:00 |
| 13      | 7003        | 2023-11-01 14:00:00 | 2023-11-01 16:00:00 |
| 14      | 7003        | 2023-11-01 15:30:00 | 2023-11-01 17:30:00 |
| 15      | 7003        | 2023-11-01 17:00:00 | 2023-11-01 19:00:00 |

Expected
| employee_id | total_task_hours | max_concurrent_tasks |
| ----------- | ---------------- | -------------------- |
| 7001        | 8                | 2                    |
| 7002        | 8                | 1                    |
| 7003        | 10               | 2                    |...
*/

# Write your MySQL query statement below

-- Base data
with cte as (
  select
    a.employee_id,
    a.task_id as base_task_id,
    b.task_id as pair_task_id,
    a.start_time as base_start_time,
    a.end_time as base_end_time,
    b.start_time as pair_start_time,
    b.end_time as pair_end_time
  from
    tasks as a
  inner join
    tasks as b
  on
    a.employee_id = b.employee_Id
    -- Find overlap and non-overlap itself
    and a.start_time <= b.start_time
    and b.start_time < a.end_time
),

-- Count concurrent tasks
cte2 as (
  select
    employee_id,
    -- If a task_id is equal to b task_id, it's not overlap job
    base_task_id,
    -- For each task, count how many count task IDs are overlapped
    -- It's 1 if not overlap
    count(pair_task_id) as concurrent_task_count
  from
    cte
  group by
    1,
    2
),
cte3 as (
  select
    employee_id,
    max(concurrent_task_count) as max_concurrent_tasks
  from
    cte2
  group by
    1
),

-- Duration
cte4 as (
  select
    employee_id,
    floor(sum(if(
      base_task_id = pair_task_id,
      timestampdiff(second, base_start_time, base_end_time),
      -- Overlap time needs to subtract
      -timestampdiff(second, pair_start_time, base_end_time)
    )) / 60 / 60) as total_task_hours
  from
    cte
  group by
    1
)

-- select * from cte;
-- select * from cte2;
-- select * from cte3;
-- select * from cte4;

select
  a.employee_id,
  a.total_task_hours,
  b.max_concurrent_tasks
from
  cte4 as a
left join
  cte3 as b
on
  a.employee_id = b.employee_id
order by
  1
;

```
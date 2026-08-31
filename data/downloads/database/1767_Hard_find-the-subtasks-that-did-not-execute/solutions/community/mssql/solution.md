# Recursion.

**Author:** shnitsel666
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/3581758/](https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/3581758/)

---

# Approach
Recursion.

# Code
```
/* Write your T-SQL query statement below */
;with all_tasks as (
  select task_id, subtasks_count as subtask_id from tasks
  union all
  select task_id, (subtask_id -1) as subtask_id from all_tasks
  where subtask_id > 1
)
select * from all_tasks
except
select * from executed;
```
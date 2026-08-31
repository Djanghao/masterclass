# step by step comment | .dt.total_seconds() & shift()

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/5194142/](https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/5194142/)

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
import pandas as pd

def find_total_duration(tasks: pd.DataFrame) -> pd.DataFrame:
    # 1. get next start time
    tasks = tasks.sort_values(by = ['employee_id', 'start_time'], ascending = [1, 1])
    tasks['next_start_time'] = tasks.groupby('employee_id')['start_time'].shift(-1)
    # 2. compute duration for each task
    tasks['duration'] = (tasks['end_time'] - tasks['start_time']).dt.total_seconds()
    # 3. check overlap
    tasks['is_overlap'] = np.where(tasks['next_start_time'] < tasks['end_time'], 1, 0)
    # 4. compute overlap time
    tasks['overlap_duration'] = np.where(tasks['is_overlap'] == 1, (tasks['end_time'] - tasks['next_start_time']).dt.total_seconds(), 0)
    # 5. aggregate and get final result
    tasks = tasks.groupby('employee_id').agg(
        total_duration_in_seconds = ('duration', 'sum'),
        total_overlap_duration_in_seconds = ('overlap_duration', 'sum'),
        concurrent_tasks_exclude_self = ('is_overlap', 'max')
    ).reset_index()
    # 6. compute total_task_hours and max_concurrent_tasks
    tasks['total_task_hours'] = (tasks['total_duration_in_seconds'] - tasks['total_overlap_duration_in_seconds']) // 3600
    tasks['max_concurrent_tasks'] = tasks['concurrent_tasks_exclude_self'] + 1
    return tasks[['employee_id', 'total_task_hours', 'max_concurrent_tasks']].sort_values(by = 'employee_id')
```
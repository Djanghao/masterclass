# NO CTE OR RECURSIVE - SHORTEST ANSWER USING EXCEPT and GENERATE_SERIES

**Author:** aprilcoding
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/4955255/](https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/4955255/)

---

SHORTEST ANSWER SO FAR 

# Code
```
-- Write your PostgreSQL query statement below
select task_id, generate_series(1, subtasks_count, 1) as subtask_id
from Tasks
except
select * from Executed
```
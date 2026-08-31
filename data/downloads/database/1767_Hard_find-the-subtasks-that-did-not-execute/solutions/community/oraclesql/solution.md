# No recursive queries - easy to understand

**Author:** minabeshay
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/1568739/](https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/1568739/)

---

```
with all_tasks as(
    select task_id, b.id subtask_id from tasks a inner join (select rownum id from all_objects where rownum <=100) b on a.subtasks_count >= b.id
)
select task_id, subtask_id from all_tasks
minus 
select task_id, subtask_id from executed
```
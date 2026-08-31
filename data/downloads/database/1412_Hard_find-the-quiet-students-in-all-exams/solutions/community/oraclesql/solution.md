# oracle: simple and efficient, analytical min/max (one window) + group by/having

**Author:** k_leontev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/3582576/](https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/3582576/)

---

For every stuent in every exam we determine whether the student was "quiet" in this exam by comparing his score to both min and max score for that exam (`decode` step in the subquery).

Then we pick students that were always quiet (`having min(quiet_flag) = 1`).

```
select student_id, student_name
from (
    select 
        s.student_id,
        s.student_name,
        decode(
            e.score, 
            min(e.score) over(partition by e.exam_id), 0,
            max(e.score) over(partition by e.exam_id), 0,
            1
        ) quiet_flag
    from student s 
    join exam e on s.student_id = e.student_id
)
group by student_id, student_name
having min(quiet_flag) = 1
order by student_id
```
Note that we do not peform any self joins and/or set operations, so each table is only accessed once, and no IO overhead is introduced (aside from the potential temp usage for `WINDOW SORT` operation).
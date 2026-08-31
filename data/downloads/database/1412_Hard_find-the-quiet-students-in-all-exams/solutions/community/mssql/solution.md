# Two different solutions, fully explained and easy to folllow, O(nlogn)

**Author:** lalakoko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/5861905/](https://leetcode.com/problems/find-the-quiet-students-in-all-exams/solutions/5861905/)

---

# Intuition
We can get the quiet students in two ways.

The first is to find the non quiet students first i.e. those students that at least once have scored the highest or the lowest. The quiet then are those who don't belong to them. For speed-up a left join is used between the whole students and the non quiet ones; the alternative would be to use a `where student_id not it (...)`.

The second approach is to rank all students based on their score in each exam, if it is the highest or the lowest. The student w/ the highest score gets rank 1 and similarly the student w/ the lowest score gets rank 1. Thus, the quiet students will have a rank > 1 in both categories, highest or lower.

# Approach
Two solutions, one w/ plain SQL and another w/ window functions.

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mssql []
-- Using plain SQL
select distinct s.student_id, s.student_name
from student as s
    -- get students who have taken an exam
    inner join exam as e
    on s.student_id = e.student_id
    -- get quiet students
    left join (
        -- get the students that have scored the highest/lowest at least once
        select e.student_id
        from exam as e
            inner join (
                -- get max and min score for each exam
                select exam_id, max(score) as exm_mx_scr, min(score) as exm_mn_scr
                from exam
                group by exam_id
            ) as ee
            on e.exam_id = ee.exam_id and (e.score = ee.exm_mx_scr or e.score = ee.exm_mn_scr)
    ) as ee
    on e.student_id = ee.student_id
where ee.student_id is null
order by s.student_id

-- Using window function dense_rank
select distinct s.student_id, s.student_name
from student as s
     inner join (
         select *
             , dense_rank() over(partition by exam_id order by score desc) as rnk_by_highest_scr
             , dense_rank() over(partition by exam_id order by score asc) as rnk_by_lowest_scr
         from exam
     ) as e
     on s.student_id = e.student_id
group by s.student_id, s.student_name
having min(e.rnk_by_highest_scr) > 1 and min(e.rnk_by_lowest_scr) > 1
order by s.student_id
```
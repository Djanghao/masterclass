# CASE - SQL Server

**Author:** v_suresh
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-winner-university/solutions/2456451/](https://leetcode.com/problems/the-winner-university/solutions/2456451/)

---

```
/* Write your T-SQL query statement below */

declare @ny_student_count int, @cali_student_count int;

select @ny_student_count = count(score) from NewYork where score>=90;

select @cali_student_count = count(score) from California where score>=90;

select 
    CASE
    when @ny_student_count > @cali_student_count THEN 'New York University'
    when @ny_student_count < @cali_student_count THEN 'California University'
    ELSE 'No Winner'
    END as Winner


```

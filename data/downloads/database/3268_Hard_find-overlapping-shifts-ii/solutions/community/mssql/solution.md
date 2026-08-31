# cte, row_number, left join

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-overlapping-shifts-ii/solutions/6056080/](https://leetcode.com/problems/find-overlapping-shifts-ii/solutions/6056080/)

---

My goal was to order the rows based on the start_time, this gives a sequential order from 1-n depending on how many shifts the employee worked.

Then I chose a left join where the employee_ids match. Since I'm ordering the shifts, I now need to also make sure the s1 (previous shift) row is a number less than s2 (next shifts) number. 

On top of that the next shift has to be a lower start_date than the previous shifts end time and the dates themself also have to match. We're going to also make sure s2.rn is not null because that means a shift did not overlap.

In the end we have to do some logic for when there isn't any overlaps though the employee had a shift. When that number is 0, we'll just make it 1. In that same vein if there is only 1 shift that's overlapping technically it's two because to have a row one shift must overlap another. Otherwise, we simply count the times s2s row is not null. 

Please comment on how I could improve this code explanation. I don't often do write ups.

# Code
```mssql []
/* Write your T-SQL query statement below */
with employees_ordered
as 
(
SELECT row_number() over (partition by employee_id order by start_time) rn
      ,*
  FROM employeeshifts
)
SELECT s1.employee_id
      ,case when sum(case when s2.rn is null then 0 else 1 end) = 1 then 2
                            when sum(case when s2.rn is null then 0 else 1 end) = 0 then 1
                            else sum(case when s2.rn is null then 0 else 1 end) 
                        end max_overlapping_shifts
      ,coalesce(sum(datediff(n, s2.start_time, s1.end_time)),0) total_overlap_duration
FROM employees_ordered s1
left join employees_ordered s2
  on s1.employee_id = s2.employee_id
 and s1.rn < s2.rn
 and s2.start_time < s1.end_time
 and cast(s2.start_time as date) = cast(s1.end_time as date)
 and s2.rn is not null
group by s1.employee_id




```
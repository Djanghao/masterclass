# Oracle solution - self-join and count

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-overlapping-shifts/solutions/5674696/](https://leetcode.com/problems/find-overlapping-shifts/solutions/5674696/)

---

My initial intuition was a little off here, I initially interpreted this as "find any shifts that overlap with another" so I used lead() and "counted" the number of shifts that did overlap with another for the same employee.  I can't determine whether this is what they intended or just how they implemented it, but LC's accepted solution double- (or triple- and so on) counts shifts that overlap with multiple other shifts, so I adjusted to a self-join/cartesian join and just counted the rows per employee.

# Approach
As touched on in the intro, the main this is to join EmployeeShifts to itself, and I'll call those ES1 and ES2.  The approach is to start with a shift for an employee (ES1) and join to it and shifts (from ES2) that overlap with that first shift.  The `where` here is that the two employee_id values must be the same, the second shift must start after the first shift starts (ES2.start_time > ES1.start_time), and the second shift must start before the first shift ends (ES2.start_time < ES1.end_time).  Just group by employee_id and do a count(*) on the result set, which will properly do the multi-counting if a shift overlaps with mukltiple others.

# Code

(Code valid for all SQL variants)

```
with ES_overlap as (
    select ES1.employee_id, ES1.start_time, ES1.end_time,
    ES2.start_time as later_shift_start_time
    from EmployeeShifts ES1,
    EmployeeShifts ES2
    where ES1.employee_id = ES2.employee_id
    and ES2.start_time > ES1.start_time
    and ES2.start_time < ES1.end_time
)
select ES_overlap.employee_id, count(*) as overlapping_shifts
from ES_overlap
group by ES_overlap.employee_id
order by 1
```
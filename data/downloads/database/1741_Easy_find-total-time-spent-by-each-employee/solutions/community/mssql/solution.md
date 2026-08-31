# MS SQL Solution faster 99%~

**Author:** shaxa_dev
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/1903102/](https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/1903102/)

---

```
select event_day as day,emp_id,sum(out_time)-sum(in_time) as total_time from Employees group by event_day,emp_id
```
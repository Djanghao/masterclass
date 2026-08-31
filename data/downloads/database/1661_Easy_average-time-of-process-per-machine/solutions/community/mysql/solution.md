# SQL ✅ | JOIN or Subquery ✅✅| Easy to understand

**Author:** jasurbekaktamov081
**Votes:** 1510
**Link:** [https://leetcode.com/problems/average-time-of-process-per-machine/solutions/3722056/](https://leetcode.com/problems/average-time-of-process-per-machine/solutions/3722056/)

---

# Intuition
***The paste was solved in 2 different ways.
In the first one, a solution based on 'join' is achieved (which is more self-explanatory)
In the second one, the solution is achieved through subqueries (This solution is also understandable and wonderful)***


![image.png](./images/0.png)

# First Solution
```
select a1.machine_id, round(avg(a2.timestamp-a1.timestamp), 3) as processing_time 
from Activity a1
join Activity a2 
on a1.machine_id=a2.machine_id and a1.process_id=a2.process_id
and a1.activity_type='start' and a2.activity_type='end'
group by a1.machine_id

```
# Second Solution
```
select 
a.machine_id,
round(
      (select avg(a1.timestamp) from Activity a1 where a1.activity_type = 'end' and a1.machine_id = a.machine_id) - 
      (select avg(a1.timestamp) from Activity a1 where a1.activity_type = 'start' and a1.machine_id = a.machine_id)
,3) as processing_time
from Activity a
group by a.machine_id
```
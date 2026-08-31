# Detailed explanation of JOIN, ROUND, AVG, GROUP BY.

**Author:** user3592Uu
**Votes:** 526
**Link:** [https://leetcode.com/problems/average-time-of-process-per-machine/solutions/3537533/](https://leetcode.com/problems/average-time-of-process-per-machine/solutions/3537533/)

---

# Approach
To solve this problem, 1st we need to join the same table, so we will have starting time and ending time in the same line:

```
select a1.machine_id, a1.timestamp, a2.timestamp
from Activity a1
join Activity a2
on a1.process_id=a2.process_id
and a1.machine_id=a2.machine_id
and a1.timestamp<a2.timestamp;

| machine_id | timestamp | timestamp |
| ---------- | --------- | --------- |
| 0          | 0.712     | 1.52      |
| 0          | 3.14      | 4.12      |
| 1          | 0.55      | 1.55      |
| 1          | 0.43      | 1.42      |
| 2          | 4.1       | 4.512     |
| 2          | 2.5       | 5         |
```

now we can calculate the difference between timestamps, group the values by machine_id and round average value of differences

```
select a1.machine_id
, ROUND(AVG(a2.timestamp - a1.timestamp),3) as processing_time
from Activity a1
join Activity a2
on a1.process_id=a2.process_id
and a1.machine_id=a2.machine_id
and a1.timestamp<a2.timestamp
group by a1.machine_id;

| machine_id | processing_time |
| ---------- | --------------- |
| 0          | 0.894           |
| 1          | 0.995           |
| 2          | 1.456           |
```

Please upvote if you like my explanation. Good luck!


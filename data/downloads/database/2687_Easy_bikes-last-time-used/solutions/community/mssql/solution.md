# Very Easy MS SQL Server Solution using MAX() + GROUP BY + ORDER BY

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/bikes-last-time-used/solutions/4028613/](https://leetcode.com/problems/bikes-last-time-used/solutions/4028613/)

---

# Code
```
select bike_number, max(end_time) as "end_time"
from Bikes
group by bike_number
order by end_time desc
```
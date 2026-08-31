# Very Easy MS SQL Server Solution using LEFT JOIN + SUM()

**Author:** Vaishnav-Dahake
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-traveled-distance/solutions/3973503/](https://leetcode.com/problems/total-traveled-distance/solutions/3973503/)

---


# Code
```
select u.user_id , u.name , ISNULL(SUM(r.distance),0) as "traveled distance"
from Users u left join Rides r on u.user_id = r.user_id
group by u.user_id , u.name
order by u.user_id
```
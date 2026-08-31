# CTE recursive left join

**Author:** HeyJulie
**Votes:** 1
**Link:** [https://leetcode.com/problems/hopper-company-queries-ii/solutions/3785191/](https://leetcode.com/problems/hopper-company-queries-ii/solutions/3785191/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
/* Write your T-SQL query statement below */\r
with months as\r
(select 1 as month\r
union all\r
select month +1 \r
from Months\r
where month +1 <=12)\r
,\r
driver as\r
(\r
  select month, count(driver_id)'total_driver'\r
  from months m\r
  left join Drivers d\r
  on year(join_date)<2020 or (year(join_date) = 2020 and month(join_date) <= month)\r
  group by month\r
),\r
accept as(\r
  select month(requested_at)'month',count(distinct driver_id)'ac_driver'\r
  from Rides r\r
  join AcceptedRides a\r
  on r.ride_id = a.ride_id\r
  where year(requested_at) = 2020\r
  group by month(requested_at )\r
)\r
select d.month, round(isnull(a.ac_driver*100.00 /d.total_driver,0),2)'working_percentage'\r
from driver d \r
left join accept a\r
on d.month = a.month\r
```
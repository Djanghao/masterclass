# TSQL Rank

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/5871218/](https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/5871218/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH grouped_calls
as
(
    SELECT city, datepart(hour, call_time) hour, count(*) total_calls
    from calls
    group by city, datepart(hour, call_time)
) 
SELECT city
      ,hour peak_calling_hour
      ,total_calls number_of_calls
FROM
(
SELECT rank() over (partition by city order by total_calls desc) ranked_val
      ,city
      ,hour
      ,total_calls
FROM grouped_calls
) x
where x.ranked_val = 1
order by hour desc, city desc
```
# Oracle solution - to_char() to derive hour, rank()

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/4488041/](https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/4488041/)

---

# Approach
This problem asks to return the peak calling hour per city, and the Calls table has the call datetime.  There's quite a few ways to derive the hour from a full datetime, this solution uses to_char(\\<datetime\\>, 'HH24') to isolate the hour.  It should be obvious that this returns the hour as a string, but from testing, LeetCode wants the hour as a number, so use to_number() to convert that derived hour string right back into a number.

The above query of Calls to derive the hour is a CTE called call_hours, and then another CTE call_hours_agg selects the city and call_hour from call_hours and performs a count(*) to determine the number of calls placed at each hour per city.

The final step is to perform a rank on the aggregation; here the RANK() function is used because we want to return all values in the event of a tie.  Use the call_hours_agg CTE and select city, call_hour, and call_ct (the count), and add a RANK(), partitioning by city and ordering by call_ct desc.  Since this will rank all calling hours, select only those with rank 1 which will be the calling hours per city with the highest # of calls.  In this select, perform the proper column naming, and add in the proper ordering (by peak calling hour descending, then by city name descending).

# Code
```
/* Write your PL/SQL query statement below */
with call_hours as (
    select caller_id, recipient_id, city,
    to_number(to_char(call_time, 'HH24')) as call_hour
    from Calls
),
call_hours_agg as (
    select city, call_hour, count(*) as call_ct
    from call_hours
    group by city, call_hour
)
select city,
call_hour as peak_calling_hour,
call_ct as number_of_calls
from
(
    select city, call_hour, call_ct,
    RANK() over (partition by city order by call_ct desc) as RK
    from call_hours_agg
)
where RK = 1
order by 2 desc, 1 desc
```
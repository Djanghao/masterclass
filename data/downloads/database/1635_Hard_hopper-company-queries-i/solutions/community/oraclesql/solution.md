# An Oracle solution

**Author:** yucan29
**Votes:** 0
**Link:** [https://leetcode.com/problems/hopper-company-queries-i/solutions/5764662/](https://leetcode.com/problems/hopper-company-queries-i/solutions/5764662/)

---


```oraclesql []
with w_All_Months as 
(
    select
        level as month
    from dual
    connect by level<=12
)
select
    s3.month,
    s3.active_drivers,
    s6.accepted_rides 
from
(
    select
        distinct 
        a.month,
        count(s2.driver_id) over(order by a.month) as active_drivers
    from w_All_Months a
    left outer join 
    (
        select    
            driver_id,        
            case 
                when extract (year from join_date)<2020 then 1
                else extract (month from join_date)
            end as month         
        from Drivers d           
        where extract (year from join_date)<=2020
    )s2
    on
        a.month = s2.month
)s3    
left outer join
(
    select
        distinct
        a.month,            
        count(s5.driver_id) over(partition by s5.month) as accepted_rides
    from w_All_Months a
    left outer join
    (
        select
            r.ride_id,
            ar.driver_id,
            extract(month from requested_at) as month        
        from Rides r
        left outer join AcceptedRides ar
        on
            r.ride_id = ar.ride_id
        where
            ar.ride_id is not null and 
            extract (year from requested_at) = 2020
    )s5
    on
        a.month = s5.month    
)s6
on
    s3.month = s6.month
order by
    s3.month
```
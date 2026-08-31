# MSSQL, faster than 83%

**Author:** Runner2050
**Votes:** 1
**Link:** [https://leetcode.com/problems/hopper-company-queries-i/solutions/1734030/](https://leetcode.com/problems/hopper-company-queries-i/solutions/1734030/)

---

````
with Months as 
(
select 1 as Current_Month 
    union all 
    select 1+Current_Month
    from Months 
    where Current_month < 12

), drivers1 as ( 
    
      select Month, sum(Driver_CNT) Driver_CNT
            from (  Select  
                Case when year(d1.join_date ) < 2020 then 1 else month(d1.join_date ) END as Month,
                 count(driver_id) as Driver_CNT  
                from   Drivers  d1  
                where  year(d1.join_date ) <= 2020
                 group by  year(d1.join_date ),month(d1.join_date )) tds
        group by Month
    
    ) 
, months_Drivers as 
    (
    Select   m.current_month,
        sum(driver_cnt) over (order by m.current_month) driver_cnt
        
        from months m left outer join drivers1 d1 on m.current_month = d1.Month
         --group by m.current_month
    
    
    ), Accepted_rides as 
    (
       Select 
        Month(r.requested_at ) Month_requested,
         count(ar.ride_id) ride_cnt
        
        from 
        Rides r  
         JOIN AcceptedRides  ar on 
          ar.ride_id = r.ride_ID and year(requested_at )  = 2020 
        
         group by Month(requested_at ) 
    )
   select current_month as month, 
    sum(isnull(driver_cnt,0)) as active_Drivers, 
    SUM(isnull( ride_cnt  ,0)) as accepted_rides
    
    From  months_Drivers LEFT OUTER JOIN Accepted_rides on Month_requested=current_month
           group by current_month
           order by current_month
````
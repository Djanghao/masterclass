# Oracle solution

**Author:** Emailsiraj
**Votes:** 1
**Link:** [https://leetcode.com/problems/new-users-daily-count/solutions/443321/](https://leetcode.com/problems/new-users-daily-count/solutions/443321/)

---

````
select TO_CHAR(activity_date,'YYYY-MM-DD') "login_date" ,count(user_id) "user_count"
from (select min(activity_date) activity_date,user_id 
from traffic 
where activity='login'
group by user_id)
where activity_date between    (to_date( '2019-06-30','YYYY-MM-DD')-90) 
and to_date(activity_date,'YYYY-MM-DD')
group by TO_CHAR(activity_date,'YYYY-MM-DD')
order by 1
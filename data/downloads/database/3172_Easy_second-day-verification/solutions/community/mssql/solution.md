# Very Easy MS SQL Server Solution Using WHERE + DATEADD + CAST

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-day-verification/solutions/5837305/](https://leetcode.com/problems/second-day-verification/solutions/5837305/)

---

# Code
```mssql []
select E.user_id
from emails E Inner Join texts T on E.email_id = T.email_id
where T.signup_action = 'Verified' and DATEADD(day,1,cast(signup_date as date)) = cast(action_date as date)
order by 1
```
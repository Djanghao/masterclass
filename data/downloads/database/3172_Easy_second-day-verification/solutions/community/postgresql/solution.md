# Simple join solution

**Author:** raksha18
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-day-verification/solutions/6047464/](https://leetcode.com/problems/second-day-verification/solutions/6047464/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below

select e.user_id 
from emails as e
join texts as t
on e.email_id = t.email_id
where e.email_id in (select distinct email_id from texts where signup_action = 'Verified')
-- and (signup_date-action_date) = 1
and abs(signup_date-action_date) = 1
and t.signup_action = 'Verified'
group by e.user_id 

-- select user_id from emails
-- where email_id in 
-- and signup_date-action_date = 1
```
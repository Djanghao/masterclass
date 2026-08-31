# solution with case-when and avg aggregate function

**Author:** kashmirabhake
**Votes:** 22
**Link:** [https://leetcode.com/problems/confirmation-rate/solutions/4964152/](https://leetcode.com/problems/confirmation-rate/solutions/4964152/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We know that each timeout action or no action is considered 0, hence used case when to mark action = 'confirmed' as 1 and everything else as 0. This covers timeouts and no actions.

We use left join between signups and confirmation as we need data of all users who have signed up

Now to calculate average we use aggregate method avg() on the case-when statement and use round function to roundoff to 2 decimal points 

# Code
```
-- Write your PostgreSQL query statement below
select s.user_id, round(avg(case 
when action = 'confirmed' then 1
else 0 end),2) as confirmation_rate
from signups s left join confirmations c
on s.user_id = c.user_id
group by s.user_id
```
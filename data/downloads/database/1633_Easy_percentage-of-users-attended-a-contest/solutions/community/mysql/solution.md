# SQL ✅ | SUBQUERY, GROUP BY, ORDER BY ✅✅| Easy to understand

**Author:** jasurbekaktamov081
**Votes:** 446
**Link:** [https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/3789653/](https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/3789653/)

---

# Intuition
In this issue, a subquery was made once through User table i. Then group by and order by were used

**If you like the solution, don't forget to click the upvote button below**

![image.png](./images/0.png)


# Code
```
select 
contest_id, 
round(count(distinct user_id) * 100 /(select count(user_id) from Users) ,2) as percentage
from  Register
group by contest_id
order by percentage desc,contest_id
```
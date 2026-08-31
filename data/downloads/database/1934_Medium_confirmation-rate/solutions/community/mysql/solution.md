# 92% Beats || Easy code with explanation || Must read

**Author:** sadhana_om142003
**Votes:** 1314
**Link:** [https://leetcode.com/problems/confirmation-rate/solutions/3563481/](https://leetcode.com/problems/confirmation-rate/solutions/3563481/)

---



# Approach
- left join `Signups` table with `Confirmations` table, group by user_id.
- we have to display `user_id` and `confirmation_rate` :
1. user_id will be simply displayed.
2. to display confirmation_rate , we need to find average using aggregation function avg(), here using if clause we specified that if action is `confirmed` we count it as 1 and else if `null or timeout` we will count it as 0. 

# Code
```
# Write your MySQL query statement below
select s.user_id, round(avg(if(c.action="confirmed",1,0)),2) as confirmation_rate
from Signups as s left join Confirmations as c on s.user_id= c.user_id group by user_id;



```
# Request
**Please upvote if you find it helpful**
![meme.png](./images/0.png)












# Oracle, CTE and Lag

**Author:** bytchenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-active-users/solutions/3523460/](https://leetcode.com/problems/find-active-users/solutions/3523460/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can create CTE with a help of window function `Lag` to compute `criterium` if user is smart (`1`) or not (`0`). Having CTE we can easily query it

# Approach
<!-- Describe your approach to solving the problem. -->
Window function (`Lag`) within CTE

# Code
```
/* Write your PL/SQL query statement below */

with cte as (
    select user_id,
           case 
              when created_at - Lag(created_at) over (partition by user_id order by created_at) <= 7 then 1
              else 0
           end criterium   
      from Users)

select distinct user_id
  from cte
 where criterium = 1 


```
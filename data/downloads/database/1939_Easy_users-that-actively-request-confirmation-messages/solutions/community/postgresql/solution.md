# Simple solution using JOIN and INTERVAL

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/5949146/](https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/5949146/)

---

# Intuition
Since `user_id` and `time_stamp` are the primary key for `confirmations`, there will not be two identical (user_id, time_stamp) rows. Join `confirmations` with itself on the same `user_id` and different `time_stamp`s. 

# Approach
See query. 

# Code
```postgresql []
-- Write your PostgreSQL query statement below

select
    distinct c1.user_id
from 
    confirmations c1
join 
    confirmations c2
on 
    c1.user_id = c2.user_id and c1.time_stamp < c2.time_stamp and c2.time_stamp <= c1.time_stamp + interval '1 day';
```
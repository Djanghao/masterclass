# Simple MYSQL Solution

**Author:** rklarpit
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/1017341/](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/1017341/)

---

```
# Write your MySQL query statement below

    select 
        min(log_id) as start_id, 
        max(log_id) as end_id
    from(
        SELECT 
            log_id, 
            row_number()over(order by log_id) as rn
        from
             logs) as a
    group by log_id-rn
```
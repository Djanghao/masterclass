# Oracle | Lead

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/5627112/](https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/5627112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */
with cte as
    (select
        (case
            when lead (purchase_date,1) over (partition by user_id order by purchase_date) - purchase_date <= 7 then user_id 
        end) as user_id
    from
        purchases
    order by
        1)

select
    distinct
    user_id
from
    cte
where
    user_id is not null
order by
    1
```
# Oracle | Rank | Partition by

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-transaction-each-day/solutions/5529095/](https://leetcode.com/problems/maximum-transaction-each-day/solutions/5529095/)

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
    transaction_id,
    rank() over (partition by to_char(day,'yyyy-mm-dd') order by amount desc) as rnk
from
    Transactions)

select
    transaction_id
from
    cte
where
    rnk = 1
order by 1
```
# rank and join

**Author:** acme
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-third-transaction/solutions/5994700/](https://leetcode.com/problems/find-third-transaction/solutions/5994700/)

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
```mssql []
/* Write your T-SQL query statement below */
with base as(
    select *,
    rank() over (partition by user_id order by transaction_date) as rn
    from Transactions
)
select b1.user_id, b1.spend as third_transaction_spend,b1.transaction_date as third_transaction_date
from base b1 
join base b2
on b1.user_id=b2.user_id and b1.rn=3 and b2.rn=2
join base b3 
on b1.user_id=b3.user_id  and b3.rn=1
where b1.spend>b2.spend and b1.spend>b3.spend
order by 1

```
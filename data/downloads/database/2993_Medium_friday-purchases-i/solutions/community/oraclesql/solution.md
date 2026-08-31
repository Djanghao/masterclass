# Clear oracle solution with CTE and SUM function | beats 100.0 %

**Author:** roadytom
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchases-i/solutions/5909098/](https://leetcode.com/problems/friday-purchases-i/solutions/5909098/)

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
```oraclesql []
/* Write your PL/SQL query statement below */
with cte as (
    select
        to_char(purchase_date, 'yyyy-mm-dd') as purchase_date,
        to_number(to_char(purchase_date, 'D')) as purchase_day,
        to_number(to_char(purchase_date, 'W')) as week_of_month,
        amount_spend
    from 
        purchases
)
select 
    distinct week_of_month,
    purchase_date,
    sum(amount_spend) over (partition by week_of_month, purchase_date ) as total_amount
from cte
where purchase_day='6'
order by week_of_month asc
 

```
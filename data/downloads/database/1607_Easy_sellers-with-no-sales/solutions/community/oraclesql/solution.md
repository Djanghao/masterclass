# Beats 100%

**Author:** user9509z
**Votes:** 0
**Link:** [https://leetcode.com/problems/sellers-with-no-sales/solutions/5753165/](https://leetcode.com/problems/sellers-with-no-sales/solutions/5753165/)

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
select 
seller_name
from seller s
where not exists 
(
    select 1 from 
    orders o
    where 
    o.seller_id=s.seller_id
    and to_char(sale_date,'YYYY')='2020'
)
order by 1;
```
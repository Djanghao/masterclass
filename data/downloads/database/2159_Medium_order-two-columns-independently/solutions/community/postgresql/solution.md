# PostGresql using row_number

**Author:** user3162ix
**Votes:** 0
**Link:** [https://leetcode.com/problems/order-two-columns-independently/solutions/6079534/](https://leetcode.com/problems/order-two-columns-independently/solutions/6079534/)

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
```postgresql []
-- Write your PostgreSQL query statement below
with f as
(
    select first_col,
    row_number() over (order by first_col) as f_rnk 
    from Data
),
s as 
(
    select second_col,
    row_number() over (order by second_col desc) as s_rnk 
    from Data
)
select first_col,second_col
from f inner join s on f.f_rnk=s.s_rnk
```
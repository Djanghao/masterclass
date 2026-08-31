# CTE, row_number

**Author:** acme
**Votes:** 0
**Link:** [https://leetcode.com/problems/order-two-columns-independently/solutions/5949003/](https://leetcode.com/problems/order-two-columns-independently/solutions/5949003/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If use rank, maybe not work for tie rows
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
with f as(
select first_col, row_number() over (order by first_col) as r
from Data
),
s as(
   select second_col, row_number() over (order by second_col desc) as r
from Data 
)
select first_col,second_col
from f join s
on f.r=s.r
order by 1
```
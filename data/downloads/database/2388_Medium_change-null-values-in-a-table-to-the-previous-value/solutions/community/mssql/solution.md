# Using row_number, count, first_value and no joins

**Author:** Shivakumar020
**Votes:** 2
**Link:** [https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/4030715/](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/4030715/)

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
/* Write your T-SQL query statement below */
with cte as
(
    select
        a.id, a.drink, row_number() over(order by (select null)) as rn
    from CoffeeShop a
)
select
    id, first_value(drink) over(partition by cnt order by rn) as drink
from
(
    select
        id, drink, rn, count(drink) over(order by rn) as cnt
    from cte
) as t
```
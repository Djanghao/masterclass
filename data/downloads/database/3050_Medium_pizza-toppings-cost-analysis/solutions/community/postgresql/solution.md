# PostgreSQL: double join with conditions

**Author:** alek_leetc
**Votes:** 2
**Link:** [https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/5210758/](https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/5210758/)

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
-- Write your PostgreSQL query statement below
select
t1.topping_name || ',' || t2.topping_name || ',' || t3.topping_name as pizza,
t1.cost + t2.cost + t3.cost as total_cost
from Toppings t1 join Toppings t2
    on t1.topping_name < t2.topping_name
    join Toppings t3
        on t2.topping_name < t3.topping_name
order by 2 desc, 1 asc
```
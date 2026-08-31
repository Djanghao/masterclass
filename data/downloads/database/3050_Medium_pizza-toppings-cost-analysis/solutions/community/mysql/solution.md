# INNER JOIN + CONCAT

**Author:** MahijaShivani
**Votes:** 3
**Link:** [https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/5767565/](https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/5767565/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
inner join with topping names and t1 topping name should be smaller then t2. Then again inner join with t3.
Concat the three topping names and add the three cost coulumns

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mysql []
# Write your MySQL query statement below
select 
    concat(t1.topping_name, ',' , t2.topping_name, ',' , t3.topping_name)as pizza, 
    t1.cost + t2.cost + t3.cost as total_cost 
from toppings t1 inner join toppings t2 
on t1.topping_name < t2.topping_name 
inner join toppings t3
on t2.topping_name < t3.topping_name
order by total_cost desc, pizza

```
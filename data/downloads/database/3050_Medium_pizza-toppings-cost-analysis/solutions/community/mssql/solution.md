# join

**Author:** HeyJulie
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/5774231/](https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/5774231/)

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
with CTE as(
select*, row_number() over (order by topping_name )'r'
from Toppings)
select distinct CONCAT_WS(',',t1.topping_name ,t2.topping_name ,t3.topping_name )'pizza',
t1.cost + t2.cost +t3.cost 'total_cost'
from CTE t1
join CTE t2
on t1.topping_name <> t2.topping_name and t1.r < t2.r
join CTE t3
on t2.topping_name <> t3.topping_name and t1.topping_name <> t3.topping_name and t2.r< t3.r
order by t1.cost + t2.cost +t3.cost desc
```
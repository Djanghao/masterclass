# Oracle solution - self-joins, concatenation

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/4782144/](https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/4782144/)

---

This solution uses self-joins to implement the "find all possible combinations" logic.  From there, some additional logic in the where clause handles the requirements for the combinations - no repeated toppings, and the toppings in a combination must be in alphabetical order.

# Approach
As touched on in the intro, this solution uses self-joins, with the ```Toppings``` table appearing 3 times in the from clause; this solution uses the creative naming of a, b, and c for the 3 instances.  From there, the two conditions noted in the requirements are applied - no repeated toppings, and the 3 toppings must be in alphabetical order.  In terms of logic:
\\- To ensure that all toppings are unique (no repeated toppings), use "not equals" to ensure that all toppings are different: ```a.topping_name <> b.topping_name
and a.topping_name <> c.topping_name
and b.topping_name <> c.topping_name```
\\- Since the self-joins will return all permutations, e.g., (a, b, c), (a, c, b), (b, a, c), etc., use "less than" logic, ```a.topping_name < b.topping_name
and b.topping_name < c.topping_name```, to ensure that the 3 toppings are sorted alphabetically.

The select handles the "aggregation" for each combination from the requirements:
\\- Use double-pipe (||) concatenation to select the join the 3 topping names, separated by commas, into a single field named "pizza".  As code, this is ```a.topping_name||','||b.topping_name||','||c.topping_name``` 
\\- Add the cost of the 3 toppings together and rename the field "total_cost".  As code, this is ```a.cost + b.cost + c.cost```.

The final piece is to order by the total cost descending, and by the topping combination alphabetically in the event of a tie.  In terms of code, since there are only 2 columns selected, this solution uses ```order by 2 desc, 1 asc```.


# Code
```
/* Write your PL/SQL query statement below */
select a.topping_name||','||b.topping_name||','||c.topping_name as pizza,
a.cost + b.cost + c.cost as total_cost
from Toppings a,
Toppings b,
Toppings c
where a.topping_name <> b.topping_name
and a.topping_name <> c.topping_name
and b.topping_name <> c.topping_name
and a.topping_name < b.topping_name
and b.topping_name < c.topping_name
order by 2 desc, 1 asc
```
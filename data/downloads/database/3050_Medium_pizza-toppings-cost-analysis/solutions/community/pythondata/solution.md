# easy solution | combination() + merge()

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/4792359/](https://leetcode.com/problems/pizza-toppings-cost-analysis/solutions/4792359/)

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
import pandas as pd
from itertools import combinations

def cost_analysis(toppings: pd.DataFrame) -> pd.DataFrame:
    # 1. Sort the toppings df
    toppings = toppings.sort_values(by = 'topping_name', ascending = True)
    # 2. Generate all possible combinations (a list of tuples) of 3 distinct toppings
    all_combinations_list = list(combinations(toppings['topping_name'], 3))
    # 3. Process topping names and concat and create a df
    res = pd.DataFrame(data = all_combinations_list, columns = ['A', 'B', 'C'])
    # 4. merge with original toppings table to get total cost
    res = res.merge(toppings, how = 'left', left_on = 'A', right_on = 'topping_name').merge(
        toppings, how = 'left', left_on = 'B', right_on = 'topping_name').merge(
            toppings, how = 'left', left_on = 'C', right_on = 'topping_name'
        )
    # 5. compute total_cost
    res['total_cost'] = round(res['cost_x'] + res['cost_y'] + res['cost'], 2)
    # 6. get pizza col
    res['pizza'] = res['A'] + ',' + res['B'] + ',' + res['C']
    return res[['pizza', 'total_cost']].sort_values(by = ['total_cost', 'pizza'], ascending = [False, True])
```
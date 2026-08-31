# Ruby | Beats 100%

**Author:** amitbansal7
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/3497469/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/3497469/)

---

# Code
```
def min_cost(start_pos, home_pos, row_costs, col_costs)
  rows = [start_pos[0], home_pos[0]].sort
  cols = [start_pos[1], home_pos[1]].sort

  res = row_costs.slice(rows[0]..rows[1]).sum + col_costs.slice(cols[0]..cols[1]).sum 
  res - row_costs[start_pos[0]] - col_costs[start_pos[1]]
end
```
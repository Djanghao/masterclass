# RUBY 90%

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/5118689/](https://leetcode.com/problems/two-city-scheduling/solutions/5118689/)

---

# Code
```
# @param {Integer[][]} costs
# @return {Integer}
def two_city_sched_cost(costs)
    n = costs.size / 2
    total_cost = 0
    diff_costs = costs.map { |cost| [cost[0] - cost[1], cost] }
    sorted_diff_costs = diff_costs.sort_by { |diff, _| diff }
    
    sorted_diff_costs[0...n].each do |_, cost|
        total_cost += cost[0]
    end
    sorted_diff_costs[n..-1].each do |_, cost|
        total_cost += cost[1]
    end
    total_cost
end

```
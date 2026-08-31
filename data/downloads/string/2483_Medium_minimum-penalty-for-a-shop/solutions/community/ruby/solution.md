# Ruby soln - One pass - 85%

**Author:** andykimchris
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3975550/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3975550/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At every step we need to figure out if there's a customer or not and wha's the cost to pay for that result.

# Approach
<!-- Describe your approach to solving the problem. -->
Because this problem is 0-indexed we set earliest_hour at -1 instead of 0. We set cost and max_cost at 0 initially and go through the customers accounting for cost state. If the cost of the index we're in exceeds max_cost, we set max_cost to the cost computed and earlier_hour to current index. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - We go through customers size once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - We don't pay any extra cost in space, we only keep track of index and cost

# Code
```
# @param {String} customers
# @return {Integer}
def best_closing_time(customers)
    max_cost = cost = 0
    earlier_hour = -1 # 0-indexed

    customers.size.times do |i|
        cost += 1 if customers[i] == "Y"
        cost -= 1 if customers[i] == "N"

        if cost > max_cost
            earlier_hour = i 
            max_cost = cost 
        end
    end

    # Because it's 0-indexed we need to add 1 to our index to get hour 
    earlier_hour + 1 
end
```
# Backtracking Solution. 89ms, beats 100%

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/4249203/](https://leetcode.com/problems/closest-dessert-cost/solutions/4249203/)

---


# Code
```
# @param {Integer[]} base_costs
# @param {Integer[]} topping_costs
# @param {Integer} target
# @return {Integer}
def closest_cost(base_costs, topping_costs, target)

    # One ice cream base
    # 0+ toppings
    # 2 of each type of toppings
    # Base_costs, ice cream cost
    # topping_costs, toppings cost
    @answer = 100001
    @target = target
    @found = false
    @cache = {}

    # Return the closest possible cost of the dessert to target. If there are multiple, return the lower one.
    base_costs.each do |c|
        backtracking topping_costs, c
    end

    @answer  
end

def backtracking topping_costs, current_val = 0, index = 0
    # Exit early upon exact match.
    if @found
        return
    end

    if @cache[[current_val, index]]
        return
    else
        @cache[[current_val, index]] = true
    end

    # Set answer
    if @target == current_val
        @answer = current_val
        @found = true
    else
        old_answer = (@target - @answer).abs
        new_answer = (@target - current_val).abs
        if old_answer == new_answer and current_val < @answer
            @answer = current_val
        elsif old_answer > new_answer
             @answer = current_val
        end
    end

    # Exit if we reach index or above target.
    if current_val > @target || index == topping_costs.size
        return
    end


    while index < topping_costs.size
        # Add no toppings.
        backtracking topping_costs, current_val, index + 1
        
        # Add one topping.
        backtracking topping_costs, current_val + topping_costs[index], index + 1

        # Add two toppings.
        backtracking topping_costs, current_val + (topping_costs[index] * 2), index + 1

        index += 1
    end
end
```
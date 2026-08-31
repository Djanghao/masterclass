# Ruby solution beats 100%.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5437758/](https://leetcode.com/problems/water-bottles/solutions/5437758/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} num_bottles
# @param {Integer} num_exchange
# @return {Integer}
def num_water_bottles(num_bottles, num_exchange)
    consumed_bottles = 0

    while num_bottles >= num_exchange
        # Maximum number of times we can consume numExchange
        # number of bottles using numBottles.
        k = num_bottles / num_exchange

        consumed_bottles += num_exchange * k
        num_bottles -= num_exchange * k

        num_bottles += k
    end    

    consumed_bottles + num_bottles
end
```
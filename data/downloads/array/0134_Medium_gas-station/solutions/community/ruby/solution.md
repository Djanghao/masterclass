# Ruby || Easy to understand || O(n) || O(1)

**Author:** xmmmir
**Votes:** 3
**Link:** [https://leetcode.com/problems/gas-station/solutions/3011191/](https://leetcode.com/problems/gas-station/solutions/3011191/)

---

# Intuition
1. We need to have enough total gas on the stations to cover full route cost.
2. There is always only one station where we have the lowest gas value(because solution is guaranteed to be unique). It's a good idea to start there.

# Approach
1. Run through cycle once with 0 start gas. Remember the `min_index` of the station with the lowest gas value possible.
2. If gas left after the cycle is less than 0, return `-1`. Otherwise, return `min_index` 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```ruby
# @param {Integer[]} gas
# @param {Integer[]} cost
# @return {Integer}
def can_complete_circuit(gas, cost)
    cur = min = min_index = 0
    
    gas.each_with_index do |g, i|
        cur += g - cost[i]

        next unless cur < min
        
        min = cur
        min_index = i + 1
    end

    cur < 0 ? -1 : min_index
end
```
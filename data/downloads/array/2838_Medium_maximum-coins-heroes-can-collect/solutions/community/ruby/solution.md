# Simple solution using prefix sum and binary search

**Author:** user2755N
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5988352/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5988352/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: The overall time complexity of the function is: [ O(n \\log n + m \\log n) ] which simplifies to (O((n + m) \\log n)), assuming n is the dominant factor in the sorting and binary search operations.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} heroes
# @param {Integer[]} monsters
# @param {Integer[]} coins
# @return {Integer[]}
def maximum_coins(heroes, monsters, coins)
    paired = monsters.zip(coins)
    sorted_pairs = paired.sort_by { |monster, _coin| monster }

    prefix_sum = []
    sorted_pairs.inject(0) do |sum, (_monster, coins)|
        sum += coins
        prefix_sum << sum
        sum
    end

    len = monsters.length    
    result = []
    heroes.each do |hero|
        low = 0
        high = len-1
        
        while low <= high
            mid = low + (high-low)/2
            if sorted_pairs[mid][0] <= hero
                low = mid + 1
            else
                high = mid - 1                
            end
        end
        result << (high >= 0 ? prefix_sum[high] : 0)
    end

    result
end
```
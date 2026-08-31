# Range Approach

**Author:** Joyvis
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/5604588/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/5604588/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It defines a current range that can be reached with our current available coins.
`index` is used just to manage the array index.
`reachable_range` is the current range that can be reached with the coins we read.
`result` is a counter that contains how many coins we need to add.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
0(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
0(n)

# Code
```
# @param {Integer[]} coins
# @param {Integer} target
# @return {Integer}
def minimum_added_coins(coins, target)
  result, reachable_range, index = 0, 0, 0
  coins.sort!
  while(reachable_range < target)
    if index < coins.length && coins[index] <= reachable_range + 1
      reachable_range += coins[index]
      index += 1
      next
    end
    result += 1
    reachable_range += reachable_range + 1
  end

  result
end
```
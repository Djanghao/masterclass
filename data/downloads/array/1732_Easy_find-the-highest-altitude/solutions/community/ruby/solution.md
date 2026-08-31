# [Ruby] Prefix Sum

**Author:** user0350bU
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/3169507/](https://leetcode.com/problems/find-the-highest-altitude/solutions/3169507/)

---

# Approach
Build the prefix sum and take the max if greater than zero otherwise return zero

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

# Code
```
def largest_altitude(gain)
    prefix = gain.inject([]) { |acc, value| acc << acc.last.to_i + value.to_i }
    max_gain = prefix.max
    max_gain < 0 ? 0 : max_gain
end
```
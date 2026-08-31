# Simple Ruby Solution with Explanation

**Author:** AgentK1729
**Votes:** 0
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4662159/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4662159/)

---

# Intuition
In this case, the clockwise and counter-clockwise concept doesn't really matter. Basically whoever picks the last flower wins. Therefore, Alice will win if there are an odd number of flowers

# Approach
The problem now reduces to finding the number of combinations of one number < n and one number < m adding up to an odd number.

Two numbers will add up to an odd number only if one number is even, and the other number is odd.

Therefore the total number of combinations = 
(number of even numbers < n * number of odd numbers < m) +
(number of even numbers < m * number of odd numbers < n)

# Complexity
- Time complexity:
O(1), since there is a constant number of calculations regardless of m and n

- Space complexity:
O(1), since we only really need m and n (added variables in the solution for ease of readability, but you can get away with using just m and n)

# Code
```
# @param {Integer} n
# @param {Integer} m
# @return {Integer}
def num_odds(n)
    return n%2 + (n/2).to_i
end

def flower_game(n, m)
    nodds, modds = num_odds(n), num_odds(m)
    neven, meven = n - nodds, m - modds
    return neven*modds + meven*nodds
end
```
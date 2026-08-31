# Super simple, intuitive, 8-line Python solution (beats 99.92% of users)!

**Author:** frestre
**Votes:** 813
**Link:** [https://leetcode.com/problems/jump-game/solutions/4534808/](https://leetcode.com/problems/jump-game/solutions/4534808/)

---

# Intuition
Imagine you have a car, and you have some distance to travel (the length of the array). This car has some amount of gasoline, and as long as it has gasoline, it can keep traveling on this road (the array). Every time we move up one element in the array, we subtract one unit of gasoline. However, every time we find an amount of gasoline that is greater than our current amount, we "gas up" our car by replacing our current amount of gasoline with this new amount. We keep repeating this process until we either run out of gasoline (and return false), or we reach the end with just enough gasoline (or more to spare), in which case we return true.
<b>Note:</b> We can let our gas tank get to zero as long as we are able to gas up at that immediate location (element in the array) that our car is currently at.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        gas = 0
        for n in nums:
            if gas < 0:
                return False
            elif n > gas:
                gas = n
            gas -= 1
            
        return True
```
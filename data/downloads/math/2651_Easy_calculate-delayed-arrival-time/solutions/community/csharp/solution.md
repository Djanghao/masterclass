# c#, Oneliner

**Author:** bytchenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3447038/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3447038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Typical modulo arithmetic problem.

# Approach
<!-- Describe your approach to solving the problem. -->
A simple formula

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    public int FindDelayedArrivalTime(int arrivalTime, int delayedTime) => 
      (arrivalTime + delayedTime) % 24;    
}
```
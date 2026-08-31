# c#, oneliner

**Author:** bytchenko
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/2696113/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/2696113/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
All cars collide except the leftmost ones which moves left and rightmost moving right.

# Approach
<!-- Describe your approach to solving the problem. -->
We can trim cars which don't collide and count the rest

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {

    public int CountCollisions(string directions) =>
        directions.TrimStart('L').TrimEnd('R').Count(c => c != 'S'); 
    
}
```
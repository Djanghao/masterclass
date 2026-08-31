# c#, greedy solution

**Author:** bytchenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955572/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955572/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we can use *greedy approach*: put additional stones to the bag with the smallest rest (`capacity - rocks`) capacity.

# Approach
<!-- Describe your approach to solving the problem. -->
Order bags by their `delta` (original - used) capacity, then a simple for loop. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    
    public int MaximumBags(int[] capacity, int[] rocks, int additionalRocks) {
        var deltas = capacity
            .Zip(rocks, (c, r) => c - r)
            .OrderBy(item => item);

        int result = 0;    
            
        foreach (int delta in deltas) {
            if (additionalRocks < delta)
                break;
            
            additionalRocks -= delta;
            
            result += 1;
        }
        
        return result;
    }
    
}
```
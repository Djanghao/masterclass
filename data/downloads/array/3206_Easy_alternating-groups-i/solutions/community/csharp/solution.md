# easy

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5787606/](https://leetcode.com/problems/alternating-groups-i/solutions/5787606/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int NumberOfAlternatingGroups(int[] colors)
    {
        int Count = 0;
        int length = colors.Length;

        for(int i = 0; i < length; i++)
            if(colors[i] != colors[(i + 1) % length] && colors[i] == colors[(i + 2) % length])    
                Count++;

        return Count;
    }
}
```
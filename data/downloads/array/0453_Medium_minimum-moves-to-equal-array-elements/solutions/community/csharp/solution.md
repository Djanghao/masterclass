# Minimum Moves to Equalize Array Elements

**Author:** Subham-Bose
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/6016354/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/6016354/)

---

# Intuition
To equalize all elements in an array with the minimum moves, it\u2019s efficient to consider bringing each element down to the minimum value. Since each move involves decreasing one element by 1, summing the difference between each element and the minimum gives the total moves needed.

# Approach
- Find the Minimum Element: Traverse the array to find the minimum value. This value represents the target value to which all other elements will be reduced.
- Calculate Total Moves: Iterate through the array again, summing the differences between each element and the minimum. This sum represents the minimum moves required to equalize the array.

# Complexity
- **Time Complexity:** O(n), where n is the number of elements in nums. We traverse the array twice.
**Space Complexity:** O(1), as we use only a fixed amount of additional space.

# Code
```csharp []
public class Solution
{
    public int MinMoves(int[] nums)
    {
        int min = int.MaxValue;
        
        // Find the minimum element
        foreach (int num in nums)
        {
            min = Math.Min(min, num);
        }
        
        int totalMoves = 0;
        
        // Calculate the total moves needed
        foreach (int num in nums)
        {
            totalMoves += num - min;
        }
        
        return totalMoves;
    }
}

```
```java []
public class Solution {
    public int minMoves(int[] nums) {
        int min = Integer.MAX_VALUE;
        
        // Find the minimum element
        for (int num : nums) {
            min = Math.min(min, num);
        }

        int totalMoves = 0;
        
        // Calculate the total moves needed
        for (int num : nums) {
            totalMoves += num - min;
        }
        
        return totalMoves;
    }
}

```
# C# Solution, very simple to understand O(n) time, O(1) space.

**Author:** AustinE_95
**Votes:** 17
**Link:** [https://leetcode.com/problems/jump-game/solutions/1987629/](https://leetcode.com/problems/jump-game/solutions/1987629/)

---

```
public class Solution {
    public bool CanJump(int[] nums) {
 
        // The end of the array is true, since that means we are at the solution.
        int nearestTrue = nums.Length - 1;
        
        // Working backwards through the array we want to check if our current num can jump us to the nearest 'TRUE'.
        for(int i = nums.Length - 2; i >= 0; i--)
        {
            // If we can jump to the nearest true, we become the nearest true.
            if(i + nums[i] >= nearestTrue)
            {
                nearestTrue = i;
            }
        }
        
        // If the nearest true is the start, the entire solution is jumpable.
        return nearestTrue == 0;
    }
}
```

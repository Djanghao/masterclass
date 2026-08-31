# Easy C# solution

**Author:** ash42069
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5035926/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5035926/)

---

# Intuition
Don't swap, just add and subtract your indices to their destinations.
Beware of crossing min and max. 

# Code
```
public class Solution {
    public int MinimumSwaps(int[] nums) {
        if(nums.Length == 0 || nums.Length == 1) return 0;
        int min = int.MaxValue;
        int max = int.MinValue;
        int minIndex = 0, maxIndex = 0;

        for(int i = 0; i < nums.Length; i++) {
            if(nums[i] < min) {
                min = nums[i];
                minIndex = i;
            }
            if(nums[i] >= max) {
                max = nums[i];
                maxIndex = i;
            }
        }

        int swapsRight = nums.Length - (maxIndex + 1);
        int swapsLeft = minIndex;

        Console.WriteLine(swapsRight);
        Console.WriteLine(swapsLeft);

        if(minIndex < maxIndex) {
            return swapsRight+swapsLeft;
        }

        return swapsRight+swapsLeft-1;
    }
}
```
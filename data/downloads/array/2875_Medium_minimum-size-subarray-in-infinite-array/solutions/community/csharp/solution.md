# Solving in O(N) using sliding window technique on circular array

**Author:** sahadibyendu3351
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/6102472/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/6102472/)

---

# Intuition
Minimum Size Subarray in Infinite Array :

# Approach
Sliding window technique

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```csharp []
 public class Solution
 {
     public int MinSizeSubarray(int[] nums, int target)
     {
         int n = nums.Length;
         int arrSum = 0;
         int count = 0;
         for (int i = 0; i < n; i++)
         {
             arrSum += nums[i];
         }
         if (target % arrSum == 0)   //target is divisable by sum
         {
             return (target / arrSum) * n;//If the target is a multiple of the array's sum (target % arrSum == 0), the minimum subarray size is the number of complete cycles of the array needed to reach the target. Return this directly.
    
  }
         if (target > arrSum) //target is greater than arrSum 
         {
            //If the target is larger than arrSum, we compute how many full cycles of the array are required (count = (target / arrSum) * n) and reduce the target to the remainder (target %= arrSum).
             count = (target / arrSum) * n;  //get number of min cycles
             target %= (int)arrSum;   //reduce target 
         }
         int l = 0;
         int r = 0;
         long currsum = 0;
         int ans = int.MaxValue;

         while (r < (2 * n))
         {
             currsum += nums[r % n]; //The right pointer (r) is used to expand the window by adding elements to currsum.The modulo operator (r % n) ensures that the array is treated as circular.
             while (l <= r && currsum > target)
             {
                 currsum -= nums[l % n];   //If the currsum exceeds the target, the left pointer (l) is moved to shrink the window, subtracting elements from currsum.
                 l++;
             }
             if (currsum == target)
             {
                 ans = Math.Min(ans, r - l + 1); //If the current window's sum equals the target, update ans with the length of the window (r - l + 1) if it's smaller than the current ans.
             }
             r++;
         }
         return ans == int.MaxValue ? -1 : (int)count + ans;

     }
 }
          
```
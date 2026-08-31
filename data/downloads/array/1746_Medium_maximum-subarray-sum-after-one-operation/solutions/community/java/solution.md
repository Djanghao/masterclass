# Easy DP Solution (Kadane's Algorithm) | Linear time and constant space

**Author:** ankitr459
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/1378658/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/1378658/)

---

This solution has been derived using `Kadane's Algorithm`. Please have a look at this question - [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray), before attempting this one.

```
class Solution {
    
    // if we look at the i'th element, we can have the following states - 
    // 1. SQUARED      - the current element was squared
    // 2. NOT_SQUARED  - the current element was not squared
    // 3. NONE_SQUARED - the current element was not squared and no other element 
    //                   in this subarray was squared (it will be clear in sometime why this is needed)
    
    private final int SQUARED = 0, NOT_SQUARED = 1, NONE_SQUARED = 2;
    
    public int maxSumAfterOperation(int[] nums) {
        // sum holds sums for all three states for the (i-1)'th number
        int[] sum = new int[3];
        
        // following ints hold sums for i'th number for all 3 states
        int squared = 0, notSquared = 0, noneSquared = 0;
        
        // overall max and local max
        int max = Integer.MIN_VALUE, currMax = Integer.MIN_VALUE;
        
        for (int i=0;i<nums.length;i++) {
            // lets build up the three states for the current number            

            // if we are squaring this number, we cant have any other number squared
            squared = Math.max(0, sum[NONE_SQUARED]) + nums[i]*nums[i];
            
            // if we are not squaring this number, then we dont care about previous numbers being squared or not
            notSquared = Math.max(sum[SQUARED], Math.max(sum[NOT_SQUARED], sum[NONE_SQUARED])) + nums[i];
            
            // if no elements can be squared, that means the current and previous elements cannot be squared
            noneSquared = Math.max(0, sum[NONE_SQUARED]) + nums[i];
                        
            // find out which state is the best
            currMax = Math.max(squared, Math.max(notSquared, noneSquared));            
            max = Math.max(max, currMax);
            
            sum = new int[]{squared, notSquared, noneSquared};
        }
        
        return max;
    }
}
```
# Kotlin DP O(n) time O(1) space

**Author:** liujiahua123123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/2740360/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/2740360/)

---

```
class Solution {
   fun maxSumAfterOperation(nums: IntArray): Int {
        
        var maxEndI = 0
        var maxEndIIncludeFlip = 0
        var globalMax = 0
        
        for(num in nums){
            maxEndIIncludeFlip = Math.max(
                num * num,
                Math.max(
                maxEndIIncludeFlip + num,
                maxEndI + num * num
                )
            )
            
            maxEndI = Math.max(num, maxEndI + num)
            globalMax = Math.max(globalMax, maxEndIIncludeFlip)
        }
        
        return globalMax
    }
}
```
# Kotlin O(n) greedy

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4259974/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4259974/)

---

# Intuition
The smallest possible subarray score is 0.

First, check if it is possible to sum all of subarray to 0. If not, then return 1 which is the only possible subarray (the whole input aray) that satisfies the conditions and it is not possible to find more subarrays.

If whole array score is 0, then we try greedily to find more subarrays with 0 score, count them and return the count.

As worst, the only possbile subarry with 0 score is the whole array.

# Code
```
class Solution {
    fun maxSubarrays(nums: IntArray): Int {
        var p = nums[0]
        for (n in nums)
            p = p and n
        
        if (p != 0)
            return 1
        
        var cur = Integer.MAX_VALUE
        var res = 0
        for (n in nums) {
            cur = cur and n

            if (cur == 0) {
                res++
                cur = Integer.MAX_VALUE
            }
        }

        return res
    }
}
```
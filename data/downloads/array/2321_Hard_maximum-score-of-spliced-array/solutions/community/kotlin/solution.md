# Kadan's Algo Mod Solution O(n)

**Author:** gaurav7557
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5574504/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5574504/)

---

# Intuition
This is a version of Kadane's Algo

# Approach
Consider this as follows : 
for the following arrays - nums1 = [20,40,20,70,30], nums2 = [50,20,50,40,20] if we take the difference of 2 both ways that is nums1[i] - nums2[i] and nums2[i] - nums1[i], we get the following:
[-30,20,-30,30,10] and [30,-20,30,-30,-10]. corresponding to the above. Now the spliced block would the the same as max sum subarray of these 2. is we add the max sum subarray thus found such that the array corrsponding to nums2[i] - nums1[i] is for the first array and nums1[i] - nums2[i] for the second array and take the max we get the answer. The only condition we have to look out for is when there is no splicing.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun maximumsSplicedArray(nums1: IntArray, nums2: IntArray): Int {
        var sum1 = 0
        var sum2 = 0
        nums1.forEach{ sum1 += it}
        nums2.forEach{ sum2 += it}

        var inSum1 = 0
        var inSum2 = 0
        var max1 = 0
        var max2 = 0
        for(i in 0..nums1.size-1) {
            inSum1 += nums2[i] - nums1[i]
            inSum2 += nums1[i] - nums2[i]
            max1 = Math.max(max1, inSum1)
            max2 = Math.max(max2, inSum2)
            if(inSum1 < 0) inSum1 = 0
            if(inSum2 < 0) inSum2 = 0
        }
        return Math.max(Math.max(Math.max(sum1,sum2),(sum1+max1)),(sum2+max2))
    }
}
```
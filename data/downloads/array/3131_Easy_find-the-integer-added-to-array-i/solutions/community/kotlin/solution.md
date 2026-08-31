# Subtraction from 2 sum

**Author:** tamhuynhit
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5679841/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5679841/)

---

# Intuition
Each element in nums2 will add a `x` value to the total sum compared to nums1's sum

# Approach
Calculate 2 sum of num1 and nums2, take subtraction then divided to the size of the array to get the final x

# Complexity
- Time complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun addedInteger(nums1: IntArray, nums2: IntArray): Int {
        var sum1 = 0
        var sum2 = 0

        for (i in 0 until nums1.size) {
            sum1 += nums1[i]
            sum2 += nums2[i]
        }

        return (sum2 - sum1) / nums1.size
    }
}
```
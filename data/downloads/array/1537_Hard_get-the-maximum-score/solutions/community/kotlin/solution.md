# Kotlin, two indices, O(m + n), 5 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/5990342/](https://leetcode.com/problems/get-the-maximum-score/solutions/5990342/)

---

# Intuition
Each of the two arrays can be broken down into subarrays delimited by elements that appear in both of them. The number of such subarrays in `nums1` and `nums2` is the same, so they can be paired with each other (1st subarray of `nums1` with 1st subarray of `nums2` and so on).
Essentially, we need to choose one subarray with the largest sum from each pair.

# Approach
We'll use indices `i` and `j` for `nums1` and `nums2` respectively, both starting from 0. We'll also keep track of the sums of both current chunks.
While `nums1[i]` differs from `nums2[j]`, we move forward the index of the smaller element. When they become equal, we choose the largest chunk sum, add it to the total, and move both indices forward.

# Complexity
- Time complexity:
$$O(m + n)$$, since we iterate over both arrays.

- Space complexity:
$$O(1)$$, as only constant space is used for variables.

# Code
```kotlin []
class Solution {
    fun maxSum(nums1: IntArray, nums2: IntArray): Int {
        val n1 = nums1.size
        val n2 = nums2.size
        
        var total = 0L
        var sum1 = 0L
        var sum2 = 0L
        var i = 0
        var j = 0
        while (i < n1 && j < n2) {
            val x1 = nums1[i]
            val x2 = nums2[j]
            if (x1 < x2) {
                sum1 += x1
                i++
            } else if (x1 > x2) {
                sum2 += x2
                j++
            } else {
                total += x1 + max(sum1, sum2)
                sum1 = 0
                sum2 = 0
                i++
                j++
            }
        }
        while (i < n1) sum1 += nums1[i++]
        while (j < n2) sum2 += nums2[j++]

        return ((total + max(sum1, sum2)) % 1000000007).toInt()
    }
}
```
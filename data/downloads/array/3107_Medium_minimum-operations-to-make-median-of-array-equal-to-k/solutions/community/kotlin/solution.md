# [Kotlin] Streamlining Median Adjustment in Sorted Integer Arrays (523ms)

**Author:** teogor
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5119619/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5119619/)

---

# Intuition
To make the median of the array `nums` equal to `k`, we need to minimize the number of operations required to adjust the elements of the array. We can achieve this by increasing or decreasing elements strategically to bring the median closer to `k`.

# Approach
1. Sort the array `nums` in non-decreasing order.
2. Find the median of the sorted array.
3. If the median is equal to `k`, return 0 as no operations are needed.
4. If the median is greater than `k`, we need to decrease some elements to bring the median closer to `k`. We can start from the element at the median index and decrease it until the median becomes equal to `k` or we reach the beginning of the array.
5. If the median is less than `k`, we need to increase some elements to bring the median closer to `k`. We can start from the element at the median index and increase it until the median becomes equal to `k` or we reach the end of the array.
6. Calculate and return the total number of operations performed.

# Complexity
- Time complexity: Sorting the array takes O(n log n) time, where n is the size of the array. The while loops run in O(n) time. Therefore, the overall time complexity is O(n log n).

- Space complexity: Sorting the array requires O(n) space. The other variables used in the function take constant space. Therefore, the overall space complexity is O(n).

# Code
```
class Solution {
    fun minOperationsToMakeMedianK(nums: IntArray, k: Int): Long {
        nums.sort()
        val n = nums.size
        val mid = n / 2
        var operations: Long = 0
        
        var i = mid
        while (i >= 0 && nums[i] > k) {
            operations += nums[i] - k
            i--
        }
        
        i = mid
        while (i < n && nums[i] < k) {
            operations += k - nums[i]
            i++
        }
        
        return operations
    }
}

```
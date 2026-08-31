# [Kotlin] Greedy two pointers O(NlogN)

**Author:** shinwan2
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1086028/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1086028/)

---

```
import kotlin.math.*

private class Wrapper(private val nums: IntArray) {
    val minValue: Int get() = nums[minIndex]
    val maxValue: Int get() = nums[maxIndex]
    
    private var minIndex = 0
    private var maxIndex = nums.lastIndex
    
    var sum: Int
        private set
    
    init {
        nums.sort()
        sum = nums.sum()
    }
    
    fun updateMin(value: Int) {
        val curValue = nums[minIndex]
        nums[minIndex] = value
        sum += value - curValue
        if (value == 6) {
            minIndex = (minIndex + 1).coerceAtMost(nums.lastIndex)
        }
    }
    
    fun updateMax(value: Int) {
        val curValue = nums[maxIndex]
        nums[maxIndex] = value
        sum += value - curValue
        if (value == 1) {
            maxIndex = (maxIndex - 1).coerceAtLeast(0)
        }
    }
}

class Solution {
    fun minOperations(nums1: IntArray, nums2: IntArray): Int {
        if (6 * min(nums1.size, nums2.size) < max(nums1.size, nums2.size))
            return -1
        
        val wrapper1 = Wrapper(nums1)
        val wrapper2 = Wrapper(nums2)
        var steps = 0
        while (wrapper1.sum != wrapper2.sum) {
            val (small, big) = if (wrapper1.sum < wrapper2.sum) {
                wrapper1 to wrapper2
            } else {
                wrapper2 to wrapper1
            }
            
            val diff = big.sum - small.sum
            val smallTarget = (small.minValue + diff).coerceAtMost(6)
            val bigTarget = (big.maxValue - diff).coerceAtLeast(1)
            if (smallTarget - small.minValue > big.maxValue - bigTarget) {
                small.updateMin(smallTarget)
            } else {
                big.updateMax(bigTarget)
            }
            
            steps++
        }
        return steps
    }
}
```
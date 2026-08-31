# Simple Kotlin recursive solution - Beats 100% of users with Kotlin.

**Author:** IliaRodkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5822650/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5822650/)

---

# Code
```kotlin []
class Solution {
    fun maxOperations(nums: IntArray, currentSum: Int = -1, currentIndex:Int = 0, currentOperatinCount:Int = 0): Int {
        if(currentIndex + 1 >= nums.size) return currentOperatinCount
        val _currentSum = nums[currentIndex] + nums[currentIndex + 1]
        return if(_currentSum ==  currentSum || currentSum == -1) 
            maxOperations(nums, _currentSum, currentIndex + 2, currentOperatinCount + 1)
        else currentOperatinCount
    }
}
```
# Kotlin O(n)

**Author:** shubhammaheshwariy
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5791375/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5791375/)

---

# Intuition
prefix sum approach

# Approach
calculate prefim sum for odd and even 
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```kotlin []
class Solution {
    fun waysToMakeFair(nums: IntArray): Int {
        val n = nums.size
        var count = 0
        val prefixOdd = IntArray(n)
        val prefixEven = IntArray(n)
        var oddSum = 0
        var evenSum = 0
        for(i in 0..n - 1){
            oddSum += if(i % 2 == 1)nums[i] else 0
            evenSum += if(i % 2 == 0)nums[i] else 0
            prefixOdd[i] = oddSum
            prefixEven[i] = evenSum
        }

        for(i in 0..n - 1){
            val oddSum = (if(i > 0)prefixOdd[i- 1] else 0) + (if(i < n - 1)prefixEven[n - 1] - prefixEven[i] else 0)
            val evenSum = (if(i > 0)prefixEven[i - 1] else 0) + (if(i < n - 1)prefixOdd[n - 1] - prefixOdd[i ] else 0)
            if(oddSum == evenSum)count++
        }

        return count
    }
}
```
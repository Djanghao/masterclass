# Kotlin | one-liner

**Author:** SamoylenkoDmitry
**Votes:** 11
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2098250/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2098250/)

---

```
    fun runningSum(nums: IntArray): IntArray =
       nums.also { (1..nums.lastIndex).forEach { nums[it] += nums[it-1] } } 
```
P.S. There is a built-in function `runningReduce` but leetcode doesn't support it sadly.
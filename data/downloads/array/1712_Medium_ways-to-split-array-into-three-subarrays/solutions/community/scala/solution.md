# Scala - simple solution

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/5273436/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/5273436/)

---

```
object Solution {
    def waysToSplit(nums: Array[Int]): Int = {
        val MOD = 1000000007
        val n = nums.length
        val prefixSum = new Array[Int](n + 1)
        
        for (i <- 0 until n) {
            prefixSum(i + 1) = prefixSum(i) + nums(i)
        }
        
        var result = 0L
        
        for (i <- 1 until n - 1) {
            var left = i + 1
            var right = n - 1
            var jStart = -1
            while (left <= right) {
                val mid = (left + right) / 2
                if (prefixSum(mid) - prefixSum(i) >= prefixSum(i)) {
                    jStart = mid
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
            
            left = i + 1
            right = n - 1
            var jEnd = -1
            while (left <= right) {
                val mid = (left + right + 1) / 2
                if (prefixSum(n) - prefixSum(mid) >= prefixSum(mid) - prefixSum(i)) {
                    jEnd = mid
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
            if (jStart != -1 && jEnd != -1 && jStart <= jEnd) {
                result = (result + (jEnd - jStart + 1)) % MOD
            }
        }
        
        result.toInt
    }
}

```
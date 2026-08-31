# Scala

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/5323323/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/5323323/)

---


```
object Solution {
    val MOD = 1000000007

    def kConcatenationMaxSum(arr: Array[Int], k: Int): Int = {
        def kadane(array: Array[Int]): Long = {
            var maxSoFar = 0L
            var maxEndingHere = 0L
            for (num <- array) {
                maxEndingHere = Math.max(maxEndingHere + num, num)
                maxSoFar = Math.max(maxSoFar, maxEndingHere)
            }
            maxSoFar
        }

        val singleMax = kadane(arr)
        if (k == 1) return (singleMax % MOD).toInt

        val doubleMax = kadane(arr ++ arr)

        val totalSum = arr.sum.toLong

        if (totalSum > 0) {
            val result = (doubleMax + totalSum * (k - 2)) % MOD
            result.toInt
        } else {
            (doubleMax % MOD).toInt
        }
    }
}


```
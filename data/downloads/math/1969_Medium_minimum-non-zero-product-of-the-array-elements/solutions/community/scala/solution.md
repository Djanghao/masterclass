# Scala

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/5291000/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/5291000/)

---


```
object Solution {
    val MOD = 1000000007

    def exp(n: Long, k: Long): Long = {
        var res = 1L
        var mul = n

        var tempK = k
        while (tempK > 0) {
            if ((tempK & 1) == 1) {
                res = (mul * res) % MOD
            }

            tempK >>= 1
            mul = (mul % MOD) * (mul % MOD) % MOD
        }

        res
    }

    def minNonZeroProduct(p: Int): Int = {
        val maxVal = (1L << p) - 1
        val half = exp(maxVal - 1, maxVal / 2)

        ((half * (maxVal % MOD)) % MOD).toInt
    }
}


```
# :: Kotlin :: Solution

**Author:** znxkznxk1030
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4421204/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4421204/)

---


```
class Solution {
    fun minimumCost(nums: IntArray): Long {
        Arrays.sort(nums)
        val n = nums.size
        val median = nums[n / 2]
        var upper = median
        var lower = median

        while(upper > 0 && !isPalin(upper)) upper += 1
        while(lower > 0 && !isPalin(lower)) lower -= 1

        fun helper(n: Int) = nums.map{ Math.abs(n - it).toLong() }.sum()!!

        return minOf(helper(upper), helper(lower))
    }

    fun isPalin(_n: Int): Boolean {
        var reversed = 0
        var n = _n

        while (n > 0) {
            val curr = n % 10
            reversed *= 10
            reversed += curr
            n /= 10
        }

        return reversed == _n
    }
}
```
# :: Kotlin :: LCM + Binary Search + Bit Mask

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5071288/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5071288/)

---

# Code
```
class Solution {
    fun findKthSmallest(coins: IntArray, k: Int): Long {
        val n = coins.size

        fun count(target: Long): Long {
            var result = 0L

            for (i in 1 until (1 shl n)) {
                var p = 0
                var v = 1L
                for (j in 0 until n) {
                    if (i and (1 shl j) > 0) {
                        p += 1
                        v = lcm(v, coins[j].toLong())
                    }
                }

                if (p % 2 == 1) {
                    result += target / v.toLong()
                } else {
                    result -= target / v.toLong()
                }
            }

            return result.toLong()
        }

        fun canDivide(target: Long): Boolean {
            for (coin in coins) {
                if (target <= coin.toLong() && target % coin.toLong() == 0L) {
                    return true
                }
            }
            return false
        }

        var left = 0L
        var right = Long.MAX_VALUE
        var result = 0L
        var kk = k.toLong()
        while(left < right) {
            var mid = left + (right - left) / 2L
            val cnt = count(mid)

            if (cnt == kk && canDivide(mid)) {
                return mid
            }

            if (count(mid) < kk) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return left
    }
    
    fun lcm(a:Long, b:Long) = a * b / gcd(a, b)
    fun gcd(a:Long, b:Long): Long = if(b != 0L) gcd(b, a % b) else a
}
```
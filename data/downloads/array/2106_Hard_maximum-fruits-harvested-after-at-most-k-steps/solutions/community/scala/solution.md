# 👍Runtime 1240 ms  Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/4867366/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/4867366/)

---

# Code
```
object Solution {
    def maxTotalFruits(f: Array[Array[Int]], pos: Int, k: Int): Int = {
        var l = 0
        var sum = 0
        var maxSum = 0

        while (l < f.length && f(l)(0) < pos - k) {
            l += 1
        }

        for (r <- l until f.length if f(r)(0) <= pos + k) {
            sum += f(r)(1)
            while (Math.min(pos - 2 * f(l)(0) + f(r)(0), 2 * f(r)(0) - f(l)(0) - pos) > k) {
                sum -= f(l)(1)
                l += 1
            }
            maxSum = Math.max(maxSum, sum)
        }

        maxSum    
    }
}
```
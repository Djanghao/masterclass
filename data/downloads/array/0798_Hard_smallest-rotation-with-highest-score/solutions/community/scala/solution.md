# 👍Runtime 905 ms  Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/5005770/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/5005770/)

---

# Code
```
object Solution {
    def bestRotation(nums: Array[Int]): Int = {
        val size = nums.length
        val rsc = new Array[Int](size)

        for (i <- 0 until size - 1) {
            val value = nums(i)
            val downPos = (i + 1 + size - value) % size
            rsc(downPos) -= 1
        }

        val value = nums(size - 1)
        if (value != 0) rsc(size - value) -= 1
        var bestk = 0
        var bestscore = rsc(0)
        var score = rsc(0)

        for (i <- 1 until size) {
            score += rsc(i) + 1
            if (score > bestscore) {
                bestk = i
                bestscore = score
            }
        }
        bestk
    }
}
```
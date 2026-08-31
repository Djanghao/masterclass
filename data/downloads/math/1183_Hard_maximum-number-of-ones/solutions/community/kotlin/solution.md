# O(1) Kotlin solution

**Author:** evgenim
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/4773554/](https://leetcode.com/problems/maximum-number-of-ones/solutions/4773554/)

---

# Approach

Only 3 rectangles need to be considered
1. (1 .. height % sideLength) X (1 .. width % sideLength)
1. (1 .. height % sideLength) X (1 .. (sideLength - width % sideLength))
1. (1 .. (sideLength - height % sideLength)) X (1 .. width % sideLength)

Rectange 1 is going to appear more often, take more points from 2 and 3 to satisfy required maxOnes. Take the rest from (1 .. (sideLength - height % sideLength)) X (1 .. (sideLength - width % sideLength)) if not enough

# Code
```
class Solution {
    fun maximumNumberOfOnes(width: Int, height: Int, sideLength: Int, maxOnes: Int): Int {
        val wn = width / sideLength
        val hn = height / sideLength

        val wr = width % sideLength
        val hr = height % sideLength

        var ones = maxOnes
        var sum = 0

        val seq = sequence {
            if (wr != 0 && hr != 0) {
                val freq = (wn + 1) * (hn + 1)
                val number = wr * hr
                yield(freq to number)
            }

            yieldAll(buildList {
                if (hr != 0) {
                    val freq = wn * (hn + 1)
                    val number = hr * (sideLength - wr)
                    add(freq to number)
                }

                if (wr != 0) {
                    val freq = (wn + 1) * hn
                    val number = (sideLength - hr) * wr
                    add(freq to number)
                }
            }.sortedByDescending { it.first })
        }

        for ((freq, number) in seq) {
            if (ones <= number) {
                return sum + ones * freq
            } else {
                sum += number * freq
                ones -= number
            }
        }
       
        if (ones > 0) {
            //println("left $ones, $sum")
            return sum + ones * wn * hn
        } 

        return sum
    }
}
```
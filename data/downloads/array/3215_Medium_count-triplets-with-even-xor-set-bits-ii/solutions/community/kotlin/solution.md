# Kotlin math

**Author:** drawers
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5461843/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5461843/)

---

# Code
```
class Solution {
    fun tripletCount(a: IntArray, b: IntArray, c: IntArray): Long {
        val (aEvens, aOdds) = a.getEvenOddBitCounts()
        val (bEvens, bOdds) = b.getEvenOddBitCounts()
        val (cEvens, cOdds) = c.getEvenOddBitCounts()

        var tripletCount = 0L
        tripletCount += (aEvens * bEvens * cEvens)
        tripletCount += (aOdds * bOdds * cEvens)
        tripletCount += (aOdds * bEvens * cOdds)
        tripletCount += (aEvens * bOdds * cOdds)

        return tripletCount
    }

    private fun IntArray.getEvenOddBitCounts(): Pair<Long, Long> {
        val count = count { it.getSetBits() % 2 == 0 }
        return count.toLong() to (size - count).toLong()
    }

    /**
     * In case you are asked not to use the built in
     * `Int.countOneBits()` function
     */
    private fun Int.getSetBits(): Int {
        var mutableThis = this
        var count = 0
        while (mutableThis > 0) {
            if (mutableThis.and(1) == 1) {
                count++
            }
            mutableThis = mutableThis.ushr(1)
        }
        return count
    }
}

```
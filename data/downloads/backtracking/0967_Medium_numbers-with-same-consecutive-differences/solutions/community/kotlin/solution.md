# Kotlin Backtrack

**Author:** gky
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/5061725/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/5061725/)

---

# Code
```
class Solution {
    fun numsSameConsecDiff(n: Int, k: Int): IntArray {
        val res = ArrayList<Int>()
        for (i in 1..9) {
            backtrack(10f.pow(n - 1).toInt(), (10f.pow(n) - 1).toInt(), k, i, res)
        }
        return res.toIntArray()
    }

    private fun backtrack(
        targetLowerBound: Int,
        targetUpperBound: Int, 
        k: Int, 
        cur: Int, 
        res: ArrayList<Int>
    ) {
        if (cur in targetLowerBound..targetUpperBound) {
            res.add(cur)
            return
        }
        if (cur > targetUpperBound) {
            return
        }
        for (nextDigit in 0..9) {
            if (abs(nextDigit - (cur % 10)) == k) {
                val nextNumber = cur * 10 + nextDigit
                backtrack(targetLowerBound, targetUpperBound, k, nextNumber, res)
            }
        }
    }
}
```
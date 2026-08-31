# Kotlin O(n) 100% fast straightforward solution

**Author:** user3734yx
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/2589688/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/2589688/)

---

```
    fun maxScoreIndices(nums: IntArray): List<Int> {
        val total0s = nums.count{it == 0}
        val total1s = nums.size - total0s
        var max = maxOf(total0s,total1s)
        val sol = mutableListOf<Int>()
        if (max==total1s) sol.add(0)
        var zerosLeft = 0
        for (i in nums.indices) {
            if (nums[i] == 0)
                zerosLeft++
            val onesLeft = (i+1) - zerosLeft
            val onesRight = total1s - onesLeft
            val score = zerosLeft + onesRight
            if (score == max) {
                sol.add(i + 1)
            } else if (score>max) {
                sol.clear()
                sol.add(i + 1)
                max = score
            }
        }
        return sol
    }
```
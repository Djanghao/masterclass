# Kotlin simple

**Author:** GeorgCantor
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/1052207/](https://leetcode.com/problems/max-consecutive-ones/solutions/1052207/)

---

```
fun findMaxConsecutiveOnes(nums: IntArray): Int {
        var max = 0
        var counter = 0
        nums.forEach {
            when (it) {
                1 -> counter++
                else -> {
                    max = Math.max(counter, max)
                    counter = 0
                }
            }
        }

        return Math.max(counter, max)
    }
```
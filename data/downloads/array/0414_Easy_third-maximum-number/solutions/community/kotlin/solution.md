# kotlin

**Author:** 2pac_shakur
**Votes:** 2
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/749371/](https://leetcode.com/problems/third-maximum-number/solutions/749371/)

---

```
    fun thirdMax(nums: IntArray): Int {
        val set = sortedSetOf<Int>()
        nums.forEach {
            set.add(it)
            if (set.size > 3) set.remove(set.first())
        }
        val max = if (set.size > 2) set.first() else set.last()
        return max
    }
```
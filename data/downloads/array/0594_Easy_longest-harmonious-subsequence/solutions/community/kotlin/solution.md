# Kotlin simple

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1059194/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1059194/)

---

```
fun findLHS(nums: IntArray): Int {
        val map = mutableMapOf<Int, Int>()
        var max = 0
        nums.forEach { map[it] = map.getOrDefault(it, 0) + 1 }
        map.keys.forEach {
            if (map.containsKey(it + 1)) max = maxOf(max, map[it]!! + map[it + 1]!!)
        }

        return max
    }
```
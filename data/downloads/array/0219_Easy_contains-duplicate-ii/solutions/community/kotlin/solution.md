# Kotlin simple

**Author:** GeorgCantor
**Votes:** 6
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/1057965/](https://leetcode.com/problems/contains-duplicate-ii/solutions/1057965/)

---

```
fun containsNearbyDuplicate(nums: IntArray, k: Int): Boolean {
        val map = HashMap<Int, Int>()
        nums.forEachIndexed { i, num ->
            if (map.containsKey(num) && i - map[num]!! <= k) return true
            map[num] = i
        }

        return false
    }
```
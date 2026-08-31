# Kotlin Sweep line

**Author:** Abhimanyu14
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solutions/6074581/](https://leetcode.com/problems/zero-array-transformation-i/solutions/6074581/)

---

```
fun isZeroArray(nums: IntArray, queries: Array<IntArray>): Boolean {
        val pq = PriorityQueue { a: Pair<Int, Int>, b: Pair<Int, Int> ->
            a.first - b.first
        }
        queries.forEach {
            pq.offer(Pair(it[0], 1))
            pq.offer(Pair(it[1] + 1, -1))
        }
        var index = 0
        var current = 0
        while (pq.isNotEmpty()) {
            val temp = pq.poll()
            while (index < temp.first) {
                if (nums[index] > current) {
                    return false
                }
                index++
            }
            current += temp.second
        }
        while (index <= nums.lastIndex) {
            if (nums[index] > current) {
                return false
            }
            index++
        }
        return true
    }
```
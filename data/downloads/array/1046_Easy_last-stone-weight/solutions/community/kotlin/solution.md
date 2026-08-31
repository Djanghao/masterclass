# Kotlin: Priority Queue

**Author:** artemasoyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/2907947/](https://leetcode.com/problems/last-stone-weight/solutions/2907947/)

---

# Code
```
class Solution {
    fun lastStoneWeight(stones: IntArray): Int {
        val h = PriorityQueue<Int> { a, b -> b.compareTo(a) }
        stones.forEach { h.add(it) }

        while (h.size > 1) { 
            h.add(h.poll() - h.poll())
        }
 
        return h.poll()
    }
}
```
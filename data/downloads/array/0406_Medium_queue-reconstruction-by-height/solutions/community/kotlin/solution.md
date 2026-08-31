# Sorting and Insertion

**Author:** fengqi2
**Votes:** 1
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/3720029/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/3720029/)

---


# Code
```
class Solution {
    fun reconstructQueue(people: Array<IntArray>): Array<IntArray> {
        val sorted = people.toList().sortedWith(compareBy<IntArray>({-it[0]}, {it[1]}))
        return mutableListOf<IntArray>().apply {
            sorted.forEach { p ->
                add(p[1], p)
            }
        }.toTypedArray()
    }
}
```
# Sorting & Min-heap

**Author:** dominik1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/4220170/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/4220170/)

---

# Complexity
n - number of intervals
q - number of queries

- Time complexity:
O(nlogn + qlogq)
bounded by sort operations
- Space complexity:
O(n + q)

# Code
```
class Solution {
    fun minInterval(intervals: Array<IntArray>, queries: IntArray): IntArray {
        intervals.sortWith(compareBy({it[0]}, {it[1]}))
        val queriesWithIndex = queries.withIndex().sortedBy { it.value }
        val queue = PriorityQueue<IntArray>(1, compareBy { it.size() })
        val result = IntArray(queries.size)
        var i = 0
        queriesWithIndex.forEach { (index, query) ->
            while (i < intervals.size && intervals[i][0] <= query) {
                queue.add(intervals[i])
                i++
            }
            while (queue.isNotEmpty() && !queue.peek().contains(query)) {
                queue.poll()
            }
            result[index] = if (queue.isEmpty()) -1 else queue.peek().size()
        }
        return result
    }

    private fun IntArray.size(): Int = this[1] - this[0] + 1
    private fun IntArray.contains(query: Int) = this[0] <= query && query <= this[1]
}
```
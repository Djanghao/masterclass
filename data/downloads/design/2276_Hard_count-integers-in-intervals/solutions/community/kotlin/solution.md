# Kotlin | SegmentTree | Time O(NLog(10^9) | Space O(NLog(10^9))

**Author:** misoft
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/2674842/](https://leetcode.com/problems/count-integers-in-intervals/solutions/2674842/)

---

```
class CountIntervals() {

    private val tree = HashMap<Int, Int>()
    
    fun add(left: Int, right: Int) {
        update(1, 0, 1_000_000_000, left, right)
    }
    
    private fun update(treeIndex: Int, start: Int, end: Int, i: Int, j: Int) {
        if (start > j || end < i) {
            return
        }
        
        if (start >= i && end <= j) {
            tree[treeIndex] = end - start + 1
        } else {
            val middle = (start + end) / 2
            update(treeIndex * 2, start, middle, i, j)
            update(treeIndex * 2 + 1, middle + 1, end, i, j)
            tree[treeIndex] = Math.max(tree.getOrDefault(treeIndex, 0), tree.getOrDefault(treeIndex * 2, 0) + tree.getOrDefault(treeIndex * 2 + 1, 0))
        }
    }
    
    fun count(): Int {
        return tree.getOrDefault(1, 0)
    }
}
```
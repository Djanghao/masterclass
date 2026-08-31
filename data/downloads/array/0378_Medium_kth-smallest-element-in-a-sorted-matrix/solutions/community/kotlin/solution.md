# Priority Queue

**Author:** dbenito
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/945917/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/945917/)

---

```
class Solution {
    fun kthSmallest(matrix: Array<IntArray>, k: Int): Int {
        val size = (matrix.size * matrix.size) - (k - 1)
        val list: PriorityQueue<Int> = PriorityQueue<Int>()
        
        matrix.forEach {
            it.forEach {
                list.add(it)
                if (list.size > size)
                    list.remove()
            }
        }
        
        return list.remove()
    }
}
```
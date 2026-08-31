# MaxHeap solution

**Author:** admiral_bulba
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5910864/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5910864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def maxKelements(nums: Array[Int], k: Int): Long = {
        val max_heap = collection.mutable.PriorityQueue(nums: _*)(Ordering[Int])
        (0 until k).foldLeft(0L) { (acc, _) =>
            val max_value = max_heap.dequeue()
            max_heap.enqueue(Math.ceil(max_value.toDouble / 3).toInt)
            acc + max_value
        }
    }
}
```
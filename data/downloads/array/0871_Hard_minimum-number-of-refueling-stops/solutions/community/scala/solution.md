# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/3626472/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/3626472/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minRefuelStops(target: Int, startFuel: Int, stations: Array[Array[Int]]): Int = {
      var currFuel = startFuel
      var refuels = 0
      var i = 0
      val pq = collection.mutable.PriorityQueue.empty[Int]
      while (currFuel < target) {
        while (i < stations.length && stations(i)(0) <= currFuel) {
          pq.enqueue(stations(i)(1))
          i += 1
        }
        if (pq.isEmpty) return -1
        currFuel += pq.dequeue()
        refuels += 1
      }
      refuels
    }
}
```
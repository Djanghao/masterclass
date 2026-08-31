# Kotlin O(n) time and 0(n) space complexity

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-pooling/solutions/4230709/](https://leetcode.com/problems/car-pooling/solutions/4230709/)

---

# Intuition
We do not need to use PriorityQueue/Heap/sorting O(nlogn) and can keep our time complexity down to O(n) by using "prefix sums".

We count amount of passengers at riding at every stop (we have at max 1001 stops), by adding new passengers and subtracting the ones that get off at each stop.

If amount of passenger at any stop is over capacity, return false, else it means we made all trips and can return true

# Code
```
class Solution {
    fun carPooling(trips: Array<IntArray>, capacity: Int): Boolean {
        val stops = IntArray (1001)
        for ((pas, pick, drop) in trips) {
            stops[pick] += pas
            stops[drop] -= pas
        }

        var pas = 0
        for (i in 0..1000) {
            pas += stops[i]
            if (pas > capacity)
                return false
        }

        return true
    }
}
```
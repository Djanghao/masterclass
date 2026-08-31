# Using a fold and a pair

**Author:** Tpdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/5752752/](https://leetcode.com/problems/watering-plants/solutions/5752752/)

---

# Intuition
Just mechanically follow the directions given

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun wateringPlants(plants: IntArray, capacity: Int): Int {
        return plants.withIndex().fold(Pair(0, capacity)) { a, e ->
            //println("$a, $e $capacity")
            if (e.value <= a.second) Pair(a.first + 1, a.second - e.value)
            else Pair(a.first + 2 * e.index + 1, capacity - e.value)
        }.first
    }
}
```
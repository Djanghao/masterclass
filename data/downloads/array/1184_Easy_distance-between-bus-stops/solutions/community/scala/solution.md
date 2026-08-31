# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/4329560/](https://leetcode.com/problems/distance-between-bus-stops/solutions/4329560/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def distanceBetweenBusStops(distance: Array[Int], start: Int, destination: Int): Int = {
      val clock = if (start < destination) distance.slice(start, destination).sum
                      else distance.slice(destination, start).sum
      math.min(clock, distance.sum - clock)
    }
}
```
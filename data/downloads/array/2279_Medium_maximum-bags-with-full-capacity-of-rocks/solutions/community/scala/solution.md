# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2068210/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2068210/)

---

```
object Solution {
  def maximumBags(capacity: Array[Int], rocks: Array[Int], additionalRocks: Int): Int = {
    capacity
      .indices
      .sortBy(i => capacity(i) - rocks(i))
      .iterator
      .scanLeft(additionalRocks) { case (additionalRocks, i) => additionalRocks - (capacity(i) - rocks(i)) }
      .drop(1)
      .takeWhile(_ >= 0)
      .size
  }
}
```
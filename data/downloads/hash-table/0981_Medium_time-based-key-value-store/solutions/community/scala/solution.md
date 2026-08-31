# Compact HashMap + TreeMap scala solution

**Author:** user8644oW
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/3844330/](https://leetcode.com/problems/time-based-key-value-store/solutions/3844330/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(log N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable

class TimeMap() {
  private type Value = mutable.TreeMap[Int, String]

  private val stash = new mutable.HashMap[String, Value]()

  def set(key: String, value: String, timestamp: Int): Unit = {
    stash.getOrElseUpdate(key, new Value()).addOne(timestamp -> value)
  }

  def get(key: String, timestamp: Int): String = {
    stash.get(key)
      .flatMap(_.maxBefore(timestamp + 1).map(_._2))
      .getOrElse("")
  }
}
```
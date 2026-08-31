# Scala code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/5182592/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/5182592/)

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
```
import scala.collection.mutable.ArrayBuffer
import scala.collection.mutable.HashMap
import scala.util.control.Breaks._

object Solution {
  def findOriginalArray(changed: Array[Int]): Array[Int] = {
    if (changed.length % 2 != 0) return Array.empty[Int]
    val mp = HashMap[Int, Int]().withDefaultValue(0)
    changed.foreach { num =>
      mp(num) += 1
    }
    val ans = ArrayBuffer[Int]()
    val sortedChanged = changed.sorted
    breakable {
      for (num <- sortedChanged) {
        if (mp(num) > 0) {
          ans += num
          mp(num) -= 1
          val doubleNum = num * 2
          if (mp(doubleNum) > 0) {
            mp(doubleNum) -= 1
          } else {
            ans.clear()
            break
          }
        }
      }
    }
    ans.toArray
  }
}
```
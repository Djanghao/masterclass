# ✅ Scala: straightforward solution (beats 100%/100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/3461798/](https://leetcode.com/problems/consecutive-characters/solutions/3461798/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {

  def maxPower(s: String): Int = {
    var power = 1

    var prev = s.head
    var currLen = 1

    for (i <- 1 until s.length){
      val c = s(i)
      if (c == prev){
        currLen += 1
      } else {
        power = power max currLen
        prev = c
        currLen = 1
      }
    }

    power max currLen
  }

}
```
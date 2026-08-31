# ✅ Scala: Vector#unfold + random

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3418636/](https://leetcode.com/problems/linked-list-random-node/solutions/3418636/)

---

# Complexity
- Time complexity:
    - `init`: $O(n)$
    - `getRandom()`: $O(1)$

- Space complexity:
    - `init`: $O(n)$
    - `getRandom()`: $O(1)$

# Code
```scala
class Solution(_head: ListNode) {
  import scala.util.Random
  
  private val values = Vector.unfold(_head) {
    case null => None
    case curr => Some(curr.x, curr.next)
  }

  def getRandom(): Int = values(Random.nextInt(values.size))

}
```
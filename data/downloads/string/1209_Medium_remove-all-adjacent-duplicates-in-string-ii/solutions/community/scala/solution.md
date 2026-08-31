# 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/5580650/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/5580650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
import scala.collection.mutable
object Solution {
  def removeDuplicates(s: String, k: Int): String = {
    val stack = new mutable.Stack[Value]()
    s.foreach { ch =>
      if (stack.nonEmpty && stack.top.num == ch) {
        if (stack.top.count == k - 1)
          removeKChars(k - 1, stack)
        else stack.push(Value(ch, stack.top.count + 1))
      } else stack.push(Value(ch, 1))
    }
    stack.map(_.num).mkString.reverse
  }

  private def removeKChars(k: Int, stack: mutable.Stack[Value]): Unit = {
    if (k > 0) {
      stack.pop()
      removeKChars(k - 1, stack)
    }
  }

  case class Value(num: Char, count: Int)
}
```
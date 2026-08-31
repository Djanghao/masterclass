# 100 % runtime , memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/5573371/](https://leetcode.com/problems/validate-stack-sequences/solutions/5573371/)

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
  def validateStackSequences(pushed: Array[Int], popped: Array[Int]): Boolean = {
    val (popIdx, stack) = pushed.zipWithIndex.foldLeft(0, new mutable.Stack[Int]()) {
      case ((popIdx, stack), (push, idx)) =>
        stack.push(push)
        updateMin(popIdx, stack, popped)
    }
    popIdx == popped.length && stack.isEmpty
  }

  def updateMin(popIdx: Int, pushed: mutable.Stack[Int], popped: Array[Int]): (Int, mutable.Stack[Int]) = {
    if (popIdx < popped.length && pushed.nonEmpty && pushed.top == popped(popIdx)) {
      pushed.pop()
      updateMin(popIdx + 1, pushed, popped)
    } else (popIdx, pushed)
  }
}
```
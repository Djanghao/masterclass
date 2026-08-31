# Scala FP: short List stack tailrec

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/4772896/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/4772896/)

---

# Code
```
object Solution {
  def largestRectangleArea(heights: Array[Int]): Int = {
    val len = heights.length

    @annotation.tailrec
    def proc(i: Int, max: Int, stack: List[Int]): Int = {
      //println(i, max, stack)
      if (i > len) max
      else {
        val h = if (i == len) 0 else heights(i) // process 0 after all heights to flush stack
        if (stack.isEmpty || heights(stack.head) <= h)
          proc(i + 1, max, i :: stack)
        else { // stack.head > h
          val width = if (stack.tail.isEmpty) i else i - stack.tail.head - 1 
          proc(i, max.max(heights(stack.head) * width), stack.tail)
        }
      }
    }

    proc(0, 0, Nil)
  }
}
```
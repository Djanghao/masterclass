# Tail recursion

**Author:** rrramiro
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6109898/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6109898/)

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
```scala []
object Solution {

  @scala.annotation.tailrec
  def addSpacesRec(builder: StringBuilder, current: String, remainingSpaces: List[Int], currentOffset: Int): Unit =
    remainingSpaces match {
      case Nil => builder.append(current)
      case x :: xs =>
        val i = x - currentOffset
        builder.append(current.substring(0, i)).append(" ")
        addSpacesRec(builder, current.substring(i), xs, x)
    }

  def addSpaces(s: String, spaces: Array[Int]): String = {
    val builder = new StringBuilder()
    addSpacesRec(builder, s, spaces.toList, 0)
    builder.mkString
  }
}
```
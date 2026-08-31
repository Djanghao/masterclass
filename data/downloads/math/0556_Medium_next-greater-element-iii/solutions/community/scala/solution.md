# Scala FP Solution

**Author:** gatear
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/5213060/](https://leetcode.com/problems/next-greater-element-iii/solutions/5213060/)

---

# Intuition
Delegate to `permutations` of string but limit the search space to valid 
`< Int.Max` intergers.

# Code
```
object Solution {

  def nextGreaterElement(n: Int): Int = {
    val target =
      n.toString

    val end =
      Int.MaxValue.toString

    n
      .toString
      .permutations
      .map(_.mkString)
      .filter(s => s > target && (s.length < end.length || s <= end))
      .map(_.toInt)
      .minOption
      .getOrElse(-1)
  }
}
```
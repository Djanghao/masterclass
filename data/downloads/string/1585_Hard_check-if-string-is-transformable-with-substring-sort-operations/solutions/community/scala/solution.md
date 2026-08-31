# Solution in Scala

**Author:** nader-gh
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/2812729/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/2812729/)

---

Semi-cryptic semi-functional :p solution based on votrubac's solution.

The imperative non-functional approach is better and faster. This is just for fun and for FP fans.

# Code
```scala
object Solution {
  def isTransformable(s: String, t: String) = {
    val seed = Array.fill(10)(List.empty[Int])
    val idx = s.view.map(_-'0').zipWithIndex.foldRight(seed) {
      case ((d, i), idx) => idx(d) ::= i; idx
    }
    !t.iterator.map(_-'0').exists { d =>
      idx(d).headOption.map { i =>
        (0 until d).map(idx).exists(_.headOption.exists(_ < i))        
      }
      .tapEach(_ => idx(d) = idx(d).tail)
      .forall(identity)
    }
  }
}
```
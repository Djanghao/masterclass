# scala pattern match

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5485784/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5485784/)

---

```scala
object Solution {
  def removeAlmostEqualCharacters(word: String): Int =
    def f(l: List[Char], acc: Int): Int = l match {
      case _ :: Nil | Nil => acc
      case a::b::t if (a-b).abs<=1 => f(t,acc+1)
      case _ :: t => f(t,acc)
    }
    f(word.toList,0)
}
```
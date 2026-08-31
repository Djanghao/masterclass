# [scala] - foldLeft stack

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4212540/](https://leetcode.com/problems/last-visited-integers/solutions/4212540/)

---

# Code
```
object Solution {
    
  private val e = List.empty[Int]

  def lastVisitedIntegers(words: List[String]): List[Int] =
    words.foldLeft((e, e, e)) { case ((stack, prevs, result), word) =>
      (word, prevs) match {
        case ("prev", p :: pTail) => (stack, pTail, p :: result)
        case ("prev", Nil) => (stack, Nil, -1 :: result)
        case (int, _) =>
          val nStack = int.toInt :: stack
          (nStack, nStack, result)
      }
    }._3.reverse
}
```
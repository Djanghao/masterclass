# scala list pattern matching

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/5405831/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/5405831/)

---

same as https://leetcode.com/problems/move-pieces-to-obtain-a-string/description/
```scala
object Solution {
  def canTransform(start: String, end: String): Boolean = {
    val L = 'L'
    val R = 'R'
    val U = 'X'
    def f(list: List[(Char,Char)], depth: Int): Boolean =
      list match {
        case Nil if depth == 0 => true
        case (U,U) :: t => f(t,depth)
        case (L,L) :: t if depth >=0 => f(t,depth)
        case (R,R) :: t if depth <=0 => f(t,depth)
        case (L,U) :: t if depth >=0 => f(t,depth-1)
        case (U,L) :: t if depth >=0 =>  f(t,depth+1)
        case (R,U) :: t if depth <=0 => f(t,depth-1)
        case (U,R) :: t if depth <0 =>  f(t,depth+1)
        case _ => false
      }
    f((start zip end).toList,0)
  }
}
```
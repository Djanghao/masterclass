# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4989876/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4989876/)

---

```
object Solution {
  import scala.util.chaining._
  import scala.language.implicitConversions
  val OPEN = '('
  val CLOSE = ')'
  val STAR = '*'
  def checkValidString(s: String, level: Int=0): Boolean = {
    val cache = collection.mutable.Map[(String,Int),Boolean]()
    def impl(s: String, level: Int=0): Boolean = {
      //lazy val (h,t) = (s.head,s.tail)
      if(level<0) false
      else if(s.isEmpty) level == 0
      else if(cache.contains((s,level))) cache((s,level))
      else
        (if(s.head==CLOSE) impl(s.tail,level-1)
        else if(s.head==OPEN) impl(s.tail,level+1)
        else (-1 to 1).map {i => impl(s.tail,level+i)}.exists(identity))
        .tap {rc => cache.addOne((s,level) -> rc ) }
    }
    impl(s)
  }
}
```
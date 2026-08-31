# scala oneliners with memoization, tap & pipe

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/3013588/](https://leetcode.com/problems/peeking-iterator/solutions/3013588/)

---

# Code
```
class PeekingIterator(_iterator: Iterator[Int]) {
  import scala.util.chaining._
  import scala.language.implicitConversions
  var last = Option.empty[Int]
  def peek(): Int =
    (if(last.isEmpty) last=Option(_iterator.next())).pipe{_ => last.get}
  def next(): Int =
    if(last.isEmpty) _iterator.next else last.get.tap{_ => last = None}
  def hasNext(): Boolean =
    last.nonEmpty || _iterator.hasNext
}
```
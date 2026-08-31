# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/3087666/](https://leetcode.com/problems/rle-iterator/solutions/3087666/)

---

# Code
```
class RLEIterator(_encoding: Array[Int]) {
  var l = _encoding.toStream.sliding(2, 2).filter(_ (0) > 0).map(_.toVector).toStream
  private def skip(n: Int): Unit =
    if(l.nonEmpty) {
      lazy val (h,t) = (l.head, l.tail)
      if(h(0)>n) l = Vector((h(0) - n), h(1)) +: t
      else {l = t; skip(n-(h(0)))}
    }
  def next(n: Int): Int =
    if(l.isEmpty) -1 else {
      skip(n-1)
      val rc = if(l.isEmpty) -1 else l.head(1)
      skip(1)
      rc
    }
}
```
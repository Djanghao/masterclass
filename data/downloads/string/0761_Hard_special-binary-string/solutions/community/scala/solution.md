# Scala FP: recursions by Hint 1

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/5239587/](https://leetcode.com/problems/special-binary-string/solutions/5239587/)

---

# Code
```
object Solution {
  //see Hint 1 for terminology
  case class Point(ch: Char, h: Int)

  def makeLargestSpecial(s: String): String = {
    @annotation.tailrec
    def splitToMountains(rel: List[Point], height: Int, res: List[List[Point]] = List(Nil)): List[List[Point]] =
      if (rel.isEmpty) res.map(_.reverse)
      else { 
        val withPoint = (rel.head :: res.head) :: res.tail
        splitToMountains(rel.tail, height, if (rel.head.h == height) Nil :: withPoint else withPoint)
      }
      
    def toString(rel: List[Point]): String = rel.map(_.ch).mkString

    def sortMountains(rel: List[Point], height: Int = 0, res: String = ""): String =
      if (rel.lengthIs < 6) res + toString(rel)
      else {
        val mountains = splitToMountains(rel, height)
        if (mountains.lengthIs > 2) 
          res + mountains.tail.map(sortMountains(_)).sorted(Ordering.String.reverse).mkString + sortMountains(mountains.head, height)
        else // here rel is always nonEmpty due to the first check
          res + rel.head.ch + sortMountains(rel.tail, rel.head.h) // just skip 1 point
      }
    
    def charToDelta(ch: Char): Int = 2 * (ch - '0') - 1

    sortMountains(s.toList.tail.scanLeft(Point(s.head, charToDelta(s.head)))((p, ch) => Point(ch, p.h + charToDelta(ch))))
  }
}
```
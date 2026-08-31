# scala oneliner and simulation oneliner and simulation recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/5309688/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/5309688/)

---

```
object Solution {
  val L = 'L'; val R = 'R'; val S = 'S'; 

  def countCollisions(directions: String): Int =
    directions.toList.dropWhile(_ == 'L')
      .reverse.dropWhile(_ == 'R')
      .count(_ != 'S')

  def countCollisions(directions: String): Int =
    directions.toList.dropWhile(_ == L).foldLeft((0,0)){case ((acc,racc),d) =>
      (racc,d) match {
        case (0, L) => (acc+1, 0)
        case (0, S) => (acc, 0)
        case (0, R) => (acc,1)
        case (_, L) => (acc+racc+1,0)
        case (_, S) => (acc+racc,0)
        case (_, R) => (acc,racc+1)
      }
    }._1

  // recursive solution w/o some reason produces SO, despite tailrec
  def countCollisionsRec(directions: String): Int =
    @annotation.tailrec
    def s(seq: Seq[Char], acc: Int): Int =
      if(seq.isEmpty) acc
      else if(seq.head == L) s(seq.tail, acc+1)
      else if(seq.head == S) s(seq.tail, acc)
      else if(seq.head == R) r(seq.tail, 1, acc)
      else ???
    @annotation.tailrec
    def r(seq: Seq[Char], racc: Int, acc: Int): Int =
      if(seq.isEmpty) acc
      else if(seq.head == L) s(seq.tail, acc+racc+1)
      else if(seq.head == S) s(seq.tail, acc+racc)
      else if(seq.head == R) r(seq.tail, racc+1, acc)
      else ???
    s(directions.toList.dropWhile(_ == L), 0)
}
```
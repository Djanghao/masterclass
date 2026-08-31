# 6 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/5153160/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/5153160/)

---

```scala
object Solution {
  def colorTheArray(n: Int, queries: Array[Array[Int]]): Array[Int] =
    queries.foldLeft((List(0),Map.empty[Int,Int])){case ((l,aMap),a) =>
      lazy val (i,c) = a.head -> a.last
      lazy val neighbours = List(i-1,i+1).flatMap(aMap.get)
      lazy val counts = List(c, aMap.getOrElse(i,-1)).map(c1 => neighbours.count(_ == c1))
      (((counts.head - counts.last) + l.head) +: l, aMap + (i -> c))
    }._1.reverse.tail.to(Array)
}
```
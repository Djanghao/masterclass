# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/5108355/](https://leetcode.com/problems/corporate-flight-bookings/solutions/5108355/)

---

```
object Solution {
  import math.Ordering.Implicits._
  import collection.immutable.TreeSet
  def corpFlightBookings(bookings: Array[Array[Int]], n: Int): Array[Int] =
    lazy val x0:Seq[Seq[Int]] = bookings.toList.map(_.toSeq).sortBy(_.head).zipWithIndex.map((a,i) => a.toList :+ i)
    def f(i:Int, l:Seq[Seq[Int]], pq:Set[Seq[Int]],accSum:Int, acc:Seq[Int]):Array[Int] = {
      lazy val ldiff = l.head(2)
      lazy val sdiff = pq.head(1)
      if(i>n) acc.reverse.toArray
      else if(l.nonEmpty && l.head(0) <= i) f(i, l.tail, pq + l.head.drop(1), accSum + ldiff, acc)
      else if(pq.nonEmpty && pq.head(0) < i)  f(i, l,      pq.tail,     accSum - sdiff, acc)
      else f(i+1, l, pq, accSum, accSum +: acc)
    f(1, x0, TreeSet.empty[Seq[Int]], 0, List.empty[Int])
  }
}

```
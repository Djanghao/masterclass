# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5980214/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5980214/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def minimumCardPickup(cards: Array[Int]): Int = cards.iterator.zipWithIndex
    .foldLeft((Int.MaxValue,Map.empty[Int,Int])){ case ((mn,aMap),(c,i)) =>
      (aMap.get(c).map(j=>i+1-j).getOrElse(mn) min mn, aMap+(c->i))
    }._1 pipe (mn => if(mn == Int.MaxValue) -1 else mn)
}
```
# scala oneliner with scan and folds

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/5112706/](https://leetcode.com/problems/longest-well-performing-interval/solutions/5112706/)

---

```
object Solution {
  def longestWPI(hours: Array[Int]): Int =
    hours.iterator.map(h => if(h > 8) 1 else -1).scanLeft(0)(_ + _)
      .zipWithIndex.foldLeft((Map.empty[Int,Int],0)){case ((aMap,acc),(a,i)) =>
        aMap.get(a).fold(aMap + (a -> i))(_ => aMap)
        ->
        (if(a>0) i else aMap.get(a-1).fold(acc)(j => i-j max acc))
      }._2
}
```
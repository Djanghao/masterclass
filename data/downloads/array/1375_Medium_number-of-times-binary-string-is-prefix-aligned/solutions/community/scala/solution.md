# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/5652429/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/5652429/)

---

```scala
object Solution {
  import scala.util.chaining._
  def numTimesAllBlue(flips: Array[Int]): Int =
    (flips zip (1 to flips.length)).foldLeft((0,0)){case ((acc,mx),(bit,i)) =>
      mx max bit pipe {mx1 => if(mx1 > i) (acc,mx1) else (acc+1, mx1)} 
    }._1
}
```
or
```scala
object Solution {
  import scala.util.chaining._
  def numTimesAllBlue(flips: Array[Int]): Int =
    (flips zip (1 to flips.length)).foldLeft((0,0)){case ((acc,mx),(bit,i)) =>
        mx max bit pipe {mx1 => (acc + 1-(mx1 compare i).abs, mx1)}
  }._1
}
```
# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/5392342/](https://leetcode.com/problems/minimum-processing-time/solutions/5392342/)

---

```scala
object Solution {
  def minProcessingTime(processorTime: List[Int], tasks: List[Int]): Int =
    processorTime.sorted.flatMap(t => List.fill(4)(t))
      .zip(tasks.sortBy(- _)).map{case (a,b) => a+b}.max
}
```
# 4 lines scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/5276766/](https://leetcode.com/problems/task-scheduler-ii/solutions/5276766/)

---

```scala
object Solution {
  def taskSchedulerII(tasks: Array[Int], space: Int): Long =
    tasks.iterator.foldLeft((0L,Map.empty[Int,Long])){case ((d,aMap),t) =>
      lazy val d2 = 1L + (aMap.getOrElse(t,0L) max d)
      (d2, (aMap + (t->(d2+space))))
    }._1
}
```
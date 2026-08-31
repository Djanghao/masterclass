# scala dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3593391/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3593391/)

---

```
object Solution {
  def numOfMinutes(n: Int, headID: Int, manager: Array[Int], informTime: Array[Int]): Int = {
    val groups = manager.toList.zipWithIndex.groupMap(_._1)(_._2)
    def impl(mgr:Int, time:Int):Int =
      groups.get(mgr)
      .map(_.map{empl=> impl(empl, time + informTime(mgr))}.max)
      .getOrElse(time)
    impl(groups(-1).head, 0)
  }
}
```
# slow scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/5339082/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/5339082/)

---

```scala
object Solution {
  def maximumJumps(nums: Array[Int], target: Int): Int =
    lazy val t2770 = nums.zipWithIndex.
      foldLeft((List.empty[(Int,Int)],List.empty[(Int,Int)])) {case ((v,g),(n,i)) =>
      ((n,i) +: v, v.collect{case (n1,j) if(n-n1).abs<=target => j->i } ++ g)
    }._2.groupMap(_._1)(_._2).withDefaultValue(Nil)
    def bfs2770(q: Set[Int], step: Int, acc: Int): Int =
      lazy val newAcc = if(q.contains(nums.size-1)) acc max step else acc
      lazy val q1 = q.flatMap{h => t2770(h)}
      if(q.isEmpty) acc else bfs2770(q1, step+1, newAcc)
    bfs2770(Set(0), 0,-1)
}
```
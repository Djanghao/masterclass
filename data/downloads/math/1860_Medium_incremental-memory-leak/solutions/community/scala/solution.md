# 5 lines scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/5428714/](https://leetcode.com/problems/incremental-memory-leak/solutions/5428714/)

---

```scala
object Solution {
  def memLeak(memory1: Int, memory2: Int): Array[Int] =
    def f(i:Int=0, m: Seq[(Int,Int)]): Seq[Int] =
      lazy val (mx,mn) = (m.max, m.min)
      if(mx._1<i) i +: (m.sortBy(- _._2).map(_._1))
      else f(i+1, Seq((mx._1-i,mx._2),mn))
    f(1,Seq(memory1-> -1,memory2-> -2)).toArray
}
```
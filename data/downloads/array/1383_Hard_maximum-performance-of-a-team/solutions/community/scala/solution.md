# Scala

**Author:** bepis_higher
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/998757/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/998757/)

---

```scala
import scala.collection.mutable.PriorityQueue

object Solution {
    val MOD: Long = 1000000007

    def maxPerformance(n: Int, speed: Array[Int], efficiency: Array[Int], k: Int): Int = {
        var sum: Long = 0
        val pq = PriorityQueue.empty(Ordering[Int].reverse)
        ((0 until n).sortWith((i, j) => efficiency(i) > efficiency(j)).foldLeft(0.toLong){ (res, i) => {
            sum += speed(i)
            pq += speed(i)
            if(pq.size > k) sum -= pq.dequeue()
            math.max(res, sum * efficiency(i).toLong)
        }} % MOD).toInt
    }
}
```
# scala PriorityQueue

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/5387675/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/5387675/)

---

```scala
object Solution {
  def minOperations(nums: Array[Int], k: Int): Int =
    val pq = collection.mutable.PriorityQueue.from(nums.map(_.toLong))(Ordering.Long.reverse)
    LazyList.unfold((0)){case i => Option.unless(pq.head>=k){
      lazy val (x,y) = (pq.dequeue(), pq.dequeue())
      pq.enqueue((x min y) * 2 + (x max y))
      (i+1, i+1)
    }}.lastOption.getOrElse(0)
}
```
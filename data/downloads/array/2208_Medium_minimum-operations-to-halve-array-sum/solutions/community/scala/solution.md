# scala PriorityQueue

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/3153396/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/3153396/)

---

# Code
```
object Solution {
  def halveArray(nums: Array[Int]): Int = {
    val pq = collection.mutable.PriorityQueue.from(nums.iterator.map(_.toDouble))
    val half = pq.sum / 2.0
    def impl(sum1: Double, count: Int): Int = {
      if(sum1<=half) count else {
        val x = pq.dequeue
        val x2 = x/2.0
        pq.enqueue(x2)
        impl(sum1-x2,count+1)
      }
    }
    impl(pq.sum,0)
  }
}
```
# [scala] - PriorityQueue

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/2614970/](https://leetcode.com/problems/last-stone-weight/solutions/2614970/)

---

```scala
def lastStoneWeight(stones: Array[Int]): Int = {
  val queue = scala.collection.mutable.PriorityQueue(stones: _*)
  while(queue.size > 1) queue.enqueue(queue.dequeue() - queue.dequeue())
  queue.dequeue()
}
```
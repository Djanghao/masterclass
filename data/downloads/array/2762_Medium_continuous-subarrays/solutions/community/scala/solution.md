# [scala] - TreeMap, sliding window recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3717267/](https://leetcode.com/problems/continuous-subarrays/solutions/3717267/)

---

# Code
```
object Solution {
  
  import scala.collection.immutable.Queue
  import scala.collection.immutable.TreeMap

  def continuousSubarrays(nums: Array[Int]): Long =
    go(nums.toList.tail, 1, Queue(nums.head), TreeMap(nums.head -> 1), 0)

  def go(nums: List[Int], size: Int, queue: Queue[Int], map: TreeMap[Int, Int], acc: Long): Long =
    if (map.lastKey - map.firstKey <= 2)
      nums match {
        case Nil => acc + size
        case num :: tail =>
          val nMap = map.updated(num, map.getOrElse(num, 0) + 1)
          go(tail, size + 1, queue :+ num, nMap, acc + size)
      }
    else {
      val cnt = map(queue.head)
      val nMap = if (cnt == 1) map.removed(queue.head) else map.updated(queue.head, cnt - 1)
      go(nums, size - 1, queue.tail, nMap, acc)
    }
}
```
# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/5488369/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/5488369/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def isPossible(target: Array[Int]): Boolean = {
    if (target.length == 1) return target(0) == 1
    val queue = scala.collection.mutable.PriorityQueue.empty[Int](Ordering[Int])
    target.foreach(queue.enqueue(_))
    def f(queue: scala.collection.mutable.PriorityQueue[Int], sum: Int): Boolean = {
      if (queue.head == 1) return true
      val max = queue.dequeue()
      val rest = sum - max
      val times = (max - 1) / rest
      if (times < 1) return false
      val newMax = max - times * rest
      queue.enqueue(newMax)
      f(queue, rest + newMax)
    }
    f(queue, target.sum)
  }
}
```
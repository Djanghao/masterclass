# Scala with mutable min heap (ie PriorityQueue)

**Author:** acamillo
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/5957806/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/5957806/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Uses a min heap of size K for efficient k-th elemement access.
Add incoming values to the heap and pops from the head

# Approach
<!-- Describe your approach to solving the problem. -->
the `add` method keeps the heap size to `k` elements, so that the `k`th elements is always the head of it, with `O(1)` access time

# Complexity
- Time complexity:
- initialization: O(N log(N))
- add(): O(log(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(K)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
class KthLargest(k: Int, nums: Array[Int]) {

  val q =  scala.collection.mutable.PriorityQueue.empty(Ordering[Int].reverse)
  nums.foreach(add)

  def add(v: Int): Int = {
    q.enqueue(v)
    if (q.length > k) q.dequeue()
    q.head
  }

}

/**
 * Your KthLargest object will be instantiated and called as such:
 * val obj = new KthLargest(k, nums)
 * val param_1 = obj.add(`val`)
 */
```
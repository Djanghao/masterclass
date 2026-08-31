# Scala | Priority Queue| Simple Short

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/810051/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/810051/)

---

```
   def kSmallestPairs(nums1: Array[Int], nums2: Array[Int], k: Int): List[List[Int]] = {
        val maxHeap = mutable.PriorityQueue[(Int, Int, Int)]()(Ordering.by(_._1))

        for {
          i <- nums1
          j <- nums2
        } {
          maxHeap.enqueue((i + j, i, j))
          if(maxHeap.size > k) maxHeap.dequeue
        }
        maxHeap.dequeueAll[(Int, Int, Int)].map(x => List(x._2, x._3)).toList.reverse
    }
```
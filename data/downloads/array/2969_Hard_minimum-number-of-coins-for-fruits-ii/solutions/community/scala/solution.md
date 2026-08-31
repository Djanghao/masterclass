# Scala O(n log n) dp + min-heap

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/solutions/5188126/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/solutions/5188126/)

---

# Intuition
This can be solved by dynamic programming going backwards from the last piece of fruit towards the first.
If done naively, for each position $$i$$, one should add the cost of that fruit with the least expensive slot in the next $$i + 1$$ slots.
It will incur in LTE.
There would be quite a lot of repeated processing to find the minimum in a shrinking window, though. It can be avoided by using a min-heap, ordered on the total cost that can be pruned of out-of-reach slots

# Approach
1. init a dp array with the same length as the prices array
2. init a minHeap of pairs of integers. The first int will be the total cost of the prices subarray starting at the position (1-indexed) held in the second element of the pair
3. loop from the last item to the first (1-indexed)
4. remove from the heap any element that is now out of reach
5. store in the dp array the cost of the current fruit + the minimum cost of the reachable elements, which now sits at the head of the minHeap
6. return the first element of the dp array

# Complexity
- Time complexity:
$$O(n log n)$$
For each element of the prices array, a reshuffle of the min-heap (log n) could be necessary

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  def minimumCoins(prices: Array[Int]): Int = {
    val n = prices.length
    val dp = Array.ofDim[Int](n)
    val minHeap = collection.mutable.PriorityQueue(0 -> (n + 1))(Ordering.by(-_._1))
    (n to 1 by -1).foreach { i =>
      while (minHeap.headOption.exists(_._2 >= i + i + 2)) {
        minHeap.dequeue
      }
      dp(i - 1) = (minHeap.headOption match {
        case None =>
          prices(i - 1)
        case Some((best, fruitIndex)) =>
          prices(i - 1) + best
      })
      minHeap.enqueue(dp(i - 1) -> i)
    }
    dp.head
  }
}
```
# beats 100% runtime, using priority queue

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/5709371/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/5709371/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(N)+O(FLogF)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(F)
# Code
```scala []
import scala.collection.mutable
object Solution {
  def fullBloomFlowers(flowers: Array[Array[Int]], people: Array[Int]): Array[Int] = {
    val flowersBloom = flowers.map(x => FlowerBloom(x(0), x(1))).sortBy(_.start)
    val pplWithIdx = people.zipWithIndex.sortBy(_._1)
    val pq = new mutable.PriorityQueue[Int]()(Ordering.Int.reverse)
    getCount(0, pplWithIdx, Array.ofDim[Int](people.length), pq, flowersBloom, 0)
  }

  private def getCount(idx: Int, pplWithIdx: Array[(Int, Int)], result: Array[Int],
                       pq: mutable.PriorityQueue[Int], flowerBloom: Array[FlowerBloom],
                       flowerIdx: Int
                      ): Array[Int] = {
    if (idx == pplWithIdx.length) result
    else {
      val (currTime, currIdx) = pplWithIdx(idx)
      var i = flowerIdx
      while (i<flowerBloom.length && currTime >= flowerBloom(i).start) {
        pq.addOne(flowerBloom(i).end)
        i = i + 1
      }
      while (pq.nonEmpty && currTime > pq.head)
        pq.dequeue()

      result.update(currIdx, pq.length)
      getCount(idx + 1, pplWithIdx, result, pq, flowerBloom, i)
    }
}
case class FlowerBloom(start: Int, end: Int)
}
```
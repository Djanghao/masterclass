# Scala FP: SL + BS tailrecs

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5642018/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5642018/)

---

# Code
```
object Solution {
  def smallestDistancePair(nums: Array[Int], k: Int): Int = {
    val len = nums.length
    val sortedNums = nums.sorted

    @annotation.tailrec
    def distancesLTEto(d: Int, from: Int = 0, to: Int = 1, count: Int = 0): Int = 
      if (to == len) count
      else if (sortedNums(to) - sortedNums(from) > d) distancesLTEto(d, from + 1, to, count)
      else distancesLTEto(d, from, to + 1, count + to - from)

    @annotation.tailrec
    def kthSmallestBS(first: Int = 0, last: Int = sortedNums.last): Int =
      if (first > last) first
      else {
        val mid = first + (last - first) / 2
        if (distancesLTEto(mid) >= k) kthSmallestBS(first, mid - 1)
        else kthSmallestBS(mid + 1, last)
      }

    kthSmallestBS()
  }
}
```
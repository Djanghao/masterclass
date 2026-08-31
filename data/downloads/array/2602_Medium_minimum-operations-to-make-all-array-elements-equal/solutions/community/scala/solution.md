# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3364951/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3364951/)

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
    def minOperations(nums: Array[Int], queries: Array[Int]): List[Long] = {
      def search(nums: Array[Int], target: Int): Int = {
        @scala.annotation.tailrec
        def helper(left: Int, right: Int): Int = {
          val mid = left + (right - left) / 2
          mid match {
            case _ if left > right => left
            case mid if (nums(mid) == target) => mid
            case mid if (nums(mid) < target) => helper(mid + 1, right)
            case _ => helper(left, mid - 1)
          }
        }
        helper(0, nums.length - 1)
      }
      val sortedNums = nums.sorted
      val n = nums.length
      val indexes = queries.map(search(sortedNums, _))
      val prefixSum = sortedNums.scanLeft(0L)(_ + _)
      indexes.indices.map(i =>  1L * queries(i) * indexes(i) - prefixSum(indexes(i)) + prefixSum.last - prefixSum(indexes(i)) - 1L * queries(i) * (n - indexes(i))).toList
  }
}
```
or

```
  def minOperations(nums: Array[Int], queries: Array[Int]): List[Long] = {
    import scala.collection.Searching.search
    val sortedNums = nums.sorted
    val pSum = sortedNums.scanLeft(0L)(_ + _)
    queries.map { q =>
      val i = sortedNums.search(q).insertionPoint
      q.toLong * i - pSum(i) + pSum.last - pSum(i) - q.toLong * (sortedNums.length - i)
    }.toList
  }
```
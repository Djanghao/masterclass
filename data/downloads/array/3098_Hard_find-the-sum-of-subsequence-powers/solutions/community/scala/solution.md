# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4970329/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4970329/)

---

```scala 
object Solution {
  val M: Int = 1e9.toInt + 7

  def sumOfPowers(nums: Array[Int], k: Int): Int = {
    val sorted = nums.sorted
    val n = sorted.length
    val map = collection.mutable.Map.empty[Long, Int]

    def dfs(i: Int, k: Int, pre: Int, min: Int): Int = {
      val key: Long = (min.toLong << 32) | (pre.toLong << 16) | (k.toLong << 8) | i.toLong
      if (map.contains(key)) return map(key)
      if (i + 1 < k) return 0
      if (k == 0) return min
      var res = 0
      res = (res + dfs(i - 1, k, pre, min)) % M
      res = (res + dfs(i - 1, k - 1, i, if (pre == n) min else min.min(sorted(pre) - sorted(i)))) % M
      map += (key -> res)
      res
    }

    dfs(n - 1, k, n, Int.MaxValue)
  }
}
```
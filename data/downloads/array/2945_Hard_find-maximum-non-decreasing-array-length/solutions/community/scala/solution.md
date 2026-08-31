# [Scala] DP + Binary Search

**Author:** sonkei
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4333346/](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4333346/)

---

Creds to https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4329014/python-dp-binary-search/

# Complexity
- Time complexity: `O(nlogn)`
- Space complexity: `O(n)`

# Code
```
  
  object Solution {

    import scala.collection.mutable.ArrayBuffer
    import scala.collection.Searching.{Found, InsertionPoint}

    def bisectLeft(a: Array[Long], key: Long): Int = {
      var id = a.search(key) match {
        case Found(idx) => idx
        case InsertionPoint(insertionPoint) => insertionPoint
      }
      while (id > 0 && a(id - 1) >= key) id -= 1
      id
    }

    def findMaximumLength(nums: Array[Int]): Int = {
      val n = nums.length
      val acc: Array[Long] = nums.scanLeft(0L)(_ + _)
      val pre = ArrayBuffer.fill(n + 2)(0)
      val dp = ArrayBuffer.fill(n + 1)(0)
      var i: Int = 0
      for ((a, j) <- nums zip LazyList.iterate(1)(_ + 1)) {
        i = i max pre(j)
        dp(j) = dp(i) + 1
        val k = bisectLeft(acc, acc(j) * 2 - acc(i))
        pre(k) = j
      }
      dp(n)
    }
  }

```
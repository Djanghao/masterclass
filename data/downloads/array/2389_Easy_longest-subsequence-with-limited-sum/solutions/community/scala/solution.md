# scala solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2622960/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2622960/)

---

```

  def answerQueries(nums: Array[Int], queries: Array[Int]): Array[Int] = {
    val prefixSum = nums.sorted.scanLeft(0)(_ + _)
    queries.map(q => prefixSum.zipWithIndex.reverse.dropWhile(_._1 > q).headOption.map(_._2).getOrElse(0))
  }
  
```
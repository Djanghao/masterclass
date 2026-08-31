# scala two-liner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/3009402/](https://leetcode.com/problems/most-popular-video-creator/solutions/3009402/)

---

# Approach
groupBy, sort, takeWhile

# Complexity
- Time complexity: $$O(n*log(n))$$
- Space complexity: $$O(n)$$

# Code
```
  def mostPopularCreator(creators: Array[String], ids: Array[String], views: Array[Int]): List[List[String]] = {
    lazy val sorted = (creators, ids, views).zipped.toList
      .groupMap(_._1){x => x._2 -> x._3}.toList
      .map{case (c,l) => (c, l, l.map(_._2.toLong).sum)}
      .sortBy{case (c,l,s) => -s}
    sorted.takeWhile(_._3 == sorted.head._3)
      .map{case (c,l,s) => List(c,l.minBy{case (a,b) => (-b, a)}._1)}
  }
```
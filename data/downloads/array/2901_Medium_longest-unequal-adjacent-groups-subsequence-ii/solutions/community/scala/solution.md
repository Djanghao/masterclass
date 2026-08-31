# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4174655/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4174655/)

---

```scala
object Solution {
  def getWordsInLongestSubsequence(n: Int, words: Array[String], groups: Array[Int]): List[String] = {
    val f = Array.fill(n)(0)
    val from = Array.fill(n)(0)
    var mx = n - 1
    (n - 1 to 0 by -1).foreach(i => {
      (i + 1 until n).foreach(j => if (f(j) > f(i) && groups(j) != groups(i) && check(words(i), words(j))) {
        f(i) = f(j)
        from(i) = j
      })
      f(i) += 1
      if (f(i) > f(mx)) mx = i
    })

    val m = f(mx)
    var res = List.empty[String]
    (0 until m).foreach(_ => {
      res = words(mx) :: res
      mx = from(mx)
    })
    res.reverse
  }

  private def check(s: String, t: String): Boolean = {
    if (s.length != t.length) return false
    var flag = false
    s.indices.foreach(i => if (s.charAt(i) != t.charAt(i)) {
      if (flag) return false
      flag = true
    })
    flag
  }
}
```
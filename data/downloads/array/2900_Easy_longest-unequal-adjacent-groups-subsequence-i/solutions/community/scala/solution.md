# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4174657/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4174657/)

---

```scala
object Solution {
  def getWordsInLongestSubsequence(n: Int, words: Array[String], groups: Array[Int]): List[String] = {
    var res = List.empty[String]
    (0 until n).foreach(i => if (i == n - 1 || groups(i) != groups(i + 1)) res ::= words(i))
    res.reverse
  }
}
```
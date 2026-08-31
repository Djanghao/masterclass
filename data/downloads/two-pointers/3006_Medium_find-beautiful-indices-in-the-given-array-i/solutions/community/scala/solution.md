# 3 lines scala solution with ordered set

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5149773/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5149773/)

---

```scala
object Solution {
  import collection.immutable.TreeSet
  def beautifulIndices(s: String, a: String, b: String, k: Int): List[Int] =
    def findIndices(s1: String): TreeSet[Int] = s.sliding(s1.length,1).zipWithIndex.filter(_._1.mkString==s1).map(_._2).to(TreeSet)
    lazy val bSet = findIndices(b)
    findIndices(a).filter(i => bSet.minAfter(i-k).exists(j=> (j-i).abs <= k)).to(List)
}
```
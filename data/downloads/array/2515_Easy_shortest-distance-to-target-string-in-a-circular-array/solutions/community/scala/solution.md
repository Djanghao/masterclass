# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/3207621/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/3207621/)

---

# Code
```
object Solution {
  def closetTarget(words: Array[String], target: String, startIndex: Int): Int = {
    lazy val sz = words.size
    words.iterator.zipWithIndex.filter(_._1 == target).map(_._2)
    .map{i => ((i+sz-startIndex)%sz) min ((startIndex+sz-i)%sz)}.minOption.getOrElse(-1)
  }
}
```
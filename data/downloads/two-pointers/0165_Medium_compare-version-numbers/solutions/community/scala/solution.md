# Scala one liner

**Author:** Nikita_Butylo
**Votes:** 2
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5103908/](https://leetcode.com/problems/compare-version-numbers/solutions/5103908/)

---


# Approach
Code explains everything :)

# Code
```
object Solution {
  def compareVersion(version1: String, version2: String): Int = {
    version1.split('.').map(_.toInt).zipAll(version2.split('.').map(_.toInt), 0, 0).find(a => a._1 != a._2).map(a => a._1.compare(a._2)).getOrElse(0)
  }
}
```
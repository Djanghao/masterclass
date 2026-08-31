# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/3141068/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/3141068/)

---

# Code
```
object Solution {
  def similarPairs: Array[String] => Int = _.map(_.toSet).groupBy(identity)
    .values.map(_.size).filter(_ > 1).map(x => x*(x-1)/2).sum
}
```
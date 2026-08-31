# Scala | Functional sorting solution | With comments

**Author:** pasverm
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2554769/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2554769/)

---

```scala
object Solution {
  def numberOfWeakCharacters(properties: Array[Array[Int]]): Int = {
    properties
      .groupBy(_(0))        // group characters by attack value
      .toList               // transform map to list
      .sortBy(-_._1)        // sort by descending attack value
      .map(_._2.map(_(1)))  // map group of characters to their defense values
      .foldLeft((0, Int.MinValue))({ case ((acc, maxDef), currDefs) =>        // keep track of max prior defense value and
        (acc + currDefs.filter(_ < maxDef).length, maxDef.max(currDefs.max))  // accumulate number of lower def values in each group
      })._1
  }
}
```
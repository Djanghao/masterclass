# Scala very short FP))) 736ms@2.13

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5129529/](https://leetcode.com/problems/relative-ranks/solutions/5129529/)

---

# Code
```
object Solution {
  val index2rank = Array("Gold Medal", "Silver Medal", "Bronze Medal").orElse{case i => (i + 1).toString}

  def findRelativeRanks(score: Array[Int]): Array[String] =
    score.map(score.sortBy(-_).zipWithIndex.toMap.apply _ andThen index2rank)
}

```
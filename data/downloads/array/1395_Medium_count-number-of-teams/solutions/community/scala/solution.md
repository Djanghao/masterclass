# Scala: counting pairs DP

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5552040/](https://leetcode.com/problems/count-number-of-teams/solutions/5552040/)

---

# Code
```
object Solution {
  def numTeams(rating: Array[Int]): Int = {
    val len = rating.length
    val raisingPairs = Array.ofDim[Int](len)
    val fallingPairs = Array.ofDim[Int](len)

    (0 until len).foldLeft(0) { (totalTriples, i) =>
      totalTriples + (0 until i).foldLeft(0) { (triples, j) =>
        triples + (if (rating(j) < rating(i)) {
          raisingPairs(i) += 1
          raisingPairs(j)
        } else {
          fallingPairs(i) += 1
          fallingPairs(j)
        })
      }
    }
  }
}
```
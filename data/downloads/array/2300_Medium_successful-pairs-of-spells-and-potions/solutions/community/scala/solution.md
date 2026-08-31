# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2149118/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2149118/)

---

```
import scala.annotation.tailrec

object Solution {
  def successfulPairs(spells: Array[Int], potions: Array[Int], success: Long): Array[Int] = {
    val spellIndices = spells.indices.sortBy(spells)
    potions.sortInPlace
    val numPairs = Array.fill(spells.length)(0)
    
    @tailrec
    def fillNumPairs(i: Int, j: Int): Unit = {
      if (i < spellIndices.size) {
        if (j == -1 || spells(spellIndices(i)) * potions(j).toLong < success) {
          numPairs(spellIndices(i)) = potions.length - j - 1
          fillNumPairs(i + 1, j)
        } else {
          fillNumPairs(i, j - 1)
        }
      }
    }
    
    fillNumPairs(0, potions.length - 1)
    numPairs
  }
} 
```
# Scala BitSet

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/2085343/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/2085343/)

---

```
import scala.collection.immutable.BitSet

object Solution {
  def maxProduct(words: Array[String]): Int = {
    val bitSets = words.map(_.iterator.map(_ - 'a').to(BitSet))
    Iterator
      .range(0, words.length)
      .flatMap(i => Iterator.range(i + 1, words.length).map(i -> _))
      .collect { case (i, j) if (bitSets(i) & bitSets(j)).isEmpty => words(i).length * words(j).length }
      .maxOption
      .getOrElse(0)
  }
}
```
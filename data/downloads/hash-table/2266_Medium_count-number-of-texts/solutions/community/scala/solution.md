# Scala Elegant

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/2020813/](https://leetcode.com/problems/count-number-of-texts/solutions/2020813/)

---

```
import scala.collection.mutable

object Solution {
  private val Modulus = 1000000007L

  private val CalculateNumCombinations234568 = createCachedCombinationsFunction(1L, 1L, 2L)

  private val CalculateNumCombinations79 = createCachedCombinationsFunction(1L, 1L, 2L, 4L)

  def countTexts(pressedKeys: String): Int = Iterator
    .unfold(pressedKeys.iterator) { it =>
      it.nextOption.map { key =>
        val (prefix, suffix) = it.span(_ == key)
        ((key, prefix.size + 1), suffix)
      }
    }
    .map((calculateNumCombinations _).tupled)
    .fold(1L)(multiply)
    .toInt

  private def add(x: Long, y: Long) = (x + y) % Modulus
  
  private def multiply(x: Long, y: Long) = (x * y) % Modulus

  private def calculateNumCombinations(key: Char, numPresses: Int) = key match {
    case '7' | '9' => CalculateNumCombinations79(numPresses)
    case _ => CalculateNumCombinations234568(numPresses)
  }
  
  //noinspection SameParameterValue
  private def createCachedCombinationsFunction(initialValues: Long*) = {
    val cache = initialValues.to(mutable.ArrayBuffer)
    (numPresses: Int) => {
      while (cache.size <= numPresses) cache += cache.takeRight(initialValues.size).reduce(add)
      cache(numPresses)
    }
  }
}
```
# [Scala] 869. Reordered Power of 2, very easy solution, easy to adapt to Java, with explanation

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/2485295/](https://leetcode.com/problems/reordered-power-of-2/solutions/2485295/)

---

Very easy solution, we just calculate all the powers of 2 until the provided cut off and compare the anagram of the n to them.

```
object Solution {

    private val powersOf2 = computeAllPowersOf2()

  def reorderedPowerOf2(n: Int): Boolean = {

    isPowerOf2Anagram(String.valueOf(n), powersOf2)
  }

  private def isPowerOf2Anagram(s: String, pows: scala.collection.mutable.ListBuffer[Array[Char]]): Boolean = {

    for (pArr <- pows) {

      if (s.length == pArr.length) {

        if (s.toCharArray.sorted.sameElements(pArr)) {
          return true
        }
      }
    }

    false
  }

  private def computeAllPowersOf2(): scala.collection.mutable.ListBuffer[Array[Char]] = {

    val cutOff = Math.pow(10, 9)

    val result = new scala.collection.mutable.ListBuffer[Array[Char]]

    for (i <- 0 until 100) {

      val computedValue = Math.pow(2, i)

      if (computedValue > cutOff) {
        return result
      }

      result += String.valueOf(computedValue.toInt).toCharArray.sorted
    }

    result
  }
}
```
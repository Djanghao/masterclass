# Scala version

**Author:** igstan
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/5136761/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/5136761/)

---

# Scala

```
object Solution {
  def addNegabinary(a: Array[Int], b: Array[Int]): Array[Int] = {
    var large: Array[Int] = a
    var small: Array[Int] = b

    if (a.length < b.length) {
      large = b
      small = a
    }

    val result = Array.ofDim[Int](large.length + 2)
    var carry0 = 0
    var carry1 = 0
    var i = 0
    var lastWrittenIndex = -1

    while (i < large.length) {
      val largeElem = large(large.length - 1 - i)
      val smallElem = if (small.length - 1 - i < 0) 0 else small(small.length - 1 - i)

      val res = smallElem + largeElem + carry0

      if ((res % 2) > 0) {
        lastWrittenIndex = result.length - 1 - i
        result(result.length - 1 - i) = 1
      }

      if (res / 2 == 0) {
        carry0 = carry1
        carry1 = 0
      } else {
        if (carry1 == 1) {
          carry0 = 0
          carry1 = 0
        } else {
          carry0 = 1
          carry1 = 1
        }
      }

      i += 1
    }

    if (carry0 == 1) {
      result(1) = 1
      lastWrittenIndex = 1
    }

    if (carry1 == 1) {
      result(0) = 1
      lastWrittenIndex = 0
    }

    if (lastWrittenIndex < 0) {
      Array(0)
    } else {
      if (lastWrittenIndex == 0) {
        result
      } else {
        java.util.Arrays.copyOfRange(result, lastWrittenIndex, result.length)
      }
    }
  }
}

```
# Beats 100% in time and memory

**Author:** muskan3006
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/5174380/](https://leetcode.com/problems/decode-xored-array/solutions/5174380/)

---



# Code
```
import scala.annotation.tailrec
object Solution {
  def decode(encoded: Array[Int], first: Int): Array[Int] = {
    val encodedArraySize = encoded.length

    @tailrec
    def helper(index: Int, currentElement: Int, finalArray: Array[Int]): Array[Int] = {
      if (index < encodedArraySize) {
        val nextElement = currentElement ^ encoded(index)
        finalArray(index + 1) = nextElement
        helper(index + 1, nextElement, finalArray)
      } else finalArray
    }

    helper(0, first, Array.fill(encodedArraySize + 1)(first))
  }
}
```
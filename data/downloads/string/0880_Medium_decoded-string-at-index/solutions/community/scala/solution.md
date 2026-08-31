# Scala solution

**Author:** dustin10
**Votes:** 2
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/378353/](https://leetcode.com/problems/decoded-string-at-index/solutions/378353/)

---

```
  /**
    * First determine what the size will be of the entire string
    * Then work backwards trimming the size down until we find the correct value.
    */
  object Solution {
    def decodeAtIndex(S: String, K: Int): String = {
      def decodeAtIndex(size: Long, S: String, K: Long): String = {
        S.head match {
          case digit if digit.isDigit => decodeAtIndex(size / (digit - '0'), S.tail, K % size)
          case character if K % size == 0 => character.toString
          case _ => decodeAtIndex(size - 1, S.tail, K % size)
        }
      }

      decodeAtIndex(
        size = S.foldLeft(0L)((size, current) => {
          if (current.isDigit) size * (current - '0')
          else size + 1
        }),
        S = S.reverse,
        K = K.toLong
      )
    }
  }
```
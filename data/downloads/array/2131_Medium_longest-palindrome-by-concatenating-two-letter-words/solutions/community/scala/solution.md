# Scala solutions using HashMap

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2774336/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2774336/)

---

Scala solutions using HashMap, we first check for pairs, and then we check if we got any more left duplicate to use as the "middle".

```
object Solution {
    
  def longestPalindrome(words: Array[String]): Int = {

    var max = 0
    val m = new scala.collection.mutable.HashMap[String, Int]()

    for (w <- words) {

      val flipped: String = String.valueOf(w.charAt(1)) + w.charAt(0)

      if (m.contains(flipped)) {

        max += 4
        val foundValue = m(flipped)

        if (foundValue == 1) {

          m.remove(flipped)
        } else {
          m.put(flipped, foundValue - 1)
        }

      } else {

        if (m.contains(w)) {
          val foundValue = m(w)
          m.put(w, foundValue + 1)
        } else {
          m.put(w, 1)
        }
      }
    }

    for (i <- 0 until 26) {

      val c = ('a' + i).toChar
      val pair = String.valueOf(c) + c

      if (m.contains(pair)) {

        return max + 2
      }
    }

    max
  }
}
```
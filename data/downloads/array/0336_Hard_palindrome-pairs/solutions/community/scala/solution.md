# Scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/4116257/](https://leetcode.com/problems/palindrome-pairs/solutions/4116257/)

---



# Code
```
import scala.collection.mutable.{ListBuffer, HashMap}

object Solution {
  def palindromePairs(words: Array[String]): List[List[Int]] = {
    val backward = HashMap[String, Int]()
    for ((word, i) <- words.zipWithIndex) {
      backward += (word.reverse -> i)
    }

    val res = ListBuffer[List[Int]]()

    for ((word, i) <- words.zipWithIndex) {
      // Case 1
      if (backward.contains(word) && backward(word) != i) {
        res += List(i, backward(word))
      }

      // Case 2
      if (word != "" && backward.contains("") && word == word.reverse) {
        res += List(i, backward(""))
        res += List(backward(""), i)
      }

      // Case 3 and 4
      for (j <- 1 until word.length) {
        val prefix = word.substring(0, j)
        val suffix = word.substring(j)

        // Case 3: The suffix is the reverse of another word and the prefix is a palindrome.
        if (backward.contains(suffix) && prefix == prefix.reverse) {
          res += List(backward(suffix), i)
        }

        // Case 4: The prefix is the reverse of another word and the suffix is a palindrome.
        if (backward.contains(prefix) && suffix == suffix.reverse) {
          res += List(i, backward(prefix))
        }
      }
    }
    
    // Remove duplicates by converting to Set and back to List
    res.toList.distinct
  }
}
```
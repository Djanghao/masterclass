# Scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/4335768/](https://leetcode.com/problems/shortest-word-distance/solutions/4335768/)

---

# Code
```
object Solution {
    // Defines a method to find the shortest distance between two words in an array.
    def shortestDistance(words: Array[String], word1: String, word2: String): Int = {
        // Zips the words array with their indices and uses foldLeft to iterate through them.
        words.zipWithIndex
            .foldLeft((-1, -1, words.length)) { // Initializes the foldLeft with (-1, -1, array length).
                case ((i1, i2, minDistance), (word, i)) =>
                    // Updates the index for word1 (distA) if the current word matches word1, else keeps the previous value.
                    val distA = if (word == word1) i else i1
                    // Updates the index for word2 (distB) if the current word matches word2, else keeps the previous value.
                    val distB = if (word == word2) i else i2
                    // If both words have been found, updates the minimum distance.
                    if (distA != -1 && distB != -1)
                        (distA, distB, Math.min(minDistance, Math.abs(distA - distB)))
                    else // If one or both words haven't been found, retains the current minimum distance.
                        (distA, distB, minDistance)
            }
            ._3 // Extracts the third element of the tuple, which is the minimum distance.
    }
}

```
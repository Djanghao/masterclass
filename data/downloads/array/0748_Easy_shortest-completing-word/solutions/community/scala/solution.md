# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/3599541/](https://leetcode.com/problems/shortest-completing-word/solutions/3599541/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m * log m) ?
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def shortestCompletingWord(licensePlate: String, words: Array[String]): String = {
      val plate = licensePlate.toLowerCase.filter(_.isLetter).groupBy(identity).view.mapValues(_.length)
      words.filter(word=>isCompletingWord(word.toLowerCase, plate.toMap)).minBy(_.length)
    }

    def isCompletingWord(word: String, plate: Map[Char, Int]): Boolean = 
      plate.forall(f=>word.count(_ == f._1) >= f._2)
}
```
# Scala Solution

**Author:** AASTHA011
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-common-word/solutions/5433331/](https://leetcode.com/problems/most-common-word/solutions/5433331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def mostCommonWord(paragraph: String, banned: Array[String]): String = {
        val bannedSet = banned.toSet
        val para = paragraph.toLowerCase.replaceAll("[^a-z]", " ")

        val words = para.split(" ")
        val wordCount = scala.collection.mutable.Map[String, Int]().withDefaultValue(0)

        for (word <- words if !bannedSet.contains(word) && word.nonEmpty) {
        wordCount(word) += 1
        }

        wordCount.maxBy(_._2)._1


    }
}
```
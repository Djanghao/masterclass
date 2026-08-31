# best solution on scala, 100% beats

**Author:** egssor
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/5999303/](https://leetcode.com/problems/circular-sentence/solutions/5999303/)

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
```scala []
object Solution {
    def isCircularSentence(sentence: String): Boolean = {
        val words = sentence.split(" ")
        val n = words.length

        // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043C\u0435\u0442\u043E\u0434 `forall`, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0430\u0440 \u0441\u043B\u043E\u0432
        (0 until n).forall(i => words(i).last == words((i + 1) % n).head)
    }
}


```
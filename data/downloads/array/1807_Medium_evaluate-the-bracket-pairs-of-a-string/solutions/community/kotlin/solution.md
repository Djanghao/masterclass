# Simple solution using hash table and regex | Beat 100%

**Author:** imysko
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/6010764/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/6010764/)

---

# Code
```kotlin []
class Solution {
    fun evaluate(s: String, knowledge: List<List<String>>): String {
        val knowledgeMap = knowledge.associateBy({ it.first() }, { it.last() })

        val pattern = "\\\\(\\\\w+\\\\)"
        return buildString {
            var startWordIndex = 0
            Regex(pattern).findAll(s)
                .forEach { match ->
                    append(s.substring(startWordIndex, match.range.first))

                    val key = match.value.drop(1).dropLast(1)
                    append(knowledgeMap.getOrDefault(key, "?"))

                    startWordIndex = match.range.last + 1
                }

            append(s.substring(startWordIndex))
        }
    }
}
```
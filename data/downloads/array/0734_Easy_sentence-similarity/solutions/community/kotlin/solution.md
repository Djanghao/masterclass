# Using `zip`

**Author:** lazy-bird
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/4343404/](https://leetcode.com/problems/sentence-similarity/solutions/4343404/)

---

# Complexity
- Time complexity: $$O(n)$$


# Code
```
  class Solution {
      fun areSentencesSimilar(
          sentence1: Array<String>,
          sentence2: Array<String>,
          similarPairs: List<List<String>>
      ): Boolean {
          if (sentence1.size != sentence2.size) return false
          val sim = similarPairs.groupBy({ it[0] }, { it[1] })
          return sentence1.zip(sentence2)
              .find { 
                    (it.first != it.second) 
                        && sim[it.first]?.contains(it.second) != true 
                        && sim[it.second]?.contains(it.first) != true  
              } == null
      }
  }
```
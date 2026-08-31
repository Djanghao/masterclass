# Kotlin

**Author:** user8762vM
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4932618/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4932618/)

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
class Solution {
    fun reorderSpaces(text: String): String {
        val words = mutableListOf<String>()
        var spacesCount = 0
        var beginingOfWord = -1
        var endOfWord = -1

        for (i in 0..text.length - 1) {
            if (text[i] == ' ') {
                spacesCount += 1
                if (beginingOfWord != -1) {
                    words.add(text.substring(beginingOfWord, i))
                    beginingOfWord = -1
                }
            } else {
                if (beginingOfWord == -1) {
                    beginingOfWord = i
                }
            }

            if (i == text.length - 1) {
                if (beginingOfWord != -1) {
                    words.add(text.substring(beginingOfWord, i +1))
                    beginingOfWord = -1
                }
            }
        }

        var spacesBetweenWords = 0
        var remaningSpaces = spacesCount
        
        if (words.size > 1) {
            spacesBetweenWords = spacesCount / (words.size - 1)
            remaningSpaces = spacesCount % (words.size - 1)
        }

        
        var result = ""
        
        for (i in 0..words.size - 1) {
                result += words[i]
                if (i < words.size - 1) {
                    for (j in 1..spacesBetweenWords) {
                        result += " "
                    }
                } else {
                    for (i in 1..remaningSpaces) {
                        result += " "
                    }
                }
            }
        

        return result
    }
}
```
# Kotlin StringBuilder Solution

**Author:** codeking19
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/6046068/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/6046068/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal of the problem is to see if each first letter of `words[i]`corresponds to the letter in `s`
# Approach
<!-- Describe your approach to solving the problem. -->
1. Add the first letter of each word in `words` to a string
2. Compare the string to `s` to see if they are the same
3. Return true or false
# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun isAcronym(words: List<String>, s: String): Boolean {
        val sb = StringBuilder()
        for (i in 0 until words.size) {
            sb.append(words[i].get(0))
        }
        if (sb.toString() == s) return true
        return false
    }
}
```
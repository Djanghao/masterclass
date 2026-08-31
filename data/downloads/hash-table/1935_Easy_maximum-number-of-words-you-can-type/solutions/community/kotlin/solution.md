# Kotlin

**Author:** gky
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/6022223/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/6022223/)

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
```kotlin []
class Solution {
    fun canBeTypedWords(text: String, brokenLetters: String): Int {
        return text.split(" ").filterNot { word -> word.any { it in brokenLetters } }.size
    }
}
```
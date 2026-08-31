# Kotlin - Simple, fluent, readable, fast

**Author:** pXkytUcPeX
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/6042710/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/6042710/)

---

# Complexity
- Time complexity:
O(N) 

- Space complexity:
O(N)

# Code
```kotlin []
class Solution {
    fun areNumbersAscending(sentence: String): Boolean {
        
        // First, split the string into its words
        val tokens: List<String> = sentence.split(" ")

        // Then, take out all of the integers
        val numbers: List<Int> = tokens.mapNotNull { it.toIntOrNull() }


        // Next, start at the beginning, and check if the next one is strictly larger
        for (index in 0..numbers.lastIndex - 1) {
            if (numbers[index] >= numbers[index + 1]) {
                // If not, return false
                return false
            }
        }
    
        return true
    }
}


```
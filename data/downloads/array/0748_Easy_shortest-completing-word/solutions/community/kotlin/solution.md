# Kotlin solution with O(N) complexity

**Author:** drgavrikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/3668612/](https://leetcode.com/problems/shortest-completing-word/solutions/3668612/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Two words are anagrams if they consist of the same number of letters.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N * 26)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun shortestCompletingWord(licensePlate: String, words: Array<String>): String {
        return words.sortedBy { it.length }.first { word ->
            val plateCount = getLetterCount(licensePlate)
            val wordCount = getLetterCount(word)
            plateCount.all { (char, int) -> int <= wordCount.getOrDefault(char, 0) }
        }
    }

    private fun getLetterCount(word: String) = word.filter { it.isLetter() }
        .groupingBy { it.toLowerCase() }
        .eachCount()
}
```
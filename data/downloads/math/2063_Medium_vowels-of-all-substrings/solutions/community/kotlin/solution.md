# O(n) solution in Kotlin

**Author:** tamhuynhit
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/5665797/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/5665797/)

---

# Intuition
Try to calculate number of total sub string from the word length, when met a vowel, let's call A[i] is number of sub string that don't include the vowel at index i, so number of sub string that include this vowel is total sub string - A[i]. Sum all the value for every other vowels to find the result

# Approach
Number of possible non-empty sub string for a string with length n is n * (n + 1) / 2

Example:
word:   b c d a c d b

Total sub string count is: 7 * 8 / 2 = 28
At index 3: 'a' is a vowel
All sub string that don't include 'a' is a sum of:
  - All sub string that include every characters before 'a'
  - All sub string that include every characters after 'a'

Before 'a': we have 3 (i = 3) characters, number of possible sub strings are: 3 * 4 / 2 = 6
After 'a': we have 3 (n - i - 1 = 3) characters, number of possible sub strings are: 3 * 4 / 2 = 6
So the result for this 'a' character at index 3 is: 28 - 6 - 6 = 16

Continue for all other vowels in the word


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
Use additional HashMap to cache number of sub strings from a string's length to reduce calculation

# Code
```kotlin []
class Solution {
    private val countCheck = HashMap<Int, Long>()

    fun countVowels(word: String): Long {
        var sum = 0L
        val totalSubString = calculateNumberOfSubString(word.length)

        for (i in 0 until word.length) {
            if (!isVowel(word[i]))
                continue

            sum += (totalSubString - calculateNumberOfSubString(i) - calculateNumberOfSubString(word.length - i - 1))
        }

        return sum
    }

    private fun calculateNumberOfSubString(length: Int): Long {
        return countCheck[length] ?: (length * (length + 1L) / 2).also {
            countCheck[length] = it
        }
    }

    private fun isVowel(c: Char): Boolean {
        return when(c) {
            'a', 'e', 'i', 'o', 'u' -> true
            else -> false
        }
    }
}
```
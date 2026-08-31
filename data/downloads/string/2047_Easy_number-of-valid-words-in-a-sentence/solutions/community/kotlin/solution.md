# Kotlin 100%  Easy Solution

**Author:** yudith
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/5457754/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/5457754/)

---

# Intuition
At first i wanted to loop the array and counting valid words validating all the requirements. But it is hard to keep track valid numbers because the checker can be overlay each other specialy on hypen and punctuation

# Approach
Instead of looping to get valid words, we can just go the easy way to keep decreasing valid word if we found invalid word. This way is more manageable that checking valid numbers. We just initialized validWordCounter = size of word after splitting and keep iterating

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun countValidWords(sentence: String): Int {
        val validWord = sentence.split(" ")
        var validWordCounter = validWord.size
         val punctuationMarks = setOf('!', '.', ',', ' ')
        for (i in validWord.indices) {
            val word = validWord[i]
            when {
                word.isEmpty() -> {
                    validWordCounter--
                }
                word.any { it.isDigit() } -> {
                    validWordCounter--
                }
                word.contains('-') && word.any { it in punctuationMarks } -> {
                    if (!validHypen(word)) {
                        validWordCounter--
                    } else if (!validPunctuation(word)) {
                        validWordCounter--
                    } else {
                        print("accepted punctuation-hypen= $word\
")
                    }
                }
                word.contains('-') -> {
                    if (!validHypen(word)) {
                        validWordCounter--
                    } else {
                        print("accepted hypen= $word\
")
                    }
                }
                word.any { it in punctuationMarks } -> {
                    if (!validPunctuation(word)) {
                        validWordCounter--
                    } else {
                        print("accepted punctuation= $word\
")
                    }
                }
                else -> {
                    print("accepted= $word\
")
                }
            }
        }
        return validWordCounter
    }

    fun validHypen(word: String): Boolean {
        val hyphenIndex = word.indexOf('-')
        return  word.count { it == '-'} == 1 && hyphenIndex != -1 && hyphenIndex != 0 && hyphenIndex != word.length - 1 &&
           word[hyphenIndex - 1].isLetter() && word[hyphenIndex + 1].isLetter()
    }

    fun validPunctuation(a: String): Boolean {
        val punctuationMarks = setOf('!', '.', ',', ' ')
        return a.count { it in punctuationMarks} == 1 && a.last() in punctuationMarks
    }
}
```
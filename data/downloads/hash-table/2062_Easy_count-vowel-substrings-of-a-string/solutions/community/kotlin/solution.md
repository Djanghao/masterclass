# Kotlin sliding window solution using integer array

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5100804/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5100804/)

---

![Screenshot 2024-05-02 170705.png](./images/0.png)


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(alphabet size + alphabet size) or O(1)

# Code
```
class Solution {
    private val vowels = getVowels()

    fun countVowelSubstrings(word: String): Int {
        var count = 0
        var frequencies = IntArray(26)
        var vowelCount = 0
        var j = 0
        var k = 0
        
        for (i in 0 until word.length) {
            val vowelIndex = word[i] - 'a'
            if (vowels[vowelIndex]) {
                if (++frequencies[vowelIndex] == 1) vowelCount++
                
                while (vowelCount == VOWELS_LENGTH) {
                    if (--frequencies[word[k] - 'a'] == 0) vowelCount--
                    k++
                }

                count += k - j
            } else {
                frequencies = IntArray(26)
                vowelCount = 0
                j = i + 1
                k = j

            }
        }

        return count
    }

    private fun getVowels(): BooleanArray {
        val vowels = BooleanArray(26)
        vowels['a' - 'a'] = true
        vowels['e' - 'a'] = true
        vowels['i' - 'a'] = true
        vowels['o' - 'a'] = true
        vowels['u' - 'a'] = true
        return vowels
    }

    companion object {
        private const val VOWELS_LENGTH = 5
    }
}
```
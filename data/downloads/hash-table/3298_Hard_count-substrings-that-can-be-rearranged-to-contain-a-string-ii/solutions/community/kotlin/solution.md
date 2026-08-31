# Koltin Solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/solutions/5822488/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/solutions/5822488/)

---

# Intuition

To solve the problem of counting valid substrings in word1 that contain all characters from word2 with the required frequency, a sliding window approach seems appropriate. This allows us to efficiently track the character counts as we expand and contract the window over word1.

# Approach

*    Count Character Frequencies: Create a frequency map for characters in word2 to know the required counts.

*   Sliding Window: Use two pointers (left and right) to maintain a window in word1. Expand the right pointer to include more characters and contract the left pointer when all characters from word2 are satisfied.

* Track Valid Substrings: Whenever the window contains all required characters, calculate the number of valid substrings that can be formed by the current configuration and update the count.

*   Update Counts: As you slide the window, update the counts of characters and the number of characters that meet the required frequency.

# Complexity

* Time Complexity: O(n) where nn is the length of word1, as we process each character a limited number of times.
* Space Complexity: O(m) where mm is the length of word2, for storing the frequency counts in a hash map.

# Code
```kotlin []
class Solution {
    fun validSubstringCount(word1: String, word2: String): Long {
        val n = word1.length
        val m = word2.length
        if (m > n) return 0L

        val targetCount = mutableMapOf<Char, Int>()
        for (c in word2) {
            targetCount[c] = targetCount.getOrDefault(c, 0) + 1
        }

        var validCount = 0L
        val windowCount = mutableMapOf<Char, Int>()
        var left = 0
        var formed = 0

        for (right in 0 until n) {
            val currentChar = word1[right]
            windowCount[currentChar] = windowCount.getOrDefault(currentChar, 0) + 1

            if (targetCount.containsKey(currentChar) &&
                windowCount[currentChar] == targetCount[currentChar]) {
                formed++
            }

            while (formed == targetCount.size) {
                validCount += (n - right) // Count valid substrings

                val leftChar = word1[left]
                windowCount[leftChar] = windowCount[leftChar]?.minus(1) ?: 0
                if (targetCount.containsKey(leftChar) &&
                    windowCount[leftChar]!! < targetCount[leftChar]!!) {
                    formed--
                }
                left++
            }
        }

        return validCount
    }
}

```
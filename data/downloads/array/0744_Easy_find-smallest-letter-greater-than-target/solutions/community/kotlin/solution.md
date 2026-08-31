# Kotlin 744. Find Smallest Letter Greater Than Target

**Author:** alkmse4
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/3618947/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/3618947/)

---



# Code
```
class Solution {
    fun nextGreatestLetter(letters: CharArray, target: Char): Char {
        var min = 0
        var max = letters.size - 1
        var mid = 0

        if (target >= letters[letters.size - 1]) {
            return letters[0]
        }

        while (min < max) {
            mid = (min + max) / 2
            if ( target < letters[mid]) {
                max = mid
            } else min = mid + 1
        }
        return letters[min]
    }
}
```
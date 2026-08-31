# [Kotlin] Easy Map Solution

**Author:** devle79
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/4567143/](https://leetcode.com/problems/single-row-keyboard/solutions/4567143/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

1. Memorize index of each key
2. Calculate distance
3. As easy as that

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun calculateTime(keyboard: String, word: String): Int {
        val keyboardMap = IntArray(26)

        for (i in keyboard.indices) {
            keyboardMap[keyboard[i] - 'a'] = i
        }

        var timeCount = 0
        var currentPointer = 0

        word.forEach {
            timeCount += abs(currentPointer - keyboardMap[it - 'a'])
            currentPointer = keyboardMap[it - 'a']
        }

        return timeCount
    }
}
```
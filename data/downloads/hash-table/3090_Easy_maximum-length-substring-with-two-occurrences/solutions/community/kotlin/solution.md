# Kotlin Solution

**Author:** evgeniy091993
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5722479/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5722479/)

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
    fun maximumLengthSubstring(s: String): Int {
        
        var maxL = 0
        val map = mutableMapOf<Char, Int>()
        var start = 0
        var end = 1

        map[s[0]] = 1

        while(end < s.length) {

            val count = map[s[end]] ?: 0

            if(count == 2) {
                maxL = max(maxL, end - start)
                map.clear()
                start++
                end = start + 1
                map[s[start]] = 1
                continue
            }

            map[s[end]] = count + 1
            end++

        }

        maxL = max(maxL, end - start)

        return maxL

    }
}
```
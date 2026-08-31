# My Kotlin Solution

**Author:** mgalhardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/1626834/](https://leetcode.com/problems/consecutive-characters/solutions/1626834/)

---

- Runtime: 160 ms, faster than 80.00% of Kotlin online submissions for Consecutive Characters.
- Memory Usage: 35.4 MB, less than 30.00% of Kotlin online submissions for Consecutive Characters.

```kotlin
class Solution {

    // Time Complexity: O(n)
	// Space Complexity: O(1)
    fun maxPower(s: String): Int {
		var max = 0
        var count = 0
        var previous: Char = ' '
        for (c in s) {
            if (previous != c) {
                count = 0
                previous = c
            }
            
            count++
            max = maxOf(max, count)
        }
        return max
    }
}
```
# Easy solution with Kotlin

**Author:** 4ida
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6010870/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6010870/)

---

# Code
```kotlin []
class Solution {
    fun minChanges(s: String): Int {
        var ans = 0
        var prev = s[0]
        var prevCount = 1

        for (i in 1 until s.length) {
            if (prevCount == 0) {
                prev = s[i]
            }
            if (prev == s[i]) {
                prevCount++
            } else {
                if(prevCount % 2 != 0){
                    ans++
                    prevCount = 0
                }
                else if (i != s.length - 1 && s[i] == s[i + 1]) {
                    prev = s[i]
                    prevCount = 1
                } else {
                    ans++
                    prevCount += 1
                }
            }
        }
        return ans
    }
}
```
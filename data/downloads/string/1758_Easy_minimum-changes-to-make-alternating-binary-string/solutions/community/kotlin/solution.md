# ✅ 100% ⚗️ one loop & O(1) space || simple & nice

**Author:** sunnoca
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4453034/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4453034/)

---

# Please Upvote \uD83D\uDD1D Appreciations!
![image.png](./images/0.png)


# Code
``` Kotlin []
class Solution {
    fun minOperations(s: String): Int {
        var prev = '1'
        var count = 0

        for (ch in s)
            prev = if (ch == prev) {
                count++
                if (ch == '0') '1' else '0'
            } else ch

        return Math.min(count, s.length - count)
    }
}
```
``` Kotlin []
class Solution {
    fun minOperations(s: String): Int = Math.min(minOperations(s, '1'), minOperations(s, '0'))

    private fun minOperations(s: String, start: Char): Int {
        var prev = start
        var count = 0

        for (ch in s)
            prev = if (ch == prev) {
                count++
                if (ch == '0') '1' else '0'
            } else ch

        return count
    }
}
```
``` Kotlin []
class Solution {
    fun minOperations(s: String): Int = Math.min(minOperations(s, '1'), minOperations(s, '0'))

    private fun minOperations(s: String, start: Char): Int {
        var prev = start
        return s.fold(0) { count, ch ->
            if (ch == prev) {
                prev = if (ch == '0') '1' else '0'
                count + 1
            } else {
                prev = ch
                count
            }
        }
    }
}
```
``` Kotlin []
class Solution {
    fun minOperations(s: String): Int = min(checkMinOpers("1$s"), checkMinOpers("0$s"))

    fun checkMinOpers(s: String): Int {
        var prev = s[0]
        var count = 0

        for (i in 1 until s.length) {
            prev = if (s[i] == prev) {
                count++
                if (s[i] == '0') '1' else '0'
            } else s[i]
        }

        return count
    }
}
```
# Complexity
- Time complexity: **O(** n **)**
- Space complexity: 1,2,3 - **O(** 1 **)** 4 - **O(** n **)**
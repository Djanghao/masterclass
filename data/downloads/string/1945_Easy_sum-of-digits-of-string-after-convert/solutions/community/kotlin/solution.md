# Minimal Kotlin Solution

**Author:** Codextor
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5732613/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5732613/)

---

```kotlin []
class Solution {
    fun getLucky(s: String, k: Int): Int {
        var digitSum = 0

        s.forEach { char ->
            val charValue = char - 'a' + 1
            digitSum += charValue / 10 + charValue % 10
        }

        repeat(k - 1) {
            var newSum = 0
            while (digitSum > 0) {
                newSum += digitSum % 10
                digitSum /= 10
            }
            digitSum = newSum
        }

        return digitSum
    }
}
```
# Kotlin beat 100%

**Author:** goflutterjava
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1391354/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1391354/)

---

```kotlin
fun isDecomposable(s: String): Boolean {
        if (s.length < 2) {
            return false
        }
        var lastChar = '-';
        var count = 0;
        var twoLenCount = 0;
        for (c in s) {
            if (lastChar != c) {
                if (lastChar == '-') {
                    lastChar = c
                    count = 1
                    continue
                }
                // that's an end of repeat char
                // reset count
                val reminder = count % 3;
                lastChar = c
                count = 1
                if (reminder == 0) {
                    continue
                }
                if (reminder == 1) {
                    return false
                }
                if (twoLenCount == 0) {
                    twoLenCount = 1
                } else {
                    return false
                }
            } else {
                count++
            }
        }
        // that's a final end of repeat char
        val reminder = count % 3;
        if (reminder == 1) {
            return false
        }
        if (reminder == 2) {
            return twoLenCount == 0
        }
        return twoLenCount == 1
    }
```
# Kotlin. Beats 100% (118 ms). Custom IntStream class

**Author:** mobdev778
**Votes:** 4
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5105504/](https://leetcode.com/problems/compare-version-numbers/solutions/5105504/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun compareVersion(version1: String, version2: String): Int {
        val stream1 = IntStream(version1)
        val stream2 = IntStream(version2)

        var result = 0
        while (stream1.isAvailable() || stream2.isAvailable()) {
            val diff = stream1.readInt() - stream2.readInt()
            if (diff > 0) { result = 1; break }
            if (diff < 0) { result = -1; break }
        }
        return result
    }

    class IntStream(private val string: String) {

        var i = 0
        var number = 0

        fun isAvailable(): Boolean {
            return i < string.length
        }

        fun readInt(): Int {
            number = 0
            while (i < string.length) {
                val c = string[i++]
                if (c == '.') break
                number = number * 10 + (c - '0')
            }
            return number
        }
    }
}
```
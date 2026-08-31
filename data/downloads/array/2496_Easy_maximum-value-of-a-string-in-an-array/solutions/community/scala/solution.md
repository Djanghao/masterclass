# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3336057/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3336057/)

---

# Complexity
- Time complexity: O(N * WordLength)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {

    def c(original: String, index: Int, count: Int): Int = {
        if(index >= original.length) {
            count   
        } else {
            val ch = original.charAt(index)
            if(ch >= '0' && ch <= '9') c(original, index + 1, count * 10 + (ch - '0'))
            else return original.length
        }
    }

    def maximumValue(strs: Array[String]): Int = {
        import scala.math.max

        var maximumValue = 0
        
        for(s <- strs) {
            maximumValue = max(maximumValue, c(s, 0, 0))
        }

        maximumValue
    }
}
```
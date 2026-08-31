# Kotlin. Beats 100% (116 ms). Simple check using division

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number/solutions/5655390/](https://leetcode.com/problems/ugly-number/solutions/5655390/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun isUgly(n: Int): Boolean {
        if (n <= 0) {
            return false
        }

        var number = n
        while (number > 1) {
            when {
                number and 0x1 == 0 -> number = number shr 1
                number % 3 == 0 -> number = number / 3
                number % 5 == 0 -> number = number / 5
                else -> return false
            }
        }
        return true
    }
}
```

# Approach

We use a simple division check - we divide the number by factors 2, 3 and 5 until we find out that it is divisible by some other factor.

The division check can be accelerated using bitwise operations - the number is not divisible by 2 if its least significant bit is 1.
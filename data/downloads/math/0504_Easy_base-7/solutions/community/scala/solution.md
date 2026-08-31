# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/base-7/solutions/4285014/](https://leetcode.com/problems/base-7/solutions/4285014/)

---

# Code
```
object Solution {
    def convertToBase7(num: Int): String = {
        if (num == 0) return "0"

        val isNegative = num < 0
        var number = if (isNegative) -num else num
        var result = new StringBuilder

        while (number > 0) {
        result.insert(0, number % 7)
        number /= 7
        }

        if (isNegative) result.insert(0, '-')
        result.toString()
    }       
}


```
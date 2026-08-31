# Kotlin, binary search without low and high

**Author:** south81
**Votes:** 4
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/3092088/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/3092088/)

---


# Code
```
class Solution:GuessGame() {
     override fun guessNumber(n:Int):Int {
        var step = n / 2
        var num = step

        while (true) {
            var result = guess(num)

            step = step / 2
            if (step == 0) step = 1

            if (result == 0)
                return num
            else if (result == 1)
                num = num + step
            else
               num = num - step
        }
    }
}
```
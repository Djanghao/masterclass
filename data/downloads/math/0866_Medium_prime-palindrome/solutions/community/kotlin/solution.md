# Kotlin – beats 100% – simple to understand

**Author:** user3268PY
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/3060479/](https://leetcode.com/problems/prime-palindrome/solutions/3060479/)

---

# Code
```
class Solution {
fun primePalindrome(n: Int): Int {
            var i = n

            while (!isPalindrome(i) || !isPrime(i)) {
                i++

                if (i in 10000001..99999999)
                    i = 100_000_000
            }

            return i
        }

        private fun isPrime(number: Int): Boolean {
            if (number < 2) return false
            if (number <= 3) return true
            if (number % 2 == 0 || number % 3 == 0) return false

            for (i in 2..Math.sqrt(number.toDouble()).toInt()) {
                if (number % i == 0) {
                    return false
                }
            }
            return true
        }

        private fun isPalindrome(number: Int): Boolean {
            return number.toString() == number.toString().reversed()
        }
    }
```
# Kotlin bruteforce solution

**Author:** armat
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3773691/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3773691/)

---

# Code
```
class Solution {
    fun countBeautifulPairs(nums: IntArray): Int {
        var beautifulPairs = 0
        var i = 0
        var j = 1

        while (i < nums.size-1) {
            val firstDigit = getFirstDigit(nums[i])

            while (j < nums.size) {
                val lastDigit = nums[j] % 10
                val botDigitsAreEqualAndNot1 = firstDigit == lastDigit && firstDigit > 1
                val botDigitsAreDivisibleBy2 = firstDigit % 2 == 0 && lastDigit % 2 == 0
                val botDigitsAreDivisibleBy3 = firstDigit % 3 == 0 && lastDigit % 3 == 0
                
                if (!botDigitsAreEqualAndNot1 && !botDigitsAreDivisibleBy2 &&!botDigitsAreDivisibleBy3)
                    beautifulPairs++

                j++
            }
            
            i++
            j = i+1
        }

        return beautifulPairs
    }

    private fun getFirstDigit(num: Int): Int {
        var n = num
        var digit = 0

        while (n > 0) {
            digit = n % 10
            n /= 10
        }

        return digit
    }
}
```
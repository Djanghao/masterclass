# Clean Kotlin solution with detailed explanation

**Author:** botime
**Votes:** 1
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/4858129/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/4858129/)

---

# Intuition
First we need to understand how long division works. Reference: https://www.mathsisfun.com/long_division.html

Once we understand that it's basically translating the algorithm into code.

The hard part is to come up with test cases that covers all scenarios. An interesting test case I found is 1 / 2147483647, which is an invalid test case. See: https://www.quora.com/How-long-is-1-2147483647-a-repeating-decimal


# Approach
We need to calculate the following three parts:
1. Sign
2. Whole number
3. Fractional part

For example in -42.85, sign is "-", the whole number is "42" and the fractional part is "85".



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
My code is not the fastest one. But most of the time I prefer clarity over speed for numerous reasons.
```
class Solution {
    fun fractionToDecimal(numerator: Int, denominator: Int): String {
        // Test cases:
        // 4 / 333
        // 1 / 6
        // -7 / 12
        // -1 / -2147483648
        val result = StringBuilder()

        // Calculate the sign
        if (numerator > 0 && denominator < 0 || numerator < 0 && denominator > 0) {
            result.append("-")
        }

        // Calculate the whole number
        val num: Long = abs(numerator.toLong())
        val denom: Long = abs(denominator.toLong())
        result.append(num / denom)

        var remainder = num % denom
        if (remainder == 0L) {
            return result.toString()
        }

        result.append(".")

        // Calculate the fractional part, starting from the first digit after the decial
        remainder *= 10L
        val map = mutableMapOf<Long, Int>()
        while (!map.containsKey(remainder) && remainder != 0L) {
            map.put(remainder, result.length)
            val digit: Int = (remainder / denom).toInt()
            result.append(digit)
            remainder = (remainder % denom) * 10
        }

        if (remainder != 0L) {
            result.insert(map.getOrDefault(remainder, 0), "(")
            result.append(")")
        }

        return result.toString()
    }
}
```
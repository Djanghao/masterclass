# Arithmetic only, no list or characters

**Author:** odedniv
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/5845158/](https://leetcode.com/problems/monotone-increasing-digits/solutions/5845158/)

---

# Intuition
For each digit that doesn't apply to the rule, the next best value is reducing that digit by 1 and changing all the digits before it to 9, i.e. if in `aaaXYbbb; Y < X`, then the next best is `aaa(X-1)9999`.

# Approach
- To get all the digits up to and including D: `N % (10 ^ D)`
- To get all digits after D: `N / (10 ^ D)`
- To get digit D: `N / (10 ^ (D-1)) % D`

# Complexity
- Time complexity:
$$O(log(n))$$
Assuming n is the input value (everybody seems to be mistaken here? it depends on the amount of digits not the value).

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun monotoneIncreasingDigits(n: Int): Int {
        var result = n
        var digit = 1
        // Are there any digits after  this one? e.g. aaaXbbb -> aaa
        while (result / 10.0.pow(digit) > 0) {
            // Is this digit less than the next one? e.g. aaaYXbbb -> x < y
            if (result.digit(digit) < result.digit(digit + 1)) {
                // Reduce by all digits before + 1, e.g. aaaXbbb -> aaa(X-1)999
                result = (result - (result % 10.0.pow(digit)) - 1).toInt()
            }
            digit++
        }
        return result
    }

    /** Get digit [n], e.g. `aaaXbbb.digit(4) == X` */
    private fun Int.digit(n: Int): Int = ((this / 10.0.pow(n - 1)) % 10).toInt()
}
```
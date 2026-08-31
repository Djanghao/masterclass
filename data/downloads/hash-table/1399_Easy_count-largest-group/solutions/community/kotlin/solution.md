# Kotlin GroupingBy Solution

**Author:** Entyl
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/997710/](https://leetcode.com/problems/count-largest-group/solutions/997710/)

---

```
class Solution {
    fun countLargestGroup(n: Int) = n.sumOfDigitsToFreq().values.let { freqOfSumOfDigits ->
        val maxCount = freqOfSumOfDigits.max()

        freqOfSumOfDigits.count { it == maxCount }
    }
    
    fun Int.sumOfDigitsToFreq() = (1..this).groupingBy(::sumDigits).eachCount()
    
    fun sumDigits(int: Int) = int.toString().sumBy(Character::getNumericValue)
}
```
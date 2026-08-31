# Kotlin + comment

**Author:** garcol
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/5027188/](https://leetcode.com/problems/number-of-digit-one/solutions/5027188/)

---

# Intuition
```
[1]: count(1 -> 1000) = count(1000 -> 1000) + count(1 -> 999)
[2]: count(1 -> 1099) = count(1 -> 1000) + count(1001 -> 1099)
                              = count(1 -> 1000) + [size_1001_1099 + count(1 -> 99)]
[3]: count(2000 -> 5099) = count(2000 -> 2999) + count(3000 -> 3999) + count(4000 -> 4999) + count(5000 -> 5099)
                         = 3 * count(1 -> 999) + count(1 -> 99)
[4]: count(1 -> 4099) = count(1 -> 999) + count(1000 -> 1999) + count(2000 -> 5099)
                      = count(1 -> 999) + [size_1000_1999 + count(0 -> 999)] + 3 * count(1 -> 999) + count(1 -> 99)
[5]: count(1 -> 999) = count(1 -> 99) + count(100 -> 199) + count(200 -> 999)
                     = count(1 -> 99) + [size_100_199 + count(1 -> 99)] + [8 * count(1 -> 99)]
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countDigitOne(n: Int): Int {
        fun findMostSignificantNumber(number: Int): Pair<Int, Int> {
            var count = 1
            var leftMostNumber = number
            while (leftMostNumber >= 10) {
                leftMostNumber = leftMostNumber / 10
                count++
            }
            return Pair(leftMostNumber, count)
        }

        fun calcSize(from: Int, to: Int): Int {
            return to - from + 1
        }

        val memoi = HashMap<Int, Int>()
        /**
        [1]: count(1 -> 1000) = count(1000 -> 1000) + count(1 -> 999)
        [2]: count(1 -> 1099) = count(1 -> 1000) + count(1001 -> 1099)
                              = count(1 -> 1000) + [size_1001_1099 + count(1 -> 99)]
        [3]: count(2000 -> 5099) = count(2000 -> 2999) + count(3000 -> 3999) + count(4000 -> 4999) + count(5000 -> 5099)
                                 = 3 * count(1 -> 999) + count(1 -> 99)
        [4]: count(1 -> 4099) = count(1 -> 999) + count(1000 -> 1999) + count(2000 -> 5099)
                              = count(1 -> 999) + [size_1000_1999 + count(0 -> 999)] + 3 * count(1 -> 999) + count(1 -> 99)
        [5]: count(1 -> 999) = count(1 -> 99) + count(100 -> 199) + count(200 -> 999)
                             = count(1 -> 99) + [size_100_199 + count(1 -> 99)] + [8 * count(1 -> 99)]
        */
        fun count(number: Int): Int {
            if (number == 0) return 0
            if (number < 10) return 1
            if (memoi[number] != null) return memoi[number]!!
            val mostSignificantNumber = findMostSignificantNumber(number)
            val leftMostNumber = mostSignificantNumber.first
            val size = mostSignificantNumber.second
            val highestOneNumber = Math.pow(10.0, (size - 1).toDouble()).toInt()
            if (leftMostNumber == 1) {
                memoi[number] = count(highestOneNumber - 1) + calcSize(highestOneNumber, number) + count(number % highestOneNumber)
                return memoi[number]!!
            }
            // ex: number = 5049
            memoi[number] = count(highestOneNumber - 1) + // count(1 -> 999)
                (calcSize(highestOneNumber, highestOneNumber + highestOneNumber - 1) + count(highestOneNumber - 1)) + // count(1000 -> 1999)
                (leftMostNumber - 2) * count(highestOneNumber - 1) + // count(2000 -> 5049)
                count(number % highestOneNumber) // count(1 -> 49)
            return memoi[number]!!
        }
        return count(n)
    }
}
```
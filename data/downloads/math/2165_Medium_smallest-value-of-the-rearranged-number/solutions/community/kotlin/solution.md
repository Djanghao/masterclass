# Kotlin O(n) solution using integer array

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5147604/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5147604/)

---

![Screenshot 2024-05-12 174525.png](./images/0.png)


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(10) or O(1)

# Code
```
class Solution {
    fun smallestNumber(num: Long): Long {
        if (num in 0..20 || num in -20..-1) return num

        val frequencies = IntArray(10)
        var number = abs(num)
        while (number > 0) {
            frequencies[(number % 10).toInt()]++
            number /= 10
        }

        var smallestNum = 0L
        if (num < 0) {
            var i = frequencies.size - 1
            while (i >= 0) {
                while (i >= 0 && frequencies[i] == 0) i--
                if (i == -1) break
                smallestNum = smallestNum * 10 + i
                frequencies[i]--
            }
            smallestNum = -smallestNum

        } else {
            var i = 1
            while (i < frequencies.size && frequencies[i] == 0) i++
            smallestNum = smallestNum * 10 + i
            frequencies[i]--

            while (frequencies[0] != 0) {
                smallestNum = smallestNum * 10
                frequencies[0]--
            }

            while (i < frequencies.size) {
                while (i < frequencies.size && frequencies[i] == 0) i++
                if (i == frequencies.size) break
                smallestNum = smallestNum * 10 + i
                frequencies[i]--
            }
        }

        return smallestNum
    }
}
```
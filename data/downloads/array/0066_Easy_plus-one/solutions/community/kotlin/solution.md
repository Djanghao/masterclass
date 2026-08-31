# Kotlin

**Author:** GeorgCantor
**Votes:** 19
**Link:** [https://leetcode.com/problems/plus-one/solutions/1022733/](https://leetcode.com/problems/plus-one/solutions/1022733/)

---

```
fun plusOne(digits: IntArray): IntArray {
        for (i in digits.size - 1 downTo 0) {
            digits[i] += 1
            if (digits[i] <= 9) return digits
            digits[i] = 0
        }
        val arr = IntArray(digits.size + 1)
        arr[0] = 1

        return arr
    }
```
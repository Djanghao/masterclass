# Kotlin Solution Beats 100% (Time and Space)

**Author:** cho_yiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/4943382/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/4943382/)

---

# Code
```
class Solution {
    fun getMinSwaps(num: String, k: Int): Int {
        val digits = num.toCharArray()
        for (i in 1..k) {
            if (!getNext(digits)) {
                break;
            }
        }
        return compare(num, digits)
    }

    private fun compare(num: String, digits: CharArray): Int {
        var count = 0
        val numArray = num.toCharArray()
        for (i in 0..<num.length) {
            if (numArray[i] == digits[i]) {
                continue
            }
            var j = i + 1
            while (numArray[j] != digits[i]) {
                j++
            }
            count += j - i
            val temp = numArray[j]
            for (k in j downTo i + 1) {
                numArray[k] = numArray[k - 1]
            }
            numArray[i] = temp
        }
        return count
    }

    private fun getNext(digits: CharArray): Boolean {
        var head = digits.size - 2
        while (head >= 0 && digits[head] >= digits[head + 1]) {
            head--
        }
        if (head < 0) {
            return false
        }
        var nextHead = digits.size - 1
        while (digits[nextHead] <= digits[head]) {
            nextHead--
        }
        swapDigits(digits, head, nextHead)
        var left = head + 1
        var right = digits.size - 1
        while (left < right) {
            swapDigits(digits, left, right)
            left++
            right--
        }
        return true
    }

    private fun swapDigits(digits: CharArray, index1: Int, index2: Int) {
        var temp = digits[index1]
        digits[index1] = digits[index2]
        digits[index2] = temp
    }
}
```
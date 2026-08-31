# 100% Kotlin

**Author:** fengqi2
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/3706772/](https://leetcode.com/problems/maximum-frequency-stack/solutions/3706772/)

---


# Code
```
class FreqStack() {
    private val freqs = hashMapOf<Int, Int>()
    private val dat = hashMapOf<Int, Stack<Int>>()
    private var maxFreq = 0

    fun push(`val`: Int) {
        var freq = freqs.getOrDefault(`val`, 0) + 1
        if (freq > maxFreq) maxFreq = freq
        freqs[`val`] = freq
        dat.getOrPut(freq) { Stack<Int>() }.push(`val`)
    }

    fun pop(): Int {
        if (dat.isEmpty()) return -1

        val n = dat.getValue(maxFreq).pop()

        if (dat.getValue(maxFreq).isEmpty()) { dat.remove(maxFreq); maxFreq -- }

        if (freqs[n] == 1) freqs.remove(n)
        else freqs[n] = freqs[n]!! - 1

        return n
    } 

}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = FreqStack()
 * obj.push(`val`)
 * var param_2 = obj.pop()
 */
```
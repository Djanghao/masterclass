# Modular Kotlin with comments

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/1168913/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/1168913/)

---

```
	// min, max, mean and mode calculation is straightforward
    fun sampleStats(count: IntArray): DoubleArray {
        var min = 255.0
        var max = 0.0
        var sum = 0.0
        var totalFreq = 0
        var maxFreq = 0
        var mode = 0.0
        
        for (i in 0..255) {
            if (count[i] == 0) continue
            val times = count[i]
            val num = i.toDouble()
            min = minOf(min, num)
            max = maxOf(max, num)
            sum += (times * num)
            totalFreq += times
            if (times > maxFreq) {
                maxFreq = times
                mode = num
            }
        }
        val mean = if (totalFreq == 0) 0.0 else sum / totalFreq
        return doubleArrayOf(min, max, mean, median(count, totalFreq), mode)
    }
    
    private fun median(count: IntArray, totalFreq: Int): Double {
        var median = 0.0
        val mid = (totalFreq / 2) + 1 // is the middle element for odd freq
        var countSoFar = 0 // (mid) & (mid + 1) are the middle elements for even freq
        var prevEle = 0.0
        for (i in 0..255) {
            if (count[i] == 0) continue
            val times = count[i]
            val num = i.toDouble()
            countSoFar += times // finding the middle element
            if (countSoFar >= mid) { // we have found the middle elements
                if (totalFreq % 2 != 0) { // odd freq
                    median = num
                } else {
                    if (countSoFar - times >= mid - 1) { // current number & prev number forms median
                        median = (prevEle + num) / 2
                    } else {
                        median = (num + num) / 2 // only current number forms median
                    }
                }
                break
            }
            prevEle = num
        }
        return median
    }
```
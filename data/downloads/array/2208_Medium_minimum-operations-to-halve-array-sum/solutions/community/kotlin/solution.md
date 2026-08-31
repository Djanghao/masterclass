# Beats 100% of kotlin

**Author:** IAmShaarawy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/5118203/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/5118203/)

---



# Code
```
class Solution {
    fun halveArray(nums: IntArray): Int {
        val heap = PriorityQueue<Double>(compareBy{ -it })
        var totalSum = 0.0
        for(num in nums){
            heap.add(num.toDouble())
            totalSum += num
        }
        var tempSum = totalSum / 2.0
        var stepsCount = 0
        while(tempSum > 0){
            val maxHalf = heap.remove() / 2.0
            tempSum -= maxHalf
            heap.add(maxHalf)
            stepsCount += 1
        }
        return stepsCount
    }
}
```
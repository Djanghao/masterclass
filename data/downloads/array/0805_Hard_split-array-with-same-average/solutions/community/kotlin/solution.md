# Kotlin ||  T/M: 100/100

**Author:** habibulka
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/2840173/](https://leetcode.com/problems/split-array-with-same-average/solutions/2840173/)

---

```
class Solution {
    fun splitArraySameAverage(nums: IntArray): Boolean {
        val possibleSums: Array<MutableSet<Int>> = Array(nums.size / 2 + 1) { LinkedHashSet<Int>() }
        possibleSums[0].add(0)
        for (num in nums) {
            for (size in possibleSums.size - 2 downTo 0) {
                for (possibleSum in possibleSums[size]) {
                    possibleSums[size + 1].add(possibleSum + num)
                }
            }
        }
        val sum = nums.sum()
        for (smallSize in 1..nums.size / 2) {
            val temp = sum * smallSize
            if (temp % nums.size == 0 && possibleSums[smallSize].contains(temp / nums.size)) {
                return true
            }
        }
        return false
    }
}
```
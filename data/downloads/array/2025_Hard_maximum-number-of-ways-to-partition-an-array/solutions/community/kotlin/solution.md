# Kotlin - Using map of occurrences

**Author:** arthurbaguiar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/5531297/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/5531297/)

---

# Intuition
Got it with kotlin, using long, O(n)

# Code
```
class Solution {
    fun waysToPartition(nums: IntArray, k: Int): Int {
        val totalSum = nums.map { it.toLong() }.sum()
        val result = Array<Int>(nums.size) {0}
        val mapOfOcurrences = mutableMapOf<Long, MutableList<Int>>()

        for (i in nums.indices) {
            val num = nums[i].toLong()
            if (mapOfOcurrences.containsKey(num)){
                mapOfOcurrences[num]?.add(i)
            } else {
                mapOfOcurrences[num] = mutableListOf(i)
            }
        }

        var clean = 0

        var sum:Long = 0
        var i = 0
        while (i != nums.size - 1) {
            sum += nums[i]
            val sum2 = totalSum - sum
            if (sum == sum2) {
                clean++
            }
            val x:Long = (2*sum) + k - totalSum
            val z:Long = totalSum + k -(2*sum)

            if (mapOfOcurrences.containsKey(x)) {
                mapOfOcurrences[x]?.forEach {
                    if (it <= i)
                    result[it] = result[it] + 1
                }
            }

            if(mapOfOcurrences.containsKey(z)) {
                mapOfOcurrences[z]?.forEach {
                    if (it > i)
                        result[it] = result[it] + 1
                }
            }
            i++
        }

        for (j in nums.indices) {
            clean = Math.max(clean, result[j])
        }

        return clean
    }
}
```
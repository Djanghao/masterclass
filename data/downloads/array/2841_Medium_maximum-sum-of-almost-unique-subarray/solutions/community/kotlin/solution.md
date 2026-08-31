# Beats 100%

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4430051/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4430051/)

---

# Code
```
class Solution {
    fun maxSum(nums: List<Int>, m: Int, windowSize: Int): Long {

        val queue = ArrayDeque<Int>()
        val distinct = mutableMapOf<Int, Int>()

        repeat(windowSize) {
            queue.addLast(nums[it])
            val count = distinct.getOrDefault(nums[it], 0) + 1
            distinct[nums[it]] = count
        }
        var max: Long = 0
        var currentSum: Long = queue.sumOf { it.toLong() }

        for (i in 0..nums.size) {
            if (queue.size < windowSize) break

            if (distinct.keys.size >= m) {
                max = max(max, currentSum)
            }
            val first = queue.removeFirst()
            currentSum -= first
            val count = distinct.getOrDefault(first, 0) - 1
            if(count == 0) {
                distinct.remove(first)
            }else {
                distinct[first] = count
            }
            nums.getOrNull(i + windowSize)?.let {
                queue.addLast(it)
                currentSum += it.toLong()
                val count = distinct.getOrDefault(it, 0) + 1
                if(count == 0) {
                    distinct.remove(it)
                }else {
                    distinct[it] = count
                }
            }
        }
        return max
    }
}
```
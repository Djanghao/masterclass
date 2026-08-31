# [Kotlin] 2 PriorityQueue, one min and one max (100%)

**Author:** veeyikpong
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3224075/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3224075/)

---

# Approach
1. Create 2 PriorityQueue, one min and one max
2. Loop until max value is odd, means we can't divide / perform any operations further
3. The minDeviation will keep updating with `max-min`

# Code
```
class Solution {
    fun minimumDeviation(nums: IntArray): Int {
        val maxQueue = PriorityQueue<Int>(Collections.reverseOrder())
        val minQueue = PriorityQueue<Int>()
        nums.forEach {
            maxQueue.offer(if (it % 2 != 0) it * 2 else it)
            minQueue.offer(if (it % 2 != 0) it * 2 else it)
        }

        var max = maxQueue.poll()
        var minDeviation = max - minQueue.peek()
        while (max % 2 == 0) {
            max /= 2
            maxQueue.offer(max)
            minQueue.offer(max)
            max = maxQueue.poll()
            minDeviation = Math.min(minDeviation, max - minQueue.peek())
        }

        return minDeviation
    }
}
```
![f6db4696-26ce-4e27-b643-307f2490f3c9_1677214295.1615763.jpeg](./images/0.jpeg)


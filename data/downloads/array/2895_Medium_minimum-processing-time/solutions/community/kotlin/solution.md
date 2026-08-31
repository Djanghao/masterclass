# beat %100 in Kotlin

**Author:** user7112sQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/5274853/](https://leetcode.com/problems/minimum-processing-time/solutions/5274853/)

---

# Intuition
make a windows size step then go through the tasks

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
This takes O(k), where k is the size of the window 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minProcessingTime(processorTime: List<Int>, tasks: List<Int>): Int {
        val processorTimeSorted = processorTime.sorted()
        val tasksSorted = tasks.sortedDescending()

        var maxProcessingTime = 0

        for (i in processorTimeSorted.indices) {
            val processor = processorTimeSorted[i]
            val startWindow = i * 4
            val endWindow = (i + 1) * 4
            val taskWindow = tasksSorted.subList(startWindow, endWindow)
            
            var maxTaskTime = 0
            for (taskTime in taskWindow) {
                maxTaskTime = maxOf(maxTaskTime, taskTime)
            }
            val processingTime = maxTaskTime + processor

            maxProcessingTime = maxOf(maxProcessingTime, processingTime)
        }

        return maxProcessingTime
    }
}

```
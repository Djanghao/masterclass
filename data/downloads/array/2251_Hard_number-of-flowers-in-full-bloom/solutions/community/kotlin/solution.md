# Kotlin binary search

**Author:** skulagin
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155874/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155874/)

---

# Approach
- Create and sort arrays for start and end of blossom time
- Loop through the people array
- Use binary search to count already started blossoms and already ended blossoms for each person. Diff is the count of flowers for this moment.

# Complexity
- Time complexity: $$O((N+M)logN)$$ 
N - number of flowers
M - number of people


- Space complexity: $$O(N)$$ 

# Code
```
class Solution {
    fun fullBloomFlowers(flowers: Array<IntArray>, people: IntArray): IntArray {
        val result = mutableListOf<Int>()
        val startTimeSorted = mutableListOf<Int>()
        val endTimeSorted = mutableListOf<Int>()
        flowers.forEach { blossomRange ->
            startTimeSorted.add(blossomRange.first())
            endTimeSorted.add(blossomRange[1])
        }
        startTimeSorted.sort()
        endTimeSorted.sort()

        people.forEach { timeOfCome ->
            val startedCount = leftSideCount(startTimeSorted, true, timeOfCome)
            val endedCount = leftSideCount(endTimeSorted, false, timeOfCome)
            result.add(startedCount - endedCount)
        }
        return result.toIntArray()
    }

    private fun leftSideCount(array: List<Int>, upperBound: Boolean, target: Int): Int {
        var left = 0
        var right = array.lastIndex
        while (left <= right) {
            val middle = left + (right - left) / 2
            if (upperBound) {
                if (target >= array[middle]) left = middle + 1
                else right = middle - 1
            } else {
                if (target > array[middle]) left = middle + 1
                else right = middle - 1
            }
        }
        return left
    }
}
```
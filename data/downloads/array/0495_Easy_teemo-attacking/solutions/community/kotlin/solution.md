# Kotlin. Beats 100% of users

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/4288686/](https://leetcode.com/problems/teemo-attacking/solutions/4288686/)

---

![image.png](./images/0.png)

# Intuition
We simply calculate the difference between neighboring elements. If it is less than duration, then only this difference needs to be added to the result.
The last element increases the result by "duration".

# Approach
To speed up the algorithm as much as possible, we need to group the variables in such a way that the desired value gets into the CPU registers as often as possible.
Therefore, it is more correct to update the value of the last element through a diff increment than to write the current element to it.

Bad way:
```
val ti = timeSeries[i++]
val diff = ti - last
last = ti
```
Good way:
```
val diff = timeSeries[i++] - last
last += diff
```

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)

# Code
```
class Solution {
    fun findPoisonedDuration(timeSeries: IntArray, duration: Int): Int {
        last = timeSeries[0]
        result = 0
        var i = 1
        while (i != timeSeries.size) {
            val diff = timeSeries[i++] - last
            last += diff
            result += when {
                diff < duration -> diff
                else -> duration
            }
        }
        result += duration
        return result
    }

    companion object {
        var last = 0
        var result = 0
    }
}
```
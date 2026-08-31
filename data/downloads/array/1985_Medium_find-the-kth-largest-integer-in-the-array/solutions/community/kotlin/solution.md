# [Kotlin] Simple O(nlogn) and O(n) Solutions

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1432183/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1432183/)

---

O(nlogn) Solution:
```
class Solution {
    fun kthLargestNumber(nums: Array<String>, k: Int): String {
        nums.sortWith( compareBy( { it.length }, { it } ))
        return nums[nums.lastIndex - k + 1]
    }
}
```

O(n) Solution:
```
class Solution {
    fun kthLargestNumber(nums: Array<String>, k: Int): String {
        var startRank = 0
        var remainNumbers = nums.toList()

        while (remainNumbers.isNotEmpty()) {
            val currentPick = remainNumbers.random()
            val greater = mutableListOf<String>()
            val equal = mutableListOf<String>()
            val less = mutableListOf<String>()
            remainNumbers.forEach {
                when {
                    it.length < currentPick.length -> less.add(it)
                    it.length > currentPick.length -> greater.add(it)
                    it < currentPick -> less.add(it)
                    it > currentPick -> greater.add(it)
                    else -> equal.add(it)
                }
            }
            val currentRank = (startRank + greater.size + 1..startRank + greater.size + equal.size)
            when {
                k in currentRank -> return currentPick
                k < currentRank.first -> {
                    remainNumbers = greater
                }
                k > currentRank.last -> {
                    remainNumbers = less
                    startRank += greater.size + equal.size
                }
            }
        }

        throw IllegalArgumentException()
    }
}
```

O(n) + In Place Solution:
```
import kotlin.random.Random

class Solution {
    fun kthLargestNumber(nums: Array<String>, k: Int): String {
        var leftIndex = 0
        var rightIndex = nums.lastIndex

        fun String.isLessThan(other: String) = this.length < other.length || this.length == other.length && this < other
        fun String.isGreaterThan(other: String) = this.length > other.length || this.length == other.length && this > other

        while (leftIndex < rightIndex) {
            val currentPickString = nums[leftIndex + Random.nextInt(rightIndex - leftIndex + 1)]
            var nextGreaterIndex = leftIndex
            var nextLessIndex = rightIndex
            var currentCheckIndex = nextGreaterIndex
            while (currentCheckIndex <= nextLessIndex) {
                val currentCheckString = nums[currentCheckIndex]
                when {
                    currentCheckString == currentPickString -> {
                        ++currentCheckIndex
                    }
                    currentCheckString.isGreaterThan(currentPickString) -> {
                        nums[currentCheckIndex] = nums[nextGreaterIndex].also { nums[nextGreaterIndex] = nums[currentCheckIndex] }
                        ++nextGreaterIndex
                        ++currentCheckIndex
                    }
                    currentCheckString.isLessThan(currentPickString) -> {
                        nums[currentCheckIndex] = nums[nextLessIndex].also { nums[nextLessIndex] = nums[currentCheckIndex] }
                        --nextLessIndex
                    }
                }
            }
            val currentRank = nextGreaterIndex + 1..nextLessIndex + 1
            when {
                k in currentRank -> return currentPickString
                k < currentRank.first -> rightIndex = nextGreaterIndex - 1
                k > currentRank.last -> leftIndex = nextLessIndex + 1
            }
        }

        return nums[leftIndex]
    }
}
```
# [Kotlin] 1100 ms. split the array into two halves, brute force + TreeSet

**Author:** atrubin
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1515103/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1515103/)

---

There is an obvious solution with O (2 ^ n) time complexity, but it gets TLE.

**Optimize solution**
1) We can count all possible sums of elements from the second half of the original array. Remember sets of sums depending on the number of elements. We are using brute force, so the complexity will be O(2 ^ (n / 2))
2) Since it does not matter which elements in the final answer fall into the first half, and which ones go into the second. We can say that the zero-indexed element will be in the second half. This is why we can start at the first index and halve the number of options in the `calcMinimumDifference` function.
3) We can count all possible sums of elements from the first half of the original array. After that, we are looking for the optimal remainder of the sum from the second half of the original array. We look for the remainder of the sum in the second part in a TreeSet with O (log n). For this step we use O(2^(n/2 -1) * log(2^(n/2))) or O(2^(n/2) * n)

```
class Solution {

    private var answer = Int.MAX_VALUE

    private lateinit var array: IntArray

    private var sum = 0

    private var halfSize = 0
    private var size = 0

    private var firstHalfSum = 0
    private var firstHalfCount = 0

    private var firstHalfArray = Array(16, { TreeSet<Int>() })

    private fun calcMinimumDifference(index: Int) {
        if (index == halfSize) {
            firstHalfArray[halfSize - firstHalfCount].floor(sum / 2 - firstHalfSum)?.let { item ->
                val diff = sum - firstHalfSum - firstHalfSum - item - item
                if (answer > Math.abs(diff)) {
                    answer = Math.abs(diff)
                }
            }

            firstHalfArray[halfSize - firstHalfCount].ceiling(sum / 2 - firstHalfSum)?.let { item ->
                val diff = sum - firstHalfSum - firstHalfSum - item - item
                if (answer > Math.abs(diff)) {
                    answer = Math.abs(diff)
                }
            }
        } else {
            firstHalfCount++
            firstHalfSum += array[index]
            calcMinimumDifference(index + 1)
            firstHalfSum -= array[index]
            firstHalfCount--

            calcMinimumDifference(index + 1)
        }
    }

    private fun calcAllSums(index: Int) {
        if (index == size) {
            firstHalfArray[firstHalfCount].add(firstHalfSum)
        } else {
            firstHalfCount++
            firstHalfSum += array[index]
            calcAllSums(index + 1)
            firstHalfSum -= array[index]
            firstHalfCount--

            calcAllSums(index + 1)
        }
    }

    fun minimumDifference(arr: IntArray): Int {
        sum = arr.sum()
        array = arr

        size = arr.size
        halfSize = arr.size / 2

        calcAllSums(halfSize)

        calcMinimumDifference(1)

        return answer
    }
}
```


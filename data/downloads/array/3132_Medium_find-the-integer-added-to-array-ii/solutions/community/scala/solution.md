# Simple Scala lazy bruteforce

**Author:** taintech
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5105646/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5105646/)

---

This solution, I quickly came up during the leetcode contest it should be optimized.

# Intuition
Bruteforce all elements that can be removed.

# Approach
1. Generate all combinations of indices of two elements that can be removed.
2. Generate new nums1 in to new array into list buffer.
3. Sort the new array `ar`
4. Find difference taking first element of the array.
5. Compare it with sorted nums2, if they match, consider diff for minimum difference.

# Complexity
- Time complexity:
O(n3log(n))

- Space complexity:
O(n2)

# Code
```
import scala.collection.mutable
import scala.math.min
object Solution {
    def minimumAddedInteger(nums1: Array[Int], nums2: Array[Int]): Int = {
        val n = nums1.length
        val combinations = for i <- 0 until n
                               j <- i + 1 until n
                            yield List(i, j)
        val listBuffer = mutable.ListBuffer.empty[Int]
        var minDiff = Int.MaxValue
        val nums2Sorted = nums2.sorted
        for (list <- combinations) {
            for (i <- nums1.indices) {
                if (!list.contains(i)) {
                    listBuffer.append(nums1(i))
                }
            }
            val ar = listBuffer.toArray
            val arSorted = ar.sorted
            val diff = nums2Sorted(0) - arSorted(0)
            if (arSorted.map(_+diff).toList==nums2Sorted.toList) {
                minDiff = min(minDiff, diff)
            }
            listBuffer.clear()
        }
        minDiff
    }
}

```
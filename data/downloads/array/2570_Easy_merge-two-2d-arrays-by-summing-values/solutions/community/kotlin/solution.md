# Easy to understand Two Pointers approach.

**Author:** bhaskarudit8
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/5718769/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/5718769/)

---

# Intuition
The code implements a custom merge algorithm for two-dimensional arrays (nums1 and nums2) to create a merged sorted array. It uses a two-pointer technique, comparing elements from both input arrays and building the result incrementally, maintaining the overall sorted order.

# Approach
Key aspects:

1. Iterates through both input arrays simultaneously
2. Compares current elements from each array
3. Adds smaller elements to the result
4. Moves pointers based on comparison results
5. Handles edge cases (empty arrays, mismatched sizes)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ 

# Code
```kotlin []
class Solution {

    fun mergeArrays(nums1: Array<IntArray>, nums2: Array<IntArray>): Array<IntArray> {
        val map = mutableListOf<IntArray>()

        val size1 = nums1.size
        val size2 = nums2.size
        val iteratorInt = size1 + size2
        var n = 1
        var key1It = 0
        var key2It = 0
        while (n <= iteratorInt) {
            var keyA = 0
            var keyB = -1
            if (key1It <= size1 - 1) keyA = nums1[key1It][0]
            if (key2It <= size2 - 1) keyB = nums2[key2It][0]
            if (keyA == keyB) {
                map.add(intArrayOf(keyA, nums1[key1It++][1] + nums2[key2It++][1]))
                n+=2
            } else {
                n++
                if (keyA < keyB) {
                    if (keyA != 0)
                        map.add(intArrayOf(keyA, nums1[key1It++][1]))
                    else map.add(intArrayOf(keyB, nums2[key2It++][1]))
                } else {
                    if (keyB != -1)
                        map.add(intArrayOf(keyB, nums2[key2It++][1]))
                    else map.add(intArrayOf(keyA, nums1[key1It++][1]))

                }
            }
        }
        return map.toTypedArray()
    }
}
```
# O(n) Kotlin solution using a Monothonic Decreasing Stack

**Author:** naXa777
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/4456257/](https://leetcode.com/problems/next-greater-element-i/solutions/4456257/)

---

# Approach

Use a map to store numbers and their corresponding next greater numbers. Use a stack as a temporary storage of numbers for which the next greater number is not known yet.

A [monotonic stack](https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems) is a stack whose elements are monotonically increasing or descreasing.

# Complexity

- Time complexity: $$O(n)$$. One pass over `nums2` array + one pass over `nums1` array.
- Space complexity: $$O(n)$$.

# Code
```
class Solution {
    fun nextGreaterElement(nums1: IntArray, nums2: IntArray): IntArray {
        val numToNextGreater = mutableMapOf<Int, Int>()
        // monothonic decreasing stack
        val stack = ArrayDeque<Int>()

        var i = 0
        while (i < nums2.size) {
            val num = nums2[i]
            if (stack.isNotEmpty() && stack.last() < num) {
                val top = stack.removeLast()
                numToNextGreater[top] = num
            } else {
                ++i
                stack.addLast(num)
            }
        }

        val ans = nums1.map { num ->
            numToNextGreater.getOrDefault(num, -1)
        }.toIntArray()

        return ans
    }
}
```
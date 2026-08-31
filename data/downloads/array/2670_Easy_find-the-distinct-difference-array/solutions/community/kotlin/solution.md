# Kotlin Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3870681/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3870681/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun distinctDifferenceArray(nums: IntArray): IntArray {
        var setLeft = mutableSetOf<Int>()
        var setRight = mutableSetOf<Int>()
        var arrLeft = IntArray(nums.size){0}
        var arrRight = IntArray(nums.size){0}
        var countLeft = 1
        var countRight = 0
        setLeft.add(nums[0])
        arrLeft[0] = countLeft

        for (i in 1 until nums.size) {
            if (!setLeft.contains(nums[i])) {
                setLeft.add(nums[i])
                countLeft++
            }
            arrLeft[i] = countLeft

            if (!setRight.contains(nums[nums.size - i])) {
                setRight.add(nums[nums.size - i])
                countRight++
            }
            arrRight[nums.size - i - 1] = countRight
        }

        for (i in 0 until nums.size) {
            nums[i] = arrLeft[i] - arrRight[i]
        }

        return nums
    }
}
```
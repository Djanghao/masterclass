# Kotlin O(nlogn) using sorting

**Author:** aliam
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3467230/](https://leetcode.com/problems/make-array-empty/solutions/3467230/)

---

# Approach
Create new array sortNums where `sortnums[i][0]` is each element from `nums` and `sortnums[i][1]` is its index in the original `nums`. We then sort `sortNums` by element.

We initialize `res` to `nums.size`, because it will take at least `nums.size` operations to delete all elements, if `nums` would have been sorted in order.

Then traverse from 1 to last index in `sortNums`:

If the index (corresponding to the original sorting in `nums`) of previous is higher than current (e.g sortNums[i - 1][1] > sortNums[i][1]), then it will take `n.size - i` operations for that num to get deleted, so we add those operations to `res`.


# Code
```
class Solution {
    fun countOperationsToEmptyArray(nums: IntArray): Long {
        val sortNums = Array(nums.size){IntArray(2)}

        for (i in nums.indices) {
            sortNums[i][0] = nums[i]
            sortNums[i][1] = i
        }
        sortNums.sortBy{ it[0] }

        var res = 0L + nums.size
        for (i in 1..sortNums.lastIndex) {
            if (sortNums[i - 1][1] > sortNums[i][1])
                res += nums.size - i
        }
        
        return res
    }
}
```
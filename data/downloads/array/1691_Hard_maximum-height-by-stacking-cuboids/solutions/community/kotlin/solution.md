# Beats 100% : Longest Increasing Subsequence Solution

**Author:** SureshChandak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/5378409/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/5378409/)

---

# Complexity
- Time complexity: O(n (log n))
- Space complexity: O(n)

# Code
```
class Solution {
    fun maxHeight(cuboids: Array<IntArray>): Int {
        
        // step1: sort all dimenstions for every cuboid
        for (a in cuboids) {
            Arrays.sort(a)
        }

        // step2: sort all cuboids basis on w or l
        Arrays.sort(cuboids) { a, b ->
            if (a[0] != b[0]) a[0] - b[0]
            else if (a[1] != b[1]) a[1] - b[1]
            else a[2] - b[2]
        }

        // step3: use LIS solution
        return lisSolution(cuboids)
    }

    private fun lisSolution(nums: Array<IntArray>): Int {

        val n = nums.size

        val currRow = IntArray(n + 1)
        var nextRow = IntArray(n + 1)

        for (curr in n - 1 downTo 0) {
            for (prev in curr - 1 downTo -1) {

                var include = 0
                if (prev == -1 || check(nums[curr], nums[prev])) {
                    include = nums[curr][2] + nextRow[curr + 1]
                }

                val exclude = 0 + nextRow[prev + 1]

                currRow[prev + 1] = Math.max(include, exclude)

            }

            nextRow = currRow.copyOf(currRow.size)
        }

        return nextRow[0]
    }

    private fun check(base: IntArray, newBox: IntArray): Boolean {
        if (newBox[0] <= base[0] && newBox[1] <= base[1] && newBox[2] <= base[2]) {
            return true
        }
        return false
    }
}
```
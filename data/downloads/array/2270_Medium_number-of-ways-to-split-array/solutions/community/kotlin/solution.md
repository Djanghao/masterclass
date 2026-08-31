# Kotlin solution with explanation, O(n) time complexity, O(1) space complexity

**Author:** vongochieu115
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/3243110/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/3243110/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Optimized from the classic prefix sum technique, which are:
- 1. We only need the total sum of the array instead of building the whole prefix array since we can calculate the leftSection as we went through the loop
- 2. The rightSection will be just whatever the total - leftSection.
- 3. If the leftSection is bigger than the rightSection, then we add to the result.
- 4. All of the total, leftSection, and rightSection variables need to declare Long to pass through all of the test cases.
# Complexity
- Time complexity: O(n) since it takes only single for loop through the array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) since we just declared a few constant variable
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun waysToSplitArray(nums: IntArray): Int {
        var total : Long = 0
        var result = 0
        for (i in nums.indices) {
            total += nums[i]
        }

        var leftSection : Long = 0
        for (i in 0 until nums.size - 1) {
            leftSection += nums[i]
            val rightSection : Long = total - leftSection
            if (leftSection >= rightSection) {
                result++
            }
        }

        return result
    }
}
```
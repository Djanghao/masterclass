# Beats 100%

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/4513589/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/4513589/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun totalSteps(nums: IntArray): Int {
        val stack = LinkedList<Pair<Int, Int>>()
        var max = 0
        for (num in nums) {
            var score = 0
            while (stack.isNotEmpty() && stack.last().first <= num) {
                score = max(score, stack.removeLast().second)
            }
            stack.add(Pair(num, if (stack.isEmpty()) 0 else score + 1))
            max = max(max, stack.last().second)
        }
        return max
    }
}
```
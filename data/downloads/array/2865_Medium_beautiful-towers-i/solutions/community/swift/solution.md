# Swift Solution | Beats 100% | Time Complexity: O (n^2) | Space Complexity: O(1)

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4205594/](https://leetcode.com/problems/beautiful-towers-i/solutions/4205594/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximumSumOfHeights(_ maxHeights: [Int]) -> Int {
        var heightLength = maxHeights.count
        var maxSumPossible = 0

        for targetIndex in 0..<heightLength {
            var sum = maxHeights[targetIndex]
            var prevHeight = maxHeights[targetIndex]

            for index in (targetIndex + 1)..<heightLength {
                var height = min(prevHeight,maxHeights[index])
                prevHeight = height
                sum = sum + height
            }

            var index = targetIndex - 1
            prevHeight = maxHeights[targetIndex]
            while index >= 0 {
                var height = min(prevHeight,maxHeights[index])
                prevHeight = height
                sum = sum + height
                index = index - 1
            }
            maxSumPossible = max(maxSumPossible,sum)
        }

        return maxSumPossible
    }
}
```
# Swift Solution Beats 100%

**Author:** ahmdmhasn
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/6022477/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/6022477/)

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
```swift []
class Solution {
    func maxScoreIndices(_ nums: [Int]) -> [Int] {
        // Early exit if the list is empty
        if nums.isEmpty { 
            return []
        }

        // Pointer for the current index
        var numbersLeft: [Int] = []
        var numbersRight = nums

        // Last known zeros and ones count
        var leftZerosCount = 0 
        var rightOnesCount = numbersRight.filter { $0 == 1 }.count // Ones count

        // Keep the last known maximum count
        var maxScore = leftZerosCount + rightOnesCount
        var maxScoreIndices: [Int] = [0]

        for index in nums.indices {
            // Remove first item
            let next = nums[index]

            switch next {
            case 0:
                leftZerosCount += 1
            case 1:
                rightOnesCount -= 1
            default:
                print("Unexpected value received")
            }

            let score = leftZerosCount + rightOnesCount
            if score >= maxScore {
                maxScoreIndices = score == maxScore
                ? maxScoreIndices + [index + 1]
                : [index + 1]

                maxScore = score
            }
        }

        return maxScoreIndices
    }
}
```
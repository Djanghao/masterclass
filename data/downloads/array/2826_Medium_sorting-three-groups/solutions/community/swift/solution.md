# Swift Solution | Simple Recursion

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/4292011/](https://leetcode.com/problems/sorting-three-groups/solutions/4292011/)

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
    func miniOperation(_ nums: [Int], _ index: Int, _ twoNeeded: Int, _ ThreeNeeded: Int) -> Int {
        var numsLength = nums.count

        if index == numsLength {
            return 0
        }
        
        if twoNeeded == 0 {
            var count = 0
            for iterator in index..<numsLength {
                if nums[iterator] != 3 {
                    count = count + 1
                }
            }

            return count
        }

        var cost = Int.max
        cost = min(cost,miniOperation(nums,index,0,1))

        var notEqualToTwo = 0
        for iterator in index..<numsLength {
            if nums[iterator] != 2 {
                notEqualToTwo = notEqualToTwo + 1
            }

            cost = min(cost,notEqualToTwo + miniOperation(nums,iterator + 1,0,1))
        }

        return cost
    }

    func minimumOperations(_ nums: [Int]) -> Int {
        var numsLength = nums.count
        var cost = Int.max
        var notOne = 0
        cost = min(cost,miniOperation(nums,0,1,1))
        for iterator in 0..<numsLength {
            if nums[iterator] != 1 {
                notOne = notOne + 1
            }

            cost = min(cost,notOne + miniOperation(nums,iterator + 1,1,1))
        }

        return cost
    }
}
```
# Swift easy understand answer in O(n) time

**Author:** user0031y
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/3841751/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/3841751/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func pivotArray(_ nums: [Int], _ pivot: Int) -> [Int] {
        var leftArray = [Int]()
        var midArray = [Int]()
        var rightArray = [Int]()

        for i in 0..<nums.count {
            if nums[i] == pivot {
                midArray.append(pivot)
                continue
            }

            if nums[i] < pivot {
                leftArray.append(nums[i])
                continue
            }

            if nums[i] > pivot {
                rightArray.append(nums[i])
                continue
            }
        }

        return leftArray + midArray + rightArray
    }
}
```
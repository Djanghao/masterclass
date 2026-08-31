# Swift Solution Short (Time: O(n), Space: O(1))

**Author:** kripenometr
**Votes:** 2
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3551589/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3551589/)

---


# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {
    func leftRightDifference(_ nums: [Int]) -> [Int] {
        var leftSum = 0
        var rightSum = nums.reduce(into: 0) { $0 += $1 }

        return nums.reduce(into: [Int]()) { 
            rightSum -= $1
            $0 += [abs(leftSum - rightSum)]
            leftSum += $1
        }
    }
}
```
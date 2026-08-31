# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/1200079/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/1200079/)

---

Swift solution
At first, prepare three arrays:
1. for i in 0..<c : leftBounds[i] = min index where nums[i] is min value in nums[left...i]
2. for i in 0..<c : rightBounds[i] = max index where nums[i] is min value in nums[i...right]
3. for i in 0...c : preSum[i] = sum of nums[0..<i]

use stacks of indexes to find left and right bounds.
Then find result using these three arrays
```
class Solution {
    func maxSumMinProduct(_ nums: [Int]) -> Int {
        let c = nums.count
        var leftBounds = [Int](repeating: 0, count: c), rightBounds = leftBounds, preSum = [Int](repeating: 0, count: c + 1), leftStack = [Int](), rightStack = leftStack, result = 0
        for i in 0..<c {
            // leftBounds
            while !leftStack.isEmpty && nums[leftStack.last!] >= nums[i] { leftStack.removeLast() }
            leftBounds[i] = leftStack.isEmpty ? 0 : (leftStack.last! + 1)
            leftStack.append(i)
            // rightBounds
            while !rightStack.isEmpty && nums[rightStack.last!] >= nums[c - 1 - i] { rightStack.removeLast() }
            rightBounds[c - 1 - i] = rightStack.isEmpty ? (c - 1) : (rightStack.last! - 1)
            rightStack.append(c - 1 - i)
            // preSum
            preSum[i + 1] = preSum[i] + nums[i]
        }
        for i in 0..<c {
            result = max(result, (preSum[rightBounds[i] + 1] - preSum[leftBounds[i]]) * nums[i])
        }
        return result % 1_000_000_007
    }
}
```
# 💡Swift - Optimal Solution - Monotonic Stack

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4891622/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4891622/)

---

# Solution
```swift
class Solution {
    func maximumTripletValue(_ nums: [Int]) -> Int {
        let n = nums.count

        // Build a simple array representing the maximum value
        // occurring after the current index.
        var maxAfter = Array(repeating: 0, count: n)
        for i in (0..<(n - 1)).reversed() {
            maxAfter[i] = max(maxAfter[i + 1], nums[i + 1])
        }

        // Sort indices in ascending order of their respective values.
        // When values match, the lower index is kept last.
        let sortedIndices = nums.indices.dropLast().sorted {
            nums[$0] == nums[$1] ? $0 > $1 : nums[$0] < nums[$1]
        }

        // The monotonic stack represents the indices of the maximum
        // value lower than the current value. Since we iterate over
        // the array in its sorted order, the last value in the stack
        // will always represent this value. However, we need to pop
        // all the indices which are located to the right of the current
        // index as they're useless after adding the current number.
        var monoStack: [Int] = []
        var answer = Int.min
        
        for j in sortedIndices {
            while let i = monoStack.last, i > j {
                monoStack.removeLast()
            }
            if let i = monoStack.last, nums[j] < maxAfter[j] {
                answer = max(answer, nums[i] - nums[j] + maxAfter[j])
            }
            monoStack.append(j)
        }

        return answer
    }
}
```
# Complexity
- Time: $$O(n \\log n)$$
- Space: $$O(n)$$
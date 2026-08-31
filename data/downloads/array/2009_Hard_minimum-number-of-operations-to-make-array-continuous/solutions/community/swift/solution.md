# 💡Swift - Optimal Solution - Sliding Window

**Author:** bernikovich
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152099/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152099/)

---

# Solution
```swift
class Solution {
    func minOperations(_ nums: [Int]) -> Int {
        // There is no point in using duplicated numbers since we're required to
        // perform an operation on them anyway.
        let uniqueNums = Array(Set(nums)).sorted()
        let n = uniqueNums.count

        var result = 0
        var right = 0

        for left in 0..<n {
            // The difference between the remaining leftmost and rightmost elements
            // should not exceed the initial number of elements.
            while right < n && uniqueNums[right] - uniqueNums[left] < nums.count {
                right += 1
            }

            // `right - left` is the number of elements remaining in their original place.
            result = max(result, right - left)
        }

        return nums.count - result
    }
}
```

# Complexity
- Time: $$O(nlogn)$$
- Space: $$O(n)$$
# Efficient  Sliding Window Approach to Find Minimum Size Subarray Sum in Swift

**Author:** Naradarn
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/4434552/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/4434552/)

---


# Intuition
When presented with the problem of finding the minimum length of a subarray that sums up to at least a given target, my initial thought was to use a sliding window approach. This technique effectively processes elements in a linear manner, dynamically adjusting the window size to find the optimal subarray.

# Approach
To solve this problem, I employed a two-pointer technique, where one pointer (`left`) marks the start of the subarray, and the other (`right`) explores forward. As the `right` pointer moves, it accumulates the sum of elements in `currentSum`. Whenever `currentSum` becomes greater than or equal to the target, I calculate the length of this subarray and compare it with the minimum length found so far (`minLength`). If it's shorter, I update `minLength`. Then, I increment the `left` pointer to explore smaller subarrays. This process repeats until all possible subarrays are considered.

# Complexity
- Time complexity:
The time complexity of this approach is $$O(n)$$, as each element in the array is processed at most twice - once by the `right` pointer and once by the `left` pointer.

- Space complexity:
The space complexity is $$O(1)$$, as only a few extra variables are used, independent of the size of the input array.

# Code
```swift
class Solution {
    func minSubArrayLen(_ target: Int, _ nums: [Int]) -> Int {
        guard !nums.isEmpty else { return 0 }

        var minLength = Int.max
        var left = 0
        var currentSum = 0

        for right in 0..<nums.count {
            currentSum += nums[right]

            while currentSum >= target {
                minLength = min(minLength, right - left + 1)
                currentSum -= nums[left]
                left += 1
            }
        }

        return minLength == Int.max ? 0 : minLength
    }
}
```
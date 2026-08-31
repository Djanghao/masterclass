# Swift: Sliding Window

**Author:** reachoutkeshav
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5987148/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5987148/)

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
    func numOfSubarrays(_ arr: [Int], _ k: Int, _ threshold: Int) -> Int {
          let totalCount = arr.count

    guard totalCount > k else {
        if k == totalCount {
            return ((arr.reduce(0, +)) / k) >= threshold ? 1 : 0
        } else {
            return -1
        }
    }

    var currentSum = arr[0..<k].reduce(0, +)
    var totalSubArray = currentSum / k > threshold ? 1 : 0

    for i in k..<totalCount {
      currentSum += arr[i] - arr[i - k]
      if currentSum / k >= threshold {
        totalSubArray += 1
      }
    }

    return totalSubArray
    }
}
```
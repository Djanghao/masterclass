# Prefix Sums - O(n^2) approach

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6079388/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6079388/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n^2)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func minimumSumSubarray(_ nums: [Int], _ l: Int, _ r: Int) -> Int {
        // Build prefix sum array
        var prefixSum = [0] // Start with 0 to handle full array sums easily
        var currentSum = 0
        for num in nums {
            currentSum += num
            prefixSum.append(currentSum)
        }
        
        var minSum = Int.max
        // For each possible start position
        for i in 0..<nums.count {
            // For each possible end position
            for j in i..<nums.count {
                let len = j - i + 1
                if len < l { continue }
                if len > r { break }
                
                // Calculate sum using prefix sum array
                // sum[i...j] = prefixSum[j + 1] - prefixSum[i]
                let subarraySum = prefixSum[j + 1] - prefixSum[i]
                
                if subarraySum > 0 {
                    minSum = min(minSum, subarraySum)
                }
            }
        }
        
        return minSum == Int.max ? -1 : minSum
    }
}
```
# Swift - using Kadane's (along with suboptimal TLE approach)

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6127232/](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6127232/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func maxSubarraySum(_ nums: [Int], _ k: Int) -> Int {
        // Initialize prefix sum array with first element 0
        var prefixSums = [0]
        
        // Build prefix sums array
        for num in nums {
            prefixSums.append(prefixSums.last! + num)
        }
        
        // Track maximum sum
        var maxSum = Int.min
        
        // For each possible starting position within k
        for p in 0..<k {
            var currentWindowSum = 0
            
            // Check all windows of length k starting at position p
            var i = p
            while i + k <= nums.count {
                // Calculate sum of current window
                let windowSum = prefixSums[i + k] - prefixSums[i]
                
                // Apply Kadane's algorithm for this sequence of windows
                currentWindowSum = max(windowSum, currentWindowSum + windowSum)
                maxSum = max(maxSum, currentWindowSum)
                
                i += k
            }
        }
        
        return Int(maxSum)
    }
        

    /*
    this works but TLE's. its supoptimal O(n^2/k).
    func maxSubarraySum(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        // Prefix sums for O(1) range sum queries
        var prefixSum = Array(repeating: 0, count: n + 1)
        for i in 0..<n {
            prefixSum[i + 1] = prefixSum[i] + nums[i]
        }
        
        var maxSum = Int.min
        // For each starting point
        for i in 0..<n {
            // Try all possible lengths divisible by k
            var length = k
            while i + length <= n {
                let currentSum = prefixSum[i + length] - prefixSum[i]
                maxSum = max(maxSum, currentSum)
                length += k
            }
        }
        
        return maxSum
    }*/
}
```
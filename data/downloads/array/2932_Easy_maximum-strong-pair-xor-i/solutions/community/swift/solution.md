# Optimized solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5891984/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5891984/)

---

# Intuition
 1. Defining strong pair as the absolute difference between x and y is less than or equal to the smaller of the two numbers
 2. Goal: among all possible pairs, find the pair with highest XOR

# Approach
 1. Generate all pairs (brute force)
 2. Computer XOR for each valid pair: `abs(x-y)<=min(x,y)`
 3. Track maximum XOR

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Optimization
Sorting the array ensures the difference between elements is easier to calculate

# Code
```swift []
final class Solution {
    @_optimize(speed)
    func maximumStrongPairXor(_ nums: [Int]) -> Int {
        let nums = nums.sorted()
        var maxXor = 0
        // Iterate through all pairs
        for i in 0..<nums.count {
            for j in 0..<nums.count {
                let x = nums[i]
                let y = nums[j]

                // Check if is a strong pair
                if (abs(x - y) <= min(x, y)) {
                    // Calculate the maximum XOR value
                    maxXor = max(maxXor, x ^ y)
                }
            }
        }
        return maxXor
    }
}
```
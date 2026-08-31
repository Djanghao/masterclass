# Solution

**Author:** flying-turtle-tech
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5688932/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5688932/)

---

# Intuition
We're going to loop from 0 -> k-1 to perform k operations.
We need to get the minimum value from the resulting array since we are modifying integers, the minimum can change with each iteration.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(k * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func getFinalState(_ nums: [Int], _ k: Int, _ multiplier: Int) -> [Int] {
        var result = nums
        for count in 0..<k {
            if let minimum = result.min(), let i = result.firstIndex(of: minimum) {
                result[i] = minimum * multiplier
            }
        }
        return result
    }
}
```
# 💡Swift - Optimal Solution - Stack

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/132-pattern/solutions/4108890/](https://leetcode.com/problems/132-pattern/solutions/4108890/)

---

# Solution
```
class Solution {
    func find132pattern(_ nums: [Int]) -> Bool {
        // Check if the array has less than 3 elements, in which case
        // it's not possible to form a 132 pattern.
        if nums.count < 3 { return false }
        
        // Stack to keep track of potential 'j' candidates.
        var stackJ: [Int] = []
        
        // Variable to store the current 'k'.
        var k = Int.min
        
        // Traverse the array in reverse order.
        for i in nums.reversed() {
            // If we find a number 'i' that is less than 'k', then we have
            // found a valid 132 pattern.
            if i < k {
                return true
            }
            
            // Keep popping elements from the stack that are less than 'i',
            // as they must be higher than 'i' to potentially form a 132 sequence.
            while let top = stackJ.last, top < i {
                k = stackJ.popLast()!
            }
            
            // Add 'i' to the stack for future comparisons.
            stackJ.append(i)
        }
        
        // If we reach this point, we haven't found a 132 pattern.
        return false
    }
}
```

# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$
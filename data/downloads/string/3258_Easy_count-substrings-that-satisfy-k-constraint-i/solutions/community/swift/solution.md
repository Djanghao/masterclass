# Clean Swift Solution

**Author:** Valerii_Demin
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5657371/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5657371/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    func countKConstraintSubstrings(_ s: String, _ k: Int) -> Int {
        var counter = 0 // Counter for valid substrings
        for i in (0 ..< s.count) {
            var zeros = 0 // Counter for '0's
            var ones = 0  // Counter for '1's
            for j in (i ..< s.count) {
                if s[s.index(s.startIndex, offsetBy: j)] == "0" { // Count the number of '0's and '1's in the substring
                    zeros += 1
                } else {
                    ones += 1
                }
                if zeros <= k || ones <= k { // Check if the substring satisfies the k-constraint
                    counter += 1
                } else {
                    break // Stop extending the substring if it violates the k-constraint
                }
            }
        }
        return counter
    }
}
```
# Swift 100% time complexity

**Author:** AdamSmsher
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/2779446/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/2779446/)

---

# Intuition
Figure out how to get the difference. 
Use minutes because its the units used per operation.

# Approach
Convert to minutes, get difference, divide remaining by minutes

# Complexity
- Time complexity:
o(n)

- Space complexity:
o(n)

# Code
```
class Solution {
    func convertTime(_ current: String, _ correct: String) -> Int {
        var current = current.components(separatedBy: ":").map{ Int(String($0))! }
        var correct = correct.components(separatedBy: ":").map{ Int(String($0))! }
        current[0] *= 60; correct[0] *= 60
        var remainder = abs(current.reduce(0, +) - correct.reduce(0, +))
        var res = 0
        
        res += remainder / 60
        remainder %= 60

        res += remainder / 15
        remainder %= 15 

        res += remainder / 5 
        remainder %= 5

        res += remainder

        return res
    }
}
```
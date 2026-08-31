# Swift solution O(n)

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2682183/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2682183/)

---

# Approach
For getting the lexicographically smallest string we should take a minimum element eather from the rest of the string or from stack.

# Complexity
- Time complexity: O(n)

# Code
```
class Solution {
    func robotWithString(_ s: String) -> String {
        let s: [Character] = Array(s)
        
        var res: String = ""
        var stack: [Character] = []
        var rightMins: [Character] = .init(repeating: s.last!, count: s.count + 1)
        for i in (0..<s.count).reversed() {
            rightMins[i] = min(rightMins[i + 1], s[i])
        }
        
        var i = 0
        while i < s.count {
            defer {
                i += 1
            }
            
            while s[i] != rightMins[i] {
                defer {
                    i += 1
                }
                stack.append(s[i])
            }
            
            res.append(s[i])
            
            while !stack.isEmpty, stack.last! <= rightMins[i + 1] {
                res.append(stack.removeLast())
            }
        }
        
        while !stack.isEmpty {
            res.append(stack.removeLast())
        }
        
        return res
    }
}
```
# Swift solution beats 100%

**Author:** NikolasCane
**Votes:** 1
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3525036/](https://leetcode.com/problems/ternary-expression-parser/solutions/3525036/)

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
```
class Solution {
    func parseTernary(_ expression: String) -> String {
        var stack: [Character] = []
        var operate = false
        for e in expression.reversed() {
            if e == ":" {
                continue
            }
            if e == "T" {
                if operate {
                    stack[0] = stack.removeFirst()
                    operate = false
                    continue
                } 
            } 
            if e == "F" {
                if operate {
                    stack[0] = stack[1]
                    stack.remove(at: 1)
                    operate = false
                    continue
                }
            }
            if e == "?" {
                operate = true
                continue
            }
            stack.insert(e, at: 0)
        }
        return String(stack[0])
    }
}
```
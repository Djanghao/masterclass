# Swift | O(N) | Stack

**Author:** ucastillo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/1814738/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/1814738/)

---

```
class Solution {
    func minOperationsToFlip(_ expression: String) -> Int {

        var stack: [(a: Int, b: Int, op: Character?)] = [(0, 0, nil)]
        var last: Int { stack.count - 1 }

        func helper(_ char: Character) {
            var a = char != "0" ? 1 : 0
            var b = char != "1" ? 1 : 0

            if char == ")" {
                a = stack[last].a
                b = stack[last].b
                stack.removeLast()
            }

            if stack[last].op == "&"{
                a = min(stack[last].a, a)
                b = min(stack[last].b + b, min(stack[last].b, b) + 1)   
            } else if stack[last].op == "|" {
                a = min(stack[last].a + a, min(stack[last].a, a) + 1)
                b = min(stack[last].b, b)
            }
            stack[last] = (a, b, nil)
        }
        
        for char in expression {
            switch char {
            case "(":
                stack.append((0, 0, nil))
            case "&", "|":
                stack[last].op = char
            default: // ")", "0", "1":
                helper(char)
            }
        }
        return max(stack[0].a, stack[0].b)
    }
}
```
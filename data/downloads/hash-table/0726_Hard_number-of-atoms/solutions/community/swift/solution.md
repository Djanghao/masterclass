# Swift, 3ms runtime and 50 lines of code

**Author:** sivykh
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5474892/](https://leetcode.com/problems/number-of-atoms/solutions/5474892/)

---

# Approach
Use stack when meet the parentheses

# Code
```
final class Solution {
    func countOfAtoms(_ formula: String) -> String {
        var stack: [[String: Int]] = [[:]]

        var number = 0 // quantity of the last element or group of elements
        var element = "" // last element name
        var isPopped = false // whether we met ')'
        
        // Yield number of elements
        func work() { 
            if !element.isEmpty {
                // if we meet an element and its quantity - save it
                stack[stack.count - 1][element, default: 0] += max(number, 1)
            }
            if isPopped {
                // if we meet a group of elements and its quantity - save it
                for pair in stack[stack.count - 1] {
                    // take into account multiplier of the group (...)number
                    stack[stack.count - 1][pair.key] = max(number, 1) * pair.value
                }
                let popped = stack.popLast()!
                for pair in popped {
                    // reduce stacks into one answer
                    stack[stack.count - 1][pair.key, default: 0] += pair.value
                }
            }
            // reset the state
            (number, element, isPopped) = (0, "", false)
        }

        for char in formula {
            if char.isNumber {
                number = 10 * number + Int(String(char))!
            } else if char == "(" {
                work()
                stack.append([:])
            } else if char == ")" {
                work()
                isPopped = true
            } else if char.isUppercase {
                work()
                element = "\\(char)"
            } else {
                element = "\\(element)\\(char)"
            }
        }
        work()
        
        return stack.last!
            .sorted(by: { $0.key < $1.key })
            .map({ "\\($0.key)\\($0.value > 1 ? "\\($0.value)" : "")" })
            .joined()
    }
}
```
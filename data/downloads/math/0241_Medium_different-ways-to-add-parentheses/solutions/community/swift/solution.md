# Swift

**Author:** ksmirnovnn
**Votes:** 2
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/4990623/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/4990623/)

---

This function diffWaysToCompute takes a string expression as input and returns an array of all possible results from computing all the different possible ways to group numbers and operators. The function uses recursion to split the expression by each operator and recursively calculates the results for the left and right parts. Then it combines the results according to the operator. The function continues this process until the expression can be converted to an integer, which is the base case of the recursion. The function finally returns the array of all possible results. The time complexity of this function is O(n!), where n is the length of the expression. The space complexity is O(n), where n is the length of the expression. This is because the function uses recursion and needs to store intermediate results in the recursion stack.
```
class Solution {
    func diffWaysToCompute(_ expression: String) -> [Int] {
        if let num = Int(expression) {
            return [num]
        }
        
        var result = [Int]()
        
        for (i, char) in expression.enumerated() {
            if "+-*".contains(char) {
                let left = diffWaysToCompute(String(expression[expression.startIndex..<expression.index(expression.startIndex, offsetBy: i)]))
                let right = diffWaysToCompute(String(expression[expression.index(expression.startIndex, offsetBy: i+1)..<expression.endIndex]))
                
                for l in left {
                    for r in right {
                        switch char {
                        case "+":
                            result.append(l + r)
                        case "-":
                            result.append(l - r)
                        case "*":
                            result.append(l * r)
                        default:
                            break
                        }
                    }
                }
            }
        }
        
        return result
    }
}

```
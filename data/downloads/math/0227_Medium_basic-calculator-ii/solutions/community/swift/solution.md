# Swift Simple faster than 100%

**Author:** wenxin3262
**Votes:** 7
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/500711/](https://leetcode.com/problems/basic-calculator-ii/solutions/500711/)

---

```
class Solution {
    func calculate(_ s: String) -> Int {
        var num = 0
        var stack = [Int]()
        var op = "+"

        for char in s+"+" where char != " " {
            if let number = char.wholeNumberValue {
                num = num * 10 + number
            } else {
                // handle + - * /
                switch op {
                    case "+":
                    stack.append(num)
                    case "-":
                    stack.append(-num)
                    case "*":
                    stack.append(stack.removeLast() * num)
                    case "/":
                    stack.append(stack.removeLast() / num)
                   default: break 
                }
                num = 0
                op = String(char)
            }  
        }
        return stack.reduce(0, +)
    }
}
```
# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 6
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/2831636/](https://leetcode.com/problems/basic-calculator/solutions/2831636/)

---

Solution:
```
class Solution {
    func calculate(_ s: String) -> Int {
        var result = 0
        var num = 0
        var sign = 1
        var stack = [sign]
        
        for char in s {
            switch char {
            case "+", "-":
                result += num * sign
                sign = stack.last! * (char == "+" ? 1 : -1)
                num = 0
            case "(":
                stack.append(sign)
            case ")":
                stack.removeLast()
            case " ":
                break
            default:
                num = num * 10 + char.wholeNumberValue!
            }
        }
        
        return result + num * sign
    }
}
```
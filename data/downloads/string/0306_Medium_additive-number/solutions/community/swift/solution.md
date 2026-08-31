# Swift solution - Iterative, Recursive

**Author:** cl0ud_runner
**Votes:** 1
**Link:** [https://leetcode.com/problems/additive-number/solutions/75581/](https://leetcode.com/problems/additive-number/solutions/75581/)

---

```
class Solution {
    func isAdditiveNumber(_ num: String) -> Bool {
        let n = num.characters.count
        var i = 1
        var j = 1
        
        while i <= n / 2 {
            while max(i, j) <= n - i - j {
                if isValid(i, j, num) {
                    return true
                }
                j += 1
            }
            i += 1
        }
        
        return false
    }
    
    func isValid(_ i: Int, _ j: Int, _ num: String) -> Bool {
        var chars = Array(num.characters)
        
        if chars[0] == "0" && i > 1 {
            return false
        }
        if chars[i] == "0" && j > 1 {
            return false
        }
        
        var x1 = Int(String(chars[0..<i]))!
        var x2 = Int(String(chars[i..<(i + j)]))!
        var start = i + j
        var sum = ""
        
        while start != chars.count {
            x2 = x2 + x1
            x1 = x2 - x1
            sum = String(x2)
            let end = start + sum.characters.count
            if (end > chars.count) || (String(chars[start..<end]) != sum) {
                return false
            }
            start += sum.characters.count
        }
        
        return true
    }
    
    func isAdditiveNumber_Recursive(_ num: String) -> Bool {
        let chars = Array(num.characters)
        let n = chars.count
        var i = 1
        
        while i <= n / 2 {
            if chars[0] == "0" && i > 1 {
                return false
            }
            let x1 = Int(String(chars[0..<i]))!
            var j = 1
            while max(i, j) <= n - i - j {
                if chars[i] == "0" && j > 1 {
                    break
                }
                let x2 = Int(String(chars[i..<(i + j)]))!
                if isValid_Recursive(x1, x2, j + i, num) {
                    return true
                }
                j += 1
            }
            i += 1
        }
        
        return false
    }
    
    func isValid_Recursive(_ x1: Int, _ x2: Int, _ start: Int, _ num: String) -> Bool {
        if start == num.characters.count {
            return true
        }
        
        let x2 = x2 + x1
        let x1 = x2 - x1
        let sum = String(x2)
        let end = start + sum.characters.count
        let chars = Array(num.characters)
        
        if (end > chars.count) || (String(chars[start..<end]) != sum) {
            return false
        }
        
        return isValid_Recursive(x1, x2, start + sum.characters.count, num)
    }
}
```
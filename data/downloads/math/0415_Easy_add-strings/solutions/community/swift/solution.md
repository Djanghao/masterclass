# [Swift] Solution

**Author:** sairamkotha
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-strings/solutions/794918/](https://leetcode.com/problems/add-strings/solutions/794918/)

---

```
final class Solution {
    func addStrings(_ num1: String, _ num2: String) -> String {
        var s1 = Array(num1)
        var s2 = Array(num2)
        var i1 = s1.count - 1
        var i2 = s2.count - 1
        var carry = 0
        var output = ""
        while i1 >= 0 || i2 >= 0 {
            var sum = carry
            if i1 >= 0 {
                sum += s1[i1].val
                i1 -= 1
            }
            
            if i2 >= 0 {
                sum += s2[i2].val
                i2 -= 1
            }
            carry = sum / 10
            output += "\\(sum % 10)"
        }
        if carry >= 1 {
            output += "\\(carry)"
        }
        return String(output.reversed())
    }
}

extension Character {
    var val: Int {
        return Int(self.asciiValue! - Character("0").asciiValue!)
    }
}
```
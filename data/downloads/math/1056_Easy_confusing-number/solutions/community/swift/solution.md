# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number/solutions/5893628/](https://leetcode.com/problems/confusing-number/solutions/5893628/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func confusingNumber(_ n: Int) -> Bool {
        var rotated = 0
        var num = n, digit = 0
        let validDigits = [0:0,1:1,6:9,8:8,9:6]
        
        while num > 0 {
            (num, digit) = num.quotientAndRemainder(dividingBy: 10)
            guard let rotatedDigit = validDigits[digit] else { return false }
            rotated = rotated * 10 + rotatedDigit
        }
        return rotated != n
    }
}
```